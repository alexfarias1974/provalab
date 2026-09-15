import React from 'react';
import { BookOpen, History, Key, Sun, Moon } from 'lucide-react';

export function Header({
  currentView,
  setView,
  hasApiKey,
  onOpenApiKeyModal,
  theme = 'dark',
  onToggleTheme,
  selectedGrade = '6'
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 pt-[max(env(safe-area-inset-top),0.75rem)] pb-3 shadow-xs transition-colors">
      <div className="max-w-md mx-auto flex items-center justify-between">
        {/* Logo e Nome */}
        <div 
          onClick={() => setView('config')}
          className="flex items-center gap-2.5 cursor-pointer active:scale-95 transition-transform"
        >
          <img 
            src="/icon-192.png" 
            alt="ProvaLAB" 
            className="w-10 h-10 rounded-xl object-contain shadow-xs shadow-blue-500/20"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-lg text-slate-800 dark:text-white tracking-tight">ProvaLAB</span>
              <span className="bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-[10px] font-extrabold px-1.5 py-0.5 rounded-full border border-blue-200/50 dark:border-blue-700/50">
                {selectedGrade}º ANO
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 -mt-0.5">Laboratório de Provas</p>
          </div>
        </div>

        {/* Ações / Navegação */}
        <div className="flex items-center gap-1.5">
          {/* Switch de Tema Claro / Escuro */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl text-xs font-semibold transition-all text-slate-600 dark:text-amber-300 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-90"
            title={theme === 'dark' ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro'}
            aria-label="Alternar modo claro e escuro"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {/* Botão de Histórico */}
          <button
            onClick={() => setView('history')}
            className={`flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
              currentView === 'history'
                ? 'bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title="Histórico de Provas no Celular"
          >
            <History className="w-4 h-4" />
            <span>Histórico</span>
          </button>

          {/* Botão Chave da API */}
          <button
            onClick={onOpenApiKeyModal}
            className={`p-2 rounded-xl text-xs font-semibold transition-all relative ${
              hasApiKey
                ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60'
                : 'text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 hover:bg-amber-100 dark:hover:bg-amber-900/60'
            }`}
            title="Configurar Chave Google Gemini"
          >
            <Key className="w-4 h-4" />
            <span className={`absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full ring-2 ring-white dark:ring-slate-900 ${hasApiKey ? 'bg-emerald-500' : 'bg-amber-500'}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
