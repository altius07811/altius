import React from 'react';
import { AlertTriangle, BookOpenCheck, HeartHandshake } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFDF9] border-t border-[#D4DFEB] mt-auto py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Aviso Ético */}
        <div className="bg-[#F6E6CB] border border-[#e8d2ac] rounded-2xl p-4 sm:p-5 mb-6 flex items-start gap-3.5 text-xs sm:text-sm text-[#65452A] leading-relaxed shadow-soft-sm">
          <AlertTriangle className="w-5 h-5 text-[#65452A] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#4e341e]">Aviso ético y delimitación de alcance:</span> ALTIUS es una herramienta pedagógica de cribado y apoyo formativo inicial diseñada para el contexto escolar en Bolivia. No sustituye la evaluación clínica, neuropsicológica ni médica formal realizada por un profesional matriculado.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#576574]">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 font-semibold text-[#253444]">
              <BookOpenCheck className="w-4 h-4 text-[#3E83A8]" />
              Literatura científica curada
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-[#1C463C]">
              <HeartHandshake className="w-4 h-4 text-[#1C463C]" />
              Inclusión escolar Bolivia
            </span>
          </div>
          <div className="font-medium">
            &copy; {new Date().getFullYear()} ALTIUS Bolivia.
          </div>
        </div>
      </div>
    </footer>
  );
};
