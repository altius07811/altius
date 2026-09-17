import React, { useEffect, useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Users, 
  PhoneCall, 
  ArrowLeft, 
  FileText, 
  GraduationCap, 
  HeartHandshake,
  RotateCcw,
  Loader2
} from 'lucide-react';
import { RecursoDerivacion } from '../types';
import { fetchRecursosDerivacion } from '../services/api';

interface ReferralScreenProps {
  onBackToResults: () => void;
  onRestart: () => void;
}

export const ReferralScreen: React.FC<ReferralScreenProps> = ({
  onBackToResults,
  onRestart
}) => {
  const [recursos, setRecursos] = useState<RecursoDerivacion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await fetchRecursosDerivacion();
      setRecursos(data);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 fade-in space-y-8">
      {/* Top Header */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold mb-2">
              <HeartHandshake className="w-3.5 h-3.5 text-teal-600" />
              Red de Apoyo y Derivación
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Directorio de Recursos Psicopedagógicos en Bolivia
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Opciones de evaluación multidisciplinaria y acompañamiento integral para niños y jóvenes.
            </p>
          </div>

          <button
            onClick={onBackToResults}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer self-start sm:self-center"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Resultados</span>
          </button>
        </div>

        {/* Guía práctica para la familia y docente */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <FileText className="w-4 h-4 text-altius-600" />
            <span>¿Cómo acudir a la consulta con el especialista?</span>
          </div>
          <ul className="space-y-1.5 pl-6 list-disc text-slate-600">
            <li>Lleva los cuadernos de aula y muestras de tareas de lectura, escritura o matemáticas del estudiante.</li>
            <li>Presenta este resumen pedagógico de ALTIUS como insumo descriptivo de las observaciones del docente y la familia.</li>
            <li>El profesional realizará baterías estandarizadas (ej. WISC-V, PROLEC, escalas de Conners) según corresponda.</li>
          </ul>
        </div>
      </div>

      {/* Directory Cards Grid */}
      {loading ? (
        <div className="py-12 text-center">
          <Loader2 className="w-8 h-8 text-altius-600 animate-spin mx-auto mb-3" />
          <p className="text-xs text-slate-500">Cargando directorio de recursos...</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-3 gap-6">
          {recursos.map((rec, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-altius-50 text-altius-700 flex items-center justify-center mb-4">
                  {idx === 0 ? <GraduationCap className="w-5 h-5" /> : idx === 1 ? <Building2 className="w-5 h-5" /> : <HeartHandshake className="w-5 h-5" />}
                </div>

                <span className="text-[10px] uppercase font-bold tracking-wider text-altius-700 bg-altius-50 px-2 py-0.5 rounded-md">
                  {rec.tipo}
                </span>

                <h4 className="font-bold text-base text-slate-900 mt-2 mb-2 leading-snug">
                  {rec.nombre}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {rec.descripcion}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-500">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{rec.ubicacion}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{rec.publicoObjetivo}</span>
                </div>
                {rec.contacto && (
                  <div className="flex items-center gap-2 text-altius-700 font-medium pt-1">
                    <PhoneCall className="w-3.5 h-3.5 shrink-0" />
                    <span>{rec.contacto}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
        <button
          onClick={onBackToResults}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Regresar al reporte de resultados</span>
        </button>

        <button
          onClick={onRestart}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-altius-700 hover:bg-altius-800 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Iniciar una nueva observación</span>
        </button>
      </div>
    </div>
  );
};
