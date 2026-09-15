// Banco de questões de Língua Portuguesa - 6º, 7º e 8º ano (BNCC)
export const portuguesQuestions = [
  // --- TÓPICO: Classes de Palavras: Substantivo e Adjetivo ---
  {
    grade: "6",
    topic: "Classes Gramaticais",
    keywords: ["substantivo", "coletivo", "alcatéia", "enxame", "cardume", "rebanho"],
    difficulty: "facil",
    question: "Os substantivos coletivos designam, no singular, um conjunto ou grupo de seres ou coisas da mesma espécie. Assinale a alternativa que traz a correlação CORRETA entre o substantivo coletivo e seu conjunto:",
    options: [
      { letter: "A", text: "Alcatéia (conjunto de lobos) e Cardume (conjunto de peixes)." },
      { letter: "B", text: "Enxame (conjunto de elefantes) e Rebanho (conjunto de formigas)." },
      { letter: "C", text: "Constelação (conjunto de navios) e Esquadra (conjunto de estrelas)." },
      { letter: "D", text: "Arquipélago (conjunto de livros) e Biblioteca (conjunto de ilhas)." }
    ],
    correctAnswer: "A",
    explanation: "'Alcatéia' é o coletivo de lobos e 'cardume' é o coletivo de peixes. Ilhas agrupam-se em 'arquipélago', estrelas em 'constelação' e navios em 'esquadra'."
  },
  {
    grade: "6",
    topic: "Classes Gramaticais",
    keywords: ["substantivo", "abstrato", "concreto", "sentimento", "acao"],
    difficulty: "medio",
    question: "Substantivos abstratos são aqueles que nomeiam ações, estados, qualidades ou sentimentos cuja existência depende de outro ser para se manifestar. Qual alternativa contém APENAS substantivos abstratos?",
    options: [
      { letter: "A", text: "Coragem, saudade, beleza e bondade." },
      { letter: "B", text: "Cadeira, mesa, lápis e caderno." },
      { letter: "C", text: "Cachorro, árvore, pedra e montanha." },
      { letter: "D", text: "Sol, nuvem, mar e vento." }
    ],
    correctAnswer: "A",
    explanation: "Coragem, saudade, beleza e bondade expressam sentimentos e qualidades que não possuem existência física autônoma no mundo material, precisando de alguém que os sinta ou manifeste."
  },
  {
    grade: "6",
    topic: "Classes Gramaticais",
    keywords: ["locucao", "adjetiva", "adjetivo", "chuva", "pluvial", "noite", "noturno"],
    difficulty: "medio",
    question: "Locução adjetiva é uma expressão formada geralmente por preposição + substantivo que exerce o papel de um adjetivo. Na frase 'A água da chuva abasteceu o reservatório', a locução destacada corresponde ao adjetivo erudito:",
    options: [
      { letter: "A", text: "Pluvial." },
      { letter: "B", text: "Fluvial (que vem dos rios)." },
      { letter: "C", text: "Marítimo (que vem dos mares)." },
      { letter: "D", text: "Sideral (que vem do cosmos)." }
    ],
    correctAnswer: "A",
    explanation: "'Da chuva' equivale a 'pluvial'. Já 'dos rios' equivale a 'fluvial', e 'da noite' equivale a 'noturno'."
  },

  // --- TÓPICO: Verbos e Tempos Verbais ---
  {
    grade: "6",
    topic: "Verbos e Tempos Verbais",
    keywords: ["verbos", "preterito", "perfeito", "imperfeito", "passado", "continuo"],
    difficulty: "medio",
    question: "Considere a frase: 'Enquanto o professor explicava a matéria, o sinal tocou'. Os verbos destacados 'explicava' e 'tocou' estão, respectivamente, conjugados nos tempos:",
    options: [
      { letter: "A", text: "Pretérito Imperfeito do Indicativo (ação em andamento no passado) e Pretérito Perfeito do Indicativo (ação pontual concluída)." },
      { letter: "B", text: "Presente do Indicativo e Futuro do Presente." },
      { letter: "C", text: "Pretérito Mais-que-perfeito e Futuro do Pretérito." },
      { letter: "D", text: "Imperativo Afirmativo e Subjuntivo Condicional." }
    ],
    correctAnswer: "A",
    explanation: "O pretérito imperfeito ('explicava') exprime uma ação contínua ou habitual no passado que foi interrompida pela ação pontual e completamente finalizada do pretérito perfeito ('tocou')."
  },
  {
    grade: "7",
    topic: "Verbos e Tempos Verbais",
    keywords: ["modo", "subjuntivo", "duvida", "hipotese", "desejo"],
    difficulty: "medio",
    question: "O modo verbal que expressa incerteza, dúvida, possibilidade ou um desejo hipotético é o:",
    options: [
      { letter: "A", text: "Modo Subjuntivo (ex: 'Se nós estudássemos mais, passaríamos')." },
      { letter: "B", text: "Modo Indicativo (que afirma fatos com certeza absoluta)." },
      { letter: "C", text: "Modo Imperativo (que exprime ordem, conselho ou súplica)." },
      { letter: "D", text: "Modo Infinitivo impessoal." }
    ],
    correctAnswer: "A",
    explanation: "O subjuntivo é o modo da subjetividade, da dúvida e da condição (ex: 'Espero que ele venha', 'Se chovesse...')."
  },

  // --- TÓPICO: Pronomes ---
  {
    grade: "6",
    topic: "Pronomes",
    keywords: ["pronomes", "pessoais", "reto", "obliquo", "mim", "eu"],
    difficulty: "facil",
    question: "Na norma-padrão da Língua Portuguesa, o pronome pessoal reto 'eu' funciona como sujeito que conjuga verbos, enquanto 'mim' é oblíquo tônico que não conjuga verbo. Assinale a frase que respeita a norma culta:",
    options: [
      { letter: "A", text: "Ele trouxe o livro de histórias para eu ler esta noite." },
      { letter: "B", text: "Ele trouxe o livro de histórias para mim ler agora." },
      { letter: "C", text: "Entre mim e tu não há segredos guardados." },
      { letter: "D", text: "Deixe mim fazer a prova sozinho." }
    ],
    correctAnswer: "A",
    explanation: "Antes de verbo no infinitivo que exige agente da ação ('ler'), utiliza-se o pronome reto 'eu' ('para eu ler'). 'Mim' não conjuga verbo."
  },
  {
    grade: "7",
    topic: "Pronomes",
    keywords: ["pronomes", "demonstrativos", "este", "esse", "aquele", "espaco"],
    difficulty: "medio",
    question: "Em relação ao espaço físico dos interlocutores, quando o falante quer apontar para um objeto que está bem próximo de si mesmo (em suas próprias mãos), a norma culta recomenda o uso do pronome demonstrativo:",
    options: [
      { letter: "A", text: "'Este' (ex: 'Este relógio no meu pulso é muito pontual')." },
      { letter: "B", text: "'Esse' (usado para o que está perto de quem ouve)." },
      { letter: "C", text: "'Aquele' (usado para o que está distante de ambos)." },
      { letter: "D", text: "'Nenhum' ou 'qualquer' indistintamente." }
    ],
    correctAnswer: "A",
    explanation: "'Este/esta/isto' indica proximidade do emissor (quem fala); 'esse/essa/isso' indica proximidade do receptor (com quem se fala); 'aquele/aquela/aquilo' refere-se ao que está afastado de ambos."
  },

  // --- TÓPICO: Sintaxe: Sujeito e Predicado ---
  {
    grade: "6",
    topic: "Sintaxe: Sujeito e Predicado",
    keywords: ["sujeito", "simples", "composto", "nucleo", "oracao"],
    difficulty: "facil",
    question: "Na oração: 'Os alunos do 6º ano venceram o torneio de xadrez da escola', o sujeito e o seu respectivo núcleo são:",
    options: [
      { letter: "A", text: "Sujeito: 'Os alunos do 6º ano'; Núcleo: 'alunos'." },
      { letter: "B", text: "Sujeito: 'O torneio de xadrez'; Núcleo: 'xadrez'." },
      { letter: "C", text: "Sujeito: 'Venceram'; Núcleo: 'escola'." },
      { letter: "D", text: "A oração não possui sujeito (é oração sem sujeito)." }
    ],
    correctAnswer: "A",
    explanation: "Perguntando ao verbo: 'Quem venceu o torneio?' Obtemos 'Os alunos do 6º ano' (sujeito simples, pois possui apenas um núcleo substantivo: 'alunos')."
  },
  {
    grade: "7",
    topic: "Sintaxe: Sujeito e Predicado",
    keywords: ["sujeito", "indeterminado", "terceira", "pessoa", "plural", "quebraram"],
    difficulty: "medio",
    question: "Na oração 'Quebraram a janela da sala de aula durante o recreio', o sujeito gramatical classifica-se como:",
    options: [
      { letter: "A", text: "Sujeito Indeterminado (o verbo está na 3ª pessoa do plural sem referência a alguém mencionado antes)." },
      { letter: "B", text: "Sujeito Oculto ou Desinencial ('nós')." },
      { letter: "C", text: "Sujeito Composto explícito." },
      { letter: "D", text: "Sujeito Simples ('recreio')." }
    ],
    correctAnswer: "A",
    explanation: "Quando o verbo está na 3ª pessoa do plural e o contexto não identifica nem deseja identificar quem praticou a ação, temos um sujeito indeterminado."
  },
  {
    grade: "7",
    topic: "Sintaxe: Transitividade Verbal",
    keywords: ["transitividade", "verbo", "transitivo", "direto", "indireto", "preposicao"],
    difficulty: "dificil",
    question: "Na oração 'O menino gosta de chocolate amargo', o verbo 'gostar' exige um complemento introduzido obrigatoriamente pela preposição 'de'. Esse verbo classifica-se como:",
    options: [
      { letter: "A", text: "Verbo Transitivo Indireto (e 'de chocolate amargo' é Objeto Indireto)." },
      { letter: "B", text: "Verbo Transitivo Direto (e 'de chocolate amargo' é Objeto Direto)." },
      { letter: "C", text: "Verbo Intransitivo completo sem complemento." },
      { letter: "D", text: "Verbo de Ligação estático." }
    ],
    correctAnswer: "A",
    explanation: "Verbos transitivos indiretos necessitam de um complemento regido por preposição para terem sentido completo na oração."
  },

  // --- TÓPICO: Semântica e Figuras de Linguagem ---
  {
    grade: "6",
    topic: "Denotação e Conotação",
    keywords: ["denotacao", "conotacao", "literal", "figurado", "sentido"],
    difficulty: "facil",
    question: "Dizemos que uma palavra está empregada em 'sentido conotativo' quando ela:",
    options: [
      { letter: "A", text: "Assume um significado figurado, poético, simbólico ou expressivo, dependente do contexto literário." },
      { letter: "B", text: "Apresenta estritamente o seu sentido literal, dicionarizado e real e exato." },
      { letter: "C", text: "Foi traduzida de uma língua estrangeira sem tradutor." },
      { letter: "D", text: "Está escrita incorretamente com erros ortográficos graves." }
    ],
    correctAnswer: "A",
    explanation: "Denotação é o sentido próprio e objetivo da palavra (D de Dicionário); Conotação é o sentido criativo e figurado (C de Criatividade/Coração)."
  },
  {
    grade: "7",
    topic: "Figuras de Linguagem",
    keywords: ["metafora", "comparacao", "figuras", "linguagem", "poesia"],
    difficulty: "medio",
    question: "Na frase 'Aquele jogador é um leão em campo!', temos um exemplo claro de qual figura de linguagem?",
    options: [
      { letter: "A", text: "Metáfora (uma comparação implícita direta sem conectivo como 'como' ou 'tal qual')." },
      { letter: "B", text: "Pleonasmo redundante." },
      { letter: "C", text: "Aliteração sonora." },
      { letter: "D", text: "Onomatopeia imitativa." }
    ],
    correctAnswer: "A",
    explanation: "A metáfora atribui qualidades de um termo a outro com base em semelhança subjetiva (a bravura e força do leão atribuída ao atleta), sem usar o conectivo de comparação explícito."
  },
  {
    grade: "7",
    topic: "Figuras de Linguagem",
    keywords: ["personificacao", "prosopopeia", "animar", "vento", "conversou"],
    difficulty: "facil",
    question: "No verso 'O vento uivou na janela e a lua sorriu para a noite serena', os elementos inanimados realizam ações humanas. Essa figura de linguagem é a:",
    options: [
      { letter: "A", text: "Personificação (ou Prosopopeia)." },
      { letter: "B", text: "Hipérbole exagerada." },
      { letter: "C", text: "Eufemismo suavizador." },
      { letter: "D", text: "Paradoxo contraditório." }
    ],
    correctAnswer: "A",
    explanation: "A personificação ou prosopopeia consiste em atribuir sentimentos, falas ou comportamentos humanos a seres inanimados, animais ou elementos da natureza."
  },
  {
    grade: "7",
    topic: "Figuras de Linguagem",
    keywords: ["hiperbole", "exagero", "morrendo", "rir", "sede"],
    difficulty: "facil",
    question: "Na expressão popular 'Já te avisei um milhão de vezes para não esquecer a mochila!', o falante utilizou um exagero intencional para dar ênfase à mensagem. Essa figura de linguagem é a:",
    options: [
      { letter: "A", text: "Hipérbole." },
      { letter: "B", text: "Ironia." },
      { letter: "C", text: "Sinestesia." },
      { letter: "D", text: "Metonímia." }
    ],
    correctAnswer: "A",
    explanation: "A hipérbole expressa uma ideia de maneira propositalmente desmedida ou exagerada para amplificar o impacto emotivo (ex: 'morrendo de fome', 'chorar rios de lágrimas')."
  },

  // --- TÓPICO: Ortografia e Acentuação Gráfica ---
  {
    grade: "6",
    topic: "Ortografia e Acentuação",
    keywords: ["proparoxitona", "regra", "todas", "acentuadas", "oxitonas"],
    difficulty: "facil",
    question: "De acordo com as regras oficiais de acentuação da Língua Portuguesa, as palavras proparoxítonas (cuja sílaba tônica é a antepenúltima) devem ser acentuadas:",
    options: [
      { letter: "A", text: "Todas sem exceção (ex: lâmpada, pássaro, médico, matemática)." },
      { letter: "B", text: "Apenas se terminarem nas vogais A, E ou O." },
      { letter: "C", text: "Somente quando forem substantivos próprios com mais de três sílabas." },
      { letter: "D", text: "Nunca recebem acento gráfico em nenhuma hipótese." }
    ],
    correctAnswer: "A",
    explanation: "Uma das regras mais simples e diretas da nossa gramática estabelece que 100% das palavras proparoxítonas são acentuadas graficamente."
  },
  {
    grade: "6",
    topic: "Ortografia: O Uso dos Porquês",
    keywords: ["porques", "por que", "porque", "por que", "por que separado"],
    difficulty: "medio",
    question: "Assinale a alternativa em que o uso do 'porquê' está empregado CORRETAMENTE de acordo com a norma-padrão:",
    options: [
      { letter: "A", text: "Por que você não foi à aula de ciências ontem?" },
      { letter: "B", text: "Você faltou ontem por que? Não me avisou nada!" },
      { letter: "C", text: "Ele não foi à escola por que estava com febre alta." },
      { letter: "D", text: "Não compreendi o por que de tanta pressa hoje." }
    ],
    correctAnswer: "A",
    explanation: "'Por que' (separado e sem acento) é usado no início de perguntas diretas ou indiretas. No final de frases usa-se 'por quê'; em respostas usa-se 'porque'; e como substantivo antecedido de artigo usa-se 'o porquê'."
  },
  {
    grade: "7",
    topic: "Pontuação e Emprego da Vírgula",
    keywords: ["virgula", "vocativo", "chamamento", "pontuacao"],
    difficulty: "medio",
    question: "O vocativo é o termo da oração utilizado para chamar, invocar ou interpelar a pessoa com quem se fala. Na norma culta, o vocativo deve vir:",
    options: [
      { letter: "A", text: "Sempre isolado por vírgula(s) (ex: 'Mariana, venha almoçar agora!')." },
      { letter: "B", text: "Obrigatoriamente entre parênteses e sem nenhuma pontuação." },
      { letter: "C", text: "Unido ao verbo sem vírgula para não quebrar a oração." },
      { letter: "D", text: "Apenas no final do texto após a assinatura." }
    ],
    correctAnswer: "A",
    explanation: "O vocativo é um termo sintático independente e deve sempre ser demarcado por vírgulas para indicar a pausa de entonação do chamamento."
  },

  // --- TÓPICO: Gêneros Textuais e Interpretação (8º ano) ---
  {
    grade: "8",
    topic: "Gêneros e Tipologias Textuais",
    keywords: ["noticia", "jornalismo", "lead", "fato", "objetividade", "informacao"],
    difficulty: "facil",
    question: "O gênero textual 'Notícia', típico da esfera jornalística e informativa, tem como características predominantes:",
    options: [
      { letter: "A", text: "Linguagem clara, objetiva, relato em 3ª pessoa sobre fatos reais recentes e o 'lide' respondendo: o quê, quem, quando, onde, como e por quê." },
      { letter: "B", text: "Narrativa mágica em versos rimados com animais falantes transmitindo uma moral." },
      { letter: "C", text: "Texto instrucional contendo apenas lista de ingredientes e modo de preparo culinário." },
      { letter: "D", text: "Opinião puramente pessoal e emotiva sem compromisso com a veracidade dos dados." }
    ],
    correctAnswer: "A",
    explanation: "A notícia busca relatar fatos verídicos de interesse público com o máximo de imparcialidade e clareza informativa no primeiro parágrafo (lead)."
  },
  {
    grade: "8",
    topic: "Variação Linguística",
    keywords: ["variacao", "linguistica", "preconceito", "regional", "norma", "culta"],
    difficulty: "medio",
    question: "O Brasil é um país de dimensões continentais com imensa diversidade de sotaques, gírias regionais e formas de falar. Sobre a variação linguística, é cientificamente CORRETO afirmar que:",
    options: [
      { letter: "A", text: "Todas as variedades linguísticas são legítimas formas de comunicação humana, e julgar o falar de uma região como 'errado' ou 'inferior' é uma atitude de preconceito linguístico." },
      { letter: "B", text: "Existe apenas uma única região no país que fala o português 100% perfeito e as outras estão erradas." },
      { letter: "C", text: "Gírias e expressões regionais devem ser eliminadas por lei das conversas informais." },
      { letter: "D", text: "A língua portuguesa nunca sofreu modificações desde a Idade Média." }
    ],
    correctAnswer: "A",
    explanation: "A linguística reconhece que a língua é viva e se adapta à cultura e aos contextos sociais. Devemos dominar a norma culta para situações formais, respeitando todas as variedades linguísticas regionais."
  },
  // --- NOVAS QUESTÕES DE LÍNGUA PORTUGUESA ---
  {
    grade: "7",
    topic: "Conjunções Coordenativas",
    keywords: ["conjuncoes", "adversativas", "mas", "porem", "oposicao", "ideias"],
    difficulty: "facil",
    question: "Na oração: 'O aluno estudou bastante para a prova, MAS não conseguiu a nota que desejava', a conjunção destacada estabelece uma relação de:",
    options: [
      { letter: "A", text: "Oposição / adversidade (ideia contrária à expectativa)." },
      { letter: "B", text: "Adição / soma de pensamentos." },
      { letter: "C", text: "Conclusão lógica de fatos." },
      { letter: "D", text: "Alternância ou exclusão mútua." }
    ],
    correctAnswer: "A",
    explanation: "'Mas', 'porém', 'contudo', 'todavia' e 'entretanto' são conjunções coordenativas adversativas que introduzem uma quebra de expectativa ou contraste de ideias."
  },
  {
    grade: "7",
    topic: "Conjunções Coordenativas",
    keywords: ["conjuncao", "conclusiva", "portanto", "logo", "conclusao"],
    difficulty: "medio",
    question: "Na oração 'Choveu intensamente durante toda a madrugada; PORTANTO, a rua ficou completamente alagada', o conectivo destacado tem valor semântico de:",
    options: [
      { letter: "A", text: "Conclusão (conjunção conclusiva)." },
      { letter: "B", text: "Comparação poética." },
      { letter: "C", text: "Dúvida ou hipótese." },
      { letter: "D", text: "Tempo passado cronológico." }
    ],
    correctAnswer: "A",
    explanation: "'Portanto', 'logo', 'por isso' e 'assim' indicam a dedução ou desfecho lógico de um fato previamente apresentado."
  },
  {
    grade: "7",
    topic: "Advérbios e Circunstâncias",
    keywords: ["adverbio", "modo", "rapidamente", "calmamente", "circunstancia"],
    difficulty: "facil",
    question: "Os advérbios modificam o sentido de verbos, adjetivos ou de outros advérbios. Na frase 'Ela respondeu calmamente a todas as perguntas do teste', o advérbio 'calmamente' expressa uma circunstância de:",
    options: [
      { letter: "A", text: "Modo (a maneira como ela respondeu)." },
      { letter: "B", text: "Tempo cronológico." },
      { letter: "C", text: "Lugar físico." },
      { letter: "D", text: "Intensidade extrema." }
    ],
    correctAnswer: "A",
    explanation: "Advérbios terminados em '-mente' geralmente indicam o modo como a ação verbal foi executada."
  },
  {
    grade: "7",
    topic: "Sintaxe: Predicado Verbal e Nominal",
    keywords: ["predicado", "nominal", "verbo", "ligacao", "predicativo", "sujeito"],
    difficulty: "medio",
    question: "O predicado nominal é aquele cujo núcleo significativo é um nome (substantivo ou adjetivo) chamado predicativo do sujeito, intermediado por um verbo de ligação. Qual frase possui predicado NOMINAL?",
    options: [
      { letter: "A", text: "Os alunos estavam ansiosos com o resultado da gincana." },
      { letter: "B", text: "Os alunos correram no pátio da escola." },
      { letter: "C", text: "O professor comprou novos livros para a biblioteca." },
      { letter: "D", text: "A chuva caiu torrencialmente sobre a cidade." }
    ],
    correctAnswer: "A",
    explanation: "'Estavam' é verbo de ligação e 'ansiosos' é o predicativo do sujeito que indica o estado temporário dos alunos, formando um predicado nominal."
  },
  {
    grade: "8",
    topic: "Figuras de Linguagem",
    keywords: ["antitese", "dia", "noite", "opostos", "contrastes"],
    difficulty: "medio",
    question: "Na canção popular 'Não existiria som se não houvesse o silêncio / Não haveria luz se não fosse a escuridão', o autor aproxima termos com sentidos opostos. Essa figura de linguagem é a:",
    options: [
      { letter: "A", text: "Antítese (aproximação de ideias e palavras opostas)." },
      { letter: "B", text: "Eufemismo suavizador." },
      { letter: "C", text: "Aliteração consonantal." },
      { letter: "D", text: "Metonímia quantitativa." }
    ],
    correctAnswer: "A",
    explanation: "A antítese constrói expressividade a partir do contraste direto entre palavras ou expressões de sentidos contrários (som/silêncio, luz/escuridão)."
  },
  {
    grade: "8",
    topic: "Figuras de Linguagem",
    keywords: ["eufemismo", "suavizar", "partiu", "morreu", "delicadeza"],
    difficulty: "facil",
    question: "Quando alguém diz 'O vovô descansou e partiu para um lugar melhor' para não dizer de forma direta e dolorosa que o parente faleceu, foi empregada a figura de linguagem chamada:",
    options: [
      { letter: "A", text: "Eufemismo (suavização de uma expressão desagradável ou chocante)." },
      { letter: "B", text: "Hipérbole desmedida." },
      { letter: "C", text: "Ironia sarcástica." },
      { letter: "D", text: "Pleonasmo vicioso." }
    ],
    correctAnswer: "A",
    explanation: "O eufemismo é o recurso estilístico utilizado para atenuar o impacto emocional de notícias tristes, termos rudes ou tabus sociais."
  },
  {
    grade: "8",
    topic: "Ortografia: Emprego da Crase",
    keywords: ["crase", "preposicao", "artigo", "feminino", "acento", "grave"],
    difficulty: "medio",
    question: "A crase (indicada pelo acento grave `à`) é a fusão da preposição 'a' exigida por um termo regente com o artigo feminino 'a'. Ocorre crase CORRETAMENTE em:",
    options: [
      { letter: "A", text: "Fomos à praia no final de semana." },
      { letter: "B", text: "Ele começou à correr no parque." },
      { letter: "C", text: "Entreguei o presente à ele pessoalmente." },
      { letter: "D", text: "Eles viajaram à pé pela montanha." }
    ],
    correctAnswer: "A",
    explanation: "Quem vai, vai 'a' (preposição) + 'a' praia (artigo feminino) = à praia. Não ocorre crase antes de verbos ('correr'), pronomes masculinos ('ele') nem palavras masculinas ('pé')."
  }
];
