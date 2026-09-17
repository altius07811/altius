import React from 'react';
import { ArrowRight, BookOpen, Compass, CheckCircle2, Award } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 fade-in">
      {/* Hero Badge */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-altius-50 border border-altius-200 text-altius-800 text-xs font-medium">
          <Compass className="w-4 h-4 text-altius-600" />
          <span>Plataforma de Apoyo Pedagógico para Unidades Educativas en Bolivia</span>
        </div>
      </div>

      {/* Main Title & Description */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          ALTIUS
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
          Herramienta de orientación pedagógica temprana para la detección de señales asociadas al <span className="font-semibold text-slate-800">TDAH</span>, <span className="font-semibold text-slate-800">Dislexia</span> y <span className="font-semibold text-slate-800">Discalculia</span> en la etapa escolar.
        </p>
      </div>

      {/* Disclaimer Card */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 mb-10 text-left max-w-2xl mx-auto flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 text-amber-700">
          <BookOpen className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-semibold text-amber-900 text-sm mb-1">
            Instrumento de cribado y apoyo, no un diagnóstico clínico
          </h3>
          <p className="text-xs text-amber-800 leading-relaxed">
            ALTIUS no emite dictámenes médicos ni neurológicos. Su objetivo es brindar pautas de aula y recomendaciones concretas para acompañar al estudiante mientras la familia gestiona una valoración profesional integral.
          </p>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="grid sm:grid-cols-3 gap-5 mb-12 max-w-3xl mx-auto">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-9 h-9 rounded-xl bg-altius-50 text-altius-700 flex items-center justify-center mb-3">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-slate-900 text-sm mb-1">Señales específicas</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Explora 3 áreas clave del aprendizaje con preguntas adaptadas a la realidad de las aulas.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
            <Award className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-slate-900 text-sm mb-1">Respaldo científico</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Estrategias pedagógicas fundamentadas en literatura especializada (Vizcarra & Terán, Defior, etc.).
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-9 h-9 rounded-xl bg-lavender-100 text-lavender-800 flex items-center justify-center mb-3">
            <Compass className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-slate-900 text-sm mb-1">Rutas de derivación</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Acceso a directorios y centros de apoyo psicopedagógico disponibles en Bolivia.
          </p>
        </div>
      </div>

      {/* Action Button */}
      <div className="text-center">
        <button
          onClick={onStart}
          className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-altius-700 hover:bg-altius-800 text-white font-medium text-base shadow-lg shadow-altius-700/25 hover:shadow-altius-800/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
        >
          <span>Iniciar evaluación orientativa</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        <p className="text-xs text-slate-400 mt-3 font-normal">
          Toma aproximadamente 3 a 5 minutos.
        </p>
      </div>
    </div>
  );
};
