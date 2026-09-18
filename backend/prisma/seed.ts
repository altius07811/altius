import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando la siembra de datos para ALTIUS...');

  // 1. Limpieza de tablas previas si existen (opcional)
  await prisma.opcionRespuesta.deleteMany({});
  await prisma.respuestaEstudiante.deleteMany({});
  await prisma.preguntaEncuesta.deleteMany({});
  await prisma.reglaNivel.deleteMany({});
  await prisma.sugerencia.deleteMany({});
  await prisma.testProfesional.deleteMany({});
  await prisma.reglaGeneral.deleteMany({});
  await prisma.perfilInterpretacion.deleteMany({});
  await prisma.herramientaTCC.deleteMany({});

  // 2. Preguntas de Encuesta
  const preguntas = [
    // Preguntas TDAH (Docente / Padre)
    {
      id_pregunta: 'TDAH_01',
      categoria: 'TDAH',
      subdimension: 'Atención e impulsividad',
      rol: 'docente',
      tipo_pregunta: 'opcion_multiple',
      texto_pregunta: '¿El estudiante muestra dificultad persistente para mantener la atención en tareas escolares o actividades lúdicas?',
      orden: 1,
      limite_caracteres: null,
      opciones: [
        { id_opcion: 'TDAH_01_A', texto_opcion: 'Rara vez o nunca', peso: 0, orden_opcion: 1 },
        { id_opcion: 'TDAH_01_B', texto_opcion: 'A veces', peso: 1, orden_opcion: 2 },
        { id_opcion: 'TDAH_01_C', texto_opcion: 'Frecuentemente', peso: 2, orden_opcion: 3 },
        { id_opcion: 'TDAH_01_D', texto_opcion: 'Casi siempre', peso: 3, orden_opcion: 4 },
      ]
    },
    {
      id_pregunta: 'TDAH_02',
      categoria: 'TDAH',
      subdimension: 'Hiperactividad motora',
      rol: 'docente',
      tipo_pregunta: 'opcion_multiple',
      texto_pregunta: '¿Mueve en exceso manos o pies, o le cuesta permanecer sentado cuando la situación lo requiere?',
      orden: 2,
      limite_caracteres: null,
      opciones: [
        { id_opcion: 'TDAH_02_A', texto_opcion: 'Rara vez o nunca', peso: 0, orden_opcion: 1 },
        { id_opcion: 'TDAH_02_B', texto_opcion: 'A veces', peso: 1, orden_opcion: 2 },
        { id_opcion: 'TDAH_02_C', texto_opcion: 'Frecuentemente', peso: 2, orden_opcion: 3 },
        { id_opcion: 'TDAH_02_D', texto_opcion: 'Casi siempre', peso: 3, orden_opcion: 4 },
      ]
    },
    // Preguntas Dislexia
    {
      id_pregunta: 'DISLEXIA_01',
      categoria: 'Dislexia',
      subdimension: 'Lectura y decodificación',
      rol: 'docente',
      tipo_pregunta: 'opcion_multiple',
      texto_pregunta: '¿Presenta vacilación notable, omisiones, sustituciones de letras o lentitud marcada al leer en voz alta?',
      orden: 3,
      limite_caracteres: null,
      opciones: [
        { id_opcion: 'DISLEXIA_01_A', texto_opcion: 'Lectura fluida y acorde a su edad', peso: 0, orden_opcion: 1 },
        { id_opcion: 'DISLEXIA_01_B', texto_opcion: 'Dificultades leves ocasionales', peso: 1, orden_opcion: 2 },
        { id_opcion: 'DISLEXIA_01_C', texto_opcion: 'Dificultades frecuentes con palabras complejas', peso: 2, orden_opcion: 3 },
        { id_opcion: 'DISLEXIA_01_D', texto_opcion: 'Marcada dificultad o frustración persistente', peso: 3, orden_opcion: 4 },
      ]
    },
    // Preguntas Discalculia
    {
      id_pregunta: 'DISCALCULIA_01',
      categoria: 'Discalculia',
      subdimension: 'Procesamiento numérico',
      rol: 'padre/madre',
      tipo_pregunta: 'opcion_multiple',
      texto_pregunta: '¿Presenta confusión frecuente con símbolos matemáticos (+, -, ×), conceptos de cantidad o cálculo básico?',
      orden: 4,
      limite_caracteres: null,
      opciones: [
        { id_opcion: 'DISCALCULIA_01_A', texto_opcion: 'Comprensión normal', peso: 0, orden_opcion: 1 },
        { id_opcion: 'DISCALCULIA_01_B', texto_opcion: 'Dificultad leve con cálculos nuevos', peso: 1, orden_opcion: 2 },
        { id_opcion: 'DISCALCULIA_01_C', texto_opcion: 'Dificultad moderada constante', peso: 2, orden_opcion: 3 },
        { id_opcion: 'DISCALCULIA_01_D', texto_opcion: 'Gran dificultad con secuencias y cantidades', peso: 3, orden_opcion: 4 },
      ]
    },
    // Pregunta Abierta / Observaciones
    {
      id_pregunta: 'OBS_01',
      categoria: 'General',
      subdimension: 'Observaciones cualitativas',
      rol: 'docente',
      tipo_pregunta: 'abierta',
      texto_pregunta: 'Describe brevemente qué situaciones o dinámicas dentro del aula parecen desencadenar o aliviar estas dificultades:',
      orden: 5,
      limite_caracteres: 500,
      opciones: []
    }
  ];

  for (const p of preguntas) {
    const { opciones, ...preguntaData } = p;
    await prisma.preguntaEncuesta.create({
      data: {
        ...preguntaData,
        opciones: {
          create: opciones
        }
      }
    });
  }

  // 3. Reglas de Niveles
  await prisma.reglaNivel.createMany({
    data: [
      {
        id_regla: 'REG_TDAH_01',
        categoria: 'TDAH',
        tipo: 'puntaje',
        nivel_o_regla: 'Baja o Nula',
        variable_evaluada: 'puntaje_tdah',
        valor_min: 0,
        valor_max: 1,
        condicion_texto: 'Puntaje acumulado 0-1',
        rango_validado: 'Normal',
        detalle: 'Comportamiento atencional dentro de los parámetros esperados para el nivel educativo.',
        fuente: 'Vizcarra & Terán (2018), Guía de Detección Temprana en Contexto Escolar'
      },
      {
        id_regla: 'REG_TDAH_02',
        categoria: 'TDAH',
        tipo: 'puntaje',
        nivel_o_regla: 'Moderada',
        variable_evaluada: 'puntaje_tdah',
        valor_min: 2,
        valor_max: 4,
        condicion_texto: 'Puntaje acumulado 2-4',
        rango_validado: 'Señal Moderada',
        detalle: 'Señales observables de inquietud o dispersión que pueden beneficiarse de adaptaciones pedagógicas.',
        fuente: 'Vizcarra & Terán (2018), Guía de Detección Temprana en Contexto Escolar'
      },
      {
        id_regla: 'REG_TDAH_03',
        categoria: 'TDAH',
        tipo: 'puntaje',
        nivel_o_regla: 'Significativa',
        variable_evaluada: 'puntaje_tdah',
        valor_min: 5,
        valor_max: 6,
        condicion_texto: 'Puntaje acumulado 5-6',
        rango_validado: 'Señal Relevante',
        detalle: 'Indicadores consistentes que sugieren solicitar orientación psicopedagógica formal.',
        fuente: 'Vizcarra & Terán (2018), Guía de Detección Temprana en Contexto Escolar'
      },
      {
        id_regla: 'REG_DISLEXIA_01',
        categoria: 'Dislexia',
        tipo: 'puntaje',
        nivel_o_regla: 'Baja o Nula',
        variable_evaluada: 'puntaje_dislexia',
        valor_min: 0,
        valor_max: 1,
        condicion_texto: 'Puntaje acumulado 0-1',
        rango_validado: 'Sin señales significativas',
        detalle: 'Adquisición lectoescritora adecuada al curso.',
        fuente: 'Defior & Serrano (2014), La dislexia en el ámbito educativo hispanohablante'
      },
      {
        id_regla: 'REG_DISLEXIA_02',
        categoria: 'Dislexia',
        tipo: 'puntaje',
        nivel_o_regla: 'Moderada',
        variable_evaluada: 'puntaje_dislexia',
        valor_min: 2,
        valor_max: 3,
        condicion_texto: 'Puntaje acumulado 2-3',
        rango_validado: 'Señal Leve-Moderada',
        detalle: 'Dificultades en velocidad y precisión lectora que ameritan seguimiento.',
        fuente: 'Defior & Serrano (2014)'
      },
      {
        id_regla: 'REG_DISCALCULIA_01',
        categoria: 'Discalculia',
        tipo: 'puntaje',
        nivel_o_regla: 'Baja o Nula',
        variable_evaluada: 'puntaje_discalculia',
        valor_min: 0,
        valor_max: 1,
        condicion_texto: 'Puntaje 0-1',
        rango_validado: 'Sin señales significativas',
        detalle: 'Manejo cuantitativo y numérico estándar.',
        fuente: 'Butterworth (2019), Neurociencia del Sentido Numérico'
      },
      {
        id_regla: 'REG_DISCALCULIA_02',
        categoria: 'Discalculia',
        tipo: 'puntaje',
        nivel_o_regla: 'Moderada',
        variable_evaluada: 'puntaje_discalculia',
        valor_min: 2,
        valor_max: 3,
        condicion_texto: 'Puntaje 2-3',
        rango_validado: 'Señal Leve-Moderada',
        detalle: 'Se sugiere apoyo visual y manipulación concreta de cantidades.',
        fuente: 'Butterworth (2019)'
      }
    ]
  });

  // 4. Sugerencias Educativas y de Derivación
  await prisma.sugerencia.createMany({
    data: [
      {
        id_sugerencia: 'SUG_TDAH_AULA_01',
        categoria: 'TDAH',
        nivel: 'Moderada',
        contexto: 'aula',
        sugerencia: 'Ubicación estratégica en el aula',
        detalle: 'Sentar al estudiante en las primeras filas, lejos de ventanas o puertas para minimizar estímulos distractores.',
        fuente: 'Vizcarra & Terán (2018), Estrategias de intervención TDAH en el aula'
      },
      {
        id_sugerencia: 'SUG_TDAH_AULA_02',
        categoria: 'TDAH',
        nivel: 'Moderada',
        contexto: 'aula',
        sugerencia: 'Instrucciones fragmentadas en pasos cortos',
        detalle: 'Entregar consignas de una en una, pidiendo al estudiante que repita con sus palabras lo que debe hacer.',
        fuente: 'Vizcarra & Terán (2018), Estrategias de intervención TDAH en el aula'
      },
      {
        id_sugerencia: 'SUG_TDAH_CASA_01',
        categoria: 'TDAH',
        nivel: 'Moderada',
        contexto: 'casa',
        sugerencia: 'Rutinas visuales estructuradas',
        detalle: 'Establecer un cronograma diario visible con tiempos definidos para tareas, pausas activas y descanso.',
        fuente: 'Barkley (2020), Manejo conductual en el hogar'
      },
      {
        id_sugerencia: 'SUG_DISLEXIA_AULA_01',
        categoria: 'Dislexia',
        nivel: 'Moderada',
        contexto: 'aula',
        sugerencia: 'Tiempo adicional y apoyo visual en lecturas',
        detalle: 'Brindar 25% más de tiempo para tareas de lectura y permitir guías tipográficas o tipografías legibles (ej. sans-serif amplias).',
        fuente: 'Defior & Serrano (2014)'
      },
      {
        id_sugerencia: 'SUG_DISCALCULIA_AULA_01',
        categoria: 'Discalculia',
        nivel: 'Moderada',
        contexto: 'aula',
        sugerencia: 'Uso de material concreto y cuadrícula grande',
        detalle: 'Facilitar el uso de ábacos, fichas o papel milimetrado para alinear operaciones y afianzar el valor posicional.',
        fuente: 'Butterworth (2019)'
      },
      {
        id_sugerencia: 'SUG_DERIVACION_01',
        categoria: 'General',
        nivel: 'Todas',
        contexto: 'derivacion',
        sugerencia: 'Consulta psicopedagógica preventiva',
        detalle: 'Presentar este reporte orientativo al gabinete psicopedagógico de la unidad educativa o centro de salud integral.',
        fuente: 'Protocolo de Inclusión Educativa - Ministerio de Educación Bolivia'
      }
    ]
  });

  // 5. Directorio de Recursos / Tests Profesionales para Bolivia
  await prisma.testProfesional.createMany({
    data: [
      {
        categoria: 'TDAH / Conductual',
        test: 'Escala de Conners 3ra Edición',
        tipo_test: 'Evaluación estandarizada conductual',
        informante_o_administracion: 'Docentes y Padres',
        edad_aprox: '6 a 18 años',
        variables_que_ingresa_el_profesional: 'Índice de hiperactividad, inatención y funciones ejecutivas',
        interpretacion_breve: 'Mide intensidad sintomática según baremos por edad y género.',
        disponibilidad_bolivia_latam: 'Disponible en gabinetes psicopedagógicos y centros de neuropsicología de La Paz, Cochabamba y Santa Cruz.',
        fuente: 'Conners (2008)'
      },
      {
        categoria: 'Lectoescritura',
        test: 'Batería PROLEC-R / PROESC',
        tipo_test: 'Evaluación de procesos lectores y de escritura',
        informante_o_administracion: 'Psicólogo / Psicopedagogo',
        edad_aprox: '6 a 12 años',
        variables_que_ingresa_el_profesional: 'Precisión léxica, vía fonológica y comprensión lectora',
        interpretacion_breve: 'Identifica dificultades específicas en decodificación vs comprensión.',
        disponibilidad_bolivia_latam: 'Ampliamente utilizado en universidades y colegios de Bolivia.',
        fuente: 'Cuetos et al. (2014)'
      }
    ]
  });

  console.log('✅ Siembra completada con éxito!');
}

main()
  .catch((e) => {
    console.error('❌ Error durante la siembra:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
