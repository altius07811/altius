import React, { useState } from 'react';
import { 
  BookOpen, 
  X, 
  Search, 
  Copy, 
  Check, 
  Scale, 
  Globe2, 
  ShieldAlert, 
  GraduationCap, 
  FileText
} from 'lucide-react';
import { MOCK_REFERENCIAS_CIENTIFICAS, MOCK_REGLAS_GENERALES } from '../data/mockData';

interface ScientificReferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScientificReferencesModal: React.FC<ScientificReferencesModalProps> = ({
  isOpen,
  onClose
}) => {
  const [tabActiva, setTabActiva] = useState<'referencias' | 'metodologia' | 'reglas'>('referencias');
  const [filtroCategoria, setFiltroCategoria] = useState<string>('Todas');
  const [busqueda, setBusqueda] = useState<string>('');
  const [copiadoId, setCopiadoId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopyAPA = (ref: typeof MOCK_REFERENCIAS_CIENTIFICAS[0]) => {
    const apaText = `${ref.autores} (${ref.ano}). ${ref.titulo}. ${ref.revista}. DOI: ${ref.doi}`;
    navigator.clipboard.writeText(apaText);
    setCopiadoId(ref.id);
    setTimeout(() => setCopiadoId(null), 2000);
  };

  const referenciasFiltradas = MOCK_REFERENCIAS_CIENTIFICAS.filter((r) => {
    const matchCat = filtroCategoria === 'Todas' || r.categoria === filtroCategoria;
    const matchSearch = busqueda === '' || 
      r.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      r.autores.toLowerCase().includes(busqueda.toLowerCase()) ||
      r.revista.toLowerCase().includes(busqueda.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm">
      <div 
        className="bg-[#FFFDF9] rounded-3xl border-2 border-[#3E83A8] shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div className="p-5 sm:p-6 bg-[#E4EEF6] border-b border-[#D4DFEB] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#3E83A8] text-[#F5FBFF] flex items-center justify-center shadow-soft-sm">
              <BookOpen className="w-5 h-5 text-[#F5FBFF]" />
            </div>
            <div>
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#253444]">
                Marco Científico y Fuentes Bibliográficas
              </h2>
              <p className="text-xs text-[#576574] font-semibold">
                Respaldo académico, metodológico y psicométrico de ALTIUS
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white hover:bg-[#F9F7EE] text-[#576574] hover:text-[#253444] border border-[#D4DFEB] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-5 sm:px-6 pt-4 border-b border-[#D4DFEB] flex gap-2 overflow-x-auto bg-[#F9F7EE]">
          <button
            type="button"
            onClick={() => setTabActiva('referencias')}
            className={`px-4 py-2.5 rounded-t-2xl font-bold text-xs sm:text-sm transition-colors cursor-pointer border-t-2 border-x-2 ${
              tabActiva === 'referencias'
                ? 'bg-[#FFFDF9] border-[#3E83A8] text-[#3E83A8]'
                : 'border-transparent text-[#576574] hover:text-[#253444]'
            }`}
          >
            📚 Biblioteca de Referencias ({MOCK_REFERENCIAS_CIENTIFICAS.length})
          </button>
          <button
            type="button"
            onClick={() => setTabActiva('metodologia')}
            className={`px-4 py-2.5 rounded-t-2xl font-bold text-xs sm:text-sm transition-colors cursor-pointer border-t-2 border-x-2 ${
              tabActiva === 'metodologia'
                ? 'bg-[#FFFDF9] border-[#3E83A8] text-[#3E83A8]'
                : 'border-transparent text-[#576574] hover:text-[#253444]'
            }`}
          >
            ⚖️ Criterios Metodológicos y Contexto Bolivia
          </button>
          <button
            type="button"
            onClick={() => setTabActiva('reglas')}
            className={`px-4 py-2.5 rounded-t-2xl font-bold text-xs sm:text-sm transition-colors cursor-pointer border-t-2 border-x-2 ${
              tabActiva === 'reglas'
                ? 'bg-[#FFFDF9] border-[#3E83A8] text-[#3E83A8]'
                : 'border-transparent text-[#576574] hover:text-[#253444]'
            }`}
          >
            🛡️ Reglas Clínicas de Interpretación ({MOCK_REGLAS_GENERALES.length})
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5">
          {/* TAB 1: REFERENCIAS */}
          {tabActiva === 'referencias' && (
            <div className="space-y-4">
              {/* Filter bar */}
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
                  {['Todas', 'TDAH', 'Dislexia', 'Discalculia', 'TCC y Pedagogía'].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setFiltroCategoria(cat)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        filtroCategoria === cat
                          ? 'bg-[#3E83A8] text-[#F5FBFF] shadow-soft-xs'
                          : 'bg-[#E4EEF6] text-[#253444] hover:bg-[#C2E4F8]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 text-[#576574] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    placeholder="Buscar autor, título o DOI..."
                    className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-[#D4DFEB] bg-white text-[#253444] focus:outline-none focus:ring-2 focus:ring-[#3E83A8]"
                  />
                </div>
              </div>

              {/* References List */}
              <div className="space-y-3">
                {referenciasFiltradas.map((ref) => (
                  <div
                    key={ref.id}
                    className="p-4 rounded-2xl bg-white border border-[#D4DFEB] hover:border-[#6BA7C9] transition-all space-y-2 shadow-soft-xs"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#DFD5F5] text-[#483962]">
                          {ref.categoria}
                        </span>
                        <h4 className="font-bold text-sm text-[#253444] leading-snug">
                          {ref.titulo}
                        </h4>
                        <p className="text-xs text-[#576574] font-semibold">
                          {ref.autores} ({ref.ano}) • <span className="italic">{ref.revista}</span>
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCopyAPA(ref)}
                        title="Copiar referencia en formato APA"
                        className="p-2 rounded-xl border border-[#D4DFEB] bg-[#F9F7EE] hover:bg-[#E4EEF6] text-[#576574] hover:text-[#253444] transition-colors cursor-pointer shrink-0"
                      >
                        {copiadoId === ref.id ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-[#253444]/90 bg-[#F9F7EE] p-2.5 rounded-xl border border-[#D4DFEB]/60">
                      <strong>Aporte a la plataforma:</strong> {ref.resumen}
                    </p>

                    <div className="flex items-center gap-2 text-[11px] text-[#3E83A8] font-mono font-semibold">
                      <span>DOI: {ref.doi}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: METODOLOGÍA */}
          {tabActiva === 'metodologia' && (
            <div className="space-y-4 text-xs sm:text-sm text-[#253444] leading-relaxed">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#E4EEF6] border border-[#C2E4F8] space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#12415E]">
                  <Scale className="w-5 h-5 text-[#3E83A8]" />
                  <span className="text-sm sm:text-base">1. Naturaleza de Cribado Temprano (Screening)</span>
                </div>
                <p>
                  El banco de preguntas no constituye una prueba diagnóstica cerrada, sino una herramienta de <strong>detección temprana y tamizaje orientativo</strong> basada en escalas validadas internacionalmente (ADHD Rating Scale-IV, Vanderbilt, SNAP-IV, PROLEC-R, TEDI-MATH). Un resultado con señales moderadas o relevantes justifica una evaluación multidisciplinaria integral, pero no etiqueta clínicamente al estudiante.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#CAEFDD] border border-[#BCEBD1] space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#1C463C]">
                  <Globe2 className="w-5 h-5 text-[#0D4233]" />
                  <span className="text-sm sm:text-base">2. Nota Metodológica para Bolivia y Latinoamérica</span>
                </div>
                <p>
                  Ningún instrumento psicométrico internacional cuenta con baremaciones estandarizadas universales para todas las regiones de Bolivia. Por ello:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Se priorizan pruebas validadas en poblaciones hispanohablantes (España, México, Colombia, Chile).</li>
                  <li><strong>Diversidad Lingüística y Cultural:</strong> Cuando el estudiante tiene el castellano como segunda lengua (L2) o presenta escolaridad discontinua, se debe evitar confundir una barrera de adquisición lingüística con un trastorno del neurodesarrollo. Se recomienda evaluación dinámica y contextualizada.</li>
                  <li>Los puntos de corte y percentiles deben ser contrastados por el psicopedagogo institucional con la realidad de su comunidad educativa.</li>
                </ul>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#DFD5F5] border border-[#D4DFEB] space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#483962]">
                  <GraduationCap className="w-5 h-5 text-[#483962]" />
                  <span className="text-sm sm:text-base">3. Enfoque Multi-Informante y Comorbilidad</span>
                </div>
                <p>
                  La literatura (Makransky & Bilenberg, 2014; Mulraney et al., 2021) evidencia que la concordancia entre padres y docentes oscila entre moderada y baja debido a que cada entorno impone demandas ejecutivas y atencionales diferentes. ALTIUS promueve la triangulación de miradas (Docente + Familia + Profesional).
                </p>
                <p>
                  Asimismo, la comorbilidad entre dificultades de lectura (Dislexia) y razonamiento matemático (Discalculia) o autorregulación (TDAH) alcanza hasta un 40-50%, por lo que la plataforma permite analizar perfiles mixtos de manera simultánea.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: REGLAS CLÍNICAS */}
          {tabActiva === 'reglas' && (
            <div className="space-y-3">
              <p className="text-xs text-[#576574] font-semibold">
                Reglas y principios de interpretación pedagógica integrados en el motor de análisis de ALTIUS (tomados de <span className="font-mono font-bold">Excel_4_Interpretacion_y_Planes.xlsx</span>):
              </p>
              {MOCK_REGLAS_GENERALES.map((reg, idx) => (
                <div
                  key={reg.id_regla || idx}
                  className="p-4 rounded-2xl bg-white border border-[#D4DFEB] space-y-2 shadow-soft-xs"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-sm text-[#253444] flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-[#3E83A8]" />
                      {reg.regla}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#E4EEF6] text-[#12415E]">
                      {reg.categoria}
                    </span>
                  </div>

                  <div className="text-xs text-[#576574]">
                    <strong>Condición:</strong> {reg.condicion}
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#F9F7EE] text-xs text-[#253444] border border-[#D4DFEB]/60">
                    <strong>Acción del sistema:</strong> {reg.que_hace_la_app}
                  </div>

                  <div className="text-[11px] text-[#576574] italic">
                    Fuente: {reg.fuente}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Modal */}
        <div className="p-4 sm:p-5 bg-[#F9F7EE] border-t border-[#D4DFEB] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-[#576574] font-semibold">
            <FileText className="w-4 h-4 text-[#3E83A8]" />
            <span>Documentación revisada conforme a manuales DSM-5 y literatura científica indexada</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#3E83A8] hover:bg-[#326E8F] text-[#F5FBFF] transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
