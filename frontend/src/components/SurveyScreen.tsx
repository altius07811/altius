import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  User, 
  BookOpen, 
  Sparkles,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { PreguntaEncuesta, RespuestaUsuario, RolEncuestado } from '../types';

interface SurveyScreenProps {
  preguntas: PreguntaEncuesta[];
  rolSeleccionado: RolEncuestado;
  studentCode: string;
  loading: boolean;
  onSubmit: (respuestas: RespuestaUsuario[]) => Promise<void>;
  onBack: () => void;
}

export const SurveyScreen: React.FC<SurveyScreenProps> = ({
  preguntas,
  studentCode,
  loading,
  onSubmit,
  onBack
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [respuestas, setRespuestas] = useState<Record<string, { opcionId?: string; texto: string; peso: number }>>({});
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (loading || preguntas.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <Loader2 className="w-8 h-8 text-altius-600 animate-spin mx-auto mb-3" />
        <p className="text-sm font-medium text-slate-600">Cargando las preguntas pedagógicas...</p>
      </div>
    );
  }

  const currentPregunta = preguntas[currentIndex];
  const totalPreguntas = preguntas.length;
  const progressPercent = Math.round(((currentIndex + 1) / totalPreguntas) * 100);

  const currentAnswer = respuestas[currentPregunta.id_pregunta];

  const handleSelectOption = (opcionId: string, texto: string, peso: number) => {
    setRespuestas((prev) => ({
      ...prev,
      [currentPregunta.id_pregunta]: {
        opcionId,
        texto,
        peso
      }
    }));
    setErrorMsg(null);
  };

  const handleTextChange = (text: string) => {
    setRespuestas((prev) => ({
      ...prev,
      [currentPregunta.id_pregunta]: {
        texto: text,
        peso: 0
      }
    }));
    setErrorMsg(null);
  };

  const handleNext = () => {
    if (currentPregunta.tipo_pregunta === 'opcion_multiple' && !currentAnswer?.opcionId) {
      setErrorMsg('Por favor selecciona una opción para continuar.');
      return;
    }

    if (currentIndex < totalPreguntas - 1) {
      setCurrentIndex(currentIndex + 1);
      setErrorMsg(null);
    } else {
      handleFinalSubmit();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setErrorMsg(null);
    } else {
      onBack();
    }
  };

  const handleFinalSubmit = async () => {
    setSubmitting(true);
    setErrorMsg(null);

    const payload: RespuestaUsuario[] = preguntas.map((p) => {
      const resp = respuestas[p.id_pregunta];
      return {
        id_pregunta: p.id_pregunta,
        categoria: p.categoria,
        id_opcion: resp?.opcionId,
        texto_opcion: resp?.texto,
        respuesta: resp?.texto || '',
        peso: resp?.peso || 0
      };
    });

    try {
      await onSubmit(payload);
    } catch {
      setErrorMsg('Ocurrió un inconveniente al procesar las respuestas. Reintenta por favor.');
      setSubmitting(false);
    }
  };

  const targetRole = currentPregunta.rol || 'docente';

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-10 fade-in">
      {/* Header Info & Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">Estudiante:</span>
            <span className="bg-slate-200/70 text-slate-700 px-2 py-0.5 rounded font-mono">
              {studentCode}
            </span>
          </div>
          <span className="font-medium">
            Pregunta {currentIndex + 1} de {totalPreguntas} ({progressPercent}%)
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-slate-200/80 rounded-full h-2 overflow-hidden">
          <div
            className="bg-altius-600 h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        {/* Category & Role Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-altius-50 text-altius-800 border border-altius-200">
              <BookOpen className="w-3.5 h-3.5 text-altius-600" />
              Área: {currentPregunta.categoria}
            </span>
            {currentPregunta.subdimension && (
              <span className="text-xs text-slate-500 hidden sm:inline">
                • {currentPregunta.subdimension}
              </span>
            )}
          </div>

          {/* Role Indicator Banner */}
          <div className="inline-flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200/60">
            <User className="w-3.5 h-3.5 text-slate-500" />
            <span>Sección para: <strong className="capitalize text-slate-800">{targetRole}</strong></span>
          </div>
        </div>

        {/* Question Prompt */}
        <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug mb-6">
          {currentPregunta.texto_pregunta}
        </h3>

        {/* Options */}
        {currentPregunta.tipo_pregunta === 'opcion_multiple' && currentPregunta.opciones && (
          <div className="space-y-3 mb-6">
            {currentPregunta.opciones.map((opc) => {
              const isSelected = currentAnswer?.opcionId === opc.id_opcion;
              return (
                <button
                  key={opc.id_opcion}
                  type="button"
                  onClick={() => handleSelectOption(opc.id_opcion, opc.texto_opcion, opc.peso)}
                  className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-altius-50/80 border-altius-500 text-altius-900 ring-2 ring-altius-500/20 font-medium shadow-sm'
                      : 'bg-white border-slate-200/90 text-slate-700 hover:bg-slate-50/80 hover:border-slate-300'
                  }`}
                >
                  <span className="pr-4">{opc.texto_opcion}</span>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'border-altius-600 bg-altius-600 text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Open Question */}
        {currentPregunta.tipo_pregunta === 'abierta' && (
          <div className="space-y-2 mb-6">
            <textarea
              rows={4}
              maxLength={currentPregunta.limite_caracteres || 500}
              value={currentAnswer?.texto || ''}
              onChange={(e) => handleTextChange(e.target.value)}
              placeholder="Escribe tus observaciones aquí (ej. responde favorablemente al apoyo visual, se fatiga en periodos largos, etc.)..."
              className="w-full p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-altius-500/30 focus:border-altius-500 transition-colors resize-none"
            />
            <div className="flex justify-between items-center text-[11px] text-slate-400 px-1">
              <span>Campo opcional para detalles pedagógicos adicionales</span>
              <span>
                {(currentAnswer?.texto || '').length} / {currentPregunta.limite_caracteres || 500}
              </span>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={handlePrev}
            disabled={submitting}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{currentIndex === 0 ? 'Volver al consentimiento' : 'Anterior'}</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={submitting}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium bg-altius-700 hover:bg-altius-800 text-white shadow-sm shadow-altius-700/20 hover:-translate-y-0.5 transition-all cursor-pointer disabled:opacity-50"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Analizando respuestas...</span>
              </>
            ) : currentIndex === totalPreguntas - 1 ? (
              <>
                <span>Generar Resultados</span>
                <Sparkles className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>Siguiente</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
