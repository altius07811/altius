import { PreguntaEncuesta, RecursoDerivacion, SugerenciaItem, TestProfesionalItem } from '../types';

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
