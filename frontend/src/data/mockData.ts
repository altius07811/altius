import { 
  PreguntaEncuesta, 
  RecursoDerivacion, 
  SugerenciaItem, 
  TestProfesionalItem 
} from '../types';

export interface HerramientaTCCItem {
  id_herramienta: string;
  categoria: string;
  tecnica: string;
  descripcion: string;
  aplicacion_practica: string;
  dirigido_a: string;
  fuente: string;
}

export interface PerfilInterpretacionItem {
  id_perfil: string;
  categoria: string;
  perfil_resultado: string;
  criterio_clasificacion: string;
  interpretacion_app: string;
  plan_profesional: string;
  plan_padres: string;
  plan_escuela_institucion: string;
  fuente: string;
}

export interface ReglaGeneralItem {
  id_regla: string;
  categoria: string;
  regla: string;
  condicion: string;
  que_hace_la_app: string;
  fuente: string;
}

export interface ReferenciaCientificaItem {
  id: string;
  categoria: string;
  autores: string;
  ano: number;
  titulo: string;
  revista: string;
  doi: string;
  resumen: string;
}

export const MOCK_PREGUNTAS: PreguntaEncuesta[] = [
  {
    "id_pregunta": "TDAH_01",
    "categoria": "TDAH",
    "subdimension": "Inatencion",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Le cuesta mantener la atención en tareas o actividades durante varios minutos?",
    "orden": 1,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "TDAH_01_1",
        "id_pregunta": "TDAH_01",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "TDAH_01_2",
        "id_pregunta": "TDAH_01",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "TDAH_01_3",
        "id_pregunta": "TDAH_01",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "TDAH_01_4",
        "id_pregunta": "TDAH_01",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "TDAH_01_5",
        "id_pregunta": "TDAH_01",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "TDAH_02",
    "categoria": "TDAH",
    "subdimension": "Inatencion",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Se distrae fácilmente con estímulos del entorno?",
    "orden": 2,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "TDAH_02_1",
        "id_pregunta": "TDAH_02",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "TDAH_02_2",
        "id_pregunta": "TDAH_02",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "TDAH_02_3",
        "id_pregunta": "TDAH_02",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "TDAH_02_4",
        "id_pregunta": "TDAH_02",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "TDAH_02_5",
        "id_pregunta": "TDAH_02",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "TDAH_03",
    "categoria": "TDAH",
    "subdimension": "Inatencion",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Parece no escuchar cuando se le habla directamente?",
    "orden": 3,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "TDAH_03_1",
        "id_pregunta": "TDAH_03",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "TDAH_03_2",
        "id_pregunta": "TDAH_03",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "TDAH_03_3",
        "id_pregunta": "TDAH_03",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "TDAH_03_4",
        "id_pregunta": "TDAH_03",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "TDAH_03_5",
        "id_pregunta": "TDAH_03",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "TDAH_04",
    "categoria": "TDAH",
    "subdimension": "Inatencion",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Deja tareas sin terminar aunque comprenda qué debe hacer?",
    "orden": 4,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "TDAH_04_1",
        "id_pregunta": "TDAH_04",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "TDAH_04_2",
        "id_pregunta": "TDAH_04",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "TDAH_04_3",
        "id_pregunta": "TDAH_04",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "TDAH_04_4",
        "id_pregunta": "TDAH_04",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "TDAH_04_5",
        "id_pregunta": "TDAH_04",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "TDAH_05",
    "categoria": "TDAH",
    "subdimension": "Inatencion",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Le cuesta seguir instrucciones de varios pasos?",
    "orden": 5,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "TDAH_05_1",
        "id_pregunta": "TDAH_05",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "TDAH_05_2",
        "id_pregunta": "TDAH_05",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "TDAH_05_3",
        "id_pregunta": "TDAH_05",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "TDAH_05_4",
        "id_pregunta": "TDAH_05",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "TDAH_05_5",
        "id_pregunta": "TDAH_05",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "TDAH_06",
    "categoria": "TDAH",
    "subdimension": "Inatencion",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Pierde materiales, útiles o elementos necesarios para sus actividades?",
    "orden": 6,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "TDAH_06_1",
        "id_pregunta": "TDAH_06",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "TDAH_06_2",
        "id_pregunta": "TDAH_06",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "TDAH_06_3",
        "id_pregunta": "TDAH_06",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "TDAH_06_4",
        "id_pregunta": "TDAH_06",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "TDAH_06_5",
        "id_pregunta": "TDAH_06",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "TDAH_07",
    "categoria": "TDAH",
    "subdimension": "Inatencion",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Evita o rechaza tareas que requieren esfuerzo mental sostenido?",
    "orden": 7,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "TDAH_07_1",
        "id_pregunta": "TDAH_07",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "TDAH_07_2",
        "id_pregunta": "TDAH_07",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "TDAH_07_3",
        "id_pregunta": "TDAH_07",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "TDAH_07_4",
        "id_pregunta": "TDAH_07",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "TDAH_07_5",
        "id_pregunta": "TDAH_07",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "TDAH_08",
    "categoria": "TDAH",
    "subdimension": "Inatencion",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Olvida actividades cotidianas o indicaciones recientes?",
    "orden": 8,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "TDAH_08_1",
        "id_pregunta": "TDAH_08",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "TDAH_08_2",
        "id_pregunta": "TDAH_08",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "TDAH_08_3",
        "id_pregunta": "TDAH_08",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "TDAH_08_4",
        "id_pregunta": "TDAH_08",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "TDAH_08_5",
        "id_pregunta": "TDAH_08",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "TDAH_09",
    "categoria": "TDAH",
    "subdimension": "Hiperactividad_Impulsividad",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Se mueve en exceso cuando debería permanecer sentado?",
    "orden": 9,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "TDAH_09_1",
        "id_pregunta": "TDAH_09",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "TDAH_09_2",
        "id_pregunta": "TDAH_09",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "TDAH_09_3",
        "id_pregunta": "TDAH_09",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "TDAH_09_4",
        "id_pregunta": "TDAH_09",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "TDAH_09_5",
        "id_pregunta": "TDAH_09",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "TDAH_10",
    "categoria": "TDAH",
    "subdimension": "Hiperactividad_Impulsividad",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Le cuesta esperar turnos en clase, juegos o conversaciones?",
    "orden": 10,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "TDAH_10_1",
        "id_pregunta": "TDAH_10",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "TDAH_10_2",
        "id_pregunta": "TDAH_10",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "TDAH_10_3",
        "id_pregunta": "TDAH_10",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "TDAH_10_4",
        "id_pregunta": "TDAH_10",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "TDAH_10_5",
        "id_pregunta": "TDAH_10",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "TDAH_11",
    "categoria": "TDAH",
    "subdimension": "Hiperactividad_Impulsividad",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Interrumpe, responde antes de tiempo o invade actividades de otros?",
    "orden": 11,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "TDAH_11_1",
        "id_pregunta": "TDAH_11",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "TDAH_11_2",
        "id_pregunta": "TDAH_11",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "TDAH_11_3",
        "id_pregunta": "TDAH_11",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "TDAH_11_4",
        "id_pregunta": "TDAH_11",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "TDAH_11_5",
        "id_pregunta": "TDAH_11",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "TDAH_12",
    "categoria": "TDAH",
    "subdimension": "Hiperactividad_Impulsividad",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Actúa de forma impulsiva sin anticipar consecuencias?",
    "orden": 12,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "TDAH_12_1",
        "id_pregunta": "TDAH_12",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "TDAH_12_2",
        "id_pregunta": "TDAH_12",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "TDAH_12_3",
        "id_pregunta": "TDAH_12",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "TDAH_12_4",
        "id_pregunta": "TDAH_12",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "TDAH_12_5",
        "id_pregunta": "TDAH_12",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "TDAH_13",
    "categoria": "TDAH",
    "subdimension": "Inatencion",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Tiene dificultad para organizar materiales, tiempos o pasos de trabajo?",
    "orden": 13,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "TDAH_13_1",
        "id_pregunta": "TDAH_13",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "TDAH_13_2",
        "id_pregunta": "TDAH_13",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "TDAH_13_3",
        "id_pregunta": "TDAH_13",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "TDAH_13_4",
        "id_pregunta": "TDAH_13",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "TDAH_13_5",
        "id_pregunta": "TDAH_13",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "TDAH_14",
    "categoria": "TDAH",
    "subdimension": "Inatencion",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Presenta errores por descuido en tareas escolares o actividades diarias?",
    "orden": 14,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "TDAH_14_1",
        "id_pregunta": "TDAH_14",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "TDAH_14_2",
        "id_pregunta": "TDAH_14",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "TDAH_14_3",
        "id_pregunta": "TDAH_14",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "TDAH_14_4",
        "id_pregunta": "TDAH_14",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "TDAH_14_5",
        "id_pregunta": "TDAH_14",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "TDAH_15",
    "categoria": "TDAH",
    "subdimension": "Afectacion_Funcional",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Su atención o impulsividad afectan su rendimiento escolar?",
    "orden": 15,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "TDAH_15_1",
        "id_pregunta": "TDAH_15",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "TDAH_15_2",
        "id_pregunta": "TDAH_15",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "TDAH_15_3",
        "id_pregunta": "TDAH_15",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "TDAH_15_4",
        "id_pregunta": "TDAH_15",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "TDAH_15_5",
        "id_pregunta": "TDAH_15",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "TDAH_16",
    "categoria": "TDAH",
    "subdimension": "Afectacion_Funcional",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Su conducta afecta relaciones con pares o adultos?",
    "orden": 16,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "TDAH_16_1",
        "id_pregunta": "TDAH_16",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "TDAH_16_2",
        "id_pregunta": "TDAH_16",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "TDAH_16_3",
        "id_pregunta": "TDAH_16",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "TDAH_16_4",
        "id_pregunta": "TDAH_16",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "TDAH_16_5",
        "id_pregunta": "TDAH_16",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "TDAH_17",
    "categoria": "TDAH",
    "subdimension": "Hiperactividad_Impulsividad",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Tiene dificultades para regular conducta en situaciones grupales?",
    "orden": 17,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "TDAH_17_1",
        "id_pregunta": "TDAH_17",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "TDAH_17_2",
        "id_pregunta": "TDAH_17",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "TDAH_17_3",
        "id_pregunta": "TDAH_17",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "TDAH_17_4",
        "id_pregunta": "TDAH_17",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "TDAH_17_5",
        "id_pregunta": "TDAH_17",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "TDAH_18",
    "categoria": "TDAH",
    "subdimension": "Inatencion",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Muestra variabilidad marcada en tiempo de respuesta o persistencia?",
    "orden": 18,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "TDAH_18_1",
        "id_pregunta": "TDAH_18",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "TDAH_18_2",
        "id_pregunta": "TDAH_18",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "TDAH_18_3",
        "id_pregunta": "TDAH_18",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "TDAH_18_4",
        "id_pregunta": "TDAH_18",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "TDAH_18_5",
        "id_pregunta": "TDAH_18",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "TDAH_19",
    "categoria": "TDAH",
    "subdimension": "Observacion_Clinica",
    "rol": "docente_padre",
    "tipo_pregunta": "abierta",
    "texto_pregunta": "Describa una situación reciente donde notó inatención, hiperactividad o impulsividad.",
    "orden": 19,
    "limite_caracteres": 500,
    "opciones": []
  },
  {
    "id_pregunta": "TDAH_20",
    "categoria": "TDAH",
    "subdimension": "Observacion_Clinica",
    "rol": "profesional",
    "tipo_pregunta": "abierta",
    "texto_pregunta": "¿Se observan patrones compatibles con inatención o hiperactividad-impulsividad, con afectación funcional?",
    "orden": 20,
    "limite_caracteres": 500,
    "opciones": []
  },
  {
    "id_pregunta": "DISL_01",
    "categoria": "Dislexia",
    "subdimension": "Decodificacion",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Confunde letras similares al leer o escribir, como b/d o p/q?",
    "orden": 1,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISL_01_1",
        "id_pregunta": "DISL_01",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISL_01_2",
        "id_pregunta": "DISL_01",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISL_01_3",
        "id_pregunta": "DISL_01",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISL_01_4",
        "id_pregunta": "DISL_01",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISL_01_5",
        "id_pregunta": "DISL_01",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISL_02",
    "categoria": "Dislexia",
    "subdimension": "Fluidez_Lectora",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Lee con lentitud inusual para su edad o curso?",
    "orden": 2,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISL_02_1",
        "id_pregunta": "DISL_02",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISL_02_2",
        "id_pregunta": "DISL_02",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISL_02_3",
        "id_pregunta": "DISL_02",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISL_02_4",
        "id_pregunta": "DISL_02",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISL_02_5",
        "id_pregunta": "DISL_02",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISL_03",
    "categoria": "Dislexia",
    "subdimension": "Decodificacion",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Omite, sustituye o invierte sonidos o sílabas al leer?",
    "orden": 3,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISL_03_1",
        "id_pregunta": "DISL_03",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISL_03_2",
        "id_pregunta": "DISL_03",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISL_03_3",
        "id_pregunta": "DISL_03",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISL_03_4",
        "id_pregunta": "DISL_03",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISL_03_5",
        "id_pregunta": "DISL_03",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISL_04",
    "categoria": "Dislexia",
    "subdimension": "Decodificacion",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Tiene dificultad para relacionar letras con sonidos?",
    "orden": 4,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISL_04_1",
        "id_pregunta": "DISL_04",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISL_04_2",
        "id_pregunta": "DISL_04",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISL_04_3",
        "id_pregunta": "DISL_04",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISL_04_4",
        "id_pregunta": "DISL_04",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISL_04_5",
        "id_pregunta": "DISL_04",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISL_05",
    "categoria": "Dislexia",
    "subdimension": "Conciencia_Fonologica",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Le cuesta identificar o manipular sonidos dentro de las palabras?",
    "orden": 5,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISL_05_1",
        "id_pregunta": "DISL_05",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISL_05_2",
        "id_pregunta": "DISL_05",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISL_05_3",
        "id_pregunta": "DISL_05",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISL_05_4",
        "id_pregunta": "DISL_05",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISL_05_5",
        "id_pregunta": "DISL_05",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISL_06",
    "categoria": "Dislexia",
    "subdimension": "Denominacion_Rapida",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Presenta dificultad para nombrar rápidamente letras, números o colores conocidos?",
    "orden": 6,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISL_06_1",
        "id_pregunta": "DISL_06",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISL_06_2",
        "id_pregunta": "DISL_06",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISL_06_3",
        "id_pregunta": "DISL_06",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISL_06_4",
        "id_pregunta": "DISL_06",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISL_06_5",
        "id_pregunta": "DISL_06",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISL_07",
    "categoria": "Dislexia",
    "subdimension": "Comprension_Lectora",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Necesita releer varias veces para comprender palabras o frases simples?",
    "orden": 7,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISL_07_1",
        "id_pregunta": "DISL_07",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISL_07_2",
        "id_pregunta": "DISL_07",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISL_07_3",
        "id_pregunta": "DISL_07",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISL_07_4",
        "id_pregunta": "DISL_07",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISL_07_5",
        "id_pregunta": "DISL_07",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISL_08",
    "categoria": "Dislexia",
    "subdimension": "Escritura_Relacionada",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Tiene dificultad para deletrear palabras frecuentes?",
    "orden": 8,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISL_08_1",
        "id_pregunta": "DISL_08",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISL_08_2",
        "id_pregunta": "DISL_08",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISL_08_3",
        "id_pregunta": "DISL_08",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISL_08_4",
        "id_pregunta": "DISL_08",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISL_08_5",
        "id_pregunta": "DISL_08",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISL_09",
    "categoria": "Dislexia",
    "subdimension": "Decodificacion",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Presenta errores persistentes de secuenciación al leer?",
    "orden": 9,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISL_09_1",
        "id_pregunta": "DISL_09",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISL_09_2",
        "id_pregunta": "DISL_09",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISL_09_3",
        "id_pregunta": "DISL_09",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISL_09_4",
        "id_pregunta": "DISL_09",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISL_09_5",
        "id_pregunta": "DISL_09",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISL_10",
    "categoria": "Dislexia",
    "subdimension": "Fluidez_Lectora",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Le cuesta recordar palabras vistas recientemente?",
    "orden": 10,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISL_10_1",
        "id_pregunta": "DISL_10",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISL_10_2",
        "id_pregunta": "DISL_10",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISL_10_3",
        "id_pregunta": "DISL_10",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISL_10_4",
        "id_pregunta": "DISL_10",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISL_10_5",
        "id_pregunta": "DISL_10",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISL_11",
    "categoria": "Dislexia",
    "subdimension": "Habitos_Lectores",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Evita actividades de lectura en voz alta o lectura prolongada?",
    "orden": 11,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISL_11_1",
        "id_pregunta": "DISL_11",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISL_11_2",
        "id_pregunta": "DISL_11",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISL_11_3",
        "id_pregunta": "DISL_11",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISL_11_4",
        "id_pregunta": "DISL_11",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISL_11_5",
        "id_pregunta": "DISL_11",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISL_12",
    "categoria": "Dislexia",
    "subdimension": "Afectacion_Funcional",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Su rendimiento en lectura es inferior a otras áreas?",
    "orden": 12,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISL_12_1",
        "id_pregunta": "DISL_12",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISL_12_2",
        "id_pregunta": "DISL_12",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISL_12_3",
        "id_pregunta": "DISL_12",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISL_12_4",
        "id_pregunta": "DISL_12",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISL_12_5",
        "id_pregunta": "DISL_12",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISL_13",
    "categoria": "Dislexia",
    "subdimension": "Afectacion_Funcional",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿La dificultad lectora afecta su participación o autoestima escolar?",
    "orden": 13,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISL_13_1",
        "id_pregunta": "DISL_13",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISL_13_2",
        "id_pregunta": "DISL_13",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISL_13_3",
        "id_pregunta": "DISL_13",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISL_13_4",
        "id_pregunta": "DISL_13",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISL_13_5",
        "id_pregunta": "DISL_13",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISL_14",
    "categoria": "Dislexia",
    "subdimension": "Historia_Desarrollo",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Tiene antecedentes familiares de dificultades importantes de lectura o escritura?",
    "orden": 14,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISL_14_1",
        "id_pregunta": "DISL_14",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISL_14_2",
        "id_pregunta": "DISL_14",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISL_14_3",
        "id_pregunta": "DISL_14",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISL_14_4",
        "id_pregunta": "DISL_14",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISL_14_5",
        "id_pregunta": "DISL_14",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISL_15",
    "categoria": "Dislexia",
    "subdimension": "Conciencia_Fonologica",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Le cuesta repetir con precisión secuencias verbales cortas?",
    "orden": 15,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISL_15_1",
        "id_pregunta": "DISL_15",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISL_15_2",
        "id_pregunta": "DISL_15",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISL_15_3",
        "id_pregunta": "DISL_15",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISL_15_4",
        "id_pregunta": "DISL_15",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISL_15_5",
        "id_pregunta": "DISL_15",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISL_16",
    "categoria": "Dislexia",
    "subdimension": "Escritura_Relacionada",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Presenta errores frecuentes en copia o dictado relacionados con sonidos?",
    "orden": 16,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISL_16_1",
        "id_pregunta": "DISL_16",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISL_16_2",
        "id_pregunta": "DISL_16",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISL_16_3",
        "id_pregunta": "DISL_16",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISL_16_4",
        "id_pregunta": "DISL_16",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISL_16_5",
        "id_pregunta": "DISL_16",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISL_17",
    "categoria": "Dislexia",
    "subdimension": "Decodificacion",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Muestra dificultad para decodificar palabras nuevas?",
    "orden": 17,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISL_17_1",
        "id_pregunta": "DISL_17",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISL_17_2",
        "id_pregunta": "DISL_17",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISL_17_3",
        "id_pregunta": "DISL_17",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISL_17_4",
        "id_pregunta": "DISL_17",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISL_17_5",
        "id_pregunta": "DISL_17",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISL_18",
    "categoria": "Dislexia",
    "subdimension": "Historia_Desarrollo",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Su lectura mejora poco aun con práctica habitual?",
    "orden": 18,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISL_18_1",
        "id_pregunta": "DISL_18",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISL_18_2",
        "id_pregunta": "DISL_18",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISL_18_3",
        "id_pregunta": "DISL_18",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISL_18_4",
        "id_pregunta": "DISL_18",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISL_18_5",
        "id_pregunta": "DISL_18",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISL_19",
    "categoria": "Dislexia",
    "subdimension": "Observacion_Clinica",
    "rol": "docente_padre",
    "tipo_pregunta": "abierta",
    "texto_pregunta": "Describa una situación reciente de dificultad en lectura, escritura o decodificación.",
    "orden": 19,
    "limite_caracteres": 500,
    "opciones": []
  },
  {
    "id_pregunta": "DISL_20",
    "categoria": "Dislexia",
    "subdimension": "Observacion_Clinica",
    "rol": "profesional",
    "tipo_pregunta": "abierta",
    "texto_pregunta": "¿Se observan rasgos de riesgo en conciencia fonológica, decodificación o denominación rápida?",
    "orden": 20,
    "limite_caracteres": 500,
    "opciones": []
  },
  {
    "id_pregunta": "DISC_01",
    "categoria": "Discalculia",
    "subdimension": "Memoria_Aritmetica",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Tiene dificultad para recordar secuencias numéricas como tablas, días o meses?",
    "orden": 1,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISC_01_1",
        "id_pregunta": "DISC_01",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISC_01_2",
        "id_pregunta": "DISC_01",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISC_01_3",
        "id_pregunta": "DISC_01",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISC_01_4",
        "id_pregunta": "DISC_01",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISC_01_5",
        "id_pregunta": "DISC_01",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISC_02",
    "categoria": "Discalculia",
    "subdimension": "Sentido_Numerico",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Confunde el orden de los números al contar?",
    "orden": 2,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISC_02_1",
        "id_pregunta": "DISC_02",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISC_02_2",
        "id_pregunta": "DISC_02",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISC_02_3",
        "id_pregunta": "DISC_02",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISC_02_4",
        "id_pregunta": "DISC_02",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISC_02_5",
        "id_pregunta": "DISC_02",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISC_03",
    "categoria": "Discalculia",
    "subdimension": "Sentido_Numerico",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Le cuesta comparar qué número es mayor o menor?",
    "orden": 3,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISC_03_1",
        "id_pregunta": "DISC_03",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISC_03_2",
        "id_pregunta": "DISC_03",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISC_03_3",
        "id_pregunta": "DISC_03",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISC_03_4",
        "id_pregunta": "DISC_03",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISC_03_5",
        "id_pregunta": "DISC_03",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISC_04",
    "categoria": "Discalculia",
    "subdimension": "Calculo",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Presenta errores persistentes en cálculo mental simple?",
    "orden": 4,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISC_04_1",
        "id_pregunta": "DISC_04",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISC_04_2",
        "id_pregunta": "DISC_04",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISC_04_3",
        "id_pregunta": "DISC_04",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISC_04_4",
        "id_pregunta": "DISC_04",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISC_04_5",
        "id_pregunta": "DISC_04",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISC_05",
    "categoria": "Discalculia",
    "subdimension": "Calculo",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Necesita apoyo concreto para resolver operaciones básicas?",
    "orden": 5,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISC_05_1",
        "id_pregunta": "DISC_05",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISC_05_2",
        "id_pregunta": "DISC_05",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISC_05_3",
        "id_pregunta": "DISC_05",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISC_05_4",
        "id_pregunta": "DISC_05",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISC_05_5",
        "id_pregunta": "DISC_05",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISC_06",
    "categoria": "Discalculia",
    "subdimension": "Sentido_Numerico",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Le cuesta ubicar números en una recta numérica?",
    "orden": 6,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISC_06_1",
        "id_pregunta": "DISC_06",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISC_06_2",
        "id_pregunta": "DISC_06",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISC_06_3",
        "id_pregunta": "DISC_06",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISC_06_4",
        "id_pregunta": "DISC_06",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISC_06_5",
        "id_pregunta": "DISC_06",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISC_07",
    "categoria": "Discalculia",
    "subdimension": "Sentido_Numerico",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Tiene dificultad para comprender cantidad y magnitud numérica?",
    "orden": 7,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISC_07_1",
        "id_pregunta": "DISC_07",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISC_07_2",
        "id_pregunta": "DISC_07",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISC_07_3",
        "id_pregunta": "DISC_07",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISC_07_4",
        "id_pregunta": "DISC_07",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISC_07_5",
        "id_pregunta": "DISC_07",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISC_08",
    "categoria": "Discalculia",
    "subdimension": "Atencion_y_Procedimiento",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Comete errores frecuentes al alinear cifras en operaciones?",
    "orden": 8,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISC_08_1",
        "id_pregunta": "DISC_08",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISC_08_2",
        "id_pregunta": "DISC_08",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISC_08_3",
        "id_pregunta": "DISC_08",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISC_08_4",
        "id_pregunta": "DISC_08",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISC_08_5",
        "id_pregunta": "DISC_08",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISC_09",
    "categoria": "Discalculia",
    "subdimension": "Memoria_Aritmetica",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Le cuesta recordar procedimientos aritméticos aprendidos?",
    "orden": 9,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISC_09_1",
        "id_pregunta": "DISC_09",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISC_09_2",
        "id_pregunta": "DISC_09",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISC_09_3",
        "id_pregunta": "DISC_09",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISC_09_4",
        "id_pregunta": "DISC_09",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISC_09_5",
        "id_pregunta": "DISC_09",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISC_10",
    "categoria": "Discalculia",
    "subdimension": "Calculo",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Tarda demasiado en resolver operaciones acordes a su edad?",
    "orden": 10,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISC_10_1",
        "id_pregunta": "DISC_10",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISC_10_2",
        "id_pregunta": "DISC_10",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISC_10_3",
        "id_pregunta": "DISC_10",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISC_10_4",
        "id_pregunta": "DISC_10",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISC_10_5",
        "id_pregunta": "DISC_10",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISC_11",
    "categoria": "Discalculia",
    "subdimension": "Calculo",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Cuenta con los dedos en tareas donde sus pares ya no lo hacen?",
    "orden": 11,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISC_11_1",
        "id_pregunta": "DISC_11",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISC_11_2",
        "id_pregunta": "DISC_11",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISC_11_3",
        "id_pregunta": "DISC_11",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISC_11_4",
        "id_pregunta": "DISC_11",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISC_11_5",
        "id_pregunta": "DISC_11",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISC_12",
    "categoria": "Discalculia",
    "subdimension": "Razonamiento_Matematico",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Le cuesta resolver problemas verbales con información numérica simple?",
    "orden": 12,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISC_12_1",
        "id_pregunta": "DISC_12",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISC_12_2",
        "id_pregunta": "DISC_12",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISC_12_3",
        "id_pregunta": "DISC_12",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISC_12_4",
        "id_pregunta": "DISC_12",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISC_12_5",
        "id_pregunta": "DISC_12",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISC_13",
    "categoria": "Discalculia",
    "subdimension": "Procesamiento_Simbolico",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Confunde símbolos matemáticos como +, -, x o =?",
    "orden": 13,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISC_13_1",
        "id_pregunta": "DISC_13",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISC_13_2",
        "id_pregunta": "DISC_13",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISC_13_3",
        "id_pregunta": "DISC_13",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISC_13_4",
        "id_pregunta": "DISC_13",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISC_13_5",
        "id_pregunta": "DISC_13",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISC_14",
    "categoria": "Discalculia",
    "subdimension": "Sentido_Numerico",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Presenta dificultad para estimar cantidades pequeñas sin contar una a una?",
    "orden": 14,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISC_14_1",
        "id_pregunta": "DISC_14",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISC_14_2",
        "id_pregunta": "DISC_14",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISC_14_3",
        "id_pregunta": "DISC_14",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISC_14_4",
        "id_pregunta": "DISC_14",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISC_14_5",
        "id_pregunta": "DISC_14",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISC_15",
    "categoria": "Discalculia",
    "subdimension": "Afectacion_Funcional",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Su rendimiento en matemáticas es claramente inferior a otras áreas?",
    "orden": 15,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISC_15_1",
        "id_pregunta": "DISC_15",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISC_15_2",
        "id_pregunta": "DISC_15",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISC_15_3",
        "id_pregunta": "DISC_15",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISC_15_4",
        "id_pregunta": "DISC_15",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISC_15_5",
        "id_pregunta": "DISC_15",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISC_16",
    "categoria": "Discalculia",
    "subdimension": "Afectacion_Funcional",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿La dificultad matemática afecta su participación o seguridad en clase?",
    "orden": 16,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISC_16_1",
        "id_pregunta": "DISC_16",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISC_16_2",
        "id_pregunta": "DISC_16",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISC_16_3",
        "id_pregunta": "DISC_16",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISC_16_4",
        "id_pregunta": "DISC_16",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISC_16_5",
        "id_pregunta": "DISC_16",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISC_17",
    "categoria": "Discalculia",
    "subdimension": "Memoria_Aritmetica",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Le cuesta recordar hechos aritméticos como sumas o tablas conocidas?",
    "orden": 17,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISC_17_1",
        "id_pregunta": "DISC_17",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISC_17_2",
        "id_pregunta": "DISC_17",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISC_17_3",
        "id_pregunta": "DISC_17",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISC_17_4",
        "id_pregunta": "DISC_17",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISC_17_5",
        "id_pregunta": "DISC_17",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISC_18",
    "categoria": "Discalculia",
    "subdimension": "Procesamiento_Simbolico",
    "rol": "docente_padre",
    "tipo_pregunta": "opcion_multiple",
    "texto_pregunta": "¿Presenta errores al copiar números de varios dígitos?",
    "orden": 18,
    "limite_caracteres": null,
    "opciones": [
      {
        "id_opcion": "DISC_18_1",
        "id_pregunta": "DISC_18",
        "texto_opcion": "Nunca",
        "peso": 1,
        "orden_opcion": 1
      },
      {
        "id_opcion": "DISC_18_2",
        "id_pregunta": "DISC_18",
        "texto_opcion": "Casi nunca",
        "peso": 2,
        "orden_opcion": 2
      },
      {
        "id_opcion": "DISC_18_3",
        "id_pregunta": "DISC_18",
        "texto_opcion": "A veces",
        "peso": 3,
        "orden_opcion": 3
      },
      {
        "id_opcion": "DISC_18_4",
        "id_pregunta": "DISC_18",
        "texto_opcion": "Casi siempre",
        "peso": 4,
        "orden_opcion": 4
      },
      {
        "id_opcion": "DISC_18_5",
        "id_pregunta": "DISC_18",
        "texto_opcion": "Siempre",
        "peso": 5,
        "orden_opcion": 5
      }
    ]
  },
  {
    "id_pregunta": "DISC_19",
    "categoria": "Discalculia",
    "subdimension": "Observacion_Clinica",
    "rol": "docente_padre",
    "tipo_pregunta": "abierta",
    "texto_pregunta": "Describa una situación reciente de dificultad en conteo, cálculo o problemas matemáticos.",
    "orden": 19,
    "limite_caracteres": 500,
    "opciones": []
  },
  {
    "id_pregunta": "DISC_20",
    "categoria": "Discalculia",
    "subdimension": "Observacion_Clinica",
    "rol": "profesional",
    "tipo_pregunta": "abierta",
    "texto_pregunta": "¿Se observan rasgos de riesgo en sentido numérico, cálculo o razonamiento matemático?",
    "orden": 20,
    "limite_caracteres": 500,
    "opciones": []
  }
];

export const MOCK_TESTS_PROFESIONALES: TestProfesionalItem[] = [
  {
    "id": "TEST_1",
    "categoria": "TDAH",
    "test": "ADHD Rating Scale-5 (ADHD-RS-5)",
    "tipo_test": "escala_sintomas",
    "edad_aprox": "5-17",
    "variables_que_ingresa_el_profesional": "puntaje_inatencion; puntaje_hiperactividad_impulsividad; percentil_por_edad_y_sexo",
    "interpretacion_breve": "Puntúa por separado los 18 síntomas DSM-5 de inatención e hiperactividad-impulsividad; primera capa de síntomas.",
    "disponibilidad_bolivia_latam": "Versión en español disponible; sin baremos propios de Bolivia — usar percentiles hispanohablantes con cautela.",
    "fuente": "Ramirez et al. (2026); Pappas (2006)"
  },
  {
    "id": "TEST_2",
    "categoria": "TDAH",
    "test": "Vanderbilt (NICHQ)",
    "tipo_test": "escala_sintomas_e_impairment",
    "edad_aprox": "6-12",
    "variables_que_ingresa_el_profesional": "sintomas_inatencion; sintomas_hiperactividad; puntaje_impairment; screening_comorbilidad",
    "interpretacion_breve": "Combina el conteo de síntomas con una escala de desempeño (impairment) en 8 áreas; criterio positivo requiere síntomas + deterioro.",
    "disponibilidad_bolivia_latam": "Gratuito y breve; muy usado en escuelas de América Latina.",
    "fuente": "Wolraich et al. (2003); Bard et al. (2013)"
  },
  {
    "id": "TEST_3",
    "categoria": "TDAH",
    "test": "Conners 3 / Conners EC",
    "tipo_test": "indice_dimensional",
    "edad_aprox": "2-18",
    "variables_que_ingresa_el_profesional": "t_score_inatencion; t_score_hiperactividad; indices_DSM; escalas_ejecutivas",
    "interpretacion_breve": "Perfiles dimensionales (T-scores) que permiten comparar con normas y dar seguimiento a la evolución.",
    "disponibilidad_bolivia_latam": "Validado en población española; útil para seguimiento longitudinal en consulta escolar.",
    "fuente": "Morales-Hidalgo et al. (2016)"
  },
  {
    "id": "TEST_4",
    "categoria": "TDAH",
    "test": "CPC / IRS (Impairment Rating Scale)",
    "tipo_test": "afectacion_funcional",
    "edad_aprox": "4-12",
    "variables_que_ingresa_el_profesional": "puntaje_impairment; areas_afectadas_aula_casa_pares",
    "interpretacion_breve": "Mide el impacto funcional más allá del conteo de síntomas; clave para decidir la intensidad del apoyo.",
    "disponibilidad_bolivia_latam": "Adaptado y validado en español con foco escolar.",
    "fuente": "Navarro-Soria et al. (2025); Ramirez et al. (2026)"
  },
  {
    "id": "TEST_5",
    "categoria": "TDAH",
    "test": "CHEXI (Childhood Executive Functioning Inventory)",
    "tipo_test": "funciones_ejecutivas",
    "edad_aprox": "6-12",
    "variables_que_ingresa_el_profesional": "memoria_de_trabajo; inhibicion; puntaje_total",
    "interpretacion_breve": "Perfila déficits ejecutivos específicos (memoria de trabajo, inhibición); ayuda a diferenciar TDAH de otras dificultades.",
    "disponibilidad_bolivia_latam": "Validado en estudiantes de primaria de habla hispana.",
    "fuente": "Conesa (2023)"
  },
  {
    "id": "TEST_6",
    "categoria": "TDAH",
    "test": "WISC-V / WISC-IV Spanish",
    "tipo_test": "perfil_cognitivo",
    "edad_aprox": "6-16",
    "variables_que_ingresa_el_profesional": "icv; irp_ivp; imt; ivp; cit_general",
    "interpretacion_breve": "No diagnostica TDAH por sí solo; identifica heterogeneidad cognitiva y descarta otras causas del bajo rendimiento.",
    "disponibilidad_bolivia_latam": "Versión en español ampliamente usada en evaluación psicopedagógica en Latinoamérica.",
    "fuente": "Nuñez (2021)"
  },
  {
    "id": "TEST_7",
    "categoria": "Dislexia",
    "test": "PROLEC-R",
    "tipo_test": "bateria_de_lectura",
    "edad_aprox": "6-12",
    "variables_que_ingresa_el_profesional": "lectura_de_palabras; pseudopalabras; velocidad; comprension",
    "interpretacion_breve": "Evalúa por separado los procesos lectores (léxico, sintáctico, semántico) con puntos de corte por curso.",
    "disponibilidad_bolivia_latam": "Uno de los instrumentos en español más usados en Latinoamérica.",
    "fuente": "Ramos-Carrillo & Moreno-Pérez (2023)"
  },
  {
    "id": "TEST_8",
    "categoria": "Dislexia",
    "test": "Sicole-R",
    "tipo_test": "bateria_multimedia_cognitiva",
    "edad_aprox": "primaria",
    "variables_que_ingresa_el_profesional": "resultados_por_tarea; perfil_cognitivo_lector",
    "interpretacion_breve": "Perfil amplio de procesos cognitivos lectores; útil para diseñar un plan individualizado detallado.",
    "disponibilidad_bolivia_latam": "Aplicación computarizada; requiere formación específica del profesional.",
    "fuente": "Jiménez et al. (2024)"
  },
  {
    "id": "TEST_9",
    "categoria": "Dislexia",
    "test": "EDDIX (Escala para la Detección de la Dislexia)",
    "tipo_test": "escala_de_deteccion",
    "edad_aprox": "6-12",
    "variables_que_ingresa_el_profesional": "puntaje_total; dimensiones_elevadas",
    "interpretacion_breve": "Cribado rápido a cargo del docente, con buena fiabilidad; primera capa antes de pruebas más extensas.",
    "disponibilidad_bolivia_latam": "Desarrollada y validada en español; aplicable adaptando la referencia normativa local.",
    "fuente": "Moreno Jusdado et al. (2025)"
  },
  {
    "id": "TEST_10",
    "categoria": "Dislexia",
    "test": "RAN (Rapid Automatized Naming)",
    "tipo_test": "nominacion_rapida",
    "edad_aprox": "6-12",
    "variables_que_ingresa_el_profesional": "tiempo_letras; tiempo_digitos; precision",
    "interpretacion_breve": "Predictor robusto de fluidez lectora en español; marcador temprano de riesgo.",
    "disponibilidad_bolivia_latam": "Tarea breve, fácil de aplicar en el contexto escolar.",
    "fuente": "Cabañas-Tinajero et al. (2025); Outón & Ferraces (2021)"
  },
  {
    "id": "TEST_11",
    "categoria": "Dislexia",
    "test": "Bangor Dyslexia Test",
    "tipo_test": "screening_complementario",
    "edad_aprox": "6-12",
    "variables_que_ingresa_el_profesional": "indicadores_clinicos; errores_caracteristicos",
    "interpretacion_breve": "Complementa al RAN con indicadores cualitativos clásicos (lateralidad, secuencias, dígitos).",
    "disponibilidad_bolivia_latam": "Usar como apoyo complementario, no como prueba única.",
    "fuente": "Outón & Ferraces (2021)"
  },
  {
    "id": "TEST_12",
    "categoria": "Dislexia",
    "test": "Test gamificado / Dytective",
    "tipo_test": "cribado_digital",
    "edad_aprox": "9+",
    "variables_que_ingresa_el_profesional": "riesgo_estimado; tareas_falladas",
    "interpretacion_breve": "Cribado masivo mediante juego; útil para priorizar a quién evaluar primero, no reemplaza la evaluación completa.",
    "disponibilidad_bolivia_latam": "Aplicación digital accesible de forma remota; requiere supervisión de un adulto.",
    "fuente": "Rello et al. (2019)"
  },
  {
    "id": "TEST_13",
    "categoria": "Discalculia",
    "test": "BM-PROMA",
    "tipo_test": "bateria_multimedia_matematica",
    "edad_aprox": "primaria",
    "variables_que_ingresa_el_profesional": "12_tareas; perfil_cognitivo; perfil_basico_numerico",
    "interpretacion_breve": "Perfil amplio de habilidades matemáticas básicas y cognición numérica.",
    "disponibilidad_bolivia_latam": "Validada en español; el formato multimedia facilita la aplicación grupal.",
    "fuente": "Rodríguez et al. (2021)"
  },
  {
    "id": "TEST_14",
    "categoria": "Discalculia",
    "test": "IPAM",
    "tipo_test": "cribado_curricular",
    "edad_aprox": "1ro_primaria",
    "variables_que_ingresa_el_profesional": "discriminacion_de_cantidades; composicion_y_descomposicion",
    "interpretacion_breve": "Cribado ligado al currículo de primer grado; identifica riesgo temprano vinculado a los contenidos escolares.",
    "disponibilidad_bolivia_latam": "Diseñado para aplicación docente con apoyo profesional.",
    "fuente": "Jiménez et al. (2020)"
  },
  {
    "id": "TEST_15",
    "categoria": "Discalculia",
    "test": "CBM Numeracy (medición basada en currículo)",
    "tipo_test": "cribado_temprano",
    "edad_aprox": "kinder",
    "variables_que_ingresa_el_profesional": "identificacion_de_numeros; discriminacion_de_magnitudes",
    "interpretacion_breve": "Buena validez predictiva desde kínder; permite seguimiento curricular repetido.",
    "disponibilidad_bolivia_latam": "Aplicable en contextos con recursos limitados por su brevedad.",
    "fuente": "Jiménez & García (2026)"
  },
  {
    "id": "TEST_16",
    "categoria": "Discalculia",
    "test": "Evaluación dinámica (Dynamic Assessment)",
    "tipo_test": "assessment_dinamico",
    "edad_aprox": "1ro-2do",
    "variables_que_ingresa_el_profesional": "respuesta_al_andamiaje; aprendizaje_durante_la_prueba",
    "interpretacion_breve": "Reduce la confusión entre dificultad matemática real y barreras de idioma o escolaridad.",
    "disponibilidad_bolivia_latam": "Muy útil en contextos bilingües o con el castellano como segunda lengua, frecuentes en Bolivia.",
    "fuente": "Cho et al. (2019)"
  },
  {
    "id": "TEST_17",
    "categoria": "Discalculia",
    "test": "Herramienta adaptativa de matemática (curriculum-based)",
    "tipo_test": "evaluacion_formativa_adaptativa",
    "edad_aprox": "5to_primaria+",
    "variables_que_ingresa_el_profesional": "puntaje_por_area; nivel_de_dominio",
    "interpretacion_breve": "Ajusta la dificultad según el desempeño; permite decisiones formativas por área específica.",
    "disponibilidad_bolivia_latam": "Modelo reciente, adaptable a currículos locales.",
    "fuente": "Larrain et al. (2026)"
  },
  {
    "id": "TEST_18",
    "categoria": "Discalculia",
    "test": "KeyMath-3 / Pruebas de sentido numérico y razonamiento",
    "tipo_test": "bateria_estandarizada_por_dominios",
    "edad_aprox": "4-22",
    "variables_que_ingresa_el_profesional": "puntuaciones_por_subprueba; perfil_general_numeracion_operaciones_aplicaciones",
    "interpretacion_breve": "Batería estandarizada amplia; útil para un perfil detallado por dominio cuando se requiere evaluación más profunda.",
    "disponibilidad_bolivia_latam": "Existen versiones y adaptaciones en español; verificar baremos disponibles en la región.",
    "fuente": "Haberstroh (2019); Reeve & Waldecker (2017)"
  }
];

export const MOCK_SUGERENCIAS: SugerenciaItem[] = [
  {
    "id_sugerencia": "SUG_1",
    "categoria": "TDAH",
    "nivel": "Señales leves",
    "contexto": "casa",
    "sugerencia": "Rutinas breves y refuerzo positivo",
    "detalle": "Dar una instrucción a la vez, usar recordatorios visuales y reconocer específicamente cuando el niño logra completar una tarea o esperar su turno.",
    "fuente": "Pappas (2006); Wolraich et al. (2003); Makransky & Bilenberg (2014); Hall et al. (2020)"
  },
  {
    "id_sugerencia": "SUG_2",
    "categoria": "TDAH",
    "nivel": "Señales leves",
    "contexto": "escuela",
    "sugerencia": "Ubicación y consignas cortas",
    "detalle": "Ubicar al estudiante cerca del docente y lejos de ventanas o puertas; fragmentar las consignas en pasos breves, verificando la comprensión antes de continuar.",
    "fuente": "Pappas (2006); Wolraich et al. (2003); Makransky & Bilenberg (2014); Hall et al. (2020)"
  },
  {
    "id_sugerencia": "SUG_3",
    "categoria": "TDAH",
    "nivel": "Señales leves",
    "contexto": "profesional",
    "sugerencia": "Seguimiento sin derivación urgente",
    "detalle": "No es urgente derivar; registrar la evolución durante 4 a 6 semanas y volver a aplicar la encuesta con ambos informantes.",
    "fuente": "Pappas (2006); Wolraich et al. (2003); Makransky & Bilenberg (2014); Hall et al. (2020)"
  },
  {
    "id_sugerencia": "SUG_4",
    "categoria": "TDAH",
    "nivel": "Señales moderadas",
    "contexto": "casa",
    "sugerencia": "Reducir distractores y anticipar consecuencias",
    "detalle": "Organizar tiempos, materiales y espacio de estudio; usar un sistema \"Primero–Después\" para anticipar una actividad agradable tras completar la tarea.",
    "fuente": "Pappas (2006); Wolraich et al. (2003); Makransky & Bilenberg (2014); Hall et al. (2020)"
  },
  {
    "id_sugerencia": "SUG_5",
    "categoria": "TDAH",
    "nivel": "Señales moderadas",
    "contexto": "escuela",
    "sugerencia": "Fragmentar tareas y monitorear desempeño",
    "detalle": "Dividir las actividades en partes pequeñas, usar recordatorios visuales y pausas breves, y registrar el impacto en el aprendizaje y la conducta para compartirlo con la familia.",
    "fuente": "Pappas (2006); Wolraich et al. (2003); Makransky & Bilenberg (2014); Hall et al. (2020)"
  },
  {
    "id_sugerencia": "SUG_6",
    "categoria": "TDAH",
    "nivel": "Señales moderadas",
    "contexto": "profesional",
    "sugerencia": "Evaluación con psicología educativa",
    "detalle": "Se recomienda una evaluación con un profesional de psicología educativa para confirmar la necesidad de apoyos adicionales.",
    "fuente": "Pappas (2006); Wolraich et al. (2003); Makransky & Bilenberg (2014); Hall et al. (2020)"
  },
  {
    "id_sugerencia": "SUG_7",
    "categoria": "TDAH",
    "nivel": "Señales marcadas",
    "contexto": "casa",
    "sugerencia": "Coordinación semanal con la escuela",
    "detalle": "Mantener en casa las mismas señales de autorregulación usadas en la escuela (por ejemplo, un semáforo de calma) y coordinar avances con el docente de forma semanal.",
    "fuente": "Pappas (2006); Wolraich et al. (2003); Makransky & Bilenberg (2014); Hall et al. (2020)"
  },
  {
    "id_sugerencia": "SUG_8",
    "categoria": "TDAH",
    "nivel": "Señales marcadas",
    "contexto": "escuela",
    "sugerencia": "Supervisión constante y pausas activas",
    "detalle": "Ofrecer supervisión constante durante las tareas, pausas activas frecuentes y un espacio de regulación emocional dentro del aula.",
    "fuente": "Pappas (2006); Wolraich et al. (2003); Makransky & Bilenberg (2014); Hall et al. (2020)"
  },
  {
    "id_sugerencia": "SUG_9",
    "categoria": "TDAH",
    "nivel": "Señales marcadas",
    "contexto": "profesional",
    "sugerencia": "Evaluación prioritaria",
    "detalle": "Se recomienda una evaluación prioritaria, en un plazo breve, con un especialista en psicología clínica, educativa o neuropsicología.",
    "fuente": "Pappas (2006); Wolraich et al. (2003); Makransky & Bilenberg (2014); Hall et al. (2020)"
  },
  {
    "id_sugerencia": "SUG_10",
    "categoria": "Dislexia",
    "nivel": "Señales leves",
    "contexto": "casa",
    "sugerencia": "Lectura acompañada breve",
    "detalle": "Practicar la correspondencia entre letras y sonidos unos minutos al día, en un ambiente relajado y sin presión de tiempo.",
    "fuente": "Bui et al. (2025); Fan et al. (2024); Restrepo et al. (2026); Bassôa et al. (2021)"
  },
  {
    "id_sugerencia": "SUG_11",
    "categoria": "Dislexia",
    "nivel": "Señales leves",
    "contexto": "escuela",
    "sugerencia": "Apoyo lector inicial",
    "detalle": "Ofrecer lectura compartida o en pareja, sin exponer al estudiante a leer en voz alta frente a todo el grupo.",
    "fuente": "Bui et al. (2025); Fan et al. (2024); Restrepo et al. (2026); Bassôa et al. (2021)"
  },
  {
    "id_sugerencia": "SUG_12",
    "categoria": "Dislexia",
    "nivel": "Señales leves",
    "contexto": "profesional",
    "sugerencia": "Observación, sin derivación urgente",
    "detalle": "No es urgente derivar; observar la evolución de la lectura en los próximos meses.",
    "fuente": "Bui et al. (2025); Fan et al. (2024); Restrepo et al. (2026); Bassôa et al. (2021)"
  },
  {
    "id_sugerencia": "SUG_13",
    "categoria": "Dislexia",
    "nivel": "Señales moderadas",
    "contexto": "casa",
    "sugerencia": "Practicar conciencia fonológica",
    "detalle": "Trabajar juegos de sonidos, sílabas y rimas en casa, en sesiones cortas y frecuentes.",
    "fuente": "Bui et al. (2025); Fan et al. (2024); Restrepo et al. (2026); Bassôa et al. (2021)"
  },
  {
    "id_sugerencia": "SUG_14",
    "categoria": "Dislexia",
    "nivel": "Señales moderadas",
    "contexto": "escuela",
    "sugerencia": "Adaptar la carga lectora",
    "detalle": "Dar tiempo adicional en lecturas y evaluaciones, y aplicar apoyo multisensorial (visual, auditivo y táctil) en la enseñanza de la lectura.",
    "fuente": "Bui et al. (2025); Fan et al. (2024); Restrepo et al. (2026); Bassôa et al. (2021)"
  },
  {
    "id_sugerencia": "SUG_15",
    "categoria": "Dislexia",
    "nivel": "Señales moderadas",
    "contexto": "profesional",
    "sugerencia": "Evaluación con especialista en lectura",
    "detalle": "Se recomienda una evaluación con un profesional especializado en lectura o lenguaje.",
    "fuente": "Bui et al. (2025); Fan et al. (2024); Restrepo et al. (2026); Bassôa et al. (2021)"
  },
  {
    "id_sugerencia": "SUG_16",
    "categoria": "Dislexia",
    "nivel": "Señales marcadas",
    "contexto": "casa",
    "sugerencia": "Mantener la motivación lectora",
    "detalle": "Elegir materiales de interés del estudiante y evitar comparaciones con el ritmo de otros niños, cuidando su autoestima.",
    "fuente": "Bui et al. (2025); Fan et al. (2024); Restrepo et al. (2026); Bassôa et al. (2021)"
  },
  {
    "id_sugerencia": "SUG_17",
    "categoria": "Dislexia",
    "nivel": "Señales marcadas",
    "contexto": "escuela",
    "sugerencia": "Adaptaciones curriculares",
    "detalle": "Adaptar los materiales de lectura, otorgar tiempo adicional en evaluaciones y aplicar Adaptaciones Curriculares No Significativas (ACNS).",
    "fuente": "Bui et al. (2025); Fan et al. (2024); Restrepo et al. (2026); Bassôa et al. (2021)"
  },
  {
    "id_sugerencia": "SUG_18",
    "categoria": "Dislexia",
    "nivel": "Señales marcadas",
    "contexto": "profesional",
    "sugerencia": "Evaluación psicopedagógica prioritaria",
    "detalle": "Se recomienda una evaluación inmediata con psicopedagogía, fonoaudiología o lenguaje.",
    "fuente": "Bui et al. (2025); Fan et al. (2024); Restrepo et al. (2026); Bassôa et al. (2021)"
  },
  {
    "id_sugerencia": "SUG_19",
    "categoria": "Discalculia",
    "nivel": "Señales leves",
    "contexto": "casa",
    "sugerencia": "Practicar con material concreto",
    "detalle": "Usar juegos numéricos, bloques o regletas para trabajar cantidades antes de pasar a operaciones abstractas.",
    "fuente": "Filiz & Çelik (2025); Hakkarainen et al. (2025); Bugden et al. (2020); Carissa & Rahmat (2026)"
  },
  {
    "id_sugerencia": "SUG_20",
    "categoria": "Discalculia",
    "nivel": "Señales leves",
    "contexto": "escuela",
    "sugerencia": "Introducir material concreto en clase",
    "detalle": "Incorporar material manipulable antes de las operaciones escritas y dar tiempo adicional para resolver ejercicios.",
    "fuente": "Filiz & Çelik (2025); Hakkarainen et al. (2025); Bugden et al. (2020); Carissa & Rahmat (2026)"
  },
  {
    "id_sugerencia": "SUG_21",
    "categoria": "Discalculia",
    "nivel": "Señales leves",
    "contexto": "profesional",
    "sugerencia": "Observación, sin derivación urgente",
    "detalle": "No es urgente derivar; observar la evolución en los próximos meses.",
    "fuente": "Filiz & Çelik (2025); Hakkarainen et al. (2025); Bugden et al. (2020); Carissa & Rahmat (2026)"
  },
  {
    "id_sugerencia": "SUG_22",
    "categoria": "Discalculia",
    "nivel": "Señales moderadas",
    "contexto": "casa",
    "sugerencia": "Reforzar hechos aritméticos",
    "detalle": "Practicar sumas y tablas básicas con apoyos visuales y juegos, en sesiones breves y frecuentes.",
    "fuente": "Filiz & Çelik (2025); Hakkarainen et al. (2025); Bugden et al. (2020); Carissa & Rahmat (2026)"
  },
  {
    "id_sugerencia": "SUG_23",
    "categoria": "Discalculia",
    "nivel": "Señales moderadas",
    "contexto": "escuela",
    "sugerencia": "Aplicar el modelo concreto-representacional-abstracto (CRA)",
    "detalle": "Enseñar cada tema pasando primero por material concreto, luego representaciones gráficas y finalmente símbolos abstractos.",
    "fuente": "Filiz & Çelik (2025); Hakkarainen et al. (2025); Bugden et al. (2020); Carissa & Rahmat (2026)"
  },
  {
    "id_sugerencia": "SUG_24",
    "categoria": "Discalculia",
    "nivel": "Señales moderadas",
    "contexto": "profesional",
    "sugerencia": "Evaluación complementaria",
    "detalle": "Se recomienda una evaluación con un profesional especializado en matemática o aprendizaje, combinando resultados con la observación docente.",
    "fuente": "Filiz & Çelik (2025); Hakkarainen et al. (2025); Bugden et al. (2020); Carissa & Rahmat (2026)"
  },
  {
    "id_sugerencia": "SUG_25",
    "categoria": "Discalculia",
    "nivel": "Señales marcadas",
    "contexto": "casa",
    "sugerencia": "Apoyo constante sin generar frustración",
    "detalle": "Acompañar las tareas de matemática con paciencia, evitando cronometrar o comparar el ritmo con el de otros niños.",
    "fuente": "Filiz & Çelik (2025); Hakkarainen et al. (2025); Bugden et al. (2020); Carissa & Rahmat (2026)"
  },
  {
    "id_sugerencia": "SUG_26",
    "categoria": "Discalculia",
    "nivel": "Señales marcadas",
    "contexto": "escuela",
    "sugerencia": "Reforzar línea numérica y esquemas",
    "detalle": "Trabajar la línea numérica mental y esquemas visuales para problemas razonados, y aplicar Adaptaciones Curriculares No Significativas (ACNS).",
    "fuente": "Filiz & Çelik (2025); Hakkarainen et al. (2025); Bugden et al. (2020); Carissa & Rahmat (2026)"
  },
  {
    "id_sugerencia": "SUG_27",
    "categoria": "Discalculia",
    "nivel": "Señales marcadas",
    "contexto": "profesional",
    "sugerencia": "Evaluación psicopedagógica especializada",
    "detalle": "Se recomienda una evaluación inmediata con psicopedagogía o neuropsicología especializada en matemáticas.",
    "fuente": "Filiz & Çelik (2025); Hakkarainen et al. (2025); Bugden et al. (2020); Carissa & Rahmat (2026)"
  }
];

export const MOCK_HERRAMIENTAS_TCC: HerramientaTCCItem[] = [
  {
    "id_herramienta": "TCC_1",
    "categoria": "TDAH",
    "tecnica": "Entrenamiento en autoinstrucciones",
    "descripcion": "Enseña al niño a guiar su propia conducta con un diálogo interno de cuatro pasos: Paro – Pienso – Elijo – Actúo.",
    "aplicacion_practica": "Practicar primero en voz alta junto al adulto, luego en susurro y finalmente en silencio, ante situaciones de enojo o impulsividad.",
    "dirigido_a": "Estudiante, con guía de profesional, docente o padre/madre",
    "fuente": "Dahl et al. (2020)"
  },
  {
    "id_herramienta": "TCC_2",
    "categoria": "TDAH",
    "tecnica": "Economía de fichas / refuerzo positivo diferencial",
    "descripcion": "Sistema de puntos o estrellas por conductas objetivo específicas y observables (seguir una consigna, esperar el turno).",
    "aplicacion_practica": "Definir 3 a 5 conductas objetivo, registrar diariamente su ocurrencia y canjear los puntos por un reforzador acordado con antelación.",
    "dirigido_a": "Casa y escuela",
    "fuente": "Fabiano & Massetti (2005)"
  },
  {
    "id_herramienta": "TCC_3",
    "categoria": "TDAH",
    "tecnica": "Costo de respuesta con consecuencias naturales leves",
    "descripcion": "Retirar un privilegio pequeño y predecible ante una conducta problema, sin gritos ni castigo físico.",
    "aplicacion_practica": "Aplicarlo de forma inmediata, breve y consistente, explicando siempre cuál era la conducta esperada.",
    "dirigido_a": "Casa y escuela",
    "fuente": "Hosseinnia et al. (2024)"
  },
  {
    "id_herramienta": "TCC_4",
    "categoria": "TDAH",
    "tecnica": "Fragmentación de consignas",
    "descripcion": "Dividir instrucciones largas en pasos cortos y verificar la comprensión antes de continuar al siguiente.",
    "aplicacion_practica": "Dar una instrucción a la vez y confirmar con una pregunta breve ('¿qué vas a hacer primero?') antes de seguir.",
    "dirigido_a": "Escuela y casa",
    "fuente": "Fabiano & Massetti (2005)"
  },
  {
    "id_herramienta": "TCC_5",
    "categoria": "TDAH",
    "tecnica": "Psicoeducación a padres y docentes",
    "descripcion": "Explicar qué es el TDAH, cómo se manifiesta y por qué las estrategias conductuales funcionan mejor que el castigo.",
    "aplicacion_practica": "Sesiones breves o materiales escritos con ejemplos concretos tomados de la vida escolar y familiar del estudiante.",
    "dirigido_a": "Padres y docentes",
    "fuente": "Dahl et al. (2020)"
  },
  {
    "id_herramienta": "TCC_6",
    "categoria": "Dislexia",
    "tecnica": "Instrucción fonológica explícita y sistemática",
    "descripcion": "Enseñanza directa de la correspondencia entre sonidos y letras, con práctica estructurada y secuenciada de lo simple a lo complejo.",
    "aplicacion_practica": "Sesiones cortas y frecuentes, con retroalimentación inmediata sobre cada respuesta.",
    "dirigido_a": "Escuela, con refuerzo en casa",
    "fuente": "Brown-Chidsey et al. (2024)"
  },
  {
    "id_herramienta": "TCC_7",
    "categoria": "Dislexia",
    "tecnica": "Lectura repetida",
    "descripcion": "Releer el mismo texto breve varias veces seguidas para ganar velocidad y precisión.",
    "aplicacion_practica": "Elegir textos cortos y de interés del estudiante; registrar tiempo y errores en cada repetición para visualizar el progreso.",
    "dirigido_a": "Casa y escuela",
    "fuente": "Kuo et al. (2024)"
  },
  {
    "id_herramienta": "TCC_8",
    "categoria": "Dislexia",
    "tecnica": "Estrategias metacognitivas de comprensión",
    "descripcion": "Enseñar a autopreguntarse, resumir y predecir mientras se lee un texto.",
    "aplicacion_practica": "Modelar en voz alta el proceso de pensar mientras se lee, antes de pedir que el estudiante lo haga de forma autónoma.",
    "dirigido_a": "Escuela",
    "fuente": "Nihaya et al. (2023)"
  },
  {
    "id_herramienta": "TCC_9",
    "categoria": "Dislexia",
    "tecnica": "Manejo del componente emocional de la lectura",
    "descripcion": "Exposición gradual a la lectura y reestructuración de pensamientos negativos del tipo 'no sirvo para leer'.",
    "aplicacion_practica": "Empezar con textos fáciles y breves, celebrar avances pequeños y evitar exponer al estudiante a leer en voz alta frente a todo el grupo.",
    "dirigido_a": "Profesional y escuela",
    "fuente": "Holden et al. (2025)"
  },
  {
    "id_herramienta": "TCC_10",
    "categoria": "Discalculia",
    "tecnica": "Modelo concreto-representacional-abstracto (CRA)",
    "descripcion": "Enseñar cada concepto primero con material concreto, luego con dibujos o esquemas, y por último con símbolos abstractos.",
    "aplicacion_practica": "No avanzar a la etapa abstracta hasta que el estudiante domine la concreta y la representacional.",
    "dirigido_a": "Escuela y casa",
    "fuente": "Azhari et al. (2024)"
  },
  {
    "id_herramienta": "TCC_11",
    "categoria": "Discalculia",
    "tecnica": "Andamiaje progresivo (fading)",
    "descripcion": "Reducir gradualmente la ayuda (material concreto, pistas verbales) a medida que el estudiante gana autonomía.",
    "aplicacion_practica": "Registrar qué nivel de ayuda necesitó en cada sesión para calibrar el siguiente paso.",
    "dirigido_a": "Escuela, con seguimiento profesional",
    "fuente": "Cho et al. (2019)"
  },
  {
    "id_herramienta": "TCC_12",
    "categoria": "Discalculia",
    "tecnica": "Manejo de la ansiedad matemática",
    "descripcion": "Reestructurar pensamientos negativos sobre las matemáticas y reducir la presión de tiempo en tareas nuevas.",
    "aplicacion_practica": "Evitar cronometrar durante la fase de aprendizaje; separar siempre el error del valor personal del estudiante.",
    "dirigido_a": "Casa y escuela",
    "fuente": "Noël & Karagiannakis (2022)"
  },
  {
    "id_herramienta": "TCC_13",
    "categoria": "Discalculia",
    "tecnica": "Autorregistro de progreso",
    "descripcion": "El propio estudiante registra sus aciertos o las estrategias que usó en una tarea matemática.",
    "aplicacion_practica": "Completar una tabla simple de 'lo que hice bien hoy' después de cada sesión de práctica.",
    "dirigido_a": "Estudiante, con apoyo del profesional o docente",
    "fuente": "Reeve & Waldecker (2017)"
  }
];

export const MOCK_PERFILES_INTERPRETACION: PerfilInterpretacionItem[] = [
  {
    "id_perfil": "PERFIL_1",
    "categoria": "TDAH",
    "perfil_resultado": "Inatencion_predominante_leve",
    "criterio_clasificacion": "Puntaje elevado solo en la subescala de inatención (p. ej. ADHD-RS-5 o Vanderbilt), sin impairment marcado en CPC/IRS.",
    "interpretacion_app": "Atención sostenida limitada, sin afectación funcional grave.",
    "plan_profesional": "Monitorear cada 4-6 semanas; priorizar objetivos observables de atención antes de escalar la evaluación.",
    "plan_padres": "Rutinas breves, una instrucción por vez, refuerzo positivo específico cuando el niño la cumple.",
    "plan_escuela_institucion": "Ubicación cercana al docente, consignas fragmentadas, recordatorios visuales.",
    "fuente": "Fabiano & Massetti (2005)"
  },
  {
    "id_perfil": "PERFIL_2",
    "categoria": "TDAH",
    "perfil_resultado": "Inatencion_predominante_moderada",
    "criterio_clasificacion": "Puntaje alto en inatención + impairment leve o moderado en al menos un contexto (CPC/IRS).",
    "interpretacion_app": "Inatención con impacto inicial en el rendimiento escolar.",
    "plan_profesional": "Aplicar CPC/IRS si aún no se hizo; considerar CHEXI para perfilar funciones ejecutivas específicas.",
    "plan_padres": "Reducir distractores en el espacio de tareas; usar un sistema 'Primero–Después'.",
    "plan_escuela_institucion": "Fragmentar tareas, pausas breves, registrar el impacto para compartirlo con la familia.",
    "fuente": "Navarro-Soria et al. (2025)"
  },
  {
    "id_perfil": "PERFIL_3",
    "categoria": "TDAH",
    "perfil_resultado": "Hiperactividad_impulsividad_predominante_leve",
    "criterio_clasificacion": "Puntaje elevado solo en la subescala de hiperactividad-impulsividad, sin impairment marcado.",
    "interpretacion_app": "Inquietud e impulsividad presentes, sin impacto funcional grave.",
    "plan_profesional": "Observar evolución; introducir entrenamiento en autoinstrucciones de forma preventiva.",
    "plan_padres": "Practicar la espera de turnos en juegos cortos y estructurados.",
    "plan_escuela_institucion": "Permitir movimiento estructurado (encargos breves) y normas claras formuladas en positivo.",
    "fuente": "Dahl et al. (2020)"
  },
  {
    "id_perfil": "PERFIL_4",
    "categoria": "TDAH",
    "perfil_resultado": "Hiperactividad_impulsividad_predominante_moderada_marcada",
    "criterio_clasificacion": "Puntaje alto en hiperactividad-impulsividad + impairment en más de un contexto.",
    "interpretacion_app": "Impulsividad e hiperactividad con impacto en al menos un contexto (aula y/o casa).",
    "plan_profesional": "Aplicar entrenamiento en autorregulación (p. ej. semáforo de calma); considerar evaluación con psicología clínica.",
    "plan_padres": "Psicoeducación sobre TDAH; usar en casa las mismas señales de calma que en la escuela.",
    "plan_escuela_institucion": "Supervisión constante durante tareas, pausas activas frecuentes, espacio de regulación emocional en el aula.",
    "fuente": "Hosseinnia et al. (2024)"
  },
  {
    "id_perfil": "PERFIL_5",
    "categoria": "TDAH",
    "perfil_resultado": "Perfil_mixto_marcado",
    "criterio_clasificacion": "Puntajes altos en ambas subescalas + impairment claro en dos o más contextos.",
    "interpretacion_app": "Síntomas elevados en ambos dominios (inatención e hiperactividad-impulsividad) con afectación funcional.",
    "plan_profesional": "Sugerir evaluación integral con psicología clínica, educativa o neuropsicología.",
    "plan_padres": "Mantener las rutinas y señales usadas en la escuela; coordinar avances de forma semanal.",
    "plan_escuela_institucion": "Adaptaciones de aula sostenidas + seguimiento coordinado con la familia.",
    "fuente": "Attention-Deficit & Disorder (2000)"
  },
  {
    "id_perfil": "PERFIL_6",
    "categoria": "TDAH",
    "perfil_resultado": "Discrepancia_entre_informantes",
    "criterio_clasificacion": "Diferencia relevante entre el puntaje de padres y de docentes en la misma escala.",
    "interpretacion_app": "Padres y docentes reportan perfiles claramente distintos.",
    "plan_profesional": "Entrevistar a ambos informantes; explorar si el contexto (aula vs. casa) explica la diferencia antes de concluir.",
    "plan_padres": "Compartir con la escuela observaciones concretas de la conducta en casa.",
    "plan_escuela_institucion": "Comparar el contexto de aula con el reporte familiar antes de tomar decisiones curriculares.",
    "fuente": "Makransky & Bilenberg (2014)"
  },
  {
    "id_perfil": "PERFIL_7",
    "categoria": "Dislexia",
    "perfil_resultado": "Riesgo_fonologico",
    "criterio_clasificacion": "EDDIX o PROLEC-R bajos específicamente en tareas de conciencia fonológica.",
    "interpretacion_app": "Dificultades en conciencia fonológica y en la decodificación inicial.",
    "plan_profesional": "Iniciar intervención fonológica estructurada; reevaluar en 6-8 semanas.",
    "plan_padres": "Juegos de sonidos, sílabas y rimas en casa, en sesiones cortas y frecuentes.",
    "plan_escuela_institucion": "Enseñanza explícita y sistemática de la correspondencia grafema-fonema.",
    "fuente": "Ramos-Carrillo & Moreno-Pérez (2023)"
  },
  {
    "id_perfil": "PERFIL_8",
    "categoria": "Dislexia",
    "perfil_resultado": "Riesgo_decodificacion",
    "criterio_clasificacion": "PROLEC-R bajo específicamente en lectura de pseudopalabras.",
    "interpretacion_app": "Dificultad para decodificar palabras nuevas o inventadas (ruta fonológica).",
    "plan_profesional": "Reforzar la ruta fonológica de lectura; aplicar Sicole-R para un perfil más detallado si persiste.",
    "plan_padres": "Lectura acompañada breve, sin presión de tiempo ni corrección constante.",
    "plan_escuela_institucion": "Apoyo multisensorial (visual, auditivo, táctil) en la enseñanza de la decodificación.",
    "fuente": "Jiménez et al. (2024)"
  },
  {
    "id_perfil": "PERFIL_9",
    "categoria": "Dislexia",
    "perfil_resultado": "Fluidez_baja",
    "criterio_clasificacion": "RAN lento junto con baja velocidad lectora en PROLEC-R.",
    "interpretacion_app": "Lectura lenta y poco automatizada para el curso del estudiante.",
    "plan_profesional": "Focalizar la intervención en lectura repetida y entrenamiento de velocidad.",
    "plan_padres": "Practicar lectura repetida de textos breves y de interés del estudiante.",
    "plan_escuela_institucion": "Dar tiempo adicional en lectura y evaluaciones.",
    "fuente": "Cabañas-Tinajero et al. (2025)"
  },
  {
    "id_perfil": "PERFIL_10",
    "categoria": "Dislexia",
    "perfil_resultado": "Comprension_lectora_afectada",
    "criterio_clasificacion": "PROLEC-R bajo en comprensión pese a una decodificación aceptable.",
    "interpretacion_app": "La comprensión está por debajo de lo esperado aunque la lectura mecánica sea adecuada.",
    "plan_profesional": "Trabajar estrategias metacognitivas de comprensión (autopreguntas, resumen, predicción).",
    "plan_padres": "Conversar sobre lo leído; hacer 2-3 preguntas simples después de cada lectura.",
    "plan_escuela_institucion": "Enseñanza explícita de estrategias de comprensión lectora, modelada en voz alta.",
    "fuente": "Kuo et al. (2024)"
  },
  {
    "id_perfil": "PERFIL_11",
    "categoria": "Dislexia",
    "perfil_resultado": "Perfil_mixto_marcado",
    "criterio_clasificacion": "Puntajes bajos en varias pruebas y persistencia de la dificultad pese a un primer apoyo escalonado.",
    "interpretacion_app": "Compromiso simultáneo de varios procesos lectores, con persistencia de la dificultad.",
    "plan_profesional": "Sugerir evaluación psicopedagógica o de lenguaje ampliada.",
    "plan_padres": "Mantener la motivación lectora; evitar comparaciones con el ritmo de otros niños.",
    "plan_escuela_institucion": "Aplicar Adaptaciones Curriculares No Significativas (ACNS).",
    "fuente": "Holden et al. (2025)"
  },
  {
    "id_perfil": "PERFIL_12",
    "categoria": "Dislexia",
    "perfil_resultado": "Requiere_evaluacion_ampliada",
    "criterio_clasificacion": "Discrepancia entre un test de cribado (EDDIX o gamificado) y una batería más completa (PROLEC-R o Sicole-R).",
    "interpretacion_app": "Resultados no concluyentes entre instrumentos.",
    "plan_profesional": "Aplicar la batería completa antes de decidir; no cerrar el caso con un solo cribado.",
    "plan_padres": "Continuar observando y registrar situaciones concretas de lectura y escritura.",
    "plan_escuela_institucion": "Postergar decisiones curriculares mayores hasta contar con la evaluación ampliada.",
    "fuente": "Holden et al. (2025)"
  },
  {
    "id_perfil": "PERFIL_13",
    "categoria": "Discalculia",
    "perfil_resultado": "Riesgo_sentido_numerico",
    "criterio_clasificacion": "Bajo desempeño en discriminación de cantidades (IPAM o CBM Numeracy).",
    "interpretacion_app": "Dificultad para comparar y estimar cantidades.",
    "plan_profesional": "Trabajar sentido numérico antes de avanzar a operaciones formales.",
    "plan_padres": "Juegos con cantidades y comparaciones cotidianas (más/menos, mayor/menor).",
    "plan_escuela_institucion": "Usar material concreto antes de pasar a operaciones abstractas.",
    "fuente": "Jiménez et al. (2020)"
  },
  {
    "id_perfil": "PERFIL_14",
    "categoria": "Discalculia",
    "perfil_resultado": "Riesgo_calculo_procedimental",
    "criterio_clasificacion": "BM-PROMA o KeyMath-3 bajo en operaciones básicas.",
    "interpretacion_app": "Errores persistentes y lentitud en los procedimientos de cálculo.",
    "plan_profesional": "Aplicar el modelo concreto-representacional-abstracto (CRA) de forma sistemática.",
    "plan_padres": "Practicar hechos aritméticos con apoyos visuales, en sesiones breves y frecuentes.",
    "plan_escuela_institucion": "Reforzar los procedimientos paso a paso, con andamiaje que se retira gradualmente.",
    "fuente": "Azhari et al. (2024)"
  },
  {
    "id_perfil": "PERFIL_15",
    "categoria": "Discalculia",
    "perfil_resultado": "Riesgo_razonamiento_matematico",
    "criterio_clasificacion": "Bajo desempeño en problemas verbales (BM-PROMA/KeyMath-3) con cálculo básico conservado.",
    "interpretacion_app": "Dificultad para traducir problemas verbales a operaciones matemáticas.",
    "plan_profesional": "Enseñar esquemas explícitos de resolución de problemas, paso a paso.",
    "plan_padres": "Plantear problemas cotidianos sencillos en casa (compras, repartos).",
    "plan_escuela_institucion": "Modelar el razonamiento en voz alta antes de pedir autonomía al estudiante.",
    "fuente": "Noël & Karagiannakis (2022)"
  },
  {
    "id_perfil": "PERFIL_16",
    "categoria": "Discalculia",
    "perfil_resultado": "Perfil_mixto_marcado",
    "criterio_clasificacion": "Puntajes bajos simultáneamente en sentido numérico, cálculo y razonamiento.",
    "interpretacion_app": "Compromiso amplio de los procesos matemáticos evaluados.",
    "plan_profesional": "Sugerir evaluación psicopedagógica o neuropsicológica especializada.",
    "plan_padres": "Acompañar las tareas con paciencia, evitando cronometrar o comparar el ritmo con otros niños.",
    "plan_escuela_institucion": "Aplicar Adaptaciones Curriculares No Significativas (ACNS) + seguimiento sostenido en el tiempo.",
    "fuente": "Haberstroh (2019)"
  },
  {
    "id_perfil": "PERFIL_17",
    "categoria": "Discalculia",
    "perfil_resultado": "Posible_barrera_linguistica_o_escolar",
    "criterio_clasificacion": "Bajo desempeño en un test estándar, pero mejor desempeño en evaluación dinámica (con andamiaje).",
    "interpretacion_app": "El bajo desempeño puede deberse más al contexto lingüístico o a oportunidades de aprendizaje que a discalculia.",
    "plan_profesional": "Priorizar la evaluación dinámica y descartar factores de idioma o escolaridad antes de concluir un perfil de riesgo.",
    "plan_padres": "Reforzar en casa el idioma de instrucción si es distinto a la lengua materna del estudiante.",
    "plan_escuela_institucion": "Revisar la continuidad de la enseñanza matemática recibida por el estudiante.",
    "fuente": "Cho et al. (2019)"
  }
];

export const MOCK_REGLAS_GENERALES: ReglaGeneralItem[] = [
  {
    "id_regla": "REG_GEN_1",
    "categoria": "General",
    "regla": "Un solo test no es suficiente",
    "condicion": "Ningún instrumento aislado confirma o descarta TDAH, dislexia o discalculia.",
    "que_hace_la_app": "Marcar cualquier interpretación basada en un solo test como preliminar y sugerir cargar al menos un segundo instrumento de otra capa (síntomas, afectación funcional o perfil cognitivo/académico).",
    "fuente": "Fabiano & Massetti (2005); Holden et al. (2025); Haberstroh (2019)"
  },
  {
    "id_regla": "REG_GEN_2",
    "categoria": "TDAH",
    "regla": "Discrepancia entre informantes",
    "condicion": "El puntaje de padres y de docentes difiere de forma relevante en la misma escala.",
    "que_hace_la_app": "No promediar sin más: marcar la discrepancia, sugerir entrevistar a ambos informantes y explorar si el contexto (aula vs. casa) explica la diferencia.",
    "fuente": "Makransky & Bilenberg (2014)"
  },
  {
    "id_regla": "REG_GEN_3",
    "categoria": "Dislexia",
    "regla": "Diversidad de modelos de identificación",
    "condicion": "Distintos instrumentos de dislexia parten de marcos algo distintos (fonológico, doble déficit, respuesta a la intervención).",
    "que_hace_la_app": "Preferir instrumentos con puntos de corte explícitos y complementarlos con observación e historial escolar antes de emitir un perfil.",
    "fuente": "Holden et al. (2025)"
  },
  {
    "id_regla": "REG_GEN_4",
    "categoria": "Discalculia",
    "regla": "No existe una prueba única suficiente",
    "condicion": "Ningún test cubre por sí solo sentido numérico, cálculo y razonamiento matemático.",
    "que_hace_la_app": "Combinar al menos dos instrumentos de dominios distintos antes de generar un perfil mixto o marcado.",
    "fuente": "Haberstroh (2019); Azhari et al. (2024)"
  },
  {
    "id_regla": "REG_GEN_5",
    "categoria": "General",
    "regla": "Ajustar puntos de corte al contexto boliviano/latinoamericano",
    "condicion": "Ninguno de los instrumentos cargados tiene baremos propios de Bolivia.",
    "que_hace_la_app": "Mostrar siempre una nota de que los puntos de corte deben revisarse y validarse localmente (piloto en el colegio, criterio del psicólogo escolar).",
    "fuente": "Ramirez et al. (2026); Jiménez & García (2026)"
  },
  {
    "id_regla": "REG_GEN_6",
    "categoria": "General",
    "regla": "Posible barrera lingüística o de escolaridad",
    "condicion": "Bajo desempeño en un test estándar en un estudiante con el castellano como segunda lengua o con escolaridad irregular.",
    "que_hace_la_app": "Priorizar, cuando esté disponible, una evaluación dinámica o con andamiaje antes de concluir un perfil de riesgo.",
    "fuente": "Cho et al. (2019)"
  },
  {
    "id_regla": "REG_GEN_7",
    "categoria": "General",
    "regla": "El resultado es una hipótesis de necesidad educativa, no un diagnóstico",
    "condicion": "Siempre.",
    "que_hace_la_app": "El plan generado debe presentarse como apoyo a la decisión del profesional, nunca como una etiqueta diagnóstica automática.",
    "fuente": "Fabiano & Massetti (2005); Holden et al. (2025); Haberstroh (2019)"
  }
];

export const MOCK_REFERENCIAS_CIENTIFICAS: ReferenciaCientificaItem[] = [
  {
    "id": "REF_TDAH_01",
    "categoria": "TDAH",
    "autores": "Pappas, D. N.",
    "ano": 2006,
    "titulo": "ADHD Rating Scale-IV: Checklists, Norms, and Clinical Interpretation",
    "revista": "Journal of Psychoeducational Assessment, 24, 172–178",
    "doi": "10.1177/0734282905285792",
    "resumen": "Describe la escala de 18 ítems (inatención e hiperactividad-impulsividad) con versiones para docente y padre/madre, base de la estructura de cribado cerrada en ALTIUS."
  },
  {
    "id": "REF_TDAH_02",
    "categoria": "TDAH",
    "autores": "Wolraich, M., Lambert, W., Doffing, M. A., et al.",
    "ano": 2003,
    "titulo": "Psychometric properties of the Vanderbilt ADHD diagnostic parent rating scale in a referred population",
    "revista": "Journal of Pediatric Psychology, 28(8), 559–567",
    "doi": "10.1093/jpepsy/jsg046",
    "resumen": "Aporta evidencia psicométrica de la escala parental Vanderbilt de TDAH ampliamente validada en la práctica clínica y escolar."
  },
  {
    "id": "REF_TDAH_03",
    "categoria": "TDAH",
    "autores": "Makransky, G., & Bilenberg, N.",
    "ano": 2014,
    "titulo": "Psychometric Properties of the Parent and Teacher ADHD Rating Scale (ADHD-RS)",
    "revista": "Assessment, 21, 694–705",
    "doi": "10.1177/1073191114535242",
    "resumen": "Muestra que padres y docentes aportan perspectivas complementarias no intercambiables, sustentando la necesidad de multi-informantes."
  },
  {
    "id": "REF_TDAH_04",
    "categoria": "TDAH",
    "autores": "Hall, C., Guo, B., Valentine, A., et al.",
    "ano": 2020,
    "titulo": "The Validity of the SNAP-IV in Children Displaying ADHD Symptoms",
    "revista": "Assessment, 27, 1258–1271",
    "doi": "10.1177/1073191119842255",
    "resumen": "Confirma la eficacia del SNAP-IV como herramienta de cribado sensible para la identificación temprana en el entorno escolar."
  },
  {
    "id": "REF_TDAH_05",
    "categoria": "TDAH",
    "autores": "Navarro-Soria, I., Molina-Torres, J., Healey, D., & Costa-López, B.",
    "ano": 2025,
    "titulo": "Spanish adaptation and psychometric evidence of the teacher-report version of the Children’s Problems Checklist",
    "revista": "Cogent Psychology, 12",
    "doi": "10.1080/23311908.2025.2571276",
    "resumen": "Adaptación al español para medir afectación funcional asociada a síntomas de TDAH desde la mirada docente en aula."
  },
  {
    "id": "REF_TDAH_06",
    "categoria": "TDAH",
    "autores": "Fabiano, G. A., & Massetti, T.",
    "ano": 2005,
    "titulo": "A comprehensive meta-analysis of behavioral treatments for ADHD",
    "revista": "Clinical Psychology Review, 29(2), 129–140",
    "doi": "10.1016/j.cpr.2008.11.001",
    "resumen": "Evidencia sobre la efectividad de la economía de fichas, refuerzo contingente y adaptaciones de aula en estudiantes con TDAH."
  },
  {
    "id": "REF_DISL_01",
    "categoria": "Dislexia",
    "autores": "Defior, S., & Serrano, F.",
    "ano": 2014,
    "titulo": "La lectura y la escritura en español: procesos y dificultades de aprendizaje",
    "revista": "Revista de Logopedia, Foniatría y Audiología, 34(3), 112–122",
    "doi": "10.1016/j.rlfa.2014.06.002",
    "resumen": "Marco de evaluación y detección de dislexia evolutiva en ortografía transparente (español), centrado en conciencia fonológica y velocidad de decodificación."
  },
  {
    "id": "REF_DISL_02",
    "categoria": "Dislexia",
    "autores": "Holden, C., et al.",
    "ano": 2025,
    "titulo": "Multidimensional models for early dyslexia identification: Combining behavioral screening with phonological tasks",
    "revista": "Annals of Dyslexia, 75, 45–62",
    "doi": "10.1007/s11881-024-00312-x",
    "resumen": "Sustenta la integración de checklists observacionales de aula con pruebas objetivas de lectura y denominación rápida (RAN)."
  },
  {
    "id": "REF_DISL_03",
    "categoria": "Dislexia",
    "autores": "Bassôa, A., Costa, A. C., Toazza, R., & Buchweitz, A.",
    "ano": 2021,
    "titulo": "Scale for developmental dyslexia screening: evidence of validity and reliability",
    "revista": "CoDAS, 33(2), e20200042",
    "doi": "10.1590/2317-1782/20202020042",
    "resumen": "Consistencia interna y validez de contenido de escalas de observación docente para la detección de riesgo de dislexia."
  },
  {
    "id": "REF_DISL_04",
    "categoria": "Dislexia",
    "autores": "Cuetos, F., Rodríguez, B., Ruano, E., & Arribas, D.",
    "ano": 2014,
    "titulo": "PROLEC-R: Batería de Evaluación de los Procesos Lectores, Revisada",
    "revista": "Madrid: TEA Ediciones",
    "doi": "TEA-PROLEC-R-2014",
    "resumen": "Instrumento de referencia en lengua española para evaluar procesos lectores específicos (letras, palabras, pseudopalabras, sintaxis y comprensión)."
  },
  {
    "id": "REF_DISC_01",
    "categoria": "Discalculia",
    "autores": "Butterworth, B.",
    "ano": 2019,
    "titulo": "Dyscalculia: From Science to Education",
    "revista": "Routledge, London & New York",
    "doi": "10.4324/9781315538258",
    "resumen": "Fundamento neurocognitivo del sentido numérico innato y la dificultad específica en subitización, recta numérica y valor posicional."
  },
  {
    "id": "REF_DISC_02",
    "categoria": "Discalculia",
    "autores": "Filiz, T., & Çelik, A.",
    "ano": 2025,
    "titulo": "A Psychometric Analysis of The Mathematics Learning Disability Screening Scale Developed Through DSM-5",
    "revista": "Kastamonu Eğitim Dergisi",
    "doi": "10.24106/kefdergi.1797602",
    "resumen": "Estructura trifactorial del cribado matemático: sentido de magnitud numérica, fluidez de cálculo y resolución de problemas verbales."
  },
  {
    "id": "REF_DISC_03",
    "categoria": "Discalculia",
    "autores": "Bugden, S., Peters, L., Nosworthy, N., & Ansari, D.",
    "ano": 2020,
    "titulo": "Identifying Children with Persistent Developmental Dyscalculia from Magnitude Processing Tasks",
    "revista": "Mind, Brain, and Education, 14(1), 40–51",
    "doi": "10.1111/mbe.12268",
    "resumen": "Validez predictiva de tareas rápidas de procesamiento de magnitudes numéricas simbólicas y no simbólicas."
  },
  {
    "id": "REF_DISC_04",
    "categoria": "Discalculia",
    "autores": "Grégoire, J., Noël, M. P., & Van Nieuwenhoven, C.",
    "ano": 2015,
    "titulo": "TEDI-MATH: Test para el diagnóstico de las competencias básicas en matemáticas",
    "revista": "Madrid: TEA Ediciones",
    "doi": "TEA-TEDIMATH-2015",
    "resumen": "Evaluación exhaustiva de las competencias numéricas básicas (conteo, numeración, operaciones lógicas y cálculo con apoyo concreto)."
  },
  {
    "id": "REF_TCC_01",
    "categoria": "TCC y Pedagogía",
    "autores": "Dahl, C., et al.",
    "ano": 2020,
    "titulo": "Self-instructional training and executive function interventions in primary school children",
    "revista": "Journal of Applied School Psychology, 36(3), 241–265",
    "doi": "10.1080/15377903.2020.1749202",
    "resumen": "Demuestra la efectividad del método de autoinstrucciones internas (Paro-Pienso-Elijo-Actúo) para la autorregulación en tareas escolares."
  },
  {
    "id": "REF_TCC_02",
    "categoria": "TCC y Pedagogía",
    "autores": "Jiménez, J. E., & García, E.",
    "ano": 2026,
    "titulo": "Adaptaciones curriculares y cribado psicopedagógico en el contexto escolar latinoamericano e intercultural",
    "revista": "Revista Iberoamericana de Educación Especial, 18, 55–74",
    "doi": "10.5944/rie.18.2026.4102",
    "resumen": "Recomendaciones metodológicas para ajustar baremos y criterios diagnósticos en poblaciones con diversidad lingüística y curricular."
  }
];

export const MOCK_RECURSOS_DERIVACION: RecursoDerivacion[] = [
  {
    nombre: 'Gabinete Psicopedagógico Escolar',
    tipo: 'Servicio Institucional',
    descripcion: 'Espacio de primer contacto en la propia unidad educativa para realizar adaptaciones curriculares y seguimiento de aula.',
    ubicacion: 'Unidad Educativa (Nivel local)',
    publicoObjetivo: 'Estudiantes, docentes de aula y padres de familia'
  },
  {
    nombre: 'Centros de Educación Especial y Apoyo Pedagógico (CEEs)',
    tipo: 'Servicio Público Departamental',
    descripcion: 'Instancias dependientes de la Dirección Departamental de Educación (DDE) para evaluaciones psicopedagógicas integrales y orientación a maestros de aula regular.',
    ubicacion: 'Departamental (La Paz, Cochabamba, Santa Cruz y resto del país)',
    publicoObjetivo: 'Comunidad educativa general y derivaciones escolares'
  },
  {
    nombre: 'Servicio de Neurología Pediátrica y Neuropsicología',
    tipo: 'Atención Médica / Hospitalaria',
    descripcion: 'Evaluación neurológica y confirmación diagnóstica médica cuando se evidencian signos clínicos de alta intensidad o comorbilidad relevante.',
    ubicacion: 'Hospitales de 3er Nivel y Centros Médicos Especializados',
    publicoObjetivo: 'Casos con señales relevantes o sospecha clínica neurológica'
  },
  {
    nombre: 'Centros Municipales de Atención Psicológica Integral',
    tipo: 'Servicio Municipal / Comunitario',
    descripcion: 'Atención accesible para orientación familiar, pautas de crianza positiva y apoyo psicoemocional a padres, madres y tutores.',
    ubicacion: 'Gobiernos Autónomos Municipales (GAM)',
    publicoObjetivo: 'Familias, niños, niñas y adolescentes'
  }
];
