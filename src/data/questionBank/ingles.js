// Banco de questões de Língua Inglesa - 6º, 7º e 8º ano (BNCC)
export const inglesQuestions = [
  // --- TÓPICO: Verb To Be and Pronouns ---
  {
    grade: "6",
    topic: "Verb To Be and Pronouns",
    keywords: ["verb", "to be", "pronouns", "am", "is", "are"],
    difficulty: "facil",
    question: "Complete correctly the sentence: 'She _____ a very dedicated student and they _____ her best friends.'",
    options: [
      { letter: "A", text: "is / are." },
      { letter: "B", text: "are / is." },
      { letter: "C", text: "am / are." },
      { letter: "D", text: "is / am." }
    ],
    correctAnswer: "A",
    explanation: "Na 3ª pessoa do singular (He, She, It) utiliza-se 'is'. Para o plural (They, We, You) utiliza-se 'are'."
  },
  {
    grade: "6",
    topic: "Verb To Be and Pronouns",
    keywords: ["negative", "verb to be", "isn't", "aren't"],
    difficulty: "facil",
    question: "What is the correct negative form of the sentence: 'We are at school right now'?",
    options: [
      { letter: "A", text: "We are not (aren't) at school right now." },
      { letter: "B", text: "We not are at school right now." },
      { letter: "C", text: "We doesn't at school right now." },
      { letter: "D", text: "We no be at school right now." }
    ],
    correctAnswer: "A",
    explanation: "A negação com o verbo 'to be' é formada adicionando 'not' após o verbo: 'are not' ou a forma contraída 'aren't'."
  },
  {
    grade: "6",
    topic: "Verb To Be and Pronouns",
    keywords: ["question", "interrogative", "are you", "short answer"],
    difficulty: "facil",
    question: "How do you ask someone politely if they are ready in English?",
    options: [
      { letter: "A", text: "Are you ready?" },
      { letter: "B", text: "You are ready?" },
      { letter: "C", text: "Is you ready?" },
      { letter: "D", text: "Do you be ready?" }
    ],
    correctAnswer: "A",
    explanation: "Nas frases interrogativas com o verbo to be, inverte-se a ordem de sujeito e verbo: 'Are' (verbo) + 'you' (sujeito) + 'ready?'."
  },

  // --- TÓPICO: Simple Present and Daily Routines ---
  {
    grade: "6",
    topic: "Simple Present",
    keywords: ["simple", "present", "third", "person", "likes", "plays", "studies"],
    difficulty: "medio",
    question: "In the Simple Present tense, third person singular subjects (he, she, it) require a spelling change in the verb. Choose the correct sentence:",
    options: [
      { letter: "A", text: "My brother plays soccer every Saturday." },
      { letter: "B", text: "My brother play soccer every Saturday." },
      { letter: "C", text: "My brother playing soccer every Saturday." },
      { letter: "D", text: "My brother to play soccer every Saturday." }
    ],
    correctAnswer: "A",
    explanation: "Na 3ª pessoa do singular (My brother = He) do Simple Present, acrescenta-se '-s' (ou '-es', '-ies') ao verbo principal."
  },
  {
    grade: "7",
    topic: "Simple Present",
    keywords: ["auxiliary", "does", "doesn't", "negative"],
    difficulty: "medio",
    question: "Choose the correct negative sentence in the Simple Present for 'Lucas drinks coffee in the morning':",
    options: [
      { letter: "A", text: "Lucas doesn't drink coffee in the morning." },
      { letter: "B", text: "Lucas don't drinks coffee in the morning." },
      { letter: "C", text: "Lucas not drink coffee in the morning." },
      { letter: "D", text: "Lucas isn't drink coffee in the morning." }
    ],
    correctAnswer: "A",
    explanation: "Para He/She/It, usa-se o auxiliar 'does not' ('doesn't') e o verbo principal volta à sua forma infinitiva básica sem 's' ('drink')."
  },

  // --- TÓPICO: Question Words ---
  {
    grade: "6",
    topic: "Question Words (Wh- Questions)",
    keywords: ["wh", "questions", "where", "what", "when", "who"],
    difficulty: "facil",
    question: "If you want to know the LOCATION or place of someone or something, which Question Word should you use?",
    options: [
      { letter: "A", text: "Where (ex: 'Where is my pencil?')." },
      { letter: "B", text: "When (refers to time)." },
      { letter: "C", text: "Who (refers to people)." },
      { letter: "D", text: "Why (refers to reasons)." }
    ],
    correctAnswer: "A",
    explanation: "'Where' significa 'onde' (lugar); 'When' é 'quando' (tempo); 'Who' é 'quem' (pessoa); e 'Why' é 'por que' (motivo)."
  },
  {
    grade: "7",
    topic: "Question Words (Wh- Questions)",
    keywords: ["question", "time", "what time", "hours"],
    difficulty: "facil",
    question: "Which question correctly asks for the exact time on the clock?",
    options: [
      { letter: "A", text: "What time is it?" },
      { letter: "B", text: "How much time is?" },
      { letter: "C", text: "Where hours is it?" },
      { letter: "D", text: "Who time is now?" }
    ],
    correctAnswer: "A",
    explanation: "'What time is it?' é a expressão padrão para perguntar 'Que horas são?' em inglês."
  },

  // --- TÓPICO: Prepositions of Place ---
  {
    grade: "6",
    topic: "Prepositions of Place",
    keywords: ["prepositions", "in", "on", "under", "table"],
    difficulty: "facil",
    question: "Look at the situation: 'The book is placed on top of the desk's surface'. The correct preposition is:",
    options: [
      { letter: "A", text: "The book is ON the desk." },
      { letter: "B", text: "The book is UNDER the desk." },
      { letter: "C", text: "The book is IN the desk." },
      { letter: "D", text: "The book is BEHIND the desk." }
    ],
    correctAnswer: "A",
    explanation: "'On' é usado para objetos que estão apoiados sobre uma superfície com contato físico; 'In' é dentro; 'Under' é embaixo."
  },

  // --- TÓPICO: Modal Verbs and Ability (8º ano) ---
  {
    grade: "8",
    topic: "Modal Verbs: Can and Can't",
    keywords: ["can", "cant", "ability", "permission"],
    difficulty: "facil",
    question: "The modal verb 'CAN' is commonly used to express ability or permission. What is the correct translation of: 'She can speak three languages fluently'?",
    options: [
      { letter: "A", text: "Ela sabe/consegue falar três idiomas fluentemente." },
      { letter: "B", text: "Ela deve estudar três idiomas amanhã." },
      { letter: "C", text: "Ela costumava falar três idiomas no passado." },
      { letter: "D", text: "Ela não quer falar com ninguém." }
    ],
    correctAnswer: "A",
    explanation: "'Can' indica habilidade ou capacidade física/mental de realizar uma ação."
  },
  {
    grade: "8",
    topic: "There is / There are",
    keywords: ["there is", "there are", "ha", "existe", "singular", "plural"],
    difficulty: "medio",
    question: "Choose the sentence that correctly uses 'There is' (singular) and 'There are' (plural) to indicate existence:",
    options: [
      { letter: "A", text: "There is a computer on the desk and there are five chairs in the room." },
      { letter: "B", text: "There are a computer on the desk and there is five chairs." },
      { letter: "C", text: "There have a computer on the desk." },
      { letter: "D", text: "There has many books in the library." }
    ],
    correctAnswer: "A",
    explanation: "Usa-se 'There is' para existência no singular ('a computer') e 'There are' para o plural ('five chairs'). O verbo 'have' não deve ser usado no sentido de existir em inglês."
  },
  // --- NOVAS QUESTÕES DE INGLÊS ---
  {
    grade: "6",
    topic: "Possessive Adjectives",
    keywords: ["possessive", "my", "your", "his", "her", "their"],
    difficulty: "facil",
    question: "Complete the sentence with the appropriate possessive adjective: 'Gabriel loves pets. _____ dog is very friendly and playful.'",
    options: [
      { letter: "A", text: "His (dele)." },
      { letter: "B", text: "Her (dela)." },
      { letter: "C", text: "My (meu)." },
      { letter: "D", text: "Their (deles)." }
    ],
    correctAnswer: "A",
    explanation: "Gabriel é um sujeito masculino singular (He), logo seu adjetivo possessivo correspondente é 'His' (seu/dele)."
  },
  {
    grade: "6",
    topic: "Plural of Nouns",
    keywords: ["plural", "irregular", "children", "child", "man", "men"],
    difficulty: "medio",
    question: "Some English nouns have irregular plurals. What is the correct plural form of the words 'child' and 'man'?",
    options: [
      { letter: "A", text: "Children and Men." },
      { letter: "B", text: "Childs and Mans." },
      { letter: "C", text: "Childes and Manes." },
      { letter: "D", text: "Childrens and Mens." }
    ],
    correctAnswer: "A",
    explanation: "O plural de 'child' é 'children' e o de 'man' é 'men', sem acrescentar 's' no final."
  },
  {
    grade: "7",
    topic: "Comparative Adjectives",
    keywords: ["comparative", "taller", "more", "than", "adjectives"],
    difficulty: "medio",
    question: "To compare two people or things in English, we use comparative forms. Choose the grammatically correct sentence:",
    options: [
      { letter: "A", text: "Lucas is taller than his younger brother." },
      { letter: "B", text: "Lucas is more tall that his brother." },
      { letter: "C", text: "Lucas is the most tall brother." },
      { letter: "D", text: "Lucas is as taller brother." }
    ],
    correctAnswer: "A",
    explanation: "Para adjetivos curtos de uma sílaba como 'tall', acrescenta-se o sufixo '-er' seguido de 'than': 'taller than' (mais alto que)."
  },
  {
    grade: "7",
    topic: "Daily Routine and Time",
    keywords: ["frequency", "adverbs", "always", "never", "usually"],
    difficulty: "facil",
    question: "Which adverb of frequency means doing something 100% of the time, without exception?",
    options: [
      { letter: "A", text: "Always (sempre)." },
      { letter: "B", text: "Never (nunca)." },
      { letter: "C", text: "Sometimes (às vezes)." },
      { letter: "D", text: "Rarely (raramente)." }
    ],
    correctAnswer: "A",
    explanation: "'Always' indica frequência total (100%), enquanto 'never' indica ausência de ocorrência (0%)."
  },
  {
    grade: "8",
    topic: "Simple Past: Regular and Irregular Verbs",
    keywords: ["past", "visited", "went", "yesterday", "did"],
    difficulty: "medio",
    question: "Choose the sentence that correctly expresses an action in the Simple Past:",
    options: [
      { letter: "A", text: "We watched a great movie at the cinema yesterday." },
      { letter: "B", text: "We watch a great movie at the cinema yesterday." },
      { letter: "C", text: "We will watch a great movie yesterday." },
      { letter: "D", text: "We are watching a movie yesterday." }
    ],
    correctAnswer: "A",
    explanation: "Com 'yesterday' (ontem), o verbo regular 'watch' recebe a desinência de passado '-ed' ('watched')."
  }
];
