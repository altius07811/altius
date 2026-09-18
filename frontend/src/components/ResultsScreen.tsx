import React, { useState, useEffect } from 'react';
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
  HeartHandshake,
  Bot,
  Send,
  Loader2,
  Lightbulb,
  MessageSquare,
  Wrench,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Stethoscope
} from 'lucide-react';
import { ResultadoCategoria, SugerenciaItem, AnalisisPedagogicoIA } from '../types';
import { consultarAsistenteIA } from '../services/api';
import { MOCK_HERRAMIENTAS_TCC } from '../data/mockData';

interface ResultsScreenProps {
  studentCode: string;
  resultados: ResultadoCategoria[];
  sugerencias: SugerenciaItem[];
  analisisIA?: AnalisisPedagogicoIA | null;
  observaciones?: string;
  avisoLegal?: string;
  onNavigateToReferral: () => void;
  onRestart: () => void;
  onOpenReferences?: () => void;
}

// Componente para efecto de máquina de escribir fluido (typewriter)
const TypewriterText: React.FC<{ text: string; speed?: number }> = ({ text, speed = 12 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        const step = Math.min(2, text.length - currentIndex);
        setDisplayedText((prev) => prev + text.slice(currentIndex, currentIndex + step));
        setCurrentIndex((prev) => prev + step);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && (
        <span className="inline-block w-1.5 h-3.5 bg-[#3E83A8] ml-0.5 align-middle animate-pulse rounded-full" />
      )}
    </span>
  );
};

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  studentCode,
  resultados,
  sugerencias,
  analisisIA,
  observaciones,
  avisoLegal,
  onNavigateToReferral,
  onRestart,
  onOpenReferences
}) => {
  // Asistente interactivo de IA
  const [preguntaIA, setPreguntaIA] = useState('');
  const [cargandoIA, setCargandoIA] = useState(false);
  const [historialChat, setHistorialChat] = useState<Array<{ id: number; remitente: 'usuario' | 'ia'; texto: string; isNew?: boolean }>>([]);

  // Pestaña activa para el plan en 3 bloques
  const [tabPlan, setTabPlan] = useState<'aula' | 'casa' | 'profesional'>('aula');
  
  // Herramienta TCC seleccionada/expandida
  const [herramientaExpandida, setHerramientaExpandida] = useState<string | null>(null);

  const handleEnviarConsultaIA = async (preguntaTexto?: string) => {
    const textoAEnviar = (preguntaTexto || preguntaIA).trim();
    if (!textoAEnviar || cargandoIA) return;

    const userMsgId = Date.now();
    setHistorialChat((prev) => [...prev, { id: userMsgId, remitente: 'usuario', texto: textoAEnviar }]);
    setPreguntaIA('');
    setCargandoIA(true);

    try {
      const resp = await consultarAsistenteIA(textoAEnviar, {
        estudiante_id: studentCode,
        resultados: resultados.map((r) => ({ categoria: r.categoria, nivel: r.nivel })),
        observaciones
      });
      const aiMsgId = Date.now() + 1;
      setHistorialChat((prev) => [...prev, { id: aiMsgId, remitente: 'ia', texto: resp.respuesta, isNew: true }]);
    } catch {
      setHistorialChat((prev) => [
        ...prev,
        { id: Date.now() + 2, remitente: 'ia', texto: 'No se pudo completar la consulta en este momento. Intenta de nuevo.', isNew: true }
      ]);
    } finally {
      setCargandoIA(false);
    }
  };

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

  const sugerenciasAula = sugerencias.filter((s) => s.contexto === 'aula' || s.contexto === 'escuela');
  const sugerenciasCasa = sugerencias.filter((s) => s.contexto === 'casa');
  const sugerenciasProfesional = sugerencias.filter((s) => s.contexto === 'profesional' || s.contexto === 'derivacion');

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 fade-in space-y-6 sm:space-y-8">
      
      {/* SECCIÓN 1: Cabecera y Reporte General (Borde Azul Cielo Suave #6BA7C9) */}
      <div className="bg-[#FFFDF9] rounded-3xl border-2 border-[#6BA7C9] shadow-soft-md p-6 sm:p-10 space-y-6">
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

          <div className="flex flex-wrap items-center gap-2.5 self-start sm:self-center">
            {onOpenReferences && (
              <button
                type="button"
                onClick={onOpenReferences}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-bold bg-[#DFD5F5] hover:bg-[#d0c2ee] text-[#483962] transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#483962]" />
                <span>Fuentes Científicas</span>
              </button>
            )}
            <button
              onClick={onRestart}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold bg-[#E4EEF6] hover:bg-[#d5e5f2] text-[#253444] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-[#3E83A8]" />
              <span>Nueva observación</span>
            </button>
          </div>
        </div>

        {/* Destacado: Recordatorio Ético y Metodológico */}
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

      {/* SECCIÓN 2: Niveles de Señal Detectados por Área (Borde Azul Primario #3E83A8) */}
      <div className="bg-[#FFFDF9] rounded-3xl border-2 border-[#3E83A8] shadow-soft-md p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#253444] flex items-center gap-2.5">
            <BarChart3 className="w-6 h-6 text-[#3E83A8]" />
            Niveles de Señal Detectados por Área
          </h3>
          {onOpenReferences && (
            <button
              type="button"
              onClick={onOpenReferences}
              className="text-xs font-bold text-[#3E83A8] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <BookOpenCheck className="w-4 h-4" />
              <span>Ver baremos y referencias</span>
            </button>
          )}
        </div>

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

                  {/* Visual Intensity Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-[#576574] mb-1.5 font-bold">
                      <span>Puntaje: {res.puntaje_total || 0} pts</span>
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
                    {res.fuente || 'Vizcarra & Terán (2018); Defior & Serrano (2014); Butterworth (2019)'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECCIÓN 3: Síntesis Pedagógica Personalizada con IA (Borde Lavanda #9e6eff) */}
      {analisisIA && (
        <div className="bg-[#FFFDF9] rounded-3xl border-2 border-[#9e6eff] shadow-soft-md p-6 sm:p-10 space-y-6">
          <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#D4DFEB]">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#DFD5F5] text-[#483962] flex items-center justify-center shadow-soft-sm">
                <Bot className="w-6 h-6 text-[#483962]" />
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#253444]">
                  Síntesis y Adaptaciones con IA
                </h3>
                <p className="text-xs text-[#576574] font-semibold">
                  Análisis cualitativo generado en base a las respuestas y observaciones ingresadas
                </p>
              </div>
            </div>
          </div>

          {/* Resumen Cualitativo con efecto de escritura */}
          <div className="p-5 rounded-2xl bg-[#E4EEF6]/80 border border-[#D4DFEB] text-xs sm:text-sm text-[#253444] leading-relaxed">
            <p className="font-bold text-sm mb-1.5 text-[#12415E] flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-[#3E83A8]" />
              Perfil Cualitativo Observado:
            </p>
            <div className="font-medium text-[#253444]">
              <TypewriterText text={analisisIA.resumen_cualitativo} speed={10} />
            </div>
          </div>

          {/* Estrategias de IA para Aula y Casa */}
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Aula IA */}
            {analisisIA.estrategias_aula && analisisIA.estrategias_aula.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-[#253444] flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#3E83A8]" />
                  Adaptaciones de Aula Recomendadas:
                </h4>
                {analisisIA.estrategias_aula.map((est, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#D4DFEB] text-xs space-y-1 shadow-soft-sm">
                    <p className="font-bold text-[#253444]">{est.titulo}</p>
                    <p className="text-[#576574] leading-relaxed">{est.descripcion}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Casa IA */}
            {analisisIA.estrategias_casa && analisisIA.estrategias_casa.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-[#253444] flex items-center gap-2">
                  <Home className="w-4 h-4 text-[#1C463C]" />
                  Pautas Familiares Recomendadas:
                </h4>
                {analisisIA.estrategias_casa.map((est, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#D4DFEB] text-xs space-y-1 shadow-soft-sm">
                    <p className="font-bold text-[#253444]">{est.titulo}</p>
                    <p className="text-[#576574] leading-relaxed">{est.descripcion}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* SECCIÓN 4: Plan de Intervención en 3 Bloques (Borde Verde Menta #52b380) */}
      <div className="bg-[#FFFDF9] rounded-3xl border-2 border-[#52b380] shadow-soft-md p-6 sm:p-10 space-y-6">
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#253444] flex items-center gap-2.5">
            <CheckCircle2 className="w-6 h-6 text-[#1C463C]" />
            Plan de Intervención Diferenciado (3 Niveles)
          </h3>
          <p className="text-xs sm:text-sm text-[#576574] mt-1 font-semibold">
            Pautas basadas en evidencia científica para el aula, la familia y el gabinete psicopedagógico (Excel 2).
          </p>
        </div>

        {/* 3-Tier Tab Selector */}
        <div className="grid grid-cols-3 gap-2 bg-[#F9F7EE] p-1.5 rounded-2xl border border-[#D4DFEB]">
          <button
            type="button"
            onClick={() => setTabPlan('aula')}
            className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
              tabPlan === 'aula'
                ? 'bg-[#CAEFDD] text-[#0D4233] shadow-soft-xs'
                : 'text-[#576574] hover:bg-[#E4EEF6]'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>1. Escuela / Aula ({sugerenciasAula.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setTabPlan('casa')}
            className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
              tabPlan === 'casa'
                ? 'bg-[#C2E4F8] text-[#12415E] shadow-soft-xs'
                : 'text-[#576574] hover:bg-[#E4EEF6]'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>2. Familia / Hogar ({sugerenciasCasa.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setTabPlan('profesional')}
            className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
              tabPlan === 'profesional'
                ? 'bg-[#DFD5F5] text-[#483962] shadow-soft-xs'
                : 'text-[#576574] hover:bg-[#E4EEF6]'
            }`}
          >
            <Stethoscope className="w-4 h-4" />
            <span>3. Profesional ({sugerenciasProfesional.length})</span>
          </button>
        </div>

        {/* Tab Content List */}
        <div className="space-y-3.5 pt-1">
          {tabPlan === 'aula' && (
            <div className="grid sm:grid-cols-2 gap-3.5">
              {sugerenciasAula.map((sug) => (
                <div key={sug.id_sugerencia} className="p-4 rounded-2xl bg-[#E4EEF6]/60 border border-[#D4DFEB] text-xs sm:text-sm space-y-1.5 shadow-soft-sm">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#CAEFDD] text-[#0D4233]">
                      {sug.categoria} • {sug.nivel}
                    </span>
                  </div>
                  <p className="font-bold text-[#253444]">{sug.sugerencia}</p>
                  <p className="text-[#576574] leading-relaxed">{sug.detalle}</p>
                  {sug.fuente && (
                    <p className="text-[11px] text-[#3E83A8] italic font-semibold pt-1 border-t border-[#D4DFEB]/60">
                      Fuente: {sug.fuente}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {tabPlan === 'casa' && (
            <div className="grid sm:grid-cols-2 gap-3.5">
              {sugerenciasCasa.map((sug) => (
                <div key={sug.id_sugerencia} className="p-4 rounded-2xl bg-[#E4EEF6]/60 border border-[#D4DFEB] text-xs sm:text-sm space-y-1.5 shadow-soft-sm">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#C2E4F8] text-[#12415E]">
                      {sug.categoria} • {sug.nivel}
                    </span>
                  </div>
                  <p className="font-bold text-[#253444]">{sug.sugerencia}</p>
                  <p className="text-[#576574] leading-relaxed">{sug.detalle}</p>
                  {sug.fuente && (
                    <p className="text-[11px] text-[#3E83A8] italic font-semibold pt-1 border-t border-[#D4DFEB]/60">
                      Fuente: {sug.fuente}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {tabPlan === 'profesional' && (
            <div className="grid sm:grid-cols-2 gap-3.5">
              {sugerenciasProfesional.map((sug) => (
                <div key={sug.id_sugerencia} className="p-4 rounded-2xl bg-[#E4EEF6]/60 border border-[#D4DFEB] text-xs sm:text-sm space-y-1.5 shadow-soft-sm">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#DFD5F5] text-[#483962]">
                      {sug.categoria} • {sug.nivel}
                    </span>
                  </div>
                  <p className="font-bold text-[#253444]">{sug.sugerencia}</p>
                  <p className="text-[#576574] leading-relaxed">{sug.detalle}</p>
                  {sug.fuente && (
                    <p className="text-[11px] text-[#3E83A8] italic font-semibold pt-1 border-t border-[#D4DFEB]/60">
                      Fuente: {sug.fuente}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* SECCIÓN 5: Caja de Herramientas TCC (Borde Azul Océano #3E83A8) */}
      <div className="bg-[#FFFDF9] rounded-3xl border-2 border-[#3E83A8] shadow-soft-md p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#D4DFEB]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#C2E4F8] text-[#12415E] flex items-center justify-center shadow-soft-sm">
              <Wrench className="w-5 h-5 text-[#12415E]" />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#253444]">
                Caja de Herramientas TCC y Estrategias Prácticas
              </h3>
              <p className="text-xs text-[#576574] font-semibold">
                Técnicas cognitivo-conductuales y pedagógicas para la autorregulación y el aprendizaje (Excel 4)
              </p>
            </div>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#E4EEF6] text-[#12415E] self-start sm:self-center">
            {MOCK_HERRAMIENTAS_TCC.length} técnicas
          </span>
        </div>

        <div className="grid gap-3.5">
          {MOCK_HERRAMIENTAS_TCC.map((herramienta) => {
            const isExpanded = herramientaExpandida === herramienta.id_herramienta;
            return (
              <div
                key={herramienta.id_herramienta}
                className="p-4 rounded-2xl bg-white border border-[#D4DFEB] hover:border-[#6BA7C9] transition-all shadow-soft-xs space-y-2"
              >
                <button
                  type="button"
                  onClick={() => setHerramientaExpandida(isExpanded ? null : herramienta.id_herramienta)}
                  className="w-full text-left flex items-center justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-[#DFD5F5] text-[#483962]">
                      {herramienta.categoria}
                    </span>
                    <h4 className="font-bold text-sm text-[#253444] hover:text-[#3E83A8] transition-colors">
                      {herramienta.tecnica}
                    </h4>
                  </div>
                  <div className="text-[#576574] shrink-0">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                <p className="text-xs text-[#576574] leading-relaxed">
                  {herramienta.descripcion}
                </p>

                {isExpanded && (
                  <div className="pt-3 mt-2 border-t border-[#D4DFEB]/80 space-y-2.5 text-xs bg-[#F9F7EE] p-3.5 rounded-xl animate-fade-in">
                    <div>
                      <strong className="text-[#253444] block mb-1">🛠️ Aplicación práctica paso a paso:</strong>
                      <p className="text-[#253444] leading-relaxed">{herramienta.aplicacion_practica}</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#D4DFEB]/60 text-[11px] text-[#576574]">
                      <span><strong>Dirigido a:</strong> {herramienta.dirigido_a}</span>
                      <span className="italic font-semibold text-[#3E83A8]">Fuente: {herramienta.fuente}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SECCIÓN 6: Asistente Pedagógico con IA (Borde Ámbar #d97706) */}
      <div className="bg-[#FFFDF9] rounded-3xl border-2 border-[#d97706] shadow-soft-md p-6 sm:p-10 space-y-5">
        <div className="flex items-center gap-3 pb-3 border-b border-[#D4DFEB]">
          <div className="w-10 h-10 rounded-2xl bg-[#F6E6CB] text-[#65452A] flex items-center justify-center shadow-soft-sm">
            <MessageSquare className="w-5 h-5 text-[#65452A]" />
          </div>
          <div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#253444]">
              ¿Tienes dudas sobre cómo apoyar a este estudiante?
            </h3>
            <p className="text-xs text-[#576574] font-semibold">
              Consulta en tiempo real al Asistente Psicopedagógico con IA
            </p>
          </div>
        </div>

        {/* Sugerencias Rápidas de Pregunta */}
        <div className="flex flex-wrap gap-2 pt-1">
          {[
            '¿Cómo aplicar el método de autoinstrucciones?',
            '¿Qué adaptaciones sugeridas para dislexia en aula?',
            '¿Cómo estructurar una economía de fichas?'
          ].map((sug, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleEnviarConsultaIA(sug)}
              className="text-[11px] font-bold bg-[#E4EEF6] hover:bg-[#C2E4F8] text-[#12415E] px-3.5 py-1.5 rounded-full border border-[#D4DFEB] transition-colors cursor-pointer shadow-soft-sm"
            >
              {sug}
            </button>
          ))}
        </div>

        {/* Historial de conversación con efecto de escritura progresivo */}
        {historialChat.length > 0 && (
          <div className="space-y-3 pt-2 max-h-80 overflow-y-auto pr-1">
            {historialChat.map((msg) => (
              <div
                key={msg.id}
                className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-soft-sm ${
                  msg.remitente === 'usuario'
                    ? 'bg-[#C2E4F8] text-[#12415E] ml-6 border border-[#a6d8f6]'
                    : 'bg-[#CAEFDD]/70 text-[#1C463C] mr-6 border border-[#BCEBD1]'
                }`}
              >
                <span className="font-bold block mb-1">
                  {msg.remitente === 'usuario' ? 'Tu consulta:' : 'Orientación Psicopedagógica IA:'}
                </span>
                <div>
                  {msg.remitente === 'ia' ? (
                    <TypewriterText text={msg.texto} speed={10} />
                  ) : (
                    <p>{msg.texto}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Input de consulta */}
        <div className="flex items-center gap-2 pt-2">
          <input
            type="text"
            value={preguntaIA}
            onChange={(e) => setPreguntaIA(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleEnviarConsultaIA()}
            placeholder="Escribe tu consulta pedagógica aquí..."
            className="flex-1 px-4 py-3 rounded-2xl border-2 border-[#D4DFEB] bg-[#FFFDF9] text-xs sm:text-sm font-semibold text-[#253444] focus:outline-none focus:ring-2 focus:ring-[#6BA7C9] focus:border-[#3E83A8] transition-all"
            disabled={cargandoIA}
          />
          <button
            type="button"
            onClick={() => handleEnviarConsultaIA()}
            disabled={!preguntaIA.trim() || cargandoIA}
            className="px-5 py-3 rounded-2xl bg-[#3E83A8] hover:bg-[#326E8F] text-[#F5FBFF] font-bold text-xs sm:text-sm shadow-soft-sm hover:shadow-soft-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {cargandoIA ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <span>Preguntar</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* SECCIÓN 7: Tarjeta de Derivación Destacada (Borde Menta Suave #CAEFDD) */}
      <div className="bg-[#253444] rounded-3xl border-2 border-[#CAEFDD] p-7 sm:p-9 text-[#F5FBFF] shadow-soft-lg flex flex-col sm:flex-row items-center justify-between gap-6">
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
