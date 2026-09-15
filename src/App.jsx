import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ExamConfig } from './components/ExamConfig';
import { ExamRunner } from './components/ExamRunner';
import { ExamResult } from './components/ExamResult';
import { HistoryView } from './components/HistoryView';
import { ApiKeyModal } from './components/ApiKeyModal';
import { generateExam, getStoredApiKey } from './services/gemini';
import { getMockExam } from './services/mockQuestions';
import { saveExamResult } from './db/database';

export function App() {
  const [view, setView] = useState('config'); // 'config' | 'exam' | 'result' | 'history'
  const [hasApiKey, setHasApiKey] = useState(false);
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Tema Claro e Escuro (padrão escuro conforme solicitado)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('provalab_theme') || 'dark';
  });

  // Ano escolar selecionado (6º, 7º ou 8º ano)
  const [selectedGrade, setSelectedGrade] = useState('6');

  // Estados da Prova
  const [currentExamInfo, setCurrentExamInfo] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [lastResult, setLastResult] = useState(null);

  // Aplica a classe 'dark' no elemento raiz html
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('provalab_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    // Checa se a chave do Gemini já está configurada
    const key = getStoredApiKey();
    setHasApiKey(Boolean(key));
  }, []);

  // 1. Iniciar nova prova gerada por IA ou Mock (com garantia de resposta rápida)
  const handleStartExam = async (config) => {
    setIsLoading(true);
    setCurrentExamInfo(config);
    if (config.grade) setSelectedGrade(config.grade);

    try {
      // Limite máximo de 18 segundos de espera para o usuário
      const timeoutPromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            questions: getMockExam(config.subject, config.topics, config.totalQuestions, config.difficulty, config.grade),
            source: 'offline_fallback',
            warning: 'O Google demorou para responder. Carregamos o simulado instantaneamente do banco de questões do ProvaLAB para você começar já!'
          });
        }, 18000);
      });

      const response = await Promise.race([generateExam(config), timeoutPromise]);
      setQuestions(response.questions);
      setView('exam');

      if (response.warning) {
        setTimeout(() => {
          alert(response.warning);
        }, 150);
      }
    } catch (error) {
      console.error('Erro ao gerar prova:', error);
      const fallbackQuestions = getMockExam(config.subject, config.topics, config.totalQuestions, config.difficulty, config.grade);
      setQuestions(fallbackQuestions);
      setView('exam');
      setTimeout(() => {
        alert('Carregando simulado offline inteligente do ProvaLAB.');
      }, 150);
    } finally {
      setIsLoading(false);
    }
  };

  // 2. Finalizar prova, calcular nota e salvar no IndexedDB
  const handleFinishExam = async (studentAnswers) => {
    let correctCount = 0;
    const evaluatedQuestions = questions.map((q, idx) => {
      const studentAns = studentAnswers[idx] || null;
      const isCorrect = studentAns === q.correctAnswer;
      if (isCorrect) correctCount++;

      return {
        ...q,
        studentAnswer: studentAns,
        isCorrect
      };
    });

    const totalQuestions = questions.length;
    const score = Number(((correctCount / totalQuestions) * 10).toFixed(1));
    const percentage = Math.round((correctCount / totalQuestions) * 100);

    const examRecord = {
      grade: currentExamInfo?.grade || selectedGrade || '6',
      subject: currentExamInfo?.subject,
      topics: currentExamInfo?.topics,
      difficulty: currentExamInfo?.difficulty,
      totalQuestions,
      correctCount,
      score,
      percentage,
      questions: evaluatedQuestions,
      date: new Date().toISOString()
    };

    // Salva no banco de dados local do celular (IndexedDB)
    try {
      const savedId = await saveExamResult(examRecord);
      examRecord.id = savedId;
    } catch (err) {
      console.error('Falha ao persistir no IndexedDB:', err);
    }

    setLastResult(examRecord);
    setView('result');
  };

  // 3. Cancelar prova em andamento
  const handleCancelExam = () => {
    setQuestions([]);
    setCurrentExamInfo(null);
    setView('config');
  };

  // 4. Selecionar prova antiga do histórico para rever
  const handleSelectExamFromHistory = (exam) => {
    setLastResult(exam);
    if (exam.grade) setSelectedGrade(exam.grade);
    setView('result');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b0f19] text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Cabeçalho */}
      <Header
        currentView={view}
        setView={setView}
        hasApiKey={hasApiKey}
        onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
        selectedGrade={selectedGrade}
      />

      {/* Conteúdo dinâmico da tela */}
      <main className="flex-1 pb-8">
        {view === 'config' && (
          <ExamConfig
            onStartExam={handleStartExam}
            isLoading={isLoading}
            hasApiKey={hasApiKey}
            onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
            selectedGrade={selectedGrade}
            onSelectGrade={setSelectedGrade}
          />
        )}

        {view === 'exam' && (
          <ExamRunner
            examInfo={currentExamInfo}
            questions={questions}
            onFinishExam={handleFinishExam}
            onCancelExam={handleCancelExam}
          />
        )}

        {view === 'result' && lastResult && (
          <ExamResult
            resultData={lastResult}
            onNewExam={() => setView('config')}
            onViewHistory={() => setView('history')}
          />
        )}

        {view === 'history' && (
          <HistoryView
            onSelectExam={handleSelectExamFromHistory}
            onNewExam={() => setView('config')}
          />
        )}
      </main>

      {/* Modal de Configuração da Chave da API */}
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        onKeySaved={(key) => setHasApiKey(Boolean(key))}
      />
    </div>
  );
}

export default App;

