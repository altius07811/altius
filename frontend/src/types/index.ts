export type ScreenType = 'welcome' | 'consent' | 'survey' | 'results' | 'referral';

export type CategoriaTrastorno = 'TDAH' | 'Dislexia' | 'Discalculia' | 'General';

export type RolEncuestado = 'docente' | 'padre/madre' | 'profesional';

export interface OpcionRespuesta {
  id_opcion: string;
  id_pregunta: string;
  texto_opcion: string;
  peso: number;
  orden_opcion?: number;
}

export interface PreguntaEncuesta {
  id_pregunta: string;
  categoria: CategoriaTrastorno;
  subdimension?: string;
  rol?: RolEncuestado | string;
  tipo_pregunta: 'opcion_multiple' | 'abierta';
  texto_pregunta: string;
  orden?: number;
  limite_caracteres?: number | null;
  opciones?: OpcionRespuesta[];
}

export interface RespuestaUsuario {
  id_pregunta: string;
  categoria: CategoriaTrastorno;
  id_opcion?: string;
  texto_opcion?: string;
  respuesta?: string;
  peso: number;
}

export interface ResultadoCategoria {
  id?: string;
  categoria: CategoriaTrastorno;
  puntaje_total: number;
  nivel: 'Sin señales significativas' | 'Señal Leve' | 'Señal Moderada' | 'Señal Relevante' | string;
  texto_resultado: string;
  fuente?: string;
}

export interface SugerenciaItem {
  id_sugerencia: string;
  categoria: string;
  nivel: string;
  contexto: 'aula' | 'casa' | 'derivacion' | string;
  sugerencia: string;
  detalle: string;
  fuente?: string;
}

export interface RecursoDerivacion {
  id?: string;
  nombre: string;
  tipo: string;
  descripcion: string;
  ubicacion: string;
  contacto?: string;
  publicoObjetivo: string;
  icono?: string;
}

export interface AnalisisPedagogicoIA {
  resumen_cualitativo: string;
  estrategias_aula: { titulo: string; descripcion: string }[];
  estrategias_casa: { titulo: string; descripcion: string }[];
  recomendacion_derivacion: string;
  modelo_utilizado?: string;
}
