import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Award, CheckCircle2, XCircle, RotateCcw, History, Lightbulb, Check, X, BookmarkCheck } from 'lucide-react';

export function ExamResult({ resultData, onNewExam, onViewHistory }) {
  const [filter, setFilter] = useState('all'); // 'all' | 'correct' | 'wrong'

  const {
    subject,
    topics,
    score,
    percentage,
    correctCount,
    totalQuestions,
    questions,
    difficulty
  } = resultData;

  useEffect(() => {
    if (percentage >= 70) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Ignora caso confetti não carregue
      }
    }
  }, [percentage]);

  const getFeedbackMessage = () => {
    if (score >= 9) return { title: 'Espetacular! 🌟', desc: 'Você dominou completamente este conteúdo!', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (score >= 7) return { title: 'Muito Bem! 👏', desc: 'Ótimo desempenho no simulado! Continue assim.', color: 'text-blue-700 bg-blue-50 border-blue-200' };
    if (score >= 5) return { title: 'Bom Esforço! 📚', desc: 'Você está no caminho certo. Revise as questões que errou abaixo.', color: 'text-amber-800 bg-amber-50 border-amber-200' };
    return { title: 'Não Desanime! 💪', desc: 'Use as explicações abaixo para estudar o tema e tente novamente!', color: 'text-rose-800 bg-rose-50 border-rose-200' };
  };

  const feedback = getFeedbackMessage();

  const filteredQuestions = questions.filter((q) => {
    if (filter === 'correct') return q.isCorrect;
    if (filter === 'wrong') return !q.isCorrect;
    return true;
  });

  return (
    <div className="max-w-md mx-auto px-4 py-5 animate-in fade-in duration-300">
      {/* Card da Nota e Desempenho */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md text-center mb-5 transition-colors">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
          <span>{resultData.grade ? `${resultData.grade}º Ano` : '6º Ano'}</span>
          <span>•</span>
          <span>{subject}</span>
          <span>•</span>
          <span className="capitalize">{difficulty}</span>
        </div>

        <h2 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-1">
          Resultado da Prova
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto mb-4 truncate">
          {topics}
        </p>

        {/* Círculo da Nota */}
        <div className="relative w-32 h-32 mx-auto mb-4 flex flex-col items-center justify-center rounded-full bg-gradient-to-tr from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-4 border-blue-500 shadow-inner">
          <span className="text-4xl font-black text-blue-700 dark:text-blue-300 tracking-tight">
            {score.toFixed(1)}
          </span>
          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">
            de 10.0
          </span>
        </div>

        {/* Resumo de acertos */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl p-2.5 border border-emerald-100 dark:border-emerald-800/50">
            <span className="text-xs text-emerald-700 dark:text-emerald-300 font-semibold block">Acertos</span>
            <span className="text-lg font-black text-emerald-800 dark:text-emerald-200">{correctCount} / {totalQuestions}</span>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950/40 rounded-2xl p-2.5 border border-blue-100 dark:border-blue-800/50">
            <span className="text-xs text-blue-700 dark:text-blue-300 font-semibold block">Aproveitamento</span>
            <span className="text-lg font-black text-blue-800 dark:text-blue-200">{percentage}%</span>
          </div>
        </div>

        {/* Mensagem motivacional */}
        <div className={`p-3.5 rounded-2xl border ${feedback.color} text-left`}>
          <p className="font-black text-sm">{feedback.title}</p>
          <p className="text-xs mt-0.5 opacity-90">{feedback.desc}</p>
        </div>

        {/* Aviso de salvamento local no celular */}
        <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
          <BookmarkCheck className="w-4 h-4" />
          <span>Salvo no banco de dados local do celular</span>
        </div>
      </div>

      {/* Botões de Ação Rápida */}
      <div className="grid grid-cols-2 gap-2.5 mb-5">
        <button
          onClick={onNewExam}
          className="py-3.5 px-4 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white rounded-2xl text-xs font-bold shadow-md shadow-blue-500/20 flex items-center justify-center gap-1.5 transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Fazer Outra Prova</span>
        </button>

        <button
          onClick={onViewHistory}
          className="py-3.5 px-4 bg-white dark:bg-slate-850 dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 active:scale-98 text-slate-700 dark:text-slate-200 rounded-2xl text-xs font-bold shadow-xs flex items-center justify-center gap-1.5 transition-all"
        >
          <History className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Ver Histórico</span>
        </button>
      </div>

      {/* Filtros de Revisão do Gabarito */}
      <div className="mb-4">
        <h3 className="text-sm font-black text-slate-800 dark:text-slate-100 mb-2">
          Gabarito Comentado Questão por Questão
        </h3>
        <div className="flex gap-1.5">
          <button
            onClick={() => setFilter('all')}
            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filter === 'all'
                ? 'bg-slate-800 dark:bg-blue-600 text-white'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
            }`}
          >
            Todas ({totalQuestions})
          </button>
          <button
            onClick={() => setFilter('correct')}
            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filter === 'correct'
                ? 'bg-emerald-600 text-white'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
            }`}
          >
            Acertos ({correctCount})
          </button>
          <button
            onClick={() => setFilter('wrong')}
            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filter === 'wrong'
                ? 'bg-rose-600 text-white'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
            }`}
          >
            Erros ({totalQuestions - correctCount})
          </button>
        </div>
      </div>

      {/* Lista de Questões com Gabarito e Explicação */}
      <div className="space-y-4">
        {filteredQuestions.map((q) => {
          return (
            <div
              key={q.id}
              className={`bg-white dark:bg-slate-900 rounded-2xl p-4 border-2 shadow-xs transition-all ${
                q.isCorrect ? 'border-emerald-200 dark:border-emerald-800/60' : 'border-rose-200 dark:border-rose-800/60'
              }`}
            >
              {/* Topo da Questão */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  Questão #{q.id}
                </span>
                {q.isCorrect ? (
                  <span className="flex items-center gap-1 text-xs font-extrabold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                    <Check className="w-3.5 h-3.5" />
                    Acertou (+1.0)
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-xs font-extrabold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded-full">
                    <X className="w-3.5 h-3.5" />
                    {q.studentAnswer ? 'Errou' : 'Em Branco'}
                  </span>
                )}
              </div>

              {/* Enunciado */}
              <p className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-3 leading-snug">
                {q.question}
              </p>

              {/* Alternativas */}
              <div className="space-y-1.5 mb-3">
                {q.options.map((opt) => {
                  const isUserAnswer = q.studentAnswer === opt.letter;
                  const isCorrectAnswer = q.correctAnswer === opt.letter;

                  let optStyle = 'border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300';
                  if (isCorrectAnswer) {
                    optStyle = 'border-emerald-400 dark:border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/50 text-emerald-950 dark:text-emerald-200 font-semibold ring-1 ring-emerald-400 dark:ring-emerald-500';
                  } else if (isUserAnswer && !isCorrectAnswer) {
                    optStyle = 'border-rose-400 dark:border-rose-500 bg-rose-50/70 dark:bg-rose-950/50 text-rose-950 dark:text-rose-200 font-semibold';
                  }

                  return (
                    <div
                      key={opt.letter}
                      className={`p-2.5 rounded-xl border text-xs flex items-start gap-2.5 ${optStyle}`}
                    >
                      <span className="font-black w-5 h-5 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-600 flex items-center justify-center shrink-0 shadow-2xs">
                        {opt.letter}
                      </span>
                      <span className="flex-1 mt-0.5">{opt.text}</span>
                      {isCorrectAnswer && (
                        <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/60 px-1.5 py-0.5 rounded-md self-center">
                          Correta
                        </span>
                      )}
                      {isUserAnswer && !isCorrectAnswer && (
                        <span className="text-[10px] font-bold text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-900/60 px-1.5 py-0.5 rounded-md self-center">
                          Sua Escolha
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Caixa de Explicação Didática */}
              {q.explanation && (
                <div className="bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 rounded-xl p-3 text-xs text-amber-950 dark:text-amber-200">
                  <div className="flex items-center gap-1.5 font-bold text-amber-800 dark:text-amber-300 mb-1">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>Explicação do Professor:</span>
                  </div>
                  <p className="text-amber-900/90 dark:text-amber-200/90 leading-relaxed pl-5">
                    {q.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
