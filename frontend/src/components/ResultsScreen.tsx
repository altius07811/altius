import React from 'react';
import { 
  AlertCircle, 
  BookOpen, 
  Home, 
  School, 
  ExternalLink, 
  RotateCcw, 
  Sparkles, 
  Info,
  CheckCircle2,
  BookmarkCheck,
  Printer
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
  // Helper para asignar estilos visuales suaves según el nivel de señal (sin colores rojos estridentes)
  const getIntensityBadge = (nivel: string) => {
    const n = (nivel || '').toLowerCase();
    if (n.includes('significativa') || n.includes('relevante') || n.includes('alta')) {
      return {
        label: nivel,
        bgColor: 'bg-lavender-100 text-lavender-900 border-lavender-300',
        barColor: 'bg-lavender-600',
        dotColor: 'bg-lavender-600',
        percentage: 85,
        desc: 'Señal Relevante: Se aprecian indicadores observables consistentes. Recomendada orientación pedagógica.'
      };
    }
    if (n.includes('moderada')) {
      return {
        label: nivel,
        bgColor: 'bg-amber-50 text-amber-900 border-amber-300',
        barColor: 'bg-amber-500',
        dotColor: 'bg-amber-500',
        percentage: 60,
        desc: 'Señal Moderada: Manifestaciones evidentes en situaciones académicas específicas. Se sugieren adaptaciones de aula.'
      };
    }
    if (n.includes('leve')) {
      return {
        label: nivel,
        bgColor: 'bg-teal-50 text-teal-800 border-teal-300',
        barColor: 'bg-teal-500',
        dotColor: 'bg-teal-500',
        percentage: 35,
        desc: 'Señal Leve: Dificultades puntuales que suelen responder positivamente a pautas didácticas estándar.'
      };
    }
    return {
      label: 'Sin señales significativas',
      bgColor: 'bg-slate-100 text-slate-700 border-slate-300',
      barColor: 'bg-teal-600',
      dotColor: 'bg-teal-600',
      percentage: 15,
      desc: 'Sin señales de alerta: Desempeño dentro del rango habitual esperado para la etapa educativa.'
    };
  };

  const sugerenciasAula = sugerencias.filter((s) => s.contexto === 'aula');
  const sugerenciasCasa = sugerencias.filter((s) => s.contexto === 'casa');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 fade-in space-y-8">
      {/* Top Header Summary */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-altius-50 text-altius-800 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-altius-600" />
              Reporte de Orientación Pedagógica
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Evaluación de Señales de Aprendizaje
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Código de observación: <span className="font-mono font-semibold text-slate-800">{studentCode}</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              title="Imprimir o guardar como PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / PDF</span>
            </button>
            <button
              onClick={onRestart}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Nueva observación</span>
            </button>
          </div>
        </div>

        {/* Destacado: Recordatorio Ético de No Diagnóstico */}
        <div className="mt-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <p className="font-semibold text-amber-950 mb-0.5">
              Recordatorio fundamental: Esto NO es un diagnóstico médico ni clínico
            </p>
            <p>
              {avisoLegal || 'Este informe refleja una estimación pedagógica cualitativa para identificar necesidades de apoyo en el aula y guiar a la familia. No reemplaza una evaluación formal multidisciplinaria.'}
            </p>
          </div>
        </div>
      </div>

      {/* Resultados por Categoría (TDAH, Dislexia, Discalculia) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
          <BookmarkCheck className="w-5 h-5 text-altius-600" />
          Niveles de Señal Detectados por Área
        </h3>

        <div className="grid gap-6 sm:grid-cols-3">
          {resultados.map((res) => {
            const intensity = getIntensityBadge(res.nivel);
            return (
              <div
                key={res.categoria}
                className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-300 transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h4 className="font-bold text-base text-slate-900">{res.categoria}</h4>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${intensity.bgColor}`}>
                      {intensity.label}
                    </span>
                  </div>

                  {/* Visual Intensity Bar (Soft & Gradual) */}
                  <div className="mb-3">
                    <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                      <span>Intensidad de señal:</span>
                      <span className="font-medium text-slate-700">{intensity.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${intensity.barColor}`}
                        style={{ width: `${intensity.percentage}%` }}
                      />
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {res.texto_resultado || intensity.desc}
                  </p>
                </div>

                {/* Fuente científica simulada */}
                <div className="pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 flex items-start gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-altius-600 shrink-0 mt-0.5" />
                  <span className="italic">
                    {res.fuente || 'Vizcarra & Terán (2018), intervención educativa'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sección Próximos Pasos (Aula y Casa) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-teal-600" />
          Próximos Pasos: Acciones Inmediatas de Apoyo
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          Estrategias pedagógicas aplicables inmediatamente tanto en la escuela como en el hogar sin necesidad de esperar un diagnóstico formal.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Columna Aula */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-altius-50 text-altius-700 flex items-center justify-center">
                <School className="w-4 h-4" />
              </div>
              <h4 className="font-semibold text-sm text-slate-900">Para el Aula (Docentes)</h4>
            </div>

            <div className="space-y-3">
              {sugerenciasAula.length > 0 ? (
                sugerenciasAula.map((sug) => (
                  <div key={sug.id_sugerencia} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs">
                    <p className="font-semibold text-slate-800 mb-1">{sug.sugerencia}</p>
                    <p className="text-slate-600 leading-relaxed mb-2">{sug.detalle}</p>
                    {sug.fuente && (
                      <p className="text-[10px] text-slate-400 italic">Fuente: {sug.fuente}</p>
                    )}
                  </div>
                ))
              ) : (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs">
                  <p className="font-semibold text-slate-800 mb-1">Ubicación estratégica y consignas fragmentadas</p>
                  <p className="text-slate-600 leading-relaxed">Ubicar al estudiante en zonas con menor dispersión y brindar instrucciones paso a paso con verificación visual.</p>
                </div>
              )}
            </div>
          </div>

          {/* Columna Casa */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
                <Home className="w-4 h-4" />
              </div>
              <h4 className="font-semibold text-sm text-slate-900">Para el Hogar (Familias)</h4>
            </div>

            <div className="space-y-3">
              {sugerenciasCasa.length > 0 ? (
                sugerenciasCasa.map((sug) => (
                  <div key={sug.id_sugerencia} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs">
                    <p className="font-semibold text-slate-800 mb-1">{sug.sugerencia}</p>
                    <p className="text-slate-600 leading-relaxed mb-2">{sug.detalle}</p>
                    {sug.fuente && (
                      <p className="text-[10px] text-slate-400 italic">Fuente: {sug.fuente}</p>
                    )}
                  </div>
                ))
              ) : (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs">
                  <p className="font-semibold text-slate-800 mb-1">Estructuración y refuerzo positivo</p>
                  <p className="text-slate-600 leading-relaxed">Fomentar horarios estables de estudio con descansos activos y valorar los avances en el proceso más que el resultado numérico.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tarjeta de Derivación Destacada */}
      <div className="bg-gradient-to-br from-altius-800 to-altius-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium backdrop-blur-xs">
            <Info className="w-3.5 h-3.5 text-teal-300" />
            Ruta de Acompañamiento Profesional
          </div>
          <h3 className="text-xl font-bold">¿Necesitas derivar a un profesional o buscar ayuda?</h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl leading-relaxed">
            Explora el directorio de gabinetes psicopedagógicos, centros universitarios y de salud mental disponibles en Bolivia para una valoración integral.
          </p>
        </div>

        <button
          onClick={onNavigateToReferral}
          className="shrink-0 px-6 py-3.5 rounded-xl bg-white text-altius-900 hover:bg-slate-100 font-semibold text-sm shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>Ver Directorio de Ayuda</span>
          <ExternalLink className="w-4 h-4 text-altius-700" />
        </button>
      </div>
    </div>
  );
};
