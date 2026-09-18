import { 
  PreguntaEncuesta, 
  RespuestaUsuario, 
  ResultadoCategoria, 
  SugerenciaItem, 
  RecursoDerivacion, 
  CategoriaTrastorno,
  AnalisisPedagogicoIA 
} from '../types';
import { MOCK_PREGUNTAS, MOCK_SUGERENCIAS, MOCK_RECURSOS_DERIVACION } from '../data/mockData';

// Función para normalizar la URL del Backend (agrega /api automáticamente si no está presente)
const getBaseUrl = (): string => {
  let url = (import.meta as any).env?.VITE_API_URL || '/api';
  url = url.trim().replace(/\/+$/, ''); // quitar trailing slash
  if (url && !url.endsWith('/api')) {
    url = `${url}/api`;
  }
  return url;
};

const API_BASE_URL = getBaseUrl();

export const fetchPreguntas = async (): Promise<PreguntaEncuesta[]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/encuesta`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    if (data.success && Array.isArray(data.data) && data.data.length > 0) {
      return data.data;
    }
    return MOCK_PREGUNTAS;
  } catch (error) {
    console.warn('Backend API no disponible. Utilizando datos base predefinidos:', error);
    return MOCK_PREGUNTAS;
  }
};

export const enviarRespuestas = async (
  estudianteId: string,
  rol: string,
  respuestas: RespuestaUsuario[]
): Promise<{
  resultados: ResultadoCategoria[];
  sugerencias: SugerenciaItem[];
  analisis_ia?: AnalisisPedagogicoIA | null;
  aviso_legal: string;
}> => {
  try {
    const res = await fetch(`${API_BASE_URL}/encuesta/respuestas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        estudiante_id: estudianteId,
        rol,
        respuestas
      })
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success && data.data) {
        return {
          resultados: data.data.resultados,
          sugerencias: data.data.sugerencias || MOCK_SUGERENCIAS,
          analisis_ia: data.data.analisis_ia || null,
          aviso_legal: data.data.aviso_legal
        };
      }
    }
  } catch (error) {
    console.warn('Backend no accesible. Calculando resultado local para la demo:', error);
  }

  // Fallback de cálculo local
  const puntajes: Record<CategoriaTrastorno, number> = { TDAH: 0, Dislexia: 0, Discalculia: 0, General: 0 };
  respuestas.forEach((r) => {
    if (r.categoria && puntajes[r.categoria] !== undefined) {
      puntajes[r.categoria] += r.peso || 0;
    }
  });

  const getDetalle = (cat: string, p: number) => {
    if (p >= 3) {
      return {
        nivel: 'Señal Moderada',
        texto_resultado: `Se observan indicadores en ${cat} que justifican estrategias pedagógicas de apoyo y seguimiento.`
      };
    }
    if (p >= 1) {
      return {
        nivel: 'Señal Leve',
        texto_resultado: `Presencia de señales iniciales o situacionales en ${cat}.`
      };
    }
    return {
      nivel: 'Sin señales significativas',
      texto_resultado: `Desempeño acorde a lo esperado para el nivel escolar en ${cat}.`
    };
  };

  const detalleTDAH = getDetalle('TDAH', puntajes.TDAH);
  const detalleDislexia = getDetalle('Dislexia', puntajes.Dislexia);
  const detalleDiscalculia = getDetalle('Discalculia', puntajes.Discalculia);

  const resultados: ResultadoCategoria[] = [
    {
      categoria: 'TDAH',
      puntaje_total: puntajes.TDAH,
      nivel: detalleTDAH.nivel,
      texto_resultado: detalleTDAH.texto_resultado,
      fuente: 'Vizcarra & Terán (2018), Guía de Detección Temprana en Contexto Escolar'
    },
    {
      categoria: 'Dislexia',
      puntaje_total: puntajes.Dislexia,
      nivel: detalleDislexia.nivel,
      texto_resultado: detalleDislexia.texto_resultado,
      fuente: 'Defior & Serrano (2014), Detección en ámbito hispanohablante'
    },
    {
      categoria: 'Discalculia',
      puntaje_total: puntajes.Discalculia,
      nivel: detalleDiscalculia.nivel,
      texto_resultado: detalleDiscalculia.texto_resultado,
      fuente: 'Butterworth (2019), Sentido Numérico'
    }
  ];

  return {
    resultados,
    sugerencias: MOCK_SUGERENCIAS,
    analisis_ia: null,
    aviso_legal: 'ALTIUS es una herramienta de orientación y cribado psicopedagógico preliminar. NO constituye un diagnóstico médico ni clínico.'
  };
};

export const fetchRecursosDerivacion = async (): Promise<RecursoDerivacion[]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/recursos`);
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.data?.tests_profesionales) {
        return MOCK_RECURSOS_DERIVACION;
      }
    }
  } catch (error) {
    console.warn('Utilizando recursos locales:', error);
  }
  return MOCK_RECURSOS_DERIVACION;
};

export const consultarAsistenteIA = async (
  pregunta: string,
  contexto: {
    estudiante_id: string;
    resultados: Array<{ categoria: string; nivel: string }>;
    observaciones?: string;
  }
): Promise<{ respuesta: string; modelo?: string }> => {
  try {
    const res = await fetch(`${API_BASE_URL}/ia/consulta`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pregunta, contexto })
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success && data.data) {
        return data.data;
      }
    }
  } catch (error) {
    console.warn('Error al consultar IA:', error);
  }

  return {
    respuesta: 'Se recomienda estructurar consignas visuales paso a paso, brindar tiempos adicionales y consultar con el gabinete psicopedagógico de la unidad educativa.',
    modelo: 'offline-fallback'
  };
};
