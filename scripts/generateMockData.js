const XLSX = require('../backend/node_modules/xlsx');
const path = require('path');
const fs = require('fs');

const wb1 = XLSX.readFile(path.resolve(__dirname, '../Excel_1_Banco_Preguntas.xlsx'));
const rawPreguntas = XLSX.utils.sheet_to_json(wb1.Sheets['Preguntas_Encuesta']);

const wb3 = XLSX.readFile(path.resolve(__dirname, '../Excel_3_Tests_Profesionales.xlsx'));
const rawTests = XLSX.utils.sheet_to_json(wb3.Sheets['Tests_Profesionales']);

const opcionesEscala = [
  { texto_opcion: 'Nunca o casi nunca', peso: 0, orden_opcion: 1 },
  { texto_opcion: 'A veces', peso: 1, orden_opcion: 2 },
  { texto_opcion: 'Frecuentemente', peso: 2, orden_opcion: 3 },
  { texto_opcion: 'Casi siempre / Muy frecuente', peso: 3, orden_opcion: 4 },
];

const mockPreguntas = rawPreguntas.map((p) => {
  const isEscala = (p.tipo_pregunta || '').toLowerCase() === 'escala';
  return {
    id_pregunta: p.id_pregunta,
    categoria: p.categoria,
    subdimension: p.subdimension || '',
    rol: p.rol,
    tipo_pregunta: isEscala ? 'opcion_multiple' : 'abierta',
    texto_pregunta: p.texto_pregunta,
    orden: Number(p.orden) || 1,
    limite_caracteres: isEscala ? null : 500,
    opciones: isEscala ? opcionesEscala.map((opc, idx) => ({
      id_opcion: p.id_pregunta + '_' + (idx + 1),
      id_pregunta: p.id_pregunta,
      texto_opcion: opc.texto_opcion,
      peso: opc.peso,
      orden_opcion: opc.orden_opcion
    })) : []
  };
});

const mockTests = rawTests.map((t, idx) => ({
  id: 'TEST_' + (idx + 1),
  categoria: t.categoria,
  test: t.test,
  tipo_test: t.tipo_test || '',
  edad_aprox: t.edad_aprox ? String(t.edad_aprox) : '',
  variables_que_ingresa_el_profesional: t.variables_que_ingresa_el_profesional || '',
  interpretacion_breve: t.interpretacion_breve || '',
  disponibilidad_bolivia_latam: t.disponibilidad_bolivia_latam || '',
  fuente: t.fuente || ''
}));

const content = `import { PreguntaEncuesta, RecursoDerivacion, SugerenciaItem, TestProfesionalItem } from '../types';

export const MOCK_PREGUNTAS: PreguntaEncuesta[] = ${JSON.stringify(mockPreguntas, null, 2)};

export const MOCK_TESTS_PROFESIONALES: TestProfesionalItem[] = ${JSON.stringify(mockTests, null, 2)};

export const MOCK_SUGERENCIAS: SugerenciaItem[] = [
  {
    id_sugerencia: 'SUG_01',
    categoria: 'TDAH',
    nivel: 'Moderada',
    contexto: 'aula',
    sugerencia: 'Ubicación estratégica y consignas fragmentadas',
    detalle: 'Ubicar al estudiante en las primeras filas, reduciendo distractores y dividiendo consignas en pasos cortos.',
    fuente: 'Vizcarra & Terán (2018)'
  },
  {
    id_sugerencia: 'SUG_02',
    categoria: 'TDAH',
    nivel: 'Moderada',
    contexto: 'casa',
    sugerencia: 'Rutinas visuales y pausas activas',
    detalle: 'Establecer horarios diarios visibles con temporizadores y pausas de movimiento entre bloques de estudio.',
    fuente: 'Barkley (2020)'
  },
  {
    id_sugerencia: 'SUG_03',
    categoria: 'Dislexia',
    nivel: 'Moderada',
    contexto: 'aula',
    sugerencia: 'Apoyo multimodal y tipografía accesible',
    detalle: 'Permitir audiolibros o resúmenes visuales, y otorgar tiempo adicional sin penalizar la velocidad lectora.',
    fuente: 'Defior & Serrano (2014)'
  },
  {
    id_sugerencia: 'SUG_04',
    categoria: 'Discalculia',
    nivel: 'Moderada',
    contexto: 'aula',
    sugerencia: 'Material concreto y cuadrícula amplia',
    detalle: 'Utilizar ábacos, fichas de conteo y papel milimetrado para consolidar el valor posicional.',
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
`;

fs.writeFileSync(path.resolve(__dirname, '../frontend/src/data/mockData.ts'), content, 'utf8');
console.log('✅ frontend/src/data/mockData.ts generado con éxito!');
