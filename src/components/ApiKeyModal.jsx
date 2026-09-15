import React, { useState } from 'react';
import { X, Key, CheckCircle, ExternalLink, ShieldCheck, Sparkles, AlertCircle, Loader2 } from 'lucide-react';
import { getStoredApiKey, saveStoredApiKey, validateGeminiApiKey } from '../services/gemini';

export function ApiKeyModal({ isOpen, onClose, onKeySaved }) {
  const [keyInput, setKeyInput] = useState(getStoredApiKey());
  const [isTesting, setIsTesting] = useState(false);
  const [validationResult, setValidationResult] = useState(null);

  if (!isOpen) return null;

  const handleSave = async () => {
    if (!keyInput.trim()) {
      saveStoredApiKey('');
      if (onKeySaved) onKeySaved('');
      onClose();
      return;
    }

    setIsTesting(true);
    setValidationResult(null);

    const test = await validateGeminiApiKey(keyInput);
    setIsTesting(false);

    if (test.success) {
      saveStoredApiKey(keyInput);
      setValidationResult({
        success: true,
        message: `Chave verificada! Conectado com sucesso ao modelo ${test.primaryModel}.`
      });
      if (onKeySaved) onKeySaved(keyInput.trim());
      setTimeout(() => {
        onClose();
      }, 1500);
    } else {
      setValidationResult({
        success: false,
        error: test.error
      });
    }
  };

  const handleForceSave = () => {
    saveStoredApiKey(keyInput);
    if (onKeySaved) onKeySaved(keyInput.trim());
    onClose();
  };

  const handleClear = () => {
    setKeyInput('');
    setValidationResult(null);
    saveStoredApiKey('');
    if (onKeySaved) onKeySaved('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl p-5 shadow-2xl border border-slate-100 dark:border-slate-800 max-h-[90vh] overflow-y-auto transition-colors">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-xl">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base">Chave Google Gemini</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Geração de questões com IA gratuita</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 dark:text-slate-300 hover:text-slate-600 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="my-4 space-y-3">
          <div className="bg-blue-50 dark:bg-blue-950/50 border border-blue-200/70 dark:border-blue-800/60 rounded-xl p-3.5 text-xs text-blue-900 dark:text-blue-200 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-blue-800 dark:text-blue-300">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>100% Gratuito pelo Google AI Studio</span>
            </div>
            <p className="text-blue-800/90 dark:text-blue-300/90 leading-relaxed">
              O Google disponibiliza até <strong>1.500 gerações diárias gratuitas</strong> para uso pessoal. Não é necessário cartão de crédito.
            </p>
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 underline mt-1"
            >
              Criar chave grátis no Google AI Studio
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Cole sua Chave da API (Gemini API Key)
            </label>
            <input
              type="password"
              value={keyInput}
              onChange={(e) => {
                setKeyInput(e.target.value);
                setValidationResult(null);
              }}
              placeholder="AIzaSy..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-sm font-mono text-slate-800 dark:text-slate-100"
            />
            <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              Sua chave fica salva apenas na memória do seu próprio celular.
            </p>
          </div>

          {/* Feedback de Validação Positiva */}
          {validationResult?.success && (
            <div className="flex items-start gap-2 text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 p-3 rounded-xl text-xs font-semibold border border-emerald-200 dark:border-emerald-800/60">
              <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>{validationResult.message}</span>
            </div>
          )}

          {/* Feedback de Validação com Erro */}
          {validationResult && !validationResult.success && (
            <div className="space-y-2 text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/50 p-3 rounded-xl text-xs border border-rose-200 dark:border-rose-800/60">
              <div className="flex items-start gap-2 font-semibold">
                <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                <span>Erro ao validar chave com o Google:</span>
              </div>
              <p className="pl-6 text-[11px] opacity-90 leading-relaxed font-mono">
                {validationResult.error}
              </p>
              <div className="pl-6 pt-1">
                <button
                  type="button"
                  onClick={handleForceSave}
                  className="text-xs text-rose-700 dark:text-rose-300 underline font-semibold hover:text-rose-900"
                >
                  Salvar mesmo assim
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
          {keyInput && (
            <button
              onClick={handleClear}
              className="px-3 py-2 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-xl transition-colors"
            >
              Remover Chave
            </button>
          )}
          <button
            onClick={handleSave}
            disabled={isTesting}
            className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white rounded-xl text-sm font-bold shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {isTesting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Testando Conexão...</span>
              </>
            ) : (
              <span>Verificar e Salvar</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

