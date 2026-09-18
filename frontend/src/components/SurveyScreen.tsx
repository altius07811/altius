import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  BookOpenCheck, 
  Sparkles, 
  Loader2, 
  AlertTriangle,
  GraduationCap
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
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <Loader2 className="w-9 h-9 text-[#3E83A8] animate-spin mx-auto mb-3.5" />
        <p className="text-base font-bold text-[#253444]">Cargando las preguntas pedagógicas...</p>
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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10 fade-in space-y-6">
      {/* Header Info & Progress */}
      <div>
        <div className="flex items-center justify-between text-xs sm:text-sm text-[#576574] mb-2 font-bold">
          <div className="flex items-center gap-2">
            <span className="text-[#253444]">Estudiante:</span>
            <span className="bg-[#E4EEF6] text-[#12415E] px-2.5 py-0.5 rounded-lg font-mono">
              {studentCode}
            </span>
          </div>
          <span>
            Pregunta {currentIndex + 1} de {totalPreguntas} ({progressPercent}%)
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-[#D4DFEB] rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-[#3E83A8] h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-[#FFFDF9] rounded-3xl border border-[#D4DFEB] shadow-soft-md p-6 sm:p-10 space-y-6">
        {/* Category & Role Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-[#D4DFEB]">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold px-3 py-1 rounded-full bg-[#BCEBD1] text-[#0D4233]">
              <BookOpenCheck className="w-4 h-4 text-[#0D4233]" />
              Área: {currentPregunta.categoria}
            </span>
            {currentPregunta.subdimension && (
              <span className="text-xs sm:text-sm text-[#576574] font-semibold hidden sm:inline">
                • {currentPregunta.subdimension}
              </span>
            )}
          </div>

          {/* Role Indicator Banner */}
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#483962] bg-[#DFD5F5] px-3 py-1 rounded-full font-bold">
            <GraduationCap className="w-4 h-4 text-[#483962]" />
            <span>Sección para: <strong className="capitalize">{targetRole}</strong></span>
          </div>
        </div>

        {/* Question Prompt */}
        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#253444] leading-snug">
          {currentPregunta.texto_pregunta}
        </h3>

        {/* Options */}
        {currentPregunta.tipo_pregunta === 'opcion_multiple' && currentPregunta.opciones && (
          <div className="space-y-3 pt-2">
            {currentPregunta.opciones.map((opc) => {
              const isSelected = currentAnswer?.opcionId === opc.id_opcion;
              return (
                <button
                  key={opc.id_opcion}
                  type="button"
                  onClick={() => handleSelectOption(opc.id_opcion, opc.texto_opcion, opc.peso)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 text-sm sm:text-base font-semibold transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#C2E4F8] border-[#3E83A8] text-[#12415E] shadow-soft-sm'
                      : 'bg-[#FFFDF9] border-[#D4DFEB] text-[#253444] hover:bg-[#E4EEF6]/60 hover:border-[#6BA7C9]'
                  }`}
                >
                  <span className="pr-4 leading-normal">{opc.texto_opcion}</span>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'border-[#3E83A8] bg-[#3E83A8] text-[#F5FBFF]'
                        : 'border-[#D4DFEB] bg-[#FFFDF9]'
                    }`}
                  >
                    {isSelected && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Open Question */}
        {currentPregunta.tipo_pregunta === 'abierta' && (
          <div className="space-y-2 pt-2">
            <textarea
              rows={4}
              maxLength={currentPregunta.limite_caracteres || 500}
              value={currentAnswer?.texto || ''}
              onChange={(e) => handleTextChange(e.target.value)}
              placeholder="Escribe tus observaciones aquí (ej. responde favorablemente al apoyo visual, se fatiga en periodos largos, etc.)..."
              className="w-full p-4 rounded-2xl border-2 border-[#D4DFEB] bg-[#FFFDF9] text-sm sm:text-base font-semibold text-[#253444] focus:outline-none focus:ring-2 focus:ring-[#6BA7C9] focus:border-[#3E83A8] transition-all resize-none"
            />
            <div className="flex justify-between items-center text-xs text-[#576574] px-1 font-semibold">
              <span>Campo opcional para detalles pedagógicos adicionales</span>
              <span>
                {(currentAnswer?.texto || '').length} / {currentPregunta.limite_caracteres || 500}
              </span>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {errorMsg && (
          <div className="p-4 rounded-2xl bg-[#FDF2F0] border border-[#F5C2BA] text-[#C25040] text-xs sm:text-sm font-bold flex items-center gap-2.5">
            <AlertTriangle className="w-5 h-5 shrink-0 text-[#C25040]" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-[#D4DFEB]">
          <button
            type="button"
            onClick={handlePrev}
            disabled={submitting}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-[#576574] hover:text-[#253444] hover:bg-[#E4EEF6] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{currentIndex === 0 ? 'Volver al consentimiento' : 'Anterior'}</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={submitting}
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-2xl text-sm font-bold bg-[#3E83A8] hover:bg-[#326E8F] text-[#F5FBFF] shadow-soft-sm hover:shadow-soft-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer disabled:opacity-50"
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
