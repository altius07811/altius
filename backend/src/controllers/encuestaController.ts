import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import { generarSintesisPedagogicaIA, responderConsultaPedagogicaIA } from '../services/groqService';

// Helper para convertir BigInt a String/Number en respuestas JSON
const formatJson = (data: any): any => {
  return JSON.parse(
    JSON.stringify(data, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value
    )
  );
};

export const getPreguntas = async (req: Request, res: Response): Promise<void> => {
  try {
    const rolQuery = (req.query.rol as string || '').toLowerCase();
    
    let whereFilter: any = {};
    if (rolQuery === 'profesional' || rolQuery === 'psicopedagogo') {
      whereFilter = { rol: 'profesional' };
    } else if (rolQuery === 'docente' || rolQuery.includes('padre') || rolQuery === 'docente_padre') {
      whereFilter = { rol: 'docente_padre' };
    }

    const preguntas = await prisma.preguntaEncuesta.findMany({
      where: whereFilter,
      orderBy: { orden: 'asc' },
      include: {
        opciones: {
          orderBy: { orden_opcion: 'asc' }
        }
      }
    });

    let testsProfesionales: any[] = [];
    if (rolQuery === 'profesional' || rolQuery === 'psicopedagogo') {
      testsProfesionales = await prisma.testProfesional.findMany({
        orderBy: { id: 'asc' }
      });
    }

    res.json({
      success: true,
      data: formatJson(preguntas),
      tests_profesionales: formatJson(testsProfesionales)
    });
  } catch (error: any) {
    console.error('Error al obtener preguntas:', error);
    res.status(500).json({
      success: false,
      message: 'Error al cargar las preguntas de la encuesta.',
      error: error.message
    });
  }
};

export const getTestsProfesionales = async (req: Request, res: Response): Promise<void> => {
  try {
    const tests = await prisma.testProfesional.findMany({
      orderBy: { id: 'asc' }
    });

    res.json({
      success: true,
      data: formatJson(tests)
    });
  } catch (error: any) {
    console.error('Error al obtener tests profesionales:', error);
    res.status(500).json({
      success: false,
      message: 'Error al consultar tests profesionales.',
      error: error.message
    });
  }
};

export const guardarRespuestasYCalcular = async (req: Request, res: Response): Promise<void> => {
  try {
    const { estudiante_id, rol, respuestas, tests_administrados } = req.body;

    if (!estudiante_id || !Array.isArray(respuestas)) {
      res.status(400).json({
        success: false,
        message: 'Faltan parámetros obligatorios (estudiante_id o respuestas).'
      });
      return;
    }

    // 1. Guardar respuestas en la tabla respuestas_estudiante
    let observacionCualitativa = '';
    const respuestasAGuardar = respuestas.map((r: any) => {
      if (r.tipo_pregunta === 'abierta' || r.id_pregunta?.includes('19') || r.id_pregunta?.includes('20')) {
        const texto = r.respuesta || r.texto_opcion || '';
        if (texto) {
          observacionCualitativa += `[${r.categoria || 'General'}]: ${texto}. `;
        }
      }
      return {
        estudiante_id: String(estudiante_id),
        rol: rol || r.rol || 'docente',
        categoria: r.categoria || 'General',
        id_pregunta: r.id_pregunta || null,
        respuesta: r.respuesta || r.texto_opcion || '',
        peso: typeof r.peso === 'number' ? r.peso : 0
      };
    });

    if (respuestasAGuardar.length > 0) {
      await prisma.respuestaEstudiante.createMany({
        data: respuestasAGuardar
      });
    }

    // 2. Calcular puntajes por categoría (TDAH, Dislexia, Discalculia)
    const categorias = ['TDAH', 'Dislexia', 'Discalculia'];
    const puntajesPorCategoria: Record<string, number> = {
      TDAH: 0,
      Dislexia: 0,
      Discalculia: 0
    };

    respuestas.forEach((r: any) => {
      const cat = r.categoria;
      if (cat && categorias.includes(cat)) {
        puntajesPorCategoria[cat] += typeof r.peso === 'number' ? r.peso : 0;
      }
    });

    // 3. Obtener reglas de niveles para clasificar
    const reglas = await prisma.reglaNivel.findMany();
    const resultadosCalculados = [];

    for (const cat of categorias) {
      const puntaje = puntajesPorCategoria[cat];
      // Buscar regla que corresponda al puntaje
      const reglaEncontrada = reglas.find(
        (reg) =>
          reg.categoria?.toLowerCase() === cat.toLowerCase() &&
          reg.valor_min !== null &&
          reg.valor_max !== null &&
          puntaje >= reg.valor_min &&
          puntaje <= reg.valor_max
      );

      let nivel = 'Sin señales significativas';
      let textoResultado = 'Comportamiento dentro del rango típico esperado.';

      if (reglaEncontrada) {
        nivel = reglaEncontrada.nivel_o_regla || nivel;
        textoResultado = reglaEncontrada.detalle || textoResultado;
      } else {
        if (puntaje >= 28) {
          nivel = 'Señal Moderada';
          textoResultado = 'Se observan algunos indicadores que ameritan acompañamiento pedagógico.';
        } else if (puntaje >= 16) {
          nivel = 'Señal Leve';
          textoResultado = 'Manifestaciones ocasionales observables.';
        }
      }

      // Si es evaluación profesional con tests seleccionados, enriquecer el resultado
      if (rol === 'profesional' && Array.isArray(tests_administrados)) {
        const testsCat = tests_administrados.filter((t: any) => t.categoria === cat);
        if (testsCat.length > 0) {
          textoResultado += ` Tests profesionales documentados: ${testsCat.map((t: any) => t.test).join(', ')}.`;
        }
      }

      // Guardar en tabla resultados
      const resultadoGuardado = await prisma.resultado.create({
        data: {
          estudiante_id: String(estudiante_id),
          categoria: cat,
          puntaje_total: puntaje,
          nivel: nivel,
          texto_resultado: textoResultado
        }
      });

      resultadosCalculados.push({
        id: resultadoGuardado.id.toString(),
        categoria: cat,
        puntaje_total: puntaje,
        nivel: nivel,
        texto_resultado: textoResultado,
        fuente: reglaEncontrada?.fuente || 'Vizcarra & Terán (2018)'
      });
    }

    // 4. Obtener sugerencias predeterminadas
    const sugerencias = await prisma.sugerencia.findMany();

    // 5. Generar análisis personalizado mediante IA con Groq
    const analisisIA = await generarSintesisPedagogicaIA(
      String(estudiante_id),
      rol || 'docente',
      resultadosCalculados,
      observacionCualitativa
    );

    res.json({
      success: true,
      data: {
        estudiante_id,
        rol,
        resultados: resultadosCalculados,
        sugerencias: formatJson(sugerencias),
        analisis_ia: analisisIA,
        aviso_legal: 'ALTIUS es una herramienta de orientación y cribado psicopedagógico preliminar. NO constituye un diagnóstico médico, clínico ni neurológico.'
      }
    });
  } catch (error: any) {
    console.error('Error al procesar respuestas:', error);
    res.status(500).json({
      success: false,
      message: 'Error al procesar y guardar las respuestas de la encuesta.',
      error: error.message
    });
  }
};

export const getResultadosPorEstudiante = async (req: Request, res: Response): Promise<void> => {
  try {
    const { estudiante_id } = req.params;

    const resultados = await prisma.resultado.findMany({
      where: { estudiante_id: String(estudiante_id) },
      orderBy: { creado_en: 'desc' },
      take: 5
    });

    const sugerencias = await prisma.sugerencia.findMany();

    res.json({
      success: true,
      data: {
        estudiante_id,
        resultados: formatJson(resultados),
        sugerencias: formatJson(sugerencias)
      }
    });
  } catch (error: any) {
    console.error('Error al obtener resultados:', error);
    res.status(500).json({
      success: false,
      message: 'Error al consultar resultados.',
      error: error.message
    });
  }
};

export const getRecursosDerivacion = async (req: Request, res: Response): Promise<void> => {
  try {
    const tests = await prisma.testProfesional.findMany({
      orderBy: { id: 'asc' }
    });
    const sugerencias = await prisma.sugerencia.findMany();

    res.json({
      success: true,
      data: {
        tests_profesionales: formatJson(tests),
        sugerencias: formatJson(sugerencias)
      }
    });
  } catch (error: any) {
    console.error('Error al obtener recursos:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener recursos de derivación.',
      error: error.message
    });
  }
};

export const consultarAsistenteIA = async (req: Request, res: Response): Promise<void> => {
  try {
    const { pregunta, contexto } = req.body;

    if (!pregunta || !contexto) {
      res.status(400).json({
        success: false,
        message: 'Faltan parámetros obligatorios (pregunta o contexto).'
      });
      return;
    }

    const respuestaIA = await responderConsultaPedagogicaIA(pregunta, contexto);

    res.json({
      success: true,
      data: respuestaIA
    });
  } catch (error: any) {
    console.error('Error en consulta de IA:', error);
    res.status(500).json({
      success: false,
      message: 'Error al comunicarse con el asistente de IA.',
      error: error.message
    });
  }
};
