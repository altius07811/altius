import React, { useEffect, useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Users, 
  Phone, 
  ArrowLeft, 
  FileText, 
  GraduationCap, 
  HeartHandshake, 
  RotateCcw, 
  Loader2, 
  Stethoscope
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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 fade-in space-y-6 sm:space-y-8">
      {/* Top Header */}
      <div className="bg-[#FFFDF9] rounded-3xl border border-[#D4DFEB] shadow-soft-md p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#D4DFEB]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#CAEFDD] text-[#1C463C] text-xs sm:text-sm font-bold mb-2">
              <HeartHandshake className="w-4 h-4 text-[#0D4233]" />
              Red de Apoyo y Derivación
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#253444]">
              Directorio de Recursos Psicopedagógicos
            </h2>
            <p className="text-xs sm:text-sm text-[#576574] font-semibold mt-1">
              Opciones de evaluación multidisciplinaria y acompañamiento integral en Bolivia.
            </p>
          </div>

          <button
            onClick={onBackToResults}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold bg-[#E4EEF6] hover:bg-[#d5e5f2] text-[#253444] transition-colors cursor-pointer self-start sm:self-center"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Resultados</span>
          </button>
        </div>

        {/* Guía práctica para la familia y docente */}
        <div className="p-5 rounded-2xl bg-[#E4EEF6]/70 border border-[#D4DFEB] text-xs sm:text-sm text-[#253444] space-y-2.5">
          <div className="flex items-center gap-2 font-bold text-[#253444]">
            <FileText className="w-4 h-4 text-[#3E83A8]" />
            <span>¿Cómo acudir a la consulta con el especialista?</span>
          </div>
          <ul className="space-y-1.5 pl-6 list-disc text-[#576574] font-medium">
            <li>Lleva los cuadernos de aula y muestras de tareas de lectura, escritura o matemáticas del estudiante.</li>
            <li>Presenta este resumen pedagógico de ALTIUS como insumo descriptivo de las observaciones.</li>
            <li>El especialista aplicará baterías estandarizadas (ej. WISC-V, PROLEC, escalas de Conners) según corresponda.</li>
          </ul>
        </div>
      </div>

      {/* Directory Cards Grid */}
      {loading ? (
        <div className="py-16 text-center">
          <Loader2 className="w-9 h-9 text-[#3E83A8] animate-spin mx-auto mb-3.5" />
          <p className="text-sm font-bold text-[#576574]">Cargando directorio de recursos...</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-3 gap-5">
          {recursos.map((rec, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF9] rounded-3xl border border-[#D4DFEB] p-6 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#C2E4F8] text-[#12415E] flex items-center justify-center mb-4 shadow-soft-sm">
                  {idx === 0 ? (
                    <GraduationCap className="w-6 h-6 text-[#12415E]" />
                  ) : idx === 1 ? (
                    <Building2 className="w-6 h-6 text-[#12415E]" />
                  ) : (
                    <Stethoscope className="w-6 h-6 text-[#12415E]" />
                  )}
                </div>

                <span className="text-[11px] font-bold tracking-wider text-[#0D4233] bg-[#BCEBD1] px-2.5 py-0.5 rounded-full inline-block">
                  {rec.tipo}
                </span>

                <h4 className="font-display font-bold text-base sm:text-lg text-[#253444] mt-2.5 mb-2 leading-snug">
                  {rec.nombre}
                </h4>

                <p className="text-xs sm:text-sm text-[#576574] leading-relaxed mb-4">
                  {rec.descripcion}
                </p>
              </div>

              <div className="space-y-2 pt-3.5 border-t border-[#D4DFEB] text-xs text-[#576574] font-semibold">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#3E83A8] shrink-0 mt-0.5" />
                  <span>{rec.ubicacion}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#3E83A8] shrink-0" />
                  <span>{rec.publicoObjetivo}</span>
                </div>
                {rec.contacto && (
                  <div className="flex items-center gap-2 text-[#12415E] font-bold pt-1">
                    <Phone className="w-4 h-4 shrink-0 text-[#3E83A8]" />
                    <span>{rec.contacto}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <button
          onClick={onBackToResults}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-[#D4DFEB] text-[#253444] hover:bg-[#E4EEF6] text-xs sm:text-sm font-bold transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Regresar al reporte de resultados</span>
        </button>

        <button
          onClick={onRestart}
          className="inline-flex items-center gap-2 px-7 py-3 rounded-2xl bg-[#3E83A8] hover:bg-[#326E8F] text-[#F5FBFF] text-xs sm:text-sm font-bold shadow-soft-sm hover:shadow-soft-md transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Iniciar una nueva observación</span>
        </button>
      </div>
    </div>
  );
};
