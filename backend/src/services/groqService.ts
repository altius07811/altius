export interface AnalisisPedagogicoIA {
  resumen_cualitativo: string;
  estrategias_aula: { titulo: string; descripcion: string }[];
  estrategias_casa: { titulo: string; descripcion: string }[];
  recomendacion_derivacion: string;
  modelo_utilizado: string;
}

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

export const generarSintesisPedagogicaIA = async (
  estudiante_id: string,
  rol: string,
  resultados: Array<{ categoria: string; puntaje_total: number; nivel: string }>,
  observaciones?: string
): Promise<AnalisisPedagogicoIA | null> => {
  const apiKey = process.env.GROQ_API_KEY;
  const model = process.env.GROQ_MODEL || 'groq/compound';

  if (!apiKey || apiKey.startsWith('gsk_tu_api')) {
    console.warn('Groq API Key no configurada. Omitiendo generación de IA.');
    return null;
  }

  const resumenNiveles = resultados
    .map((r) => `- ${r.categoria}: ${r.nivel} (Puntaje: ${r.puntaje_total})`)
    .join('\n');

  const prompt = `Eres un Psicopedagogo Consultor Senior y experto en Educación Inclusiva para unidades educativas en Bolivia.
Analiza la siguiente observación pedagógica preliminar realizada por un ${rol || 'docente'} para el estudiante con código "${estudiante_id}":

NIVELES DE SEÑAL DETECTADOS:
${resumenNiveles}

OBSERVACIONES CUALITATIVAS INGRESADAS EN EL AULA/HOGAR:
"${observaciones || 'No se ingresaron observaciones adicionales.'}"

INSTRUCCIONES ÉTICAS Y TÉCNICAS:
1. Recuerda que esto NO es un diagnóstico clínico. Es una orientación formativa y pedagógica.
2. Redacta de forma empática, respetuosa, constructiva y aplicable a la realidad escolar boliviana.
3. Devuelve EXCLUSIVAMENTE un objeto JSON válido con la siguiente estructura (sin texto adicional fuera del JSON):

{
  "resumen_cualitativo": "Breve síntesis de 2-3 oraciones sobre el perfil de aprendizaje observado.",
  "estrategias_aula": [
    { "titulo": "Nombre de la estrategia didáctica", "descripcion": "Explicación práctica paso a paso para el docente." },
    { "titulo": "Nombre de la segunda estrategia", "descripcion": "Explicación práctica." }
  ],
  "estrategias_casa": [
    { "titulo": "Nombre de la pauta familiar", "descripcion": "Recomendación cotidiana para padres/madres." },
    { "titulo": "Nombre de la segunda pauta", "descripcion": "Recomendación cotidiana." }
  ],
  "recomendacion_derivacion": "Pauta clara sobre cuándo acudir al gabinete psicopedagógico escolar o centro de salud integral."
}`;

  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: 'system',
            content: 'Eres un asistente psicopedagógico experto en educación inclusiva. Respondes exclusivamente en formato JSON válido.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 800
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Error en respuesta de Groq API:', response.status, errText);
      return null;
    }

    const data = await response.json();
    const rawContent = data.choices?.[0]?.message?.content?.trim() || '';

    // Extraer JSON si viene rodeado de markdown ```json ... ```
    let jsonStr = rawContent;
    if (jsonStr.includes('```')) {
      const matches = jsonStr.match(/```(?:json)?([\s\S]*?)```/);
      if (matches && matches[1]) {
        jsonStr = matches[1].trim();
      }
    }

    const parsed = JSON.parse(jsonStr);
    return {
      resumen_cualitativo: parsed.resumen_cualitativo || 'Perfil de aprendizaje evaluado con éxito.',
      estrategias_aula: Array.isArray(parsed.estrategias_aula) ? parsed.estrategias_aula : [],
      estrategias_casa: Array.isArray(parsed.estrategias_casa) ? parsed.estrategias_casa : [],
      recomendacion_derivacion: parsed.recomendacion_derivacion || 'Orientación preventiva recomendada.',
      modelo_utilizado: model
    };
  } catch (error: any) {
    console.error('Error al generar síntesis con Groq:', error.message);
    return null;
  }
};

export const responderConsultaPedagogicaIA = async (
  pregunta: string,
  contexto: {
    estudiante_id: string;
    resultados: Array<{ categoria: string; nivel: string }>;
    observaciones?: string;
  }
): Promise<{ respuesta: string; modelo: string }> => {
  const apiKey = process.env.GROQ_API_KEY;
  const model = process.env.GROQ_MODEL || 'groq/compound';

  if (!apiKey || apiKey.startsWith('gsk_tu_api')) {
    return {
      respuesta: 'El servicio de IA no se encuentra disponible temporalmente. Consulta los recursos pedagógicos generales de la plataforma.',
      modelo: 'offline'
    };
  }

  const resumen = contexto.resultados.map((r) => `${r.categoria}: ${r.nivel}`).join(', ');

  const prompt = `Eres el Asistente Psicopedagógico de ALTIUS para Bolivia.
Contexto de la evaluación:
- Código de estudiante: ${contexto.estudiante_id}
- Niveles detectados: ${resumen}
- Observaciones previas: ${contexto.observaciones || 'Ninguna'}

Pregunta del usuario:
"${pregunta}"

Responde de forma clara, cálida, concisa (máximo 2 párrafos) y con recomendaciones pedagógicas prácticas aplicables en el aula o en el hogar.`;

  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: 'system',
            content: 'Eres un consultor psicopedagógico empático, claro y pedagógicamente riguroso en Bolivia.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.5,
        max_tokens: 400
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const data = await response.json();
    return {
      respuesta: data.choices?.[0]?.message?.content || 'No fue posible generar una respuesta en este momento.',
      modelo: model
    };
  } catch (error: any) {
    console.error('Error en consulta Groq:', error);
    return {
      respuesta: 'Ocurrió un inconveniente al consultar con el asistente IA. Por favor intenta de nuevo en unos momentos.',
      modelo: 'error'
    };
  }
};
