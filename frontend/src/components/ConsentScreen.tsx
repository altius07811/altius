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
    if (accepted) {
      onAccept(rol, studentCode);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 fade-in">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        {/* Header Icon */}
        <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-100">
          <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Consentimiento y Uso Responsable</h2>
            <p className="text-xs text-slate-500">Transparencia y protección de datos educativos</p>
          </div>
        </div>

        {/* Content Box */}
        <div className="space-y-4 text-sm text-slate-600 mb-6 leading-relaxed">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/70 space-y-2.5">
            <div className="flex items-start gap-2.5">
              <Lock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-700">
                <span className="font-semibold text-slate-800">Privacidad y anonimización:</span> No recopilamos nombres completos ni documentos de identidad oficial. Las respuestas se asocian a un código de referencia temporal únicamente con fines de análisis pedagógico.
              </p>
            </div>
            <div className="flex items-start gap-2.5">
              <FileText className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-700">
                <span className="font-semibold text-slate-800">Finalidad pedagógica:</span> La información ingresada se procesa exclusivamente para generar sugerencias adaptativas de aula y orientar a la familia en caso de requerirse una derivación especializada.
              </p>
            </div>
          </div>

          {/* Form Controls */}
          <form onSubmit={handleSubmit} className="space-y-5 pt-2">
            {/* Rol selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                ¿Quién completa esta observación?
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { id: 'docente', label: 'Docente de Aula' },
                  { id: 'padre/madre', label: 'Padre / Madre' },
                  { id: 'profesional', label: 'Psicopedagogo' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRol(item.id as RolEncuestado)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                      rol === item.id
                        ? 'bg-altius-50 border-altius-500 text-altius-900 ring-2 ring-altius-500/20 font-semibold'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Student Code */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Identificador o Código del Estudiante
              </label>
              <input
                type="text"
                value={studentCode}
                onChange={(e) => setStudentCode(e.target.value)}
                placeholder="Ej. EST-104 o Iniciales"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-altius-500/30 focus:border-altius-500 transition-colors"
                required
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Puedes usar un código anónimo o las iniciales del estudiante.
              </p>
            </div>

            {/* Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition-colors cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-altius-600 focus:ring-altius-500 cursor-pointer"
                />
                <span className="text-xs text-slate-700 leading-snug">
                  <span className="font-semibold text-slate-900">Entiendo y acepto:</span> He leído que los resultados de ALTIUS son de carácter pedagógico y orientativo, y autorizo el uso de estas observaciones para generar el reporte de aula.
                </span>
              </label>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver</span>
              </button>

              <button
                type="submit"
                disabled={!accepted || !studentCode.trim()}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all shadow-sm ${
                  accepted && studentCode.trim()
                    ? 'bg-altius-700 hover:bg-altius-800 text-white shadow-altius-700/20 cursor-pointer hover:-translate-y-0.5'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
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
