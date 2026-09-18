import { PrismaClient } from '@prisma/client';
import * as XLSX from 'xlsx';
import * as path from 'path';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando la siembra de datos desde los archivos Excel para ALTIUS...');

  // 1. Limpieza de tablas previas
  await prisma.opcionRespuesta.deleteMany({});
  await prisma.respuestaEstudiante.deleteMany({});
  await prisma.preguntaEncuesta.deleteMany({});
  await prisma.reglaNivel.deleteMany({});
  await prisma.sugerencia.deleteMany({});
  await prisma.testProfesional.deleteMany({});

  // 2. Leer Excel_1_Banco_Preguntas.xlsx
  const excel1Path = path.resolve(__dirname, '../../Excel_1_Banco_Preguntas.xlsx');
  const wb1 = XLSX.readFile(excel1Path);
  const rawPreguntas: any[] = XLSX.utils.sheet_to_json(wb1.Sheets['Preguntas_Encuesta']);
  console.log(`📄 Leyendo ${rawPreguntas.length} preguntas de Excel 1...`);

  const opcionesEscala = [
    { texto_opcion: 'Nunca', peso: 1, orden_opcion: 1 },
    { texto_opcion: 'Casi nunca', peso: 2, orden_opcion: 2 },
    { texto_opcion: 'A veces', peso: 3, orden_opcion: 3 },
    { texto_opcion: 'Casi siempre', peso: 4, orden_opcion: 4 },
    { texto_opcion: 'Siempre', peso: 5, orden_opcion: 5 },
  ];

  for (const p of rawPreguntas) {
    const isEscala = (p.tipo_pregunta || '').toLowerCase() === 'escala';
    
    await prisma.preguntaEncuesta.create({
      data: {
        id_pregunta: p.id_pregunta,
        categoria: p.categoria,
        subdimension: p.subdimension || null,
        rol: p.rol, // 'docente_padre' o 'profesional'
        tipo_pregunta: isEscala ? 'opcion_multiple' : 'abierta',
        texto_pregunta: p.texto_pregunta,
        orden: Number(p.orden) || 1,
        limite_caracteres: isEscala ? null : 500,
        opciones: isEscala
          ? {
              create: opcionesEscala.map((opc, idx) => ({
                id_opcion: `${p.id_pregunta}_${idx + 1}`,
                texto_opcion: opc.texto_opcion,
                peso: opc.peso,
                orden_opcion: opc.orden_opcion
              }))
            }
          : undefined
      }
    });
  }

  // 3. Leer Excel_3_Tests_Profesionales.xlsx
  const excel3Path = path.resolve(__dirname, '../../Excel_3_Tests_Profesionales.xlsx');
  const wb3 = XLSX.readFile(excel3Path);
  const rawTests: any[] = XLSX.utils.sheet_to_json(wb3.Sheets['Tests_Profesionales']);
  console.log(`📄 Leyendo ${rawTests.length} tests profesionales de Excel 3...`);

  for (const t of rawTests) {
    await prisma.testProfesional.create({
      data: {
        categoria: t.categoria,
        test: t.test,
        tipo_test: t.tipo_test || null,
        informante_o_administracion: 'Psicopedagogo / Profesional',
        edad_aprox: t.edad_aprox ? String(t.edad_aprox) : null,
        variables_que_ingresa_el_profesional: t.variables_que_ingresa_el_profesional || null,
        interpretacion_breve: t.interpretacion_breve || null,
        disponibilidad_bolivia_latam: t.disponibilidad_bolivia_latam || null,
        fuente: t.fuente || null
      }
    });
  }

  // 4. Reglas de Niveles (Escala 1 a 5, 18 preguntas -> Rango 18 a 90)
  await prisma.reglaNivel.createMany({
    data: [
      {
        id_regla: 'REG_TDAH_01',
        categoria: 'TDAH',
        tipo: 'puntaje',
        nivel_o_regla: 'Sin señales significativas',
        variable_evaluada: 'puntaje_tdah',
        valor_min: 18,
        valor_max: 35,
        condicion_texto: 'Puntaje 18-35',
        rango_validado: 'Normal',
        detalle: 'Comportamiento atencional y motor dentro de los parámetros esperados para la etapa escolar.',
        fuente: 'Vizcarra & Terán (2018), Guía de Detección Temprana'
      },
      {
        id_regla: 'REG_TDAH_02',
        categoria: 'TDAH',
        tipo: 'puntaje',
        nivel_o_regla: 'Señal Leve',
        variable_evaluada: 'puntaje_tdah',
        valor_min: 36,
        valor_max: 53,
        condicion_texto: 'Puntaje 36-53',
        rango_validado: 'Señal Leve',
        detalle: 'Manifestaciones ocasionales de dispersión o inquietud. Se recomiendan adaptaciones didácticas estándar.',
        fuente: 'Vizcarra & Terán (2018)'
      },
      {
        id_regla: 'REG_TDAH_03',
        categoria: 'TDAH',
        tipo: 'puntaje',
        nivel_o_regla: 'Señal Moderada',
        variable_evaluada: 'puntaje_tdah',
        valor_min: 54,
        valor_max: 71,
        condicion_texto: 'Puntaje 54-71',
        rango_validado: 'Señal Moderada',
        detalle: 'Indicadores consistentes que impactan en el rendimiento escolar o convivencia. Se sugiere apoyo pedagógico focalizado.',
        fuente: 'Vizcarra & Terán (2018)'
      },
      {
        id_regla: 'REG_TDAH_04',
        categoria: 'TDAH',
        tipo: 'puntaje',
        nivel_o_regla: 'Señal Relevante',
        variable_evaluada: 'puntaje_tdah',
        valor_min: 72,
        valor_max: 90,
        condicion_texto: 'Puntaje 72-90',
        rango_validado: 'Señal Relevante',
        detalle: 'Señales persistentes de inatención o impulsividad. Se aconseja orientar a evaluación psicopedagógica formal.',
        fuente: 'Vizcarra & Terán (2018)'
      },
      {
        id_regla: 'REG_DISL_01',
        categoria: 'Dislexia',
        tipo: 'puntaje',
        nivel_o_regla: 'Sin señales significativas',
        variable_evaluada: 'puntaje_dislexia',
        valor_min: 18,
        valor_max: 35,
        condicion_texto: 'Puntaje 18-35',
        rango_validado: 'Normal',
        detalle: 'Adquisición y fluidez de la lectoescritura acorde al curso.',
        fuente: 'Defior & Serrano (2014)'
      },
      {
        id_regla: 'REG_DISL_02',
        categoria: 'Dislexia',
        tipo: 'puntaje',
        nivel_o_regla: 'Señal Leve',
        variable_evaluada: 'puntaje_dislexia',
        valor_min: 36,
        valor_max: 53,
        condicion_texto: 'Puntaje 36-53',
        rango_validado: 'Señal Leve',
        detalle: 'Dificultades puntuales en velocidad o precisión lectora que responden bien a refuerzo didáctico.',
        fuente: 'Defior & Serrano (2014)'
      },
      {
        id_regla: 'REG_DISL_03',
        categoria: 'Dislexia',
        tipo: 'puntaje',
        nivel_o_regla: 'Señal Moderada',
        variable_evaluada: 'puntaje_dislexia',
        valor_min: 54,
        valor_max: 71,
        condicion_texto: 'Puntaje 54-71',
        rango_validado: 'Señal Moderada',
        detalle: 'Errores frecuentes de decodificación y vacilación lectora que justifiquen adaptaciones curriculares.',
        fuente: 'Defior & Serrano (2014)'
      },
      {
        id_regla: 'REG_DISL_04',
        categoria: 'Dislexia',
        tipo: 'puntaje',
        nivel_o_regla: 'Señal Relevante',
        variable_evaluada: 'puntaje_dislexia',
        valor_min: 72,
        valor_max: 90,
        condicion_texto: 'Puntaje 72-90',
        rango_validado: 'Señal Relevante',
        detalle: 'Dificultad marcada y persistente en conciencia fonológica y lectura. Sugerida evaluación especializada.',
        fuente: 'Defior & Serrano (2014)'
      },
      {
        id_regla: 'REG_DISC_01',
        categoria: 'Discalculia',
        tipo: 'puntaje',
        nivel_o_regla: 'Sin señales significativas',
        variable_evaluada: 'puntaje_discalculia',
        valor_min: 18,
        valor_max: 35,
        condicion_texto: 'Puntaje 18-35',
        rango_validado: 'Normal',
        detalle: 'Sentido numérico y cálculo básico dentro de los parámetros esperados.',
        fuente: 'Butterworth (2019)'
      },
      {
        id_regla: 'REG_DISC_02',
        categoria: 'Discalculia',
        tipo: 'puntaje',
        nivel_o_regla: 'Señal Leve',
        variable_evaluada: 'puntaje_discalculia',
        valor_min: 36,
        valor_max: 53,
        condicion_texto: 'Puntaje 36-53',
        rango_validado: 'Señal Leve',
        detalle: 'Dificultad leve en operaciones nuevas o cálculo mental abstracto.',
        fuente: 'Butterworth (2019)'
      },
      {
        id_regla: 'REG_DISC_03',
        categoria: 'Discalculia',
        tipo: 'puntaje',
        nivel_o_regla: 'Señal Moderada',
        variable_evaluada: 'puntaje_discalculia',
        valor_min: 54,
        valor_max: 71,
        condicion_texto: 'Puntaje 54-71',
        rango_validado: 'Señal Moderada',
        detalle: 'Dificultades consistentes en estimación de magnitudes y resolución de problemas.',
        fuente: 'Butterworth (2019)'
      },
      {
        id_regla: 'REG_DISC_04',
        categoria: 'Discalculia',
        tipo: 'puntaje',
        nivel_o_regla: 'Señal Relevante',
        variable_evaluada: 'puntaje_discalculia',
        valor_min: 72,
        valor_max: 90,
        condicion_texto: 'Puntaje 72-90',
        rango_validado: 'Señal Relevante',
        detalle: 'Obstáculos significativos en la comprensión de cantidades y procedimientos matemáticos.',
        fuente: 'Butterworth (2019)'
      }
    ]
  });

  // 5. Sugerencias Educativas (Leer las 27 sugerencias de Excel_2_Reglas_y_Sugerencias.xlsx)
  const excel2Path = path.resolve(__dirname, '../../Excel_2_Reglas_y_Sugerencias.xlsx');
  const wb2 = XLSX.readFile(excel2Path);
  const rawSugerencias: any[] = XLSX.utils.sheet_to_json(wb2.Sheets['Sugerencias']);
  console.log(`📄 Leyendo ${rawSugerencias.length} sugerencias de Excel 2...`);

  const sugerenciasData = rawSugerencias.map((s, idx) => ({
    id_sugerencia: `SUG_${s.categoria}_${idx + 1}`,
    categoria: s.categoria,
    nivel: s.nivel || 'Moderada',
    contexto: s.contexto || 'aula',
    sugerencia: s.sugerencia,
    detalle: s.detalle,
    fuente: s.fuente || 'Defior & Serrano (2014)'
  }));

  await prisma.sugerencia.createMany({
    data: sugerenciasData
  });

  console.log('✅ Siembra desde Excels completada con éxito!');
}

main()
  .catch((e) => {
    console.error('❌ Error durante la siembra de Excel:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
