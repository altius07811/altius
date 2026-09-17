import React, { useState, useEffect } from 'react';
import { ScreenType, PreguntaEncuesta, RolEncuestado, RespuestaUsuario, ResultadoCategoria, SugerenciaItem } from './types';
import { fetchPreguntas, enviarRespuestas } from './services/api';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ConsentScreen } from './components/ConsentScreen';
import { SurveyScreen } from './components/SurveyScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { ReferralScreen } from './components/ReferralScreen';

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('welcome');
  const [rol, setRol] = useState<RolEncuestado>('docente');
  const [studentCode, setStudentCode] = useState<string>('EST-2026');
  
  // Data state
  const [preguntas, setPreguntas] = useState<PreguntaEncuesta[]>([]);
  const [loadingPreguntas, setLoadingPreguntas] = useState<boolean>(true);
  const [resultados, setResultados] = useState<ResultadoCategoria[]>([]);
  const [sugerencias, setSugerencias] = useState<SugerenciaItem[]>([]);
  const [avisoLegal, setAvisoLegal] = useState<string>('');

  // Load questions on mount
  useEffect(() => {
    const loadData = async () => {
      setLoadingPreguntas(true);
      const data = await fetchPreguntas();
      setPreguntas(data);
      setLoadingPreguntas(false);
    };
    loadData();
  }, []);

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

  const handleSurveySubmit = async (respuestas: RespuestaUsuario[]) => {
    const response = await enviarRespuestas(studentCode, rol, respuestas);
    setResultados(response.resultados);
    setSugerencias(response.sugerencias);
    setAvisoLegal(response.aviso_legal);
    setCurrentScreen('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setCurrentScreen('welcome');
    setStudentCode(`EST-${Math.floor(1000 + Math.random() * 9000)}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-altius-200 selection:text-altius-900">
      <Header currentScreen={currentScreen} onNavigate={setCurrentScreen} />

      <main className="flex-1">
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
            avisoLegal={avisoLegal}
            onNavigateToReferral={() => {
              setCurrentScreen('referral');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onRestart={handleRestart}
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

      <Footer />
    </div>
  );
};

export default App;
