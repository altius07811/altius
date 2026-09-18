import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, ArrowLeft, Lock, FileText } from 'lucide-react';
import { RolEncuestado } from '../types';

interface ConsentScreenProps {
  onAccept: (rol: RolEncuestado, studentCode: string) => void;
  onBack: () => void;
}

export const ConsentScreen: React.FC<ConsentScreenProps> = ({ onAccept, onBack }) => {
  const [accepted, setAccepted] = useState(false);
  const [rol, setRol] = useState<RolEncuestado>('docente');
  const [studentCode, setStudentCode] = useState(`EST-${Math.floor(1000 + Math.random() * 9000)}`);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accepted && studentCode.trim()) {
      onAccept(rol, studentCode.trim());
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 fade-in">
      <div className="bg-[#FFFDF9] rounded-3xl border border-[#D4DFEB] shadow-soft-md p-6 sm:p-10 space-y-6 sm:space-y-8">
        {/* Header Icon & Title */}
        <div className="flex items-center gap-4 pb-6 border-b border-[#D4DFEB]">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#CAEFDD] text-[#1C463C] flex items-center justify-center shrink-0 shadow-soft-sm">
            <ShieldCheck className="w-7 h-7 text-[#0D4233]" />
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#253444]">
              Consentimiento y Uso Responsable
            </h2>
            <p className="text-xs sm:text-sm text-[#576574] font-semibold mt-0.5">
              Transparencia y protección de datos en la observación escolar
            </p>
          </div>
        </div>

        {/* Content Box */}
        <div className="space-y-4">
          <div className="p-5 bg-[#E4EEF6] rounded-2xl border border-[#D4DFEB] space-y-3 text-xs sm:text-sm text-[#253444] leading-relaxed">
            <div className="flex items-start gap-3">
              <Lock className="w-4 h-4 text-[#3E83A8] shrink-0 mt-1" />
              <p>
                <strong className="font-bold text-[#253444]">Privacidad y anonimización:</strong> No recopilamos nombres completos ni documentos de identidad oficial. Las respuestas se asocian a un código de referencia temporal únicamente con fines de análisis pedagógico.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="w-4 h-4 text-[#3E83A8] shrink-0 mt-1" />
              <p>
                <strong className="font-bold text-[#253444]">Finalidad pedagógica:</strong> La información ingresada se procesa exclusivamente para generar sugerencias adaptativas de aula y orientar a la familia en caso de requerirse una derivación especializada.
              </p>
            </div>
          </div>

          {/* Form Controls */}
          <form onSubmit={handleSubmit} className="space-y-6 pt-2">
            {/* Rol selector */}
            <div>
              <label className="block text-xs font-bold text-[#253444] uppercase tracking-wider mb-2.5">
                ¿Quién completa esta observación?
              </label>
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {[
                  { id: 'docente', label: 'Docente de Aula' },
                  { id: 'padre/madre', label: 'Padre / Madre' },
                  { id: 'profesional', label: 'Psicopedagogo' }
                ].map((item) => {
                  const isSelected = rol === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setRol(item.id as RolEncuestado)}
                      className={`px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-bold border-2 text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#C2E4F8] border-[#3E83A8] text-[#12415E] shadow-soft-sm'
                          : 'bg-[#FFFDF9] border-[#D4DFEB] text-[#576574] hover:bg-[#E4EEF6]/60 hover:border-[#6BA7C9]'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Student Code */}
            <div>
              <label className="block text-xs font-bold text-[#253444] uppercase tracking-wider mb-1.5">
                Identificador o Código del Estudiante
              </label>
              <input
                type="text"
                value={studentCode}
                onChange={(e) => setStudentCode(e.target.value)}
                placeholder="Ej. EST-104 o Iniciales"
                className="w-full px-4 py-3 rounded-2xl border-2 border-[#D4DFEB] bg-[#FFFDF9] text-sm font-semibold text-[#253444] focus:outline-none focus:ring-2 focus:ring-[#6BA7C9] focus:border-[#3E83A8] transition-all"
                required
              />
              <p className="text-xs text-[#576574] mt-1.5 font-medium">
                Puedes usar un código anónimo o las iniciales del estudiante.
              </p>
            </div>

            {/* Checkbox */}
            <div className="pt-1">
              <label className="flex items-start gap-3.5 p-4 rounded-2xl border-2 border-[#D4DFEB] bg-[#E4EEF6]/40 hover:bg-[#E4EEF6]/70 transition-colors cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-[#D4DFEB] text-[#3E83A8] focus:ring-[#6BA7C9] cursor-pointer"
                />
                <span className="text-xs sm:text-sm text-[#253444] leading-relaxed">
                  <strong className="font-bold text-[#253444]">Entiendo y acepto:</strong> He leído que los resultados de ALTIUS son de carácter pedagógico y orientativo, y autorizo el uso de estas observaciones para generar el reporte de aula.
                </span>
              </label>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-[#D4DFEB]">
              <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-[#576574] hover:text-[#253444] hover:bg-[#E4EEF6] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver</span>
              </button>

              <button
                type="submit"
                disabled={!accepted || !studentCode.trim()}
                className={`inline-flex items-center gap-2 px-7 py-3 rounded-2xl text-sm font-bold transition-all shadow-soft-sm ${
                  accepted && studentCode.trim()
                    ? 'bg-[#3E83A8] hover:bg-[#326E8F] text-[#F5FBFF] cursor-pointer hover:-translate-y-0.5 hover:shadow-soft-md active:translate-y-0'
                    : 'bg-[#D4DFEB] text-[#576574]/60 cursor-not-allowed'
                }`}
              >
                <span>Continuar a la Encuesta</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
