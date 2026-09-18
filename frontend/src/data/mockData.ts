import { PreguntaEncuesta, RecursoDerivacion, SugerenciaItem } from '../types';

export const MOCK_PREGUNTAS: PreguntaEncuesta[] = [
  {
    id_pregunta: 'TDAH_01',
    categoria: 'TDAH',
    subdimension: 'Atención focalizada y sostenida',
    rol: 'docente',
    tipo_pregunta: 'opcion_multiple',
    texto_pregunta: '¿El estudiante muestra dificultad persistente para mantener la atención en tareas escolares o actividades lúdicas?',
    orden: 1,
    opciones: [
      { id_opcion: 'TDAH_01_A', id_pregunta: 'TDAH_01', texto_opcion: 'Rara vez o nunca', peso: 0, orden_opcion: 1 },
      { id_opcion: 'TDAH_01_B', id_pregunta: 'TDAH_01', texto_opcion: 'A veces', peso: 1, orden_opcion: 2 },
      { id_opcion: 'TDAH_01_C', id_pregunta: 'TDAH_01', texto_opcion: 'Frecuentemente', peso: 2, orden_opcion: 3 },
      { id_opcion: 'TDAH_01_D', id_pregunta: 'TDAH_01', texto_opcion: 'Casi siempre', peso: 3, orden_opcion: 4 },
    ]
  },
  {
    id_pregunta: 'TDAH_02',
    categoria: 'TDAH',
    subdimension: 'Inquietud motora e impulsividad',
    rol: 'docente',
    tipo_pregunta: 'opcion_multiple',
    texto_pregunta: '¿Mueve en exceso manos o pies, o le cuesta permanecer sentado cuando la situación pedagógica lo requiere?',
    orden: 2,
    opciones: [
      { id_opcion: 'TDAH_02_A', id_pregunta: 'TDAH_02', texto_opcion: 'Rara vez o nunca', peso: 0, orden_opcion: 1 },
      { id_opcion: 'TDAH_02_B', id_pregunta: 'TDAH_02', texto_opcion: 'A veces', peso: 1, orden_opcion: 2 },
      { id_opcion: 'TDAH_02_C', id_pregunta: 'TDAH_02', texto_opcion: 'Frecuentemente', peso: 2, orden_opcion: 3 },
      { id_opcion: 'TDAH_02_D', id_pregunta: 'TDAH_02', texto_opcion: 'Casi siempre', peso: 3, orden_opcion: 4 },
    ]
  },
  {
    id_pregunta: 'DISLEXIA_01',
    categoria: 'Dislexia',
    subdimension: 'Decodificación y fluidez lectora',
    rol: 'docente',
    tipo_pregunta: 'opcion_multiple',
    texto_pregunta: '¿Presenta vacilación notable, omisiones, sustituciones de letras o lentitud marcada al leer en voz alta?',
    orden: 3,
    opciones: [
      { id_opcion: 'DISLEXIA_01_A', id_pregunta: 'DISLEXIA_01', texto_opcion: 'Lectura fluida y acorde a su edad', peso: 0, orden_opcion: 1 },
      { id_opcion: 'DISLEXIA_01_B', id_pregunta: 'DISLEXIA_01', texto_opcion: 'Dificultades leves ocasionales', peso: 1, orden_opcion: 2 },
      { id_opcion: 'DISLEXIA_01_C', id_pregunta: 'DISLEXIA_01', texto_opcion: 'Dificultades frecuentes con palabras complejas', peso: 2, orden_opcion: 3 },
      { id_opcion: 'DISLEXIA_01_D', id_pregunta: 'DISLEXIA_01', texto_opcion: 'Marcada dificultad o frustración persistente', peso: 3, orden_opcion: 4 },
    ]
  },
  {
    id_pregunta: 'DISCALCULIA_01',
    categoria: 'Discalculia',
    subdimension: 'Procesamiento de cantidades y cálculo',
    rol: 'padre/madre',
    tipo_pregunta: 'opcion_multiple',
    texto_pregunta: '¿Presenta confusión frecuente con conceptos numéricos básicos, secuencias o cálculo en situaciones cotidianas?',
    orden: 4,
    opciones: [
      { id_opcion: 'DISCALCULIA_01_A', id_pregunta: 'DISCALCULIA_01', texto_opcion: 'Comprensión normal y adaptada', peso: 0, orden_opcion: 1 },
      { id_opcion: 'DISCALCULIA_01_B', id_pregunta: 'DISCALCULIA_01', texto_opcion: 'Dificultad leve con operaciones nuevas', peso: 1, orden_opcion: 2 },
      { id_opcion: 'DISCALCULIA_01_C', id_pregunta: 'DISCALCULIA_01', texto_opcion: 'Dificultad moderada para memorizar tablas o secuencias', peso: 2, orden_opcion: 3 },
      { id_opcion: 'DISCALCULIA_01_D', id_pregunta: 'DISCALCULIA_01', texto_opcion: 'Gran dificultad con nociones de cantidad y dinero', peso: 3, orden_opcion: 4 },
    ]
  },
  {
    id_pregunta: 'OBS_01',
    categoria: 'General',
    subdimension: 'Contexto y observaciones cualitativas',
    rol: 'docente',
    tipo_pregunta: 'abierta',
    texto_pregunta: 'Describe brevemente qué situaciones dentro del aula o del hogar parecen desencadenar o aliviar estas dificultades:',
    orden: 5,
    limite_caracteres: 500,
    opciones: []
  }
];

export const MOCK_SUGERENCIAS: SugerenciaItem[] = [
  {
    id_sugerencia: 'SUG_01',
    categoria: 'TDAH',
    nivel: 'Moderada',
    contexto: 'aula',
    sugerencia: 'Ubicación estratégica en el aula',
    detalle: 'Sentar al estudiante en las primeras filas, con visión directa al pizarrón y alejado de ventanas o pasillos transitados para reducir distractores.',
    fuente: 'Vizcarra & Terán (2018), Estrategias de intervención TDAH en contexto escolar'
  },
  {
    id_sugerencia: 'SUG_02',
    categoria: 'TDAH',
    nivel: 'Moderada',
    contexto: 'aula',
    sugerencia: 'Instrucciones en pasos cortos',
    detalle: 'Fragmentar las consignas complejas en secuencias de 1 o 2 pasos y solicitar una breve repetición verbal para asegurar la retención de la tarea.',
    fuente: 'Vizcarra & Terán (2018)'
  },
  {
    id_sugerencia: 'SUG_03',
    categoria: 'TDAH',
    nivel: 'Moderada',
    contexto: 'casa',
    sugerencia: 'Cronogramas visuales estructurados',
    detalle: 'Establecer rutinas fijas con temporizadores visibles y pausas breves de movimiento entre bloques de estudio.',
    fuente: 'Barkley (2020), Manejo del TDAH en el ámbito familiar'
  },
  {
    id_sugerencia: 'SUG_04',
    categoria: 'Dislexia',
    nivel: 'Leve',
    contexto: 'aula',
    sugerencia: 'Apoyo multimodal y tipografía accesible',
    detalle: 'Permitir acompañar textos con audiolibros o resúmenes visuales, y brindar mayor margen de tiempo sin penalizar la velocidad.',
    fuente: 'Defior & Serrano (2014), Guía de intervención en lectura'
  },
  {
    id_sugerencia: 'SUG_05',
    categoria: 'Discalculia',
    nivel: 'Sin señales',
    contexto: 'aula',
    sugerencia: 'Uso de material manipulativo concreto',
    detalle: 'Utilizar fichas, ábacos o cuadrículas amplias para reforzar la comprensión espacial del valor posicional.',
    fuente: 'Butterworth (2019)'
  }
];

export const MOCK_RECURSOS_DERIVACION: RecursoDerivacion[] = [
  {
    nombre: 'Gabinete Psicopedagógico Escolar',
    tipo: 'Servicio Institucional',
    descripcion: 'Espacio de primer contacto en la propia unidad educativa para realizar adaptaciones curriculares y seguimiento de aula.',
    ubicacion: 'Unidad Educativa / Distrito Escolar correspondiente',
    contacto: 'Coordinación Pedagógica del Colegio',
    publicoObjetivo: 'Docentes, estudiantes y familias'
  },
  {
    nombre: 'Centros de Orientación y Apoyo Integral (Bolivia)',
    tipo: 'Centros Municipales / Comunitarios',
    descripcion: 'Equipos multidisciplinarios (psicología, trabajo social, pedagogía) para evaluación integral sin costo o a costo accesible.',
    ubicacion: 'Principales ciudades (La Paz, Cochabamba, Santa Cruz, El Alto, Sucre)',
    contacto: 'Línea Municipal de Apoyo Social y Familiar',
    publicoObjetivo: 'Población escolar en general'
  },
  {
    nombre: 'Centros Universitarios de Neuropsicología y Fonoaudiología',
    tipo: 'Clínicas Universitarias de Práctica',
    descripcion: 'Servicios de evaluación especializada y aplicación de baterías estandarizadas (WISC, PROLEC, Conners) a aranceles preferenciales.',
    ubicacion: 'Facultades de Psicología (UMSA, UCB, UMSS, UAGRM)',
    contacto: 'Atención en consultorios externos universitarios',
    publicoObjetivo: 'Familias referidas para evaluación diagnóstica formal'
  }
];
