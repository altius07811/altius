import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  BookOpenCheck, 
  Sparkles, 
  Loader2, 
  AlertTriangle,
  GraduationCap,
  Stethoscope,
  Info,
  Check
} from 'lucide-react';
import { PreguntaEncuesta, RespuestaUsuario, RolEncuestado, TestProfesionalItem } from '../types';

interface SurveyScreenProps {
  preguntas: PreguntaEncuesta[];
  testsProfesionales?: TestProfesionalItem[];
  rolSeleccionado: RolEncuestado;
  studentCode: string;
  loading: boolean;
  onSubmit: (
    respuestas: RespuestaUsuario[],
    testsAdministrados?: Array<{ test: string; categoria: string; puntaje_o_observacion: string }>
  ) => Promise<void>;
  onBack: () => void;
}

export const SurveyScreen: React.FC<SurveyScreenProps> = ({
  preguntas,
  testsProfesionales = [],
  rolSeleccionado,
  studentCode,
  loading,
  onSubmit,
  onBack
}) => {
  const isProfesional = rolSeleccionado === 'profesional';

  // Estados para modo docente / padre
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categoriaActiva, setCategoriaActiva] = useState<'TDAH' | 'Dislexia' | 'Discalculia'>('TDAH');
  const [respuestas, setRespuestas] = useState<Record<string, { opcionId?: string; texto: string; peso: number }>>({});
  
  // Estados para modo psicopedagogo
  const [testsSeleccionados, setTestsSeleccionados] = useState<Record<string, { seleccionado: boolean; notas: string; nivelSugerido: number }>>({});
  const [respuestasProfesional, setRespuestasProfesional] = useState<Record<string, string>>({});

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (loading || (preguntas.length === 0 && (!isProfesional || testsProfesionales.length === 0))) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <Loader2 className="w-9 h-9 text-[#3E83A8] animate-spin mx-auto mb-3.5" />
        <p className="text-base font-bold text-[#253444]">Cargando instrumentos pedagógicos...</p>
      </div>
    );
  }

  // --- LÓGICA PARA DOCENTE / PADRE ---
  const preguntasFiltradas = preguntas.filter((p) => p.categoria === categoriaActiva);
  const totalPreguntasGlobal = preguntas.length;
  const preguntasRespondidasGlobal = Object.keys(respuestas).length;
  const progressPercent = Math.round((preguntasRespondidasGlobal / Math.max(1, totalPreguntasGlobal)) * 100);

  const currentPregunta = preguntasFiltradas[currentIndex] || preguntasFiltradas[0] || preguntas[0];
  const currentAnswer = currentPregunta ? respuestas[currentPregunta.id_pregunta] : undefined;

  const handleSelectOption = (preguntaId: string, opcionId: string, texto: string, peso: number) => {
    setRespuestas((prev) => ({
      ...prev,
      [preguntaId]: {
        opcionId,
        texto,
        peso
      }
    }));
    setErrorMsg(null);
  };

  const handleTextChange = (preguntaId: string, text: string) => {
    setRespuestas((prev) => ({
      ...prev,
      [preguntaId]: {
        texto: text,
        peso: 0
      }
    }));
    setErrorMsg(null);
  };

  const handleNextQuestion = () => {
    if (currentPregunta.tipo_pregunta === 'opcion_multiple' && !currentAnswer?.opcionId) {
      setErrorMsg('Por favor selecciona una opción para continuar.');
      return;
    }

    if (currentIndex < preguntasFiltradas.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setErrorMsg(null);
    } else {
      // Si terminó esta categoría, avanzar a la siguiente
      if (categoriaActiva === 'TDAH') {
        setCategoriaActiva('Dislexia');
        setCurrentIndex(0);
        setErrorMsg(null);
      } else if (categoriaActiva === 'Dislexia') {
        setCategoriaActiva('Discalculia');
        setCurrentIndex(0);
        setErrorMsg(null);
      } else {
        handleFinalSubmitDocente();
      }
    }
  };

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setErrorMsg(null);
    } else {
      if (categoriaActiva === 'Discalculia') {
        setCategoriaActiva('Dislexia');
        setCurrentIndex(0);
      } else if (categoriaActiva === 'Dislexia') {
        setCategoriaActiva('TDAH');
        setCurrentIndex(0);
      } else {
        onBack();
      }
    }
  };

  const handleFinalSubmitDocente = async () => {
    setSubmitting(true);
    setErrorMsg(null);

    const payload: RespuestaUsuario[] = preguntas.map((p) => {
      const resp = respuestas[p.id_pregunta];
      return {
        id_pregunta: p.id_pregunta,
        categoria: p.categoria,
        id_opcion: resp?.opcionId,
        texto_opcion: resp?.texto,
        respuesta: resp?.texto || '',
        peso: resp?.peso || 0
      };
    });

    try {
      await onSubmit(payload);
    } catch {
      setErrorMsg('Ocurrió un inconveniente al procesar las respuestas. Reintenta por favor.');
      setSubmitting(false);
    }
  };

  // --- LÓGICA PARA PSICOPEDAGOGO ---
  const handleToggleTest = (testNombre: string) => {
    setTestsSeleccionados((prev) => ({
      ...prev,
      [testNombre]: {
        seleccionado: !prev[testNombre]?.seleccionado,
        notas: prev[testNombre]?.notas || '',
        nivelSugerido: prev[testNombre]?.nivelSugerido || 2
      }
    }));
  };

  const handleTestNotaChange = (testNombre: string, notas: string, nivelSugerido: number) => {
    setTestsSeleccionados((prev) => ({
      ...prev,
      [testNombre]: {
        seleccionado: true,
        notas,
        nivelSugerido
      }
    }));
  };

  const handleFinalSubmitProfesional = async () => {
    setSubmitting(true);
    setErrorMsg(null);

    // 1. Convertir preguntas cualitativas de profesional
    const payloadRespuestas: RespuestaUsuario[] = preguntas.map((p) => {
      const respTexto = respuestasProfesional[p.id_pregunta] || '';
      return {
        id_pregunta: p.id_pregunta,
        categoria: p.categoria,
        respuesta: respTexto,
        peso: respTexto.trim() ? 2 : 0
      };
    });

    // 2. Extraer tests administrados
    const testsAdministrados: Array<{ test: string; categoria: string; puntaje_o_observacion: string }> = [];
    testsProfesionales.forEach((t) => {
      const datosTest = testsSeleccionados[t.test];
      if (datosTest?.seleccionado) {
        testsAdministrados.push({
          test: t.test,
          categoria: t.categoria,
          puntaje_o_observacion: datosTest.notas || 'Administrado satisfactoriamente'
        });
        // Agregar peso ponderado para el resultado cuantitativo
        payloadRespuestas.push({
          id_pregunta: `TEST_${t.categoria}_${t.test}`,
          categoria: t.categoria as any,
          respuesta: datosTest.notas,
          peso: datosTest.nivelSugerido || 2
        });
      }
    });

    try {
      await onSubmit(payloadRespuestas, testsAdministrados);
    } catch {
      setErrorMsg('Ocurrió un error al procesar el reporte psicopedagógico.');
      setSubmitting(false);
    }
  };

  // =========================================================================
  // VISTA 1: MODO PSICOPEDAGOGO (Excel 1 profesional + Excel 3 Tests)
  // =========================================================================
  if (isProfesional) {
    const testsTDAH = testsProfesionales.filter((t) => t.categoria === 'TDAH');
    const testsDislexia = testsProfesionales.filter((t) => t.categoria === 'Dislexia');
    const testsDiscalculia = testsProfesionales.filter((t) => t.categoria === 'Discalculia');

    const pregTDAH = preguntas.find((p) => p.categoria === 'TDAH' && p.rol === 'profesional');
    const pregDislexia = preguntas.find((p) => p.categoria === 'Dislexia' && p.rol === 'profesional');
    const pregDiscalculia = preguntas.find((p) => p.categoria === 'Discalculia' && p.rol === 'profesional');

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10 fade-in space-y-6">
        {/* Header psicopedagogo */}
        <div className="bg-[#FFFDF9] rounded-3xl border-2 border-[#9e6eff] p-6 sm:p-8 shadow-soft-md space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#DFD5F5] text-[#483962] flex items-center justify-center shadow-soft-sm">
                <Stethoscope className="w-6 h-6 text-[#483962]" />
              </div>
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#253444]">
                  Evaluación Psicopedagógica Especializada
                </h2>
                <p className="text-xs sm:text-sm text-[#576574] font-semibold">
                  Registro de pruebas estandarizadas y criterios diagnósticos (Excel 3 & Excel 1)
                </p>
              </div>
            </div>
            <span className="bg-[#E4EEF6] text-[#12415E] px-3 py-1 rounded-xl font-mono text-xs font-bold">
              {studentCode}
            </span>
          </div>

          <div className="p-4 bg-[#E4EEF6]/60 rounded-2xl border border-[#D4DFEB] text-xs text-[#253444] flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#3E83A8] shrink-0 mt-0.5" />
            <p>
              Selecciona las pruebas que hayas aplicado o tengas previstas para el estudiante, e ingresa los percentiles, puntuaciones o indicadores clínicos observados.
            </p>
          </div>
        </div>

        {/* Sección TDAH */}
        <div className="bg-[#FFFDF9] rounded-3xl border-2 border-[#3E83A8] p-6 sm:p-8 shadow-soft-md space-y-5">
          <div className="flex items-center gap-2 pb-3 border-b border-[#D4DFEB]">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#BCEBD1] text-[#0D4233]">
              Área: TDAH
            </span>
            <h3 className="font-display text-lg font-bold text-[#253444]">Baterías y Escalas de TDAH</h3>
          </div>

          <div className="space-y-4">
            {testsTDAH.map((t) => {
              const testState = testsSeleccionados[t.test];
              return (
                <div
                  key={t.test}
                  className={`p-4 sm:p-5 rounded-2xl border-2 transition-all ${
                    testState?.seleccionado
                      ? 'bg-[#C2E4F8]/40 border-[#3E83A8]'
                      : 'bg-[#FFFDF9] border-[#D4DFEB]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <label className="flex items-start gap-3 cursor-pointer flex-1">
                      <input
                        type="checkbox"
                        checked={!!testState?.seleccionado}
                        onChange={() => handleToggleTest(t.test)}
                        className="mt-1 h-5 w-5 rounded border-[#D4DFEB] text-[#3E83A8] focus:ring-[#6BA7C9] cursor-pointer"
                      />
                      <div>
                        <span className="font-bold text-sm sm:text-base text-[#253444] block">
                          {t.test}
                        </span>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="text-[11px] font-bold bg-[#E4EEF6] text-[#12415E] px-2 py-0.5 rounded-md">
                            Edad: {t.edad_aprox || 'Escolar'}
                          </span>
                          <span className="text-[11px] text-[#576574] font-medium">
                            {t.tipo_test}
                          </span>
                        </div>
                        <p className="text-xs text-[#576574] mt-2 leading-relaxed">
                          {t.interpretacion_breve}
                        </p>
                      </div>
                    </label>
                  </div>

                  {testState?.seleccionado && (
                    <div className="mt-4 pt-3 border-t border-[#D4DFEB] space-y-2">
                      <label className="text-xs font-bold text-[#253444] block">
                        Variables y percentiles ({t.variables_que_ingresa_el_profesional}):
                      </label>
                      <input
                        type="text"
                        value={testState.notas}
                        onChange={(e) => handleTestNotaChange(t.test, e.target.value, testState.nivelSugerido)}
                        placeholder="Ej. Inatención Pc 85, Hiperactividad Pc 90, T-Score 68..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4DFEB] bg-white text-xs sm:text-sm font-semibold text-[#253444] focus:outline-none focus:ring-2 focus:ring-[#6BA7C9]"
                      />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Pregunta cualitativa TDAH_20 */}
            {pregTDAH && (
              <div className="pt-2 space-y-2">
                <label className="font-bold text-xs sm:text-sm text-[#253444] block">
                  {pregTDAH.texto_pregunta}
                </label>
                <textarea
                  rows={3}
                  value={respuestasProfesional[pregTDAH.id_pregunta] || ''}
                  onChange={(e) => setRespuestasProfesional((p) => ({ ...p, [pregTDAH.id_pregunta]: e.target.value }))}
                  placeholder="Describe los patrones clínicos observados en atención sostenida, impulsividad o funciones ejecutivas..."
                  className="w-full p-3.5 rounded-2xl border-2 border-[#D4DFEB] bg-white text-xs sm:text-sm text-[#253444] focus:outline-none focus:ring-2 focus:ring-[#6BA7C9] resize-none"
                />
              </div>
            )}
          </div>
        </div>

        {/* Sección Dislexia */}
        <div className="bg-[#FFFDF9] rounded-3xl border-2 border-[#3E83A8] p-6 sm:p-8 shadow-soft-md space-y-5">
          <div className="flex items-center gap-2 pb-3 border-b border-[#D4DFEB]">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#BCEBD1] text-[#0D4233]">
              Área: Dislexia
            </span>
            <h3 className="font-display text-lg font-bold text-[#253444]">Baterías de Lectura y Decodificación</h3>
          </div>

          <div className="space-y-4">
            {testsDislexia.map((t) => {
              const testState = testsSeleccionados[t.test];
              return (
                <div
                  key={t.test}
                  className={`p-4 sm:p-5 rounded-2xl border-2 transition-all ${
                    testState?.seleccionado
                      ? 'bg-[#C2E4F8]/40 border-[#3E83A8]'
                      : 'bg-[#FFFDF9] border-[#D4DFEB]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <label className="flex items-start gap-3 cursor-pointer flex-1">
                      <input
                        type="checkbox"
                        checked={!!testState?.seleccionado}
                        onChange={() => handleToggleTest(t.test)}
                        className="mt-1 h-5 w-5 rounded border-[#D4DFEB] text-[#3E83A8] focus:ring-[#6BA7C9] cursor-pointer"
                      />
                      <div>
                        <span className="font-bold text-sm sm:text-base text-[#253444] block">
                          {t.test}
                        </span>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="text-[11px] font-bold bg-[#E4EEF6] text-[#12415E] px-2 py-0.5 rounded-md">
                            Edad: {t.edad_aprox || 'Escolar'}
                          </span>
                          <span className="text-[11px] text-[#576574] font-medium">
                            {t.tipo_test}
                          </span>
                        </div>
                        <p className="text-xs text-[#576574] mt-2 leading-relaxed">
                          {t.interpretacion_breve}
                        </p>
                      </div>
                    </label>
                  </div>

                  {testState?.seleccionado && (
                    <div className="mt-4 pt-3 border-t border-[#D4DFEB] space-y-2">
                      <label className="text-xs font-bold text-[#253444] block">
                        Variables y puntuaciones ({t.variables_que_ingresa_el_profesional}):
                      </label>
                      <input
                        type="text"
                        value={testState.notas}
                        onChange={(e) => handleTestNotaChange(t.test, e.target.value, testState.nivelSugerido)}
                        placeholder="Ej. Lectura de palabras: Dificultad severa, RAN tiempo 45s..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4DFEB] bg-white text-xs sm:text-sm font-semibold text-[#253444] focus:outline-none focus:ring-2 focus:ring-[#6BA7C9]"
                      />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Pregunta cualitativa DISL_20 */}
            {pregDislexia && (
              <div className="pt-2 space-y-2">
                <label className="font-bold text-xs sm:text-sm text-[#253444] block">
                  {pregDislexia.texto_pregunta}
                </label>
                <textarea
                  rows={3}
                  value={respuestasProfesional[pregDislexia.id_pregunta] || ''}
                  onChange={(e) => setRespuestasProfesional((p) => ({ ...p, [pregDislexia.id_pregunta]: e.target.value }))}
                  placeholder="Describe las observaciones en conciencia fonológica, ruta léxica o precisión lectora..."
                  className="w-full p-3.5 rounded-2xl border-2 border-[#D4DFEB] bg-white text-xs sm:text-sm text-[#253444] focus:outline-none focus:ring-2 focus:ring-[#6BA7C9] resize-none"
                />
              </div>
            )}
          </div>
        </div>

        {/* Sección Discalculia */}
        <div className="bg-[#FFFDF9] rounded-3xl border-2 border-[#3E83A8] p-6 sm:p-8 shadow-soft-md space-y-5">
          <div className="flex items-center gap-2 pb-3 border-b border-[#D4DFEB]">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#BCEBD1] text-[#0D4233]">
              Área: Discalculia
            </span>
            <h3 className="font-display text-lg font-bold text-[#253444]">Baterías y Evaluación Numérica</h3>
          </div>

          <div className="space-y-4">
            {testsDiscalculia.map((t) => {
              const testState = testsSeleccionados[t.test];
              return (
                <div
                  key={t.test}
                  className={`p-4 sm:p-5 rounded-2xl border-2 transition-all ${
                    testState?.seleccionado
                      ? 'bg-[#C2E4F8]/40 border-[#3E83A8]'
                      : 'bg-[#FFFDF9] border-[#D4DFEB]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <label className="flex items-start gap-3 cursor-pointer flex-1">
                      <input
                        type="checkbox"
                        checked={!!testState?.seleccionado}
                        onChange={() => handleToggleTest(t.test)}
                        className="mt-1 h-5 w-5 rounded border-[#D4DFEB] text-[#3E83A8] focus:ring-[#6BA7C9] cursor-pointer"
                      />
                      <div>
                        <span className="font-bold text-sm sm:text-base text-[#253444] block">
                          {t.test}
                        </span>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="text-[11px] font-bold bg-[#E4EEF6] text-[#12415E] px-2 py-0.5 rounded-md">
                            Edad: {t.edad_aprox || 'Escolar'}
                          </span>
                          <span className="text-[11px] text-[#576574] font-medium">
                            {t.tipo_test}
                          </span>
                        </div>
                        <p className="text-xs text-[#576574] mt-2 leading-relaxed">
                          {t.interpretacion_breve}
                        </p>
                      </div>
                    </label>
                  </div>

                  {testState?.seleccionado && (
                    <div className="mt-4 pt-3 border-t border-[#D4DFEB] space-y-2">
                      <label className="text-xs font-bold text-[#253444] block">
                        Variables y dominio numérico ({t.variables_que_ingresa_el_profesional}):
                      </label>
                      <input
                        type="text"
                        value={testState.notas}
                        onChange={(e) => handleTestNotaChange(t.test, e.target.value, testState.nivelSugerido)}
                        placeholder="Ej. Línea numérica: Desviación moderada, cálculo básico bajo..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4DFEB] bg-white text-xs sm:text-sm font-semibold text-[#253444] focus:outline-none focus:ring-2 focus:ring-[#6BA7C9]"
                      />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Pregunta cualitativa DISC_20 */}
            {pregDiscalculia && (
              <div className="pt-2 space-y-2">
                <label className="font-bold text-xs sm:text-sm text-[#253444] block">
                  {pregDiscalculia.texto_pregunta}
                </label>
                <textarea
                  rows={3}
                  value={respuestasProfesional[pregDiscalculia.id_pregunta] || ''}
                  onChange={(e) => setRespuestasProfesional((p) => ({ ...p, [pregDiscalculia.id_pregunta]: e.target.value }))}
                  placeholder="Describe los rasgos de riesgo en razonamiento aritmético o magnitud numérica..."
                  className="w-full p-3.5 rounded-2xl border-2 border-[#D4DFEB] bg-white text-xs sm:text-sm text-[#253444] focus:outline-none focus:ring-2 focus:ring-[#6BA7C9] resize-none"
                />
              </div>
            )}
          </div>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="p-4 rounded-2xl bg-[#FDF2F0] border border-[#F5C2BA] text-[#C25040] text-xs sm:text-sm font-bold flex items-center gap-2.5">
            <AlertTriangle className="w-5 h-5 shrink-0 text-[#C25040]" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Botones de acción profesional */}
        <div className="flex items-center justify-between pt-4 border-t border-[#D4DFEB]">
          <button
            type="button"
            onClick={onBack}
            disabled={submitting}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold text-[#576574] hover:text-[#253444] hover:bg-[#E4EEF6] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Consentimiento</span>
          </button>

          <button
            type="button"
            onClick={handleFinalSubmitProfesional}
            disabled={submitting}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl text-sm font-bold bg-[#3E83A8] hover:bg-[#326E8F] text-[#F5FBFF] shadow-soft-md hover:shadow-soft-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer disabled:opacity-50"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Generando Reporte Psicopedagógico...</span>
              </>
            ) : (
              <>
                <span>Generar Resultados & Síntesis</span>
                <Sparkles className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VISTA 2: MODO DOCENTE / PADRE (Excel 1 preguntas docente_padre)
  // =========================================================================
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10 fade-in space-y-6">
      {/* Category Tabs */}
      <div className="grid grid-cols-3 gap-2">
        {(['TDAH', 'Dislexia', 'Discalculia'] as const).map((cat) => {
          const isCurrent = categoriaActiva === cat;
          const respondidasCat = preguntas
            .filter((p) => p.categoria === cat)
            .filter((p) => !!respuestas[p.id_pregunta]).length;
          const totalCat = preguntas.filter((p) => p.categoria === cat).length;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setCategoriaActiva(cat);
                setCurrentIndex(0);
              }}
              className={`p-3 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                isCurrent
                  ? 'bg-[#C2E4F8] border-[#3E83A8] text-[#12415E] font-bold shadow-soft-sm'
                  : 'bg-[#FFFDF9] border-[#D4DFEB] text-[#576574] hover:bg-[#E4EEF6]'
              }`}
            >
              <span className="text-xs sm:text-sm block">{cat}</span>
              <span className="text-[10px] font-semibold text-[#576574] block mt-0.5">
                {respondidasCat}/{totalCat} respondidas
              </span>
            </button>
          );
        })}
      </div>

      {/* Progress bar */}
      <div>
        <div className="flex items-center justify-between text-xs sm:text-sm text-[#576574] mb-2 font-bold">
          <div className="flex items-center gap-2">
            <span className="text-[#253444]">Estudiante:</span>
            <span className="bg-[#E4EEF6] text-[#12415E] px-2.5 py-0.5 rounded-lg font-mono">
              {studentCode}
            </span>
          </div>
          <span>
            {categoriaActiva}: Pregunta {currentIndex + 1} de {preguntasFiltradas.length} (Progreso global: {progressPercent}%)
          </span>
        </div>

        <div className="w-full bg-[#D4DFEB] rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-[#3E83A8] h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-[#FFFDF9] rounded-3xl border-2 border-[#3E83A8] shadow-soft-md p-6 sm:p-10 space-y-6">
        {/* Category & Subdimension Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-[#D4DFEB]">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold px-3 py-1 rounded-full bg-[#BCEBD1] text-[#0D4233]">
              <BookOpenCheck className="w-4 h-4 text-[#0D4233]" />
              Área: {currentPregunta.categoria}
            </span>
            {currentPregunta.subdimension && (
              <span className="text-xs sm:text-sm text-[#576574] font-semibold hidden sm:inline">
                • {currentPregunta.subdimension}
              </span>
            )}
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#1C463C] bg-[#CAEFDD] px-3 py-1 rounded-full font-bold">
            <GraduationCap className="w-4 h-4 text-[#0D4233]" />
            <span>Docente / Familia</span>
          </div>
        </div>

        {/* Question Prompt */}
        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#253444] leading-snug">
          {currentPregunta.texto_pregunta}
        </h3>

        {/* Likert Options */}
        {currentPregunta.tipo_pregunta === 'opcion_multiple' && currentPregunta.opciones && (
          <div className="space-y-3 pt-2">
            {currentPregunta.opciones.map((opc, idx) => {
              const isSelected = currentAnswer?.opcionId === opc.id_opcion;
              const scaleNumber = opc.orden_opcion || opc.peso || (idx + 1);
              return (
                <button
                  key={opc.id_opcion}
                  type="button"
                  onClick={() => handleSelectOption(currentPregunta.id_pregunta, opc.id_opcion, opc.texto_opcion, opc.peso)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 text-sm sm:text-base font-semibold transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#C2E4F8] border-[#3E83A8] text-[#12415E] shadow-soft-sm'
                      : 'bg-[#FFFDF9] border-[#D4DFEB] text-[#253444] hover:bg-[#E4EEF6]/60 hover:border-[#6BA7C9]'
                  }`}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <span
                      className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#3E83A8] text-[#F5FBFF]'
                          : 'bg-[#E4EEF6] text-[#3E83A8]'
                      }`}
                    >
                      {scaleNumber}
                    </span>
                    <span className="leading-normal">{opc.texto_opcion}</span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'border-[#3E83A8] bg-[#3E83A8] text-[#F5FBFF]'
                        : 'border-[#D4DFEB] bg-[#FFFDF9]'
                    }`}
                  >
                    {isSelected && <Check className="w-4 h-4" />}
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Open Question */}
        {currentPregunta.tipo_pregunta === 'abierta' && (
          <div className="space-y-2 pt-2">
            <textarea
              rows={4}
              maxLength={currentPregunta.limite_caracteres || 500}
              value={currentAnswer?.texto || ''}
              onChange={(e) => handleTextChange(currentPregunta.id_pregunta, e.target.value)}
              placeholder="Escribe tus observaciones aquí (ej. responde favorablemente al apoyo visual, se fatiga en periodos largos, etc.)..."
              className="w-full p-4 rounded-2xl border-2 border-[#D4DFEB] bg-[#FFFDF9] text-sm sm:text-base font-semibold text-[#253444] focus:outline-none focus:ring-2 focus:ring-[#6BA7C9] focus:border-[#3E83A8] transition-all resize-none"
            />
            <div className="flex justify-between items-center text-xs text-[#576574] px-1 font-semibold">
              <span>Campo opcional para detalles pedagógicos adicionales</span>
              <span>
                {(currentAnswer?.texto || '').length} / {currentPregunta.limite_caracteres || 500}
              </span>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {errorMsg && (
          <div className="p-4 rounded-2xl bg-[#FDF2F0] border border-[#F5C2BA] text-[#C25040] text-xs sm:text-sm font-bold flex items-center gap-2.5">
            <AlertTriangle className="w-5 h-5 shrink-0 text-[#C25040]" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-[#D4DFEB]">
          <button
            type="button"
            onClick={handlePrevQuestion}
            disabled={submitting}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-[#576574] hover:text-[#253444] hover:bg-[#E4EEF6] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          <button
            type="button"
            onClick={handleNextQuestion}
            disabled={submitting}
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-2xl text-sm font-bold bg-[#3E83A8] hover:bg-[#326E8F] text-[#F5FBFF] shadow-soft-sm hover:shadow-soft-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer disabled:opacity-50"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Analizando respuestas...</span>
              </>
            ) : categoriaActiva === 'Discalculia' && currentIndex === preguntasFiltradas.length - 1 ? (
              <>
                <span>Generar Resultados</span>
                <Sparkles className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>Siguiente</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
