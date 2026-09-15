import React, { useEffect, useState } from 'react';
import { getAllExams, deleteExam, clearAllExams } from '../db/database';
import { History, Calendar, Trash2, ArrowRight, BookOpen, Award, BarChart2, PlusCircle } from 'lucide-react';

export function HistoryView({ onSelectExam, onNewExam }) {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadHistory = async () => {
    setLoading(true);
    const list = await getAllExams();
    setExams(list);
    setLoading(false);
  };

  useEffect(() => {
    loadHistory();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    if (window.confirm('Deseja excluir esta prova do histórico do celular?')) {
      await deleteExam(id);
      loadHistory();
    }
  };

  const handleClearAll = async () => {
    if (window.confirm('Tem certeza que deseja apagar todo o histórico de provas salvas no celular?')) {
      await clearAllExams();
      loadHistory();
    }
  };

  // Estatísticas do aluno
  const totalExams = exams.length;
  const avgScore = totalExams > 0
    ? (exams.reduce((acc, curr) => acc + (curr.score || 0), 0) / totalExams).toFixed(1)
    : '0.0';

  const totalQuestionsDone = exams.reduce((acc, curr) => acc + (curr.totalQuestions || 0), 0);

  return (
    <div className="max-w-md mx-auto px-4 py-5 animate-in fade-in duration-300">
      {/* Topo do Histórico */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-black text-slate-800 dark:text-slate-100">
            Histórico no Celular
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Provas salvas no banco de dados local
          </p>
        </div>

        <button
          onClick={onNewExam}
          className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-sm shadow-blue-500/20 active:scale-95 transition-all"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Nova Prova</span>
        </button>
      </div>

      {/* Cards de Métricas Gerais */}
      {totalExams > 0 && (
        <div className="grid grid-cols-3 gap-2.5 mb-5">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-3 border border-slate-200 dark:border-slate-800 text-center shadow-2xs">
            <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block">Provas</span>
            <span className="text-xl font-black text-blue-700 dark:text-blue-400">{totalExams}</span>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-3 border border-slate-200 dark:border-slate-800 text-center shadow-2xs">
            <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block">Média Geral</span>
            <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">{avgScore}</span>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-3 border border-slate-200 dark:border-slate-800 text-center shadow-2xs">
            <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block">Questões</span>
            <span className="text-xl font-black text-indigo-600 dark:text-indigo-400">{totalQuestionsDone}</span>
          </div>
        </div>
      )}

      {/* Lista de Provas */}
      {loading ? (
        <div className="text-center py-12">
          <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
          <p className="text-xs text-slate-400 dark:text-slate-500">Carregando histórico do celular...</p>
        </div>
      ) : exams.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 text-center shadow-xs my-6">
          <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-3">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-1">
            Nenhuma prova realizada ainda
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto mb-5">
            Crie sua primeira prova personalizada escolhendo a série, a matéria e o assunto para começar seus estudos!
          </p>
          <button
            onClick={onNewExam}
            className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-xs font-bold shadow-md shadow-blue-500/20 active:scale-98 transition-all"
          >
            Gerar Minha Primeira Prova
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {exams.map((exam) => {
            const dateObj = new Date(exam.date);
            const dateStr = dateObj.toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'short',
              hour: '2-digit',
              minute: '2-digit'
            });

            return (
              <div
                key={exam.id}
                onClick={() => onSelectExam(exam)}
                className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 active:scale-[0.99] transition-all cursor-pointer shadow-2xs group relative"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                      <span className="text-[10px] font-black uppercase text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-1.5 py-0.5 rounded-md border border-indigo-200/50 dark:border-indigo-800/50">
                        {exam.grade ? `${exam.grade}º Ano` : '6º Ano'}
                      </span>
                      <span className="text-[11px] font-black uppercase text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md">
                        {exam.subject}
                      </span>
                      <span className="text-[11px] text-slate-400 dark:text-slate-500">
                        {exam.totalQuestions} questões
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm truncate">
                      {exam.topics || 'Geral'}
                    </h4>

                    <div className="flex items-center gap-3 text-[11px] text-slate-400 dark:text-slate-500 mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {dateStr}
                      </span>
                      <span>•</span>
                      <span className="capitalize">{exam.difficulty}</span>
                    </div>
                  </div>

                  {/* Badge da Nota */}
                  <div className="flex flex-col items-end shrink-0">
                    <div className={`w-11 h-11 rounded-2xl flex flex-col items-center justify-center font-black text-sm border shadow-2xs ${
                      exam.score >= 7
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60'
                        : exam.score >= 5
                        ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/60'
                        : 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/60'
                    }`}>
                      <span>{exam.score?.toFixed(1)}</span>
                      <span className="text-[8px] -mt-1 opacity-70">NOTA</span>
                    </div>

                    <button
                      onClick={(e) => handleDelete(e, exam.id)}
                      className="mt-2 text-slate-300 dark:text-slate-600 hover:text-rose-500 dark:hover:text-rose-400 p-1 transition-colors"
                      title="Excluir prova"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Botão para limpar histórico */}
          <div className="pt-4 text-center">
            <button
              onClick={handleClearAll}
              className="text-xs text-slate-400 dark:text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors inline-flex items-center gap-1 font-semibold"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Limpar histórico do celular</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
