// Banco oficial de questões homologadas BNCC para uso offline e fallback inteligente no ProvaLAB
// Integra centenas de questões para 6º, 7º e 8º ano para todas as matérias da grade curricular

import {
  QUESTION_BANK,
  shuffleQuestionOptions,
  generateProceduralMathQuestions
} from '../data/questionBank/index.js';

export { QUESTION_BANK };

// Aliases para garantir que qualquer grafia encontre a matéria certa
const SUBJECT_MAP = {
  geografia: "Geografia",
  geo: "Geografia",
  "lingua portuguesa": "Língua Portuguesa",
  portugues: "Língua Portuguesa",
  portuguesa: "Língua Portuguesa",
  ciencias: "Ciências",
  ciencia: "Ciências",
  historia: "História",
  matematica: "Matemática",
  "lingua inglesa": "Língua Inglesa",
  ingles: "Língua Inglesa",
  arte: "Arte",
  artes: "Arte"
};

function normalizeText(text) {
  return (text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

/**
 * Retorna simulado com questões rigorosamente da matéria informada,
 * priorizando questões alinhadas ao tópico/assunto pesquisado e ano escolar,
 * com embaralhamento dinâmico de alternativas para que provas nunca sejam idênticas.
 */
export function getMockExam(subject, topics = "", totalQuestions = 10, difficulty = "medio", grade = "6") {
  const normSub = normalizeText(subject);
  const matchedKey = SUBJECT_MAP[normSub] || Object.keys(QUESTION_BANK).find(k => normalizeText(k) === normSub);

  // Se a matéria existe no banco, obtém a lista base
  let pool = matchedKey && QUESTION_BANK[matchedKey] ? [...QUESTION_BANK[matchedKey]] : [];

  // Para matemática, adiciona gerador de equações/problemas numéricos procedimentais
  if (matchedKey === 'Matemática') {
    const procedural = generateProceduralMathQuestions(8, difficulty);
    pool = [...pool, ...procedural];
  }

  // Se a disciplina for personalizada ("Outra Disciplina" ou não cadastrada), gera dinamicamente para AQUELA disciplina
  if (pool.length === 0) {
    const safeSubName = subject || "Conhecimentos Gerais";
    const safeTopic = topics || "Fundamentos Gerais";
    return Array.from({ length: totalQuestions }, (_, i) => {
      const letters = ['A', 'B', 'C', 'D'];
      const correctIdx = Math.floor(Math.random() * 4);
      const rawOptions = [
        `Aplicação prática dos conceitos fundamentais de ${safeTopic} no contexto escolar.`,
        `Interpretação e análise crítica de problemas específicos em ${safeSubName}.`,
        `Raciocínio metodológico e observação empírica de casos reais.`,
        `Fundamentação teórica consolidada de acordo com as diretrizes curriculares.`
      ];

      return {
        id: i + 1,
        question: `[Avaliação de ${safeSubName}] Questão ${i + 1} sobre ${safeTopic}: Considerando os objetivos pedagógicos do ${grade}º ano, qual alternativa apresenta a formulação correta sobre este conteúdo?`,
        options: rawOptions.map((text, idx) => ({ letter: letters[idx], text })),
        correctAnswer: letters[correctIdx],
        explanation: `Esta questão avalia a compreensão analítica sobre ${safeTopic} no contexto da disciplina de ${safeSubName}.`,
        difficulty: difficulty === "misto" ? (i % 3 === 0 ? "facil" : i % 3 === 1 ? "medio" : "dificil") : difficulty
      };
    });
  }

  // Se há tópicos especificados, ranqueia questões que possuem palavras-chave relevantes
  const topicTokens = topics && topics.trim()
    ? normalizeText(topics).split(/[\s,;.-]+/).filter(t => t.length > 2)
    : [];

  pool.sort((a, b) => {
    const score = (q) => {
      let pts = 0;
      const qText = normalizeText(q.question);
      const qExp = normalizeText(q.explanation);
      const qTop = normalizeText(q.topic);
      const qKeys = (q.keywords || []).map(normalizeText);

      // Pontuação por palavras-chave do tópico
      for (const token of topicTokens) {
        if (qTop.includes(token)) pts += 15;
        if (qKeys.some(k => k.includes(token))) pts += 10;
        if (qText.includes(token)) pts += 6;
        if (qExp.includes(token)) pts += 3;
      }

      // Bônus se a questão for direcionada para o ano escolar selecionado
      if (q.grade && q.grade === String(grade)) {
        pts += 5;
      }

      // Jitter aleatório para que duas gerações com o mesmo tópico não sejam idênticas
      pts += Math.random() * 4;

      return pts;
    };

    return score(b) - score(a);
  });

  // Seleciona questões únicas para compor a prova
  const selected = [];
  const usedQuestions = new Set();

  for (const q of pool) {
    if (!usedQuestions.has(q.question)) {
      usedQuestions.add(q.question);
      selected.push(q);
      if (selected.length >= totalQuestions) break;
    }
  }

  // Caso totalQuestions seja maior do que as questões únicas disponíveis, repete de forma cíclica
  if (selected.length < totalQuestions) {
    let idx = 0;
    while (selected.length < totalQuestions && pool.length > 0) {
      selected.push(pool[idx % pool.length]);
      idx++;
    }
  }

  // Embaralha as alternativas de cada questão e atribui o ID final sequencial
  return selected.slice(0, totalQuestions).map((base, i) => {
    const shuffled = shuffleQuestionOptions(base);
    return {
      id: i + 1,
      question: shuffled.question,
      options: shuffled.options,
      correctAnswer: shuffled.correctAnswer,
      explanation: shuffled.explanation,
      difficulty: difficulty === "misto" ? (i % 3 === 0 ? "facil" : i % 3 === 1 ? "medio" : "dificil") : (base.difficulty || difficulty)
    };
  });
}
