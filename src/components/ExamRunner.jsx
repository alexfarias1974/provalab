import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, Flag, HelpCircle } from 'lucide-react';
import { PendingModal } from './PendingModal';

export function ExamRunner({
  examInfo,
  questions,
  onFinishExam,
  onCancelExam
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { [questionIndex]: 'A' | 'B' | 'C' | 'D' }
  const [showPendingModal, setShowPendingModal] = useState(false);

  const currentQ = questions[currentIndex];
  const total = questions.length;

  const answeredCount = Object.keys(answers).length;

  // Lista de números de questões (1-based) que ainda não foram respondidas
  const unansweredNumbers = [];
  for (let i = 0; i < total; i++) {
    if (!answers[i]) {
      unansweredNumbers.push(i + 1);
    }
  }

  const handleSelectOption = (letter) => {
    setAnswers((prev) => ({
      ...prev,
      [currentIndex]: letter
    }));
  };

  const handleOpenFinish = () => {
    setShowPendingModal(true);
  };

  const handleConfirmSubmit = () => {
    setShowPendingModal(false);
    onFinishExam(answers);
  };

  const handleJumpToQuestion = (targetIndex) => {
    setShowPendingModal(false);
    if (targetIndex >= 0 && targetIndex < total) {
      setCurrentIndex(targetIndex);
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-[calc(100vh-65px)] flex flex-col justify-between px-4 pb-6 pt-3 animate-in fade-in duration-200">
      {/* Barra superior de progresso e navegação */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={() => {
              if (window.confirm('Tem certeza que deseja cancelar a prova atual? As respostas serão perdidas.')) {
                onCancelExam();
              }
            }}
            className="text-xs font-semibold text-slate-400 dark:text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
          >
            Cancelar
          </button>
          
          <div className="text-center">
            <span className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {examInfo.grade ? `${examInfo.grade}º Ano • ` : ''}{examInfo.subject}
            </span>
            <span className="text-slate-400 dark:text-slate-600 text-xs mx-1.5">•</span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Questão {currentIndex + 1} de {total}
            </span>
          </div>

          <button
            onClick={handleOpenFinish}
            className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-all"
          >
            Finalizar
          </button>
        </div>

        {/* Barra de progresso visual */}
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden mb-3">
          <div
            className="bg-blue-600 dark:bg-blue-500 h-full transition-all duration-300 rounded-full"
            style={{ width: `${(answeredCount / total) * 100}%` }}
          />
        </div>

        {/* Grade de Navegação Rápida (1 a 10 ou 1 a 20) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 scrollbar-none">
          {questions.map((_, idx) => {
            const isAnswered = answers[idx] !== undefined;
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-8 h-8 shrink-0 rounded-xl text-xs font-bold transition-all flex items-center justify-center ${
                  isCurrent
                    ? 'ring-2 ring-blue-600 dark:ring-blue-400 ring-offset-2 dark:ring-offset-slate-900 bg-blue-600 dark:bg-blue-500 text-white shadow-sm'
                    : isAnswered
                    ? 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700'
                    : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Cartão da Questão Atual */}
      <div className="flex-1 my-2">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
          {/* Cabeçalho da questão */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-extrabold rounded-lg">
              Questão #{currentIndex + 1}
            </span>
            {answers[currentIndex] ? (
              <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Respondida ({answers[currentIndex]})</span>
              </span>
            ) : (
              <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full">
                Pendente
              </span>
            )}
          </div>

          {/* Enunciado */}
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 leading-snug mb-5">
            {currentQ.question}
          </h3>

          {/* Alternativas A, B, C, D */}
          <div className="space-y-2.5">
            {currentQ.options.map((opt) => {
              const isSelected = answers[currentIndex] === opt.letter;
              return (
                <button
                  key={opt.letter}
                  type="button"
                  onClick={() => handleSelectOption(opt.letter)}
                  className={`w-full p-3.5 rounded-2xl border-2 text-left transition-all active:scale-[0.99] flex items-center gap-3 ${
                    isSelected
                      ? 'border-blue-600 dark:border-blue-500 bg-blue-50/80 dark:bg-blue-950/60 text-blue-950 dark:text-blue-100 shadow-xs ring-1 ring-blue-600 dark:ring-blue-500'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50/50 dark:hover:bg-slate-800'
                  }`}
                >
                  <div
                    className={`w-8 h-8 shrink-0 rounded-xl font-black text-sm flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300'
                    }`}
                  >
                    {opt.letter}
                  </div>
                  <span className="text-sm font-medium leading-tight flex-1">
                    {opt.text}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Controles de Navegação Inferior */}
      <div className="pt-2">
        <div className="flex items-center gap-2 mb-2">
          <button
            type="button"
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="flex-1 py-3 px-4 bg-white dark:bg-slate-850 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-2xl text-xs flex items-center justify-center gap-1 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          {currentIndex < total - 1 ? (
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => Math.min(total - 1, prev + 1))}
              className="flex-1 py-3 px-4 bg-blue-600 text-white font-bold rounded-2xl text-xs flex items-center justify-center gap-1 hover:bg-blue-700 shadow-md shadow-blue-500/20 active:scale-98 transition-all"
            >
              <span>Próxima</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleOpenFinish}
              className="flex-1 py-3 px-4 bg-emerald-600 text-white font-bold rounded-2xl text-xs flex items-center justify-center gap-1 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 active:scale-98 transition-all"
            >
              <span>Revisar Prova</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Botão Finalizar Prova Sempre Acessível */}
        <button
          type="button"
          onClick={handleOpenFinish}
          className="w-full py-3 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 text-white rounded-2xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
        >
          <Flag className="w-4 h-4 text-yellow-400" />
          <span>Finalizar Prova ({answeredCount}/{total})</span>
        </button>
      </div>

      {/* Modal de confirmação e alerta de pendentes */}
      <PendingModal
        isOpen={showPendingModal}
        onClose={() => setShowPendingModal(false)}
        totalQuestions={total}
        answeredCount={answeredCount}
        unansweredIndices={unansweredNumbers}
        onJumpToQuestion={handleJumpToQuestion}
        onConfirmSubmit={handleConfirmSubmit}
      />
    </div>
  );
}
