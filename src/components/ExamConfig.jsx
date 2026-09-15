import React, { useState } from 'react';
import { Sparkles, BookOpen, Layers, Target, HelpCircle, ArrowRight, Lightbulb, GraduationCap } from 'lucide-react';

const GRADES = [
  { id: '6', label: '6º Ano', age: '11-12 anos' },
  { id: '7', label: '7º Ano', age: '12-13 anos' },
  { id: '8', label: '8º Ano', age: '13-14 anos' }
];

const SUBJECTS = [
  'Matemática',
  'Língua Portuguesa',
  'Ciências',
  'História',
  'Geografia',
  'Língua Inglesa',
  'Arte',
  'Outra Disciplina'
];

// Sugestões de conteúdo alinhadas à BNCC por ano escolar
const TOPIC_SUGGESTIONS_BY_GRADE = {
  '6': {
    'Matemática': [
      'Frações e Números Decimais',
      'Múltiplos, Divisores e MMC',
      'Geometria Plana e Ângulos',
      'Áreas e Perímetros',
      'Operações com Números Naturais'
    ],
    'Ciências': [
      'Células e Organelas',
      'Misturas Homogêneas e Heterogêneas',
      'Camadas da Terra e Rochas',
      'Sistemas do Corpo Humano',
      'Movimentos da Terra e Estações'
    ],
    'História': [
      'Grécia Antiga e Democracia',
      'Roma Antiga e República',
      'Egito Antigo e Mesopotâmia',
      'Pré-História e Surgimento da Escrita',
      'Fontes Históricas e Tempo'
    ],
    'Geografia': [
      'Paisagem, Espaço e Lugar',
      'Relevo e Hidrografia do Brasil',
      'Coordenadas Geográficas e Fusos',
      'Clima e Vegetação',
      'Urbanização e População'
    ],
    'Língua Portuguesa': [
      'Classes de Palavras (Substantivo, Adjetivo, Verbo)',
      'Interpretação de Texto e Gêneros Textuais',
      'Sinônimos, Antônimos e Pontuação',
      'Linguagem Verbal e Não-Verbal',
      'Acentuação Gráfica'
    ],
    'Língua Inglesa': [
      'Verb to be and Simple Present',
      'School Objects and Colors',
      'Family Members and Feelings',
      'Numbers and Days of the Week'
    ]
  },
  '7': {
    'Matemática': [
      'Números Inteiros (Positivos e Negativos)',
      'Equações do 1º Grau com Uma Incógnita',
      'Razão, Proporção e Regra de Três Simples',
      'Porcentagem e Acréscimos/Descontos',
      'Ângulos, Triângulos e Polígonos'
    ],
    'Ciências': [
      'Reinos dos Seres Vivos (Bactérias, Fungos, Plantas, Animais)',
      'Biomas Brasileiros e Cadeias Alimentares',
      'Propagação do Calor (Condução, Convecção, Irradiação)',
      'Máquinas Simples e Força',
      'Vacinas, Vírus e Saúde Pública'
    ],
    'História': [
      'Feudalismo e Sociedade Medieval',
      'Renascimento Cultural e Científico',
      'Reformas Religiosas (Protestante e Católica)',
      'Grandes Navegações e Expansão Marítima',
      'Povos Indígenas e Colonização do Brasil'
    ],
    'Geografia': [
      'Formação Territorial e Fronteiras do Brasil',
      'As 5 Macro-regiões do IBGE',
      'Dinâmica Populacional e Migrações Brasileiras',
      'Domínios Morfoclimáticos do Brasil',
      'Agropecuária, Indústria e Meio Ambiente'
    ],
    'Língua Portuguesa': [
      'Transitividade Verbal (VTD, VTI e Bitransitivo)',
      'Sujeito, Predicado e Complementos Verbais',
      'Gêneros Textuais (Notícia, Crônica, Artigo de Opinião)',
      'Figuras de Linguagem (Metáfora, Comparação, Personificação)',
      'Concordância Verbal e Nominal'
    ],
    'Língua Inglesa': [
      'Simple Past (Regular and Irregular Verbs)',
      'Countable and Uncountable Nouns',
      'Quantifiers (some, any, much, many, a lot of)',
      'Prepositions of Place and Direction'
    ]
  },
  '8': {
    'Matemática': [
      'Notação Científica e Propriedades de Potências',
      'Produtos Notáveis e Polinômios',
      'Fatoração e Frações Algébricas',
      'Sistemas de Equações do 1º Grau',
      'Teorema de Tales e Semelhança de Triângulos'
    ],
    'Ciências': [
      'Sistema Reprodutor Humano e Puberdade',
      'Métodos Contraceptivos e Prevenção de ISTs',
      'Circuitos Elétricos, Tensão e Resistência',
      'Consumo, Potência e Eficiência Energética',
      'Previsão do Tempo e Camada de Ozônio'
    ],
    'História': [
      'Iluminismo e Crítica ao Antigo Regime',
      'Revolução Industrial e Novas Relações de Trabalho',
      'Revolução Francesa e Era Napoleônica',
      'Independência dos Estados Unidos',
      'Independência do Brasil e Primeiro Reinado'
    ],
    'Geografia': [
      'Continente Americano: Divisões Físicas e Culturais',
      'Geopolítica Mundial e Guerra Fria',
      'América Latina: Contrastes Sociais e Econômicos',
      'África: Partilha Colonial, Conflitos e Diversidade',
      'Globalização e Blocos Econômicos'
    ],
    'Língua Portuguesa': [
      'Vozes Verbais (Ativa, Passiva e Reflexiva)',
      'Adjunto Adnominal vs Complemento Nominal',
      'Período Composto por Coordenação (Orações Coordenadas)',
      'Emprego do Sinal Indicativo de Crase',
      'Regência Verbal e Nominal'
    ],
    'Língua Inglesa': [
      'Comparative and Superlative Adjectives',
      'Modal Verbs (can, could, should, must)',
      'Future Tenses (will vs going to)',
      'Connectors and Reading Comprehension'
    ]
  }
};

export function ExamConfig({
  onStartExam,
  isLoading,
  hasApiKey,
  onOpenApiKeyModal,
  selectedGrade = '6',
  onSelectGrade
}) {
  const [grade, setGrade] = useState(selectedGrade);
  const [subject, setSubject] = useState('Matemática');
  const [customSubject, setCustomSubject] = useState('');
  const [topics, setTopics] = useState(
    TOPIC_SUGGESTIONS_BY_GRADE[selectedGrade]?.['Matemática']?.[0] || 'Frações e Números Decimais'
  );
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [difficulty, setDifficulty] = useState('medio');

  const handleGradeChange = (newGrade) => {
    setGrade(newGrade);
    if (onSelectGrade) onSelectGrade(newGrade);
    const newSuggestions = TOPIC_SUGGESTIONS_BY_GRADE[newGrade]?.[subject] || [];
    if (newSuggestions.length > 0) {
      setTopics(newSuggestions[0]);
    }
  };

  const handleSubjectChange = (newSub) => {
    setSubject(newSub);
    const newSuggestions = TOPIC_SUGGESTIONS_BY_GRADE[grade]?.[newSub] || [];
    if (newSuggestions.length > 0) {
      setTopics(newSuggestions[0]);
    }
  };

  const currentSubject = subject === 'Outra Disciplina' ? customSubject : subject;
  const suggestions = TOPIC_SUGGESTIONS_BY_GRADE[grade]?.[subject] || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentSubject.trim()) {
      alert('Por favor, informe a disciplina.');
      return;
    }
    onStartExam({
      grade,
      subject: currentSubject.trim(),
      topics: topics.trim(),
      totalQuestions,
      difficulty
    });
  };

  return (
    <div className="max-w-md mx-auto px-4 py-5 animate-in fade-in duration-300">
      {/* Banner de boas-vindas */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-2xl p-5 shadow-lg shadow-blue-500/15 mb-5 relative overflow-hidden">
        <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none" />
        <div className="flex items-center gap-2 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-1">
          <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
          <span>ProvaLAB • Ensino Fundamental II</span>
        </div>
        <h2 className="text-xl font-black tracking-tight text-white mb-1">
          Laboratório de Provas
        </h2>
        <p className="text-blue-100 text-xs leading-relaxed">
          Selecione o ano escolar, a matéria e os tópicos para gerar um simulado personalizado sob medida para o celular!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* 1. Escolha do Ano Escolar (6º, 7º ou 8º) */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-xs transition-colors">
          <label className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-2.5">
            <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>1. Escolha o Ano Escolar</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {GRADES.map((g) => {
              const isSelected = grade === g.id;
              return (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => handleGradeChange(g.id)}
                  className={`py-3 px-2 rounded-xl border-2 font-black text-center transition-all active:scale-95 flex flex-col items-center justify-center gap-0.5 ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/80 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 shadow-xs'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className="text-sm">{g.label}</span>
                  <span className="text-[10px] font-normal opacity-75">{g.age}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Disciplina */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-xs transition-colors">
          <label className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-2.5">
            <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>2. Escolha a Disciplina</span>
          </label>
          <select
            value={subject}
            onChange={(e) => handleSubjectChange(e.target.value)}
            className="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 font-medium text-slate-800 dark:text-slate-100 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-slate-800 transition-all"
          >
            {SUBJECTS.map((sub) => (
              <option key={sub} value={sub} className="dark:bg-slate-800 dark:text-white">
                {sub}
              </option>
            ))}
          </select>

          {subject === 'Outra Disciplina' && (
            <input
              type="text"
              placeholder="Digite o nome da disciplina..."
              value={customSubject}
              onChange={(e) => setCustomSubject(e.target.value)}
              className="mt-2.5 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium text-slate-800 dark:text-slate-100 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              required
            />
          )}
        </div>

        {/* 3. Assunto / Conteúdo */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-xs transition-colors">
          <div className="flex items-center justify-between mb-2">
            <label className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide">
              <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>3. Assunto da Prova ({grade}º Ano)</span>
            </label>
            <span className="text-[11px] text-slate-400">Personalize ou use sugestões</span>
          </div>
          
          <input
            type="text"
            value={topics}
            onChange={(e) => setTopics(e.target.value)}
            placeholder="Ex: Frações, Roma Antiga, Equações..."
            className="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 font-medium text-slate-800 dark:text-slate-100 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-slate-800 transition-all"
            required
          />

          {/* Sugestões rápidas da BNCC por ano */}
          {suggestions.length > 0 && (
            <div className="mt-3">
              <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1 mb-1.5">
                <Lightbulb className="w-3 h-3 text-amber-500" />
                <span>Sugestões BNCC para o {grade}º ano:</span>
              </p>
              <div className="flex flex-wrap gap-1.5">
                {suggestions.map((sug) => (
                  <button
                    key={sug}
                    type="button"
                    onClick={() => setTopics(sug)}
                    className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all text-left ${
                      topics === sug
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    {sug}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 4. Quantidade de Questões */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-xs transition-colors">
          <label className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-2.5">
            <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>4. Quantidade de Questões</span>
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            {[10, 20].map((qCount) => (
              <button
                key={qCount}
                type="button"
                onClick={() => setTotalQuestions(qCount)}
                className={`py-3 px-4 rounded-xl border-2 font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-98 ${
                  totalQuestions === qCount
                    ? 'border-blue-600 bg-blue-50/60 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 shadow-xs'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <span>{qCount} Questões</span>
              </button>
            ))}
          </div>
        </div>

        {/* 5. Nível de Dificuldade */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-xs transition-colors">
          <label className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-2.5">
            <HelpCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>5. Nível de Dificuldade</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'facil', label: 'Fácil', color: 'text-emerald-700 dark:text-emerald-300 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40' },
              { id: 'medio', label: 'Médio', color: 'text-blue-700 dark:text-blue-300 border-blue-500 bg-blue-50 dark:bg-blue-950/40' },
              { id: 'dificil', label: 'Difícil', color: 'text-rose-700 dark:text-rose-300 border-rose-500 bg-rose-50 dark:bg-rose-950/40' },
              { id: 'misto', label: 'Misto', color: 'text-purple-700 dark:text-purple-300 border-purple-500 bg-purple-50 dark:bg-purple-950/40' }
            ].map((lvl) => (
              <button
                key={lvl.id}
                type="button"
                onClick={() => setDifficulty(lvl.id)}
                className={`py-2.5 px-3 rounded-xl border-2 font-bold text-xs transition-all active:scale-98 ${
                  difficulty === lvl.id
                    ? `${lvl.color} shadow-xs`
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {lvl.label}
              </button>
            ))}
          </div>
        </div>

        {/* Status da Conexão com Google Gemini */}
        <div className="flex items-center justify-between px-2 py-1 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${hasApiKey ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'}`} />
            {hasApiKey ? 'Conectado ao Google Gemini' : 'Modo Simulado BNCC (Offline)'}
          </span>
          {!hasApiKey && (
            <button
              type="button"
              onClick={onOpenApiKeyModal}
              className="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-800 dark:hover:text-blue-300"
            >
              Ativar IA Grátis
            </button>
          )}
        </div>

        {/* Botão de Iniciar Prova */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-98 text-white rounded-2xl font-black text-base shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Criando Prova do {grade}º Ano...</span>
            </div>
          ) : (
            <>
              <span>Gerar Prova Online ({grade}º Ano)</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

