import React, { useState, useEffect } from 'react';
import { 
  ScreenType, 
  PreguntaEncuesta, 
  RolEncuestado, 
  RespuestaUsuario, 
  ResultadoCategoria, 
  SugerenciaItem,
  TestProfesionalItem,
  AnalisisPedagogicoIA 
} from './types';
import { fetchPreguntas, enviarRespuestas } from './services/api';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ConsentScreen } from './components/ConsentScreen';
import { SurveyScreen } from './components/SurveyScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { ReferralScreen } from './components/ReferralScreen';
import { ScientificReferencesModal } from './components/ScientificReferencesModal';

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('welcome');
  const [rol, setRol] = useState<RolEncuestado>('docente');
  const [studentCode, setStudentCode] = useState<string>('EST-2026');
  const [showReferencesModal, setShowReferencesModal] = useState<boolean>(false);
  
  // Data state
  const [preguntas, setPreguntas] = useState<PreguntaEncuesta[]>([]);
  const [testsProfesionales, setTestsProfesionales] = useState<TestProfesionalItem[]>([]);
  const [loadingPreguntas, setLoadingPreguntas] = useState<boolean>(true);
  const [resultados, setResultados] = useState<ResultadoCategoria[]>([]);
  const [sugerencias, setSugerencias] = useState<SugerenciaItem[]>([]);
  const [analisisIA, setAnalisisIA] = useState<AnalisisPedagogicoIA | null>(null);
  const [observaciones, setObservaciones] = useState<string>('');
  const [avisoLegal, setAvisoLegal] = useState<string>('');

  // Load questions when role changes
  useEffect(() => {
    const loadData = async () => {
      setLoadingPreguntas(true);
      const data = await fetchPreguntas(rol);
      setPreguntas(data.preguntas);
      setTestsProfesionales(data.tests_profesionales);
      setLoadingPreguntas(false);
    };
    loadData();
  }, [rol]);

  // Screen handlers
  const handleStart = () => {
    setCurrentScreen('consent');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleConsentAccept = (selectedRol: RolEncuestado, code: string) => {
    setRol(selectedRol);
    setStudentCode(code);
    setCurrentScreen('survey');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSurveySubmit = async (
    respuestas: RespuestaUsuario[],
    testsAdministrados?: Array<{ test: string; categoria: string; puntaje_o_observacion: string }>
  ) => {
    const obs = respuestas.find(r => r.id_pregunta === 'OBS_01')?.respuesta || '';
    setObservaciones(obs);

    const response = await enviarRespuestas(studentCode, rol, respuestas, testsAdministrados);
    setResultados(response.resultados);
    setSugerencias(response.sugerencias);
    setAnalisisIA(response.analisis_ia || null);
    setAvisoLegal(response.aviso_legal);
    setCurrentScreen('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setCurrentScreen('welcome');
    setStudentCode(`EST-${Math.floor(1000 + Math.random() * 9000)}`);
    setAnalisisIA(null);
    setObservaciones('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7EE] text-[#253444] font-sans selection:bg-[#C2E4F8] selection:text-[#12415E]">
      <Header 
        currentScreen={currentScreen} 
        onNavigate={setCurrentScreen} 
        onOpenReferences={() => setShowReferencesModal(true)}
      />

      <main className="flex-1 pb-10">
        {currentScreen === 'welcome' && (
          <WelcomeScreen onStart={handleStart} />
        )}

        {currentScreen === 'consent' && (
          <ConsentScreen
            onAccept={handleConsentAccept}
            onBack={() => setCurrentScreen('welcome')}
          />
        )}

        {currentScreen === 'survey' && (
          <SurveyScreen
            preguntas={preguntas}
            testsProfesionales={testsProfesionales}
            rolSeleccionado={rol}
            studentCode={studentCode}
            loading={loadingPreguntas}
            onSubmit={handleSurveySubmit}
            onBack={() => setCurrentScreen('consent')}
          />
        )}

        {currentScreen === 'results' && (
          <ResultsScreen
            studentCode={studentCode}
            resultados={resultados}
            sugerencias={sugerencias}
            analisisIA={analisisIA}
            observaciones={observaciones}
            avisoLegal={avisoLegal}
            onNavigateToReferral={() => {
              setCurrentScreen('referral');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onRestart={handleRestart}
            onOpenReferences={() => setShowReferencesModal(true)}
          />
        )}

        {currentScreen === 'referral' && (
          <ReferralScreen
            onBackToResults={() => {
              setCurrentScreen('results');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onRestart={handleRestart}
          />
        )}
      </main>

      <Footer onOpenReferences={() => setShowReferencesModal(true)} />

      {/* Modal de Marco Científico y Referencias Bibliográficas */}
      <ScientificReferencesModal
        isOpen={showReferencesModal}
        onClose={() => setShowReferencesModal(false)}
      />
    </div>
  );
};

export default App;
