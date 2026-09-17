import React from 'react';
import { AlertTriangle, BookOpen, HeartHandshake } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 mb-6 flex items-start gap-3.5 text-xs text-slate-600 leading-relaxed">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-800">Aviso ético y delimitación de alcance:</span> ALTIUS es una herramienta pedagógica de cribado y apoyo formativo inicial diseñada para el contexto escolar en Bolivia. No sustituye la evaluación clínica, neuropsicológica ni médica formal realizada por un profesional matriculado.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-altius-600" />
              Basado en literatura científica curada
            </span>
            <span className="flex items-center gap-1">
              <HeartHandshake className="w-3.5 h-3.5 text-teal-600" />
              Inclusión y equidad educativa
            </span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} ALTIUS Bolivia. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};
