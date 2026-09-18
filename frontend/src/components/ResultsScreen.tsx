import React from 'react';
import { 
  AlertTriangle, 
  BookOpenCheck, 
  Home, 
  GraduationCap, 
  ArrowRight, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  BarChart3,
  HeartHandshake
} from 'lucide-react';
import { ResultadoCategoria, SugerenciaItem } from '../types';

interface ResultsScreenProps {
  studentCode: string;
  resultados: ResultadoCategoria[];
  sugerencias: SugerenciaItem[];
  avisoLegal?: string;
  onNavigateToReferral: () => void;
  onRestart: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  studentCode,
  resultados,
  sugerencias,
  avisoLegal,
  onNavigateToReferral,
  onRestart
}) => {
  // Helper para asignar estilos visuales suaves según la paleta oficial (menta, cielo, lavanda)
  const getIntensityBadge = (nivel: string) => {
    const n = (nivel || '').toLowerCase();
    if (n.includes('significativa') || n.includes('relevante') || n.includes('alta')) {
      return {
        label: nivel,
        bgColor: 'bg-[#DFD5F5] text-[#483962]',
        barColor: 'bg-[#9882bd]',
        percentage: 85,
        desc: 'Señal Relevante: Indicadores consistentes observados. Se recomienda acompañamiento psicopedagógico formal.'
      };
    }
    if (n.includes('moderada')) {
      return {
        label: nivel,
        bgColor: 'bg-[#C2E4F8] text-[#12415E]',
        barColor: 'bg-[#3E83A8]',
        percentage: 60,
        desc: 'Señal Moderada: Manifestaciones evidentes en tareas específicas. Se sugieren adaptaciones de aula.'
      };
    }
    if (n.includes('leve')) {
      return {
        label: nivel,
        bgColor: 'bg-[#CAEFDD] text-[#1C463C]',
        barColor: 'bg-[#6fc59a]',
        percentage: 35,
        desc: 'Señal Leve: Dificultades puntuales que suelen responder positivamente a pautas didácticas estándar.'
      };
    }
    return {
      label: 'Sin señales significativas',
      bgColor: 'bg-[#BCEBD1] text-[#0D4233]',
      barColor: 'bg-[#52b380]',
      percentage: 15,
      desc: 'Sin señales de alerta: Desempeño dentro del rango habitual esperado para la etapa educativa.'
    };
  };

  const sugerenciasAula = sugerencias.filter((s) => s.contexto === 'aula');
  const sugerenciasCasa = sugerencias.filter((s) => s.contexto === 'casa');

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 fade-in space-y-6 sm:space-y-8">
      {/* Top Header Summary */}
      <div className="bg-[#FFFDF9] rounded-3xl border border-[#D4DFEB] shadow-soft-md p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#D4DFEB]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#BCEBD1] text-[#0D4233] text-xs sm:text-sm font-bold mb-2">
              <Sparkles className="w-4 h-4 text-[#0D4233]" />
              Reporte de Orientación Pedagógica
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#253444]">
              Evaluación de Señales de Aprendizaje
            </h2>
            <p className="text-xs sm:text-sm text-[#576574] font-semibold mt-1">
              Código de observación: <span className="font-mono font-bold text-[#253444] bg-[#E4EEF6] px-2 py-0.5 rounded-md">{studentCode}</span>
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-center">
            <button
              onClick={onRestart}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold bg-[#E4EEF6] hover:bg-[#d5e5f2] text-[#253444] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-[#3E83A8]" />
              <span>Nueva observación</span>
            </button>
          </div>
        </div>

        {/* Destacado: Recordatorio Ético de No Diagnóstico */}
        <div className="p-5 rounded-2xl bg-[#F6E6CB] border border-[#e8d2ac] text-xs sm:text-sm text-[#65452A] flex items-start gap-3.5 shadow-soft-sm">
          <AlertTriangle className="w-5 h-5 text-[#65452A] shrink-0 mt-0.5" />
          <div className="leading-relaxed space-y-0.5">
            <p className="font-bold text-[#4e341e]">
              Recordatorio fundamental: Esto NO es un diagnóstico médico ni clínico
            </p>
            <p>
              {avisoLegal || 'Este informe refleja una estimación pedagógica cualitativa para identificar necesidades de apoyo en el aula y guiar a la familia. No reemplaza una evaluación formal multidisciplinaria.'}
            </p>
          </div>
        </div>
      </div>

      {/* Resultados por Categoría (TDAH, Dislexia, Discalculia) */}
      <div className="bg-[#FFFDF9] rounded-3xl border border-[#D4DFEB] shadow-soft-md p-6 sm:p-10 space-y-6">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#253444] flex items-center gap-2.5">
          <BarChart3 className="w-6 h-6 text-[#3E83A8]" />
          Niveles de Señal Detectados por Área
        </h3>

        <div className="grid gap-5 sm:grid-cols-3">
          {resultados.map((res) => {
            const intensity = getIntensityBadge(res.nivel);
            return (
              <div
                key={res.categoria}
                className="bg-[#FFFDF9] border border-[#D4DFEB] rounded-3xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#6BA7C9] transition-all shadow-soft-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h4 className="font-display font-bold text-lg text-[#253444]">{res.categoria}</h4>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${intensity.bgColor}`}>
                      {intensity.label}
                    </span>
                  </div>

                  {/* Visual Intensity Bar (Soft & Gradual) */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-[#576574] mb-1.5 font-bold">
                      <span>Intensidad estimada:</span>
                      <span className="text-[#253444]">{intensity.percentage}%</span>
                    </div>
                    <div className="w-full bg-[#E4EEF6] rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${intensity.barColor}`}
                        style={{ width: `${intensity.percentage}%` }}
                      />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#576574] leading-relaxed mb-4">
                    {res.texto_resultado || intensity.desc}
                  </p>
                </div>

                {/* Fuente científica */}
                <div className="pt-3.5 border-t border-[#D4DFEB] text-xs text-[#576574] flex items-start gap-2">
                  <BookOpenCheck className="w-4 h-4 text-[#3E83A8] shrink-0 mt-0.5" />
                  <span className="italic font-medium">
                    {res.fuente || 'Vizcarra & Terán (2018), intervención educativa'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sección Próximos Pasos (Aula y Casa) */}
      <div className="bg-[#FFFDF9] rounded-3xl border border-[#D4DFEB] shadow-soft-md p-6 sm:p-10 space-y-6">
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#253444] flex items-center gap-2.5">
            <CheckCircle2 className="w-6 h-6 text-[#1C463C]" />
            Próximos Pasos: Acciones Inmediatas de Apoyo
          </h3>
          <p className="text-xs sm:text-sm text-[#576574] mt-1 font-semibold">
            Estrategias pedagógicas aplicables inmediatamente en la escuela y el hogar sin esperar un diagnóstico formal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 pt-2">
          {/* Columna Aula */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-[#D4DFEB]">
              <div className="w-9 h-9 rounded-2xl bg-[#CAEFDD] text-[#1C463C] flex items-center justify-center shadow-soft-sm">
                <GraduationCap className="w-5 h-5 text-[#0D4233]" />
              </div>
              <h4 className="font-display font-bold text-base sm:text-lg text-[#253444]">Para el Aula (Docentes)</h4>
            </div>

            <div className="space-y-3.5">
              {sugerenciasAula.length > 0 ? (
                sugerenciasAula.map((sug) => (
                  <div key={sug.id_sugerencia} className="p-4 rounded-2xl bg-[#E4EEF6]/60 border border-[#D4DFEB] text-xs sm:text-sm space-y-1.5">
                    <p className="font-bold text-[#253444]">{sug.sugerencia}</p>
                    <p className="text-[#576574] leading-relaxed">{sug.detalle}</p>
                    {sug.fuente && (
                      <p className="text-[11px] text-[#3E83A8] italic font-semibold">Fuente: {sug.fuente}</p>
                    )}
                  </div>
                ))
              ) : (
                <div className="p-4 rounded-2xl bg-[#E4EEF6]/60 border border-[#D4DFEB] text-xs sm:text-sm space-y-1">
                  <p className="font-bold text-[#253444]">Ubicación estratégica y consignas fragmentadas</p>
                  <p className="text-[#576574] leading-relaxed">Ubicar al estudiante con buena visibilidad al pizarrón y estructurar las instrucciones paso a paso.</p>
                </div>
              )}
            </div>
          </div>

          {/* Columna Casa */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-[#D4DFEB]">
              <div className="w-9 h-9 rounded-2xl bg-[#C2E4F8] text-[#12415E] flex items-center justify-center shadow-soft-sm">
                <Home className="w-5 h-5 text-[#12415E]" />
              </div>
              <h4 className="font-display font-bold text-base sm:text-lg text-[#253444]">Para el Hogar (Familias)</h4>
            </div>

            <div className="space-y-3.5">
              {sugerenciasCasa.length > 0 ? (
                sugerenciasCasa.map((sug) => (
                  <div key={sug.id_sugerencia} className="p-4 rounded-2xl bg-[#E4EEF6]/60 border border-[#D4DFEB] text-xs sm:text-sm space-y-1.5">
                    <p className="font-bold text-[#253444]">{sug.sugerencia}</p>
                    <p className="text-[#576574] leading-relaxed">{sug.detalle}</p>
                    {sug.fuente && (
                      <p className="text-[11px] text-[#3E83A8] italic font-semibold">Fuente: {sug.fuente}</p>
                    )}
                  </div>
                ))
              ) : (
                <div className="p-4 rounded-2xl bg-[#E4EEF6]/60 border border-[#D4DFEB] text-xs sm:text-sm space-y-1">
                  <p className="font-bold text-[#253444]">Estructuración y refuerzo positivo</p>
                  <p className="text-[#576574] leading-relaxed">Establecer rutinas estables con pausas activas y reforzar el esfuerzo constante.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tarjeta de Derivación Destacada */}
      <div className="bg-[#253444] rounded-3xl p-7 sm:p-9 text-[#F5FBFF] shadow-soft-lg flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3E83A8] text-[#F5FBFF] text-xs font-bold">
            <HeartHandshake className="w-4 h-4" />
            <span>Red de Apoyo y Derivación</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
            ¿Necesitas derivar a un profesional o buscar ayuda?
          </h3>
          <p className="text-xs sm:text-sm text-[#D4DFEB] max-w-xl leading-relaxed">
            Explora el directorio de gabinetes psicopedagógicos, centros universitarios y de salud mental disponibles en Bolivia para una valoración integral.
          </p>
        </div>

        <button
          onClick={onNavigateToReferral}
          className="shrink-0 px-7 py-4 rounded-2xl bg-[#3E83A8] hover:bg-[#326E8F] text-[#F5FBFF] font-bold text-sm shadow-soft-md hover:shadow-soft-lg hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2.5 cursor-pointer"
        >
          <span>Ver Directorio de Ayuda</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
