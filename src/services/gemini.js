import { getMockExam } from './mockQuestions';

// Chave armazenada no localStorage do dispositivo
const API_KEY_STORAGE = 'gemini_api_key';

export function getStoredApiKey() {
  return localStorage.getItem(API_KEY_STORAGE) || '';
}

export function saveStoredApiKey(key) {
  if (key) {
    localStorage.setItem(API_KEY_STORAGE, key.trim());
  } else {
    localStorage.removeItem(API_KEY_STORAGE);
  }
}

// Cache em memória para não consultar a lista de modelos a cada clique
let cachedModelsList = null;

/**
 * Descobre dinamicamente os modelos disponíveis para a chave do usuário no Google AI Studio.
 * Utiliza timeout rigoroso de 4s para nunca travar a aplicação.
 */
export async function getAvailableGeminiModels(apiKey) {
  if (!apiKey) return [];
  if (cachedModelsList && cachedModelsList.length > 0) {
    return cachedModelsList;
  }

  // 1. Tenta descobrir via endpoint v1beta
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`, {
      signal: AbortSignal.timeout(4000)
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.models)) {
        const supported = data.models
          .filter((m) => {
            const n = m.name.toLowerCase();
            return (
              m.supportedGenerationMethods?.includes('generateContent') &&
              !n.includes('tts') &&
              !n.includes('audio') &&
              !n.includes('embed') &&
              !n.includes('imagen') &&
              !n.includes('2.5-flash')
            );
          })
          .map((m) => ({
            name: m.name.replace(/^models\//, ''),
            version: 'v1beta'
          }));

        if (supported.length > 0) {
          const sorted = supported.sort((a, b) => {
            const aName = a.name.toLowerCase();
            const bName = b.name.toLowerCase();
            const score = (name) => {
              // Desprioriza modelos experimentais e previews que sofrem com 503 na cota gratuita
              if (name.includes('preview') || name.includes('exp') || name.includes('latest')) {
                return 2;
              }
              if (name === 'gemini-2.0-flash') return 20;
              if (name === 'gemini-1.5-flash') return 18;
              if (name === 'gemini-2.0-flash-lite') return 16;
              if (name === 'gemini-1.5-flash-8b') return 14;
              if (name === 'gemini-1.5-pro') return 10;
              if (name.includes('flash')) return 8;
              if (name.includes('pro')) return 6;
              return 1;
            };
            return score(bName) - score(aName);
          });
          cachedModelsList = sorted;
          return sorted;
        }
      }
    }
  } catch (err) {
    console.warn('Não foi possível listar modelos em v1beta:', err.message);
  }

  // 2. Fallback padrão rápido com modelos estáveis
  const defaultList = [
    { name: 'gemini-2.0-flash', version: 'v1beta' },
    { name: 'gemini-1.5-flash', version: 'v1' },
    { name: 'gemini-2.0-flash-lite', version: 'v1beta' },
    { name: 'gemini-1.5-flash-8b', version: 'v1beta' }
  ];
  cachedModelsList = defaultList;
  return defaultList;
}

/**
 * Valida se uma chave informada pelo usuário é funcional no Google AI Studio.
 */
export async function validateGeminiApiKey(apiKey) {
  if (!apiKey || !apiKey.trim()) {
    return { success: false, error: 'Por favor, informe uma chave de API.' };
  }

  const cleanKey = apiKey.trim();

  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${cleanKey}`, {
      signal: AbortSignal.timeout(6000)
    });
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return {
        success: false,
        error: data.error?.message || `Erro de validação (HTTP ${res.status}). Verifique se a chave está correta.`
      };
    }

    const available = (data.models || [])
      .filter((m) => m.supportedGenerationMethods?.includes('generateContent'))
      .map((m) => m.name.replace(/^models\//, ''));

    return {
      success: true,
      models: available,
      primaryModel: available.find((m) => m.includes('2.0-flash')) || available.find((m) => m.includes('flash')) || 'gemini-2.0-flash'
    };
  } catch (error) {
    return {
      success: false,
      error: `Falha de rede ao verificar chave: ${error.message}`
    };
  }
}

/**
 * Gera uma prova usando a API gratuita do Google Gemini Flash.
 * Possui timeout de 15s e contingência imediata com questões offline se a API do Google estiver sobrecarregada.
 */
export async function generateExam({ grade = '6', subject, topics, totalQuestions = 10, difficulty = 'misto' }) {
  const apiKey = getStoredApiKey();

  // Se não houver chave configurada, usa o banco simulado do ano selecionado
  if (!apiKey) {
    console.log(`Sem chave configurada. Usando banco de questões simulado do ${grade}º ano.`);
    return {
      questions: getMockExam(subject, topics, totalQuestions, difficulty, grade),
      source: 'offline_mock'
    };
  }

  const ageRange = grade === '6' ? '11 a 12' : grade === '7' ? '12 a 13' : '13 a 14';

  const difficultyDesc = {
    facil: `nível Fácil (questões diretas, conceitos básicos do ${grade}º ano)`,
    medio: `nível Médio (aplicação prática de conceitos e interpretação do ${grade}º ano)`,
    dificil: `nível Difícil (desafios de raciocínio lógico, problemas com múltiplas etapas para o ${grade}º ano)`,
    misto: 'nível Misto (distribuição equilibrada entre fácil, médio e difícil)'
  }[difficulty] || 'nível Médio';

  const systemInstruction = `Você é um professor especialista no ${grade}º ano do Ensino Fundamental brasileiro (Base Nacional Comum Curricular - BNCC).
Sua missão é criar uma avaliação escolar de múltipla escolha com exatamente ${totalQuestions} questões, no formato estrito JSON.
As perguntas devem ser claras, estimulantes e perfeitamente adequadas para alunos do ${grade}º ano (idade aproximada de ${ageRange} anos).
Cada questão DEVE conter:
- "question": Enunciado da questão
- "options": Array com exatamente 4 alternativas: [{"letter":"A","text":"..."},{"letter":"B","text":"..."},{"letter":"C","text":"..."},{"letter":"D","text":"..."}]
- "correctAnswer": Letra da alternativa correta ("A", "B", "C" ou "D")
- "explanation": Explicação didática, amigável e clara para o aluno entender por que aquela alternativa é a correta.`;

  const prompt = `Gere uma prova com exatamente ${totalQuestions} questões de múltipla escolha para o ${grade}º ano.
Disciplina: ${subject}
Assuntos/Conteúdos a serem cobrados: ${topics || `Conteúdo geral do ${grade}º ano para esta matéria`}
Nível de Dificuldade: ${difficultyDesc}

Responda ESTRITAMENTE em formato JSON com a seguinte estrutura:
[
  {
    "id": 1,
    "question": "Enunciado da questão...",
    "options": [
      { "letter": "A", "text": "Opção A" },
      { "letter": "B", "text": "Opção B" },
      { "letter": "C", "text": "Opção C" },
      { "letter": "D", "text": "Opção D" }
    ],
    "correctAnswer": "A",
    "explanation": "Explicação didática detalhada..."
  }
]`;

  try {
    const candidateModels = await getAvailableGeminiModels(apiKey);
    // Testa no máximo os 2 melhores modelos para nunca travar a tela
    const topCandidates = candidateModels.slice(0, 2);
    let lastError = null;

    for (const candidate of topCandidates) {
      const modelName = candidate.name;
      const apiVersion = candidate.version || 'v1beta';

      try {
        const url = `https://generativelanguage.googleapis.com/${apiVersion}/models/${modelName}:generateContent?key=${apiKey}`;
        
        // Timeout de 14 segundos por requisição ao Google
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: `${systemInstruction}\n\n${prompt}` }]
              }
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 8192,
              responseMimeType: 'application/json'
            }
          }),
          signal: AbortSignal.timeout(16000)
        });

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          const errMsg = errData.error?.message || `Erro HTTP ${response.status}`;
          throw new Error(errMsg);
        }

        const data = await response.json();
        const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!rawText) {
          throw new Error('Resposta vazia da API do Gemini');
        }

        let cleaned = rawText.trim();
        if (cleaned.startsWith('```json')) {
          cleaned = cleaned.substring(7);
        }
        if (cleaned.startsWith('```')) {
          cleaned = cleaned.substring(3);
        }
        if (cleaned.endsWith('```')) {
          cleaned = cleaned.substring(0, cleaned.length - 3);
        }

        let parsed;
        try {
          parsed = JSON.parse(cleaned.trim());
        } catch (parseErr) {
          // Recuperação inteligente caso o JSON tenha sido truncado no final
          const lastValidBrace = cleaned.lastIndexOf('}');
          if (lastValidBrace !== -1) {
            try {
              const fixedJson = cleaned.substring(0, lastValidBrace + 1) + ']';
              parsed = JSON.parse(fixedJson);
            } catch {
              throw parseErr;
            }
          } else {
            throw parseErr;
          }
        }

        if (Array.isArray(parsed) && parsed.length > 0) {
          const questions = parsed.slice(0, totalQuestions).map((q, idx) => ({
            ...q,
            id: idx + 1
          }));

          console.log(`Prova gerada com sucesso usando o modelo: ${modelName} (${apiVersion})`);
          return {
            questions,
            source: 'gemini_ai',
            model: modelName
          };
        }
      } catch (err) {
        console.warn(`Tentativa com ${modelName} (${apiVersion}) falhou:`, err.message);
        lastError = err;
        // Continua para o próximo modelo candidato da lista
      }
    }

    throw lastError || new Error('Não foi possível conectar aos modelos do Gemini.');
  } catch (error) {
    console.error('Erro na chamada ao Gemini API:', error);
    let userWarning = 'Aviso: ';
    const msg = (error.message || '').toLowerCase();
    if (msg.includes('quota') || msg.includes('exhausted') || msg.includes('429')) {
      userWarning += 'Limite temporário da cota gratuita da API Gemini do Google atingido. Sua prova foi gerada imediatamente pelo super banco oficial do ProvaLAB!';
    } else if (msg.includes('demand') || msg.includes('sobrecarregado') || msg.includes('503')) {
      userWarning += 'Servidores do Google em alta demanda no momento. Sua prova foi gerada imediatamente pelo super banco oficial do ProvaLAB!';
    } else {
      userWarning += `${error.message || 'Falha de conexão com a IA.'} Avaliação carregada do banco oficial do ProvaLAB!`;
    }

    return {
      questions: getMockExam(subject, topics, totalQuestions, difficulty, grade),
      source: 'offline_fallback',
      warning: userWarning
    };
  }
}
