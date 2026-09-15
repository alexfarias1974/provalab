import React from 'react';
import { AlertTriangle, CheckCircle2, ArrowLeft, Send, Sparkles } from 'lucide-react';

export function PendingModal({
  isOpen,
  onClose,
  totalQuestions,
  answeredCount,
  unansweredIndices,
  onJumpToQuestion,
  onConfirmSubmit
}) {
  if (!isOpen) return null;

  const hasUnanswered = unansweredIndices.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl p-5 shadow-2xl border border-slate-100 dark:border-slate-800 max-h-[90vh] overflow-y-auto transition-colors">
        {/* Cabeçalho do modal */}
        <div className="text-center pb-3">
          {hasUnanswered ? (
            <div className="w-14 h-14 bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
              <AlertTriangle className="w-7 h-7" />
            </div>
          ) : (
            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
              <CheckCircle2 className="w-7 h-7" />
            </div>
          )}

          <h3 className="text-lg font-black text-slate-800 dark:text-slate-100">
            {hasUnanswered ? 'Questões em Branco Detectadas!' : 'Tudo Pronto para Finalizar?'}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Resumo do preenchimento da sua avaliação
          </p>
        </div>

        {/* Card de Resumo de Preenchimento */}
        <div className="bg-slate-50 dark:bg-slate-800/70 rounded-2xl p-4 my-3 border border-slate-100 dark:border-slate-700">
          <div className="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-300 mb-2">
            <span>Progresso da Prova:</span>
            <span className={hasUnanswered ? 'text-amber-600 dark:text-amber-400' : 'text-emerald-600 dark:text-emerald-400'}>
              {answeredCount} de {totalQuestions} respondidas
            </span>
          </div>

          {/* Barra de progresso */}
          <div className="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                hasUnanswered ? 'bg-amber-500' : 'bg-emerald-500'
              }`}
              style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Alerta específico de questões não respondidas */}
        {hasUnanswered ? (
          <div className="my-4 bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-2xl p-4 text-amber-950 dark:text-amber-200">
            <div className="flex items-start gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs font-bold leading-tight">
                Você ainda não marcou as seguintes questões:
              </p>
            </div>

            {/* Badges clicáveis para ir direto para a questão pendente */}
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {unansweredIndices.map((qNum) => (
                <button
                  key={qNum}
                  onClick={() => onJumpToQuestion(qNum - 1)}
                  className="px-3 py-1.5 bg-white dark:bg-slate-800 border-2 border-amber-400 dark:border-amber-500 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 dark:hover:text-slate-900 text-amber-900 dark:text-amber-200 rounded-xl font-black text-xs shadow-xs transition-all flex items-center gap-1 active:scale-95"
                  title={`Ir para questão ${qNum}`}
                >
                  <span>Questão {qNum}</span>
                  <ArrowLeft className="w-3 h-3 rotate-180" />
                </button>
              ))}
            </div>
            <p className="text-[11px] text-amber-700/80 dark:text-amber-400/80 mt-2.5 italic">
              Toque no número da questão acima para ir direto até ela e marcar sua resposta!
            </p>
          </div>
        ) : (
          <div className="my-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl p-4 text-center">
            <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mx-auto mb-1" />
            <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
              Excelente! Todas as {totalQuestions} questões foram respondidas!
            </p>
            <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-0.5">
              Ao confirmar, você verá sua nota, gabarito e explicação de cada uma.
            </p>
          </div>
        )}

        {/* Botões de Ação */}
        <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
          {hasUnanswered ? (
            <>
              <button
                onClick={() => onJumpToQuestion(unansweredIndices[0] - 1)}
                className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white rounded-2xl font-bold text-sm shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar e Responder Pendentes</span>
              </button>
              
              <button
                onClick={onConfirmSubmit}
                className="w-full py-2.5 px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl transition-colors text-center"
              >
                Entregar mesmo assim com {unansweredIndices.length} em branco
              </button>
            </>
          ) : (
            <>
              <button
                onClick={onConfirmSubmit}
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white rounded-2xl font-black text-sm shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Entregar Prova e Ver Resultado</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
              >
                Revisar antes de entregar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
