import React from 'react';
import { ArrowRight, Compass, BookOpenCheck, HeartHandshake, AlertTriangle, ClipboardList } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 fade-in space-y-6 sm:space-y-8">
      {/* Hero Badge */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#CAEFDD] text-[#1C463C] text-xs sm:text-sm font-bold shadow-soft-sm">
          <Compass className="w-4 h-4 text-[#0D4233]" />
          <span>Plataforma de Apoyo Pedagógico para Unidades Educativas en Bolivia</span>
        </div>
      </div>

      {/* Main Title & Description */}
      <div className="text-center space-y-4">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#253444] tracking-tight">
          ALTIUS
        </h1>
        <p className="text-base sm:text-lg text-[#576574] leading-relaxed max-w-2xl mx-auto">
          Herramienta de orientación pedagógica temprana para la detección de señales asociadas al <strong className="text-[#253444] font-bold">TDAH</strong>, <strong className="text-[#253444] font-bold">Dislexia</strong> y <strong className="text-[#253444] font-bold">Discalculia</strong> en la etapa escolar.
        </p>
      </div>

      {/* Disclaimer Card */}
      <div className="bg-[#F6E6CB] border border-[#e8d2ac] rounded-3xl p-6 sm:p-7 text-left flex items-start gap-4 shadow-soft-sm">
        <div className="w-11 h-11 rounded-2xl bg-[#e5cfab] flex items-center justify-center shrink-0 text-[#65452A]">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h3 className="font-display font-bold text-[#65452A] text-base sm:text-lg">
            Instrumento de cribado y apoyo, no un diagnóstico clínico
          </h3>
          <p className="text-xs sm:text-sm text-[#65452A] leading-relaxed">
            ALTIUS no emite dictámenes médicos ni neurológicos. Su objetivo es brindar pautas de aula y recomendaciones concretas para acompañar al estudiante mientras la familia gestiona una valoración profesional integral.
          </p>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="grid sm:grid-cols-3 gap-5">
        <div className="bg-[#FFFDF9] p-6 rounded-3xl border border-[#D4DFEB] shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[#C2E4F8] text-[#12415E] flex items-center justify-center mb-4">
              <ClipboardList className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-[#253444] text-base mb-2">Señales específicas</h4>
            <p className="text-xs sm:text-sm text-[#576574] leading-relaxed">
              Explora 3 áreas clave del neurodesarrollo con preguntas adaptadas al aula escolar.
            </p>
          </div>
        </div>

        <div className="bg-[#FFFDF9] p-6 rounded-3xl border border-[#D4DFEB] shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[#BCEBD1] text-[#0D4233] flex items-center justify-center mb-4">
              <BookOpenCheck className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-[#253444] text-base mb-2">Respaldo científico</h4>
            <p className="text-xs sm:text-sm text-[#576574] leading-relaxed">
              Estrategias fundamentadas en literatura especializada (Vizcarra & Terán, Defior, Butterworth).
            </p>
          </div>
        </div>

        <div className="bg-[#FFFDF9] p-6 rounded-3xl border border-[#D4DFEB] shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[#DFD5F5] text-[#483962] flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-[#253444] text-base mb-2">Rutas de derivación</h4>
            <p className="text-xs sm:text-sm text-[#576574] leading-relaxed">
              Directorio de gabinetes y centros de apoyo psicopedagógico en Bolivia.
            </p>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="text-center pt-2">
        <button
          onClick={onStart}
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#3E83A8] hover:bg-[#326E8F] text-[#F5FBFF] font-bold text-base shadow-soft-md hover:shadow-soft-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
        >
          <span>Iniciar evaluación orientativa</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        <p className="text-xs text-[#576574] mt-3 font-semibold">
          Toma aproximadamente 3 a 5 minutos.
        </p>
      </div>
    </div>
  );
};
