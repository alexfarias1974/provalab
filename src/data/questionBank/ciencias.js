// Banco de questões de Ciências - 6º, 7º e 8º ano (BNCC)
export const cienciasQuestions = [
  // --- TÓPICO: Misturas Homogêneas e Heterogêneas ---
  {
    grade: "6",
    topic: "Misturas Homogêneas e Heterogêneas",
    keywords: ["misturas", "homogeneas", "heterogeneas", "fases", "solucao", "soluto", "solvente", "sal", "agua", "oleo"],
    difficulty: "facil",
    question: "Quando misturamos completamente uma colher de sal refinado em um copo de água filtrada, observamos apenas uma fase líquida uniforme. Essa mistura é classificada como:",
    options: [
      { letter: "A", text: "Mistura homogênea (ou solução)." },
      { letter: "B", text: "Mistura heterogênea bifásica." },
      { letter: "C", text: "Substância pura simples." },
      { letter: "D", text: "Composto coloidal insolúvel." }
    ],
    correctAnswer: "A",
    explanation: "Uma mistura homogênea apresenta apenas uma única fase visível em toda a sua extensão, sendo o sal o soluto dissolvido no solvente (água)."
  },
  {
    grade: "6",
    topic: "Misturas Homogêneas e Heterogêneas",
    keywords: ["misturas", "heterogenea", "agua", "oleo", "areia", "fases", "bifasica", "trifasica"],
    difficulty: "facil",
    question: "Um estudante colocou em uma garrafa transparente: água líquida, óleo de cozinha e areia. Após mexer e deixar descansar, quantas fases são claramente visíveis nessa mistura?",
    options: [
      { letter: "A", text: "Apenas 1 fase uniforme." },
      { letter: "B", text: "2 fases distintas." },
      { letter: "C", text: "3 fases distintas (areia no fundo, água no meio e óleo na superfície)." },
      { letter: "D", text: "4 fases distintas." }
    ],
    correctAnswer: "C",
    explanation: "A areia (mais densa) decanta no fundo, a água fica no meio e o óleo (menos denso e imiscível na água) flutua na parte superior, formando uma mistura heterogênea trifásica."
  },
  {
    grade: "6",
    topic: "Misturas Homogêneas e Heterogêneas",
    keywords: ["sangue", "leite", "coloide", "heterogenea", "microscopio"],
    difficulty: "medio",
    question: "A olho nu, o leite parece uniforme e homogêneo. No entanto, ao ser examinado em um microscópio, pequenas gotículas de gordura dispersas em água são identificadas. Por esse motivo, o leite é cientificamente classificado como:",
    options: [
      { letter: "A", text: "Substância pura gasosa." },
      { letter: "B", text: "Mistura heterogênea (coloide)." },
      { letter: "C", text: "Solução homogênea perfeita." },
      { letter: "D", text: "Elemento químico natural." }
    ],
    correctAnswer: "B",
    explanation: "O leite é um coloide: a olho nu aparenta ser homogêneo, mas microscopicamente é uma mistura heterogênea formada por micelas de gordura e proteínas em suspensão aquosa."
  },
  {
    grade: "6",
    topic: "Misturas Homogêneas e Heterogêneas",
    keywords: ["ar", "atmosferico", "mistura", "gases", "homogenea", "nitrogenio", "oxigenio"],
    difficulty: "medio",
    question: "O ar atmosférico puro que respiramos é composto por diversos gases, principalmente nitrogênio (cerca de 78%) e oxigênio (cerca de 21%). Esse ar é considerado:",
    options: [
      { letter: "A", text: "Uma mistura homogênea gasosa." },
      { letter: "B", text: "Uma substância pura simples." },
      { letter: "C", text: "Uma mistura heterogênea com fases visíveis." },
      { letter: "D", text: "Um composto químico inorgânico insolúvel." }
    ],
    correctAnswer: "A",
    explanation: "Os gases do ar atmosférico puro misturam-se completamente entre si em qualquer proporção, formando uma mistura homogênea transparente e monofásica."
  },
  {
    grade: "6",
    topic: "Separação de Misturas",
    keywords: ["separacao", "misturas", "destilacao", "sal", "agua", "ebulicao"],
    difficulty: "medio",
    question: "Para dessalinizar a água do mar e obter tanto a água potável líquida quanto recuperar o sal marinho seco, o processo de separação mais adequado em laboratório é a:",
    options: [
      { letter: "A", text: "Filtração simples com papel de filtro." },
      { letter: "B", text: "Decantação por gravidade." },
      { letter: "C", text: "Destilação simples." },
      { letter: "D", text: "Catação manual." }
    ],
    correctAnswer: "C",
    explanation: "A destilação simples baseia-se na diferença entre os pontos de ebulição da água e do sal. A água evapora, passa pelo condensador e volta ao estado líquido pura, enquanto o sal cristaliza no balão de aquecimento."
  },
  {
    grade: "6",
    topic: "Separação de Misturas",
    keywords: ["separacao", "areia", "agua", "filtracao", "heterogenea"],
    difficulty: "facil",
    question: "Para separar de forma rápida e eficiente uma mistura heterogênea de água líquida com grãos de areia, o método físico mais direto é a:",
    options: [
      { letter: "A", text: "Filtração." },
      { letter: "B", text: "Destilação fracionada." },
      { letter: "C", text: "Fusão fracionada." },
      { letter: "D", text: "Dissolução térmica." }
    ],
    correctAnswer: "A",
    explanation: "A filtração retém a fase sólida insolúvel (areia) no meio filtrante, permitindo a passagem do líquido límpido (água)."
  },
  {
    grade: "6",
    topic: "Separação de Misturas",
    keywords: ["separacao", "imantação", "ferro", "magnetica", "imas"],
    difficulty: "facil",
    question: "Em uma indústria de reciclagem, fragmentos de ferro e aço misturados a plásticos e vidros triturados podem ser separados de forma instantânea através da:",
    options: [
      { letter: "A", text: "Separação magnética (imantação)." },
      { letter: "B", text: "Centrifugação." },
      { letter: "C", text: "Sublimação forçada." },
      { letter: "D", text: "Evaporação lenta." }
    ],
    correctAnswer: "A",
    explanation: "A separação magnética aproveita as propriedades ferromagnéticas do ferro e do aço, que são atraídos por eletroímãs industriais, deixando os outros materiais para trás."
  },
  {
    grade: "6",
    topic: "Separação de Misturas",
    keywords: ["centrifugacao", "sangue", "separacao", "densidade", "laboratorio"],
    difficulty: "medio",
    question: "Em exames laboratoriais, o sangue é colocado em tubos que giram a altíssima velocidade para separar o plasma líquido das células sanguíneas (glóbulos vermelhos e brancos). Esse método é a:",
    options: [
      { letter: "A", text: "Centrifugação." },
      { letter: "B", text: "Catação." },
      { letter: "C", text: "Destilação a vácuo." },
      { letter: "D", text: "Peneiração fina." }
    ],
    correctAnswer: "A",
    explanation: "A centrifugação acelera o processo de decantação através da força centrífuga gerada pela rotação rápida, separando os componentes de acordo com suas densidades."
  },

  // --- TÓPICO: Transformações Físicas e Químicas ---
  {
    grade: "6",
    topic: "Transformações da Matéria",
    keywords: ["transformacoes", "fisicas", "quimicas", "gelo", "fusao", "ferrugem"],
    difficulty: "medio",
    question: "Qual dos fenômenos a seguir é um exemplo de transformação química (em que ocorre a formação de novas substâncias)?",
    options: [
      { letter: "A", text: "O derretimento de um cubo de gelo sob o sol." },
      { letter: "B", text: "A queima de uma folha de papel na presença de fogo (combustão)." },
      { letter: "C", text: "O rasgar de uma folha de papel em pedaços pequenos." },
      { letter: "D", text: "A dissolução de açúcar na água pura." }
    ],
    correctAnswer: "B",
    explanation: "A combustão do papel é uma reação química irreversível que consome celulose e oxigênio, produzindo novas substâncias como gás carbônico, vapor d'água e cinzas."
  },
  {
    grade: "6",
    topic: "Transformações da Matéria",
    keywords: ["transformacoes", "fisicas", "mudanca", "estado", "evaporacao", "condensacao"],
    difficulty: "facil",
    question: "Quando a água líquida evapora e sobe para a atmosfera, trata-se de um fenômeno físico porque:",
    options: [
      { letter: "A", text: "A molécula de água é destruída para sempre." },
      { letter: "B", text: "Apenas o estado de agregação mudou; a composição química continua sendo água (H2O)." },
      { letter: "C", text: "Houve liberação de chamas e fumaça tóxica." },
      { letter: "D", text: "A água se transformou em hidrogênio gasoso puro." }
    ],
    correctAnswer: "B",
    explanation: "Transformações físicas alteram a forma ou o estado físico da matéria, sem alterar as substâncias que a constituem."
  },
  {
    grade: "6",
    topic: "Transformações da Matéria",
    keywords: ["oxidacao", "ferrugem", "ferro", "quimica", "oxigenio"],
    difficulty: "medio",
    question: "O enferrujamento de um prego de ferro exposto à umidade do ar por várias semanas é acompanhado de mudança de cor e desintegração. Esse processo é evidência de:",
    options: [
      { letter: "A", text: "Transformação química de oxidação do ferro." },
      { letter: "B", text: "Transformação puramente física reversível." },
      { letter: "C", text: "Evaporação das partículas de ferro." },
      { letter: "D", text: "Fusão térmica dos metais." }
    ],
    correctAnswer: "A",
    explanation: "A formação de ferrugem (óxido de ferro) é uma reação química provocada pelo contato do ferro com o oxigênio e a água presentes no ambiente."
  },

  // --- TÓPICO: A Célula e Organelas Celulares ---
  {
    grade: "6",
    topic: "Células e Estrutura Celular",
    keywords: ["celula", "organelas", "mitocondria", "respiracao", "energia", "atp"],
    difficulty: "medio",
    question: "Nas células eucariontes animais e vegetais, a organela celular encarregada de realizar a respiração celular e gerar a maior parte da energia química utilizada pela célula é a:",
    options: [
      { letter: "A", text: "Mitocôndria." },
      { letter: "B", text: "Membrana plasmática." },
      { letter: "C", text: "Parede celular celulósica." },
      { letter: "D", text: "Vacúolo de suco celular." }
    ],
    correctAnswer: "A",
    explanation: "As mitocôndrias atuam como 'usinas de energia' celulares, processando nutrientes e oxigênio para sintetizar moléculas de ATP por meio da respiração celular."
  },
  {
    grade: "6",
    topic: "Células e Estrutura Celular",
    keywords: ["celula", "vegetal", "cloroplasto", "fotossintese", "clorofila"],
    difficulty: "facil",
    question: "Qual organela celular é exclusiva das células vegetais (e de algas fotossintetizantes) e contém o pigmento clorofila, responsável por absorver a luz solar?",
    options: [
      { letter: "A", text: "Cloroplasto." },
      { letter: "B", text: "Lisossomo." },
      { letter: "C", text: "Centríolo." },
      { letter: "D", text: "Complexo golgiense." }
    ],
    correctAnswer: "A",
    explanation: "Os cloroplastos realizam a fotossíntese nas plantas e algas, convertendo água, gás carbônico e energia solar em glicose e oxigênio."
  },
  {
    grade: "6",
    topic: "Células e Estrutura Celular",
    keywords: ["celula", "nucleo", "dna", "hereditariedade", "genes"],
    difficulty: "facil",
    question: "Em uma célula eucariótica, o material genético (DNA), que armazena as informações hereditárias e coordena as atividades celulares, está protegido dentro do:",
    options: [
      { letter: "A", text: "Núcleo celular." },
      { letter: "B", text: "Citoplasma livre." },
      { letter: "C", text: "Lisossomo digestivo." },
      { letter: "D", text: "Ribossomo." }
    ],
    correctAnswer: "A",
    explanation: "O núcleo é delimitado pela carioteca (membrana nuclear) e abriga os cromossomos com as instruções genéticas essenciais à vida da célula."
  },
  {
    grade: "6",
    topic: "Células e Estrutura Celular",
    keywords: ["celula", "membrana", "plasmatica", "permeabilidade", "seletiva"],
    difficulty: "medio",
    question: "A membrana plasmática envolve todas as células vivas e desempenha um papel fundamental chamado 'permeabilidade seletiva'. Isso significa que ela:",
    options: [
      { letter: "A", text: "Controla rigorosamente quais substâncias entram e saem do interior celular." },
      { letter: "B", text: "Bloqueia completamente qualquer entrada de água ou oxigênio." },
      { letter: "C", text: "Deixa passar qualquer substância sem nenhum tipo de barreira." },
      { letter: "D", text: "É formada exclusivamente por cristais minerais rígidos e impermeáveis." }
    ],
    correctAnswer: "A",
    explanation: "A permeabilidade seletiva garante que nutrientes essenciais ingressem na célula e resíduos metabólicos sejam eliminados, mantendo o equilíbrio interno (homeostase)."
  },
  {
    grade: "6",
    topic: "Células e Estrutura Celular",
    keywords: ["procarionte", "eucarionte", "bacterias", "carioteca"],
    difficulty: "medio",
    question: "As bactérias pertencem ao grupo dos organismos procariontes. A principal característica que diferencia uma célula procarionte de uma célula eucarionte é que a célula procarionte:",
    options: [
      { letter: "A", text: "Não possui núcleo delimitado por membrana (seu DNA fica disperso no citoplasma)." },
      { letter: "B", text: "Não possui material genético nem proteínas." },
      { letter: "C", text: "Possui centenas de mitocôndrias gigantes e cloroplastos." },
      { letter: "D", text: "É sempre pluricelular e composta por trilhões de tecidos." }
    ],
    correctAnswer: "A",
    explanation: "Organismos procariontes (como bactérias e arqueas) não têm envoltório nuclear (carioteca); seu material genético localiza-se na região chamada nucleoide no citoplasma."
  },
  {
    grade: "6",
    topic: "Níveis de Organização Biológica",
    keywords: ["niveis", "organizacao", "celula", "tecido", "orgao", "sistema", "organismo"],
    difficulty: "facil",
    question: "Nos seres vivos multicelulares complexos, como os seres humanos, a ordem correta e crescente dos níveis de organização biológica é:",
    options: [
      { letter: "A", text: "Célula → Tecido → Órgão → Sistema → Organismo." },
      { letter: "B", text: "Órgão → Célula → Tecido → Organismo → Sistema." },
      { letter: "C", text: "Tecido → Órgão → Célula → Sistema → População." },
      { letter: "D", text: "Sistema → Célula → Tecido → Órgão → Comunidade." }
    ],
    correctAnswer: "A",
    explanation: "Células semelhantes agrupam-se formando tecidos; tecidos unem-se para formar órgãos; órgãos interconectados compõem sistemas; e todos os sistemas juntos formam o organismo completo."
  },

  // --- TÓPICO: Sistema Digestório e Nutrição ---
  {
    grade: "6",
    topic: "Sistema Digestório",
    keywords: ["digestao", "digestorio", "boca", "saliva", "ptialina", "amilase", "amido"],
    difficulty: "medio",
    question: "A digestão química de carboidratos como o amido do pão se inicia logo na boca, graças a uma enzima presente na saliva chamada:",
    options: [
      { letter: "A", text: "Amilase salivar (ou ptialina)." },
      { letter: "B", text: "Pepsina gástrica." },
      { letter: "C", text: "Bile biliar." },
      { letter: "D", text: "Insulina pancreática." }
    ],
    correctAnswer: "A",
    explanation: "A amilase salivar quebra as grandes moléculas de amido em maltose (açúcar menor) durante a mastigação."
  },
  {
    grade: "6",
    topic: "Sistema Digestório",
    keywords: ["digestorio", "intestino", "delgado", "nutrientes", "microvilosidades", "absorcao"],
    difficulty: "medio",
    question: "No corpo humano, a maior parte da digestão química final e a absorção maciça dos nutrientes para a corrente sanguínea ocorrem no:",
    options: [
      { letter: "A", text: "Intestino delgado." },
      { letter: "B", text: "Estômago." },
      { letter: "C", text: "Esôfago." },
      { letter: "D", text: "Faringe." }
    ],
    correctAnswer: "A",
    explanation: "O intestino delgado possui vilosidades e microvilosidades que aumentam expressivamente a área de contato, permitindo que vitaminas, aminoácidos e glicose passem para o sangue."
  },
  {
    grade: "6",
    topic: "Sistema Digestório",
    keywords: ["figado", "bile", "gorduras", "emulsao", "vesicula"],
    difficulty: "medio",
    question: "O fígado produz uma substância esverdeada chamada bile, que é armazenada na vesícula biliar. A principal função da bile na digestão é:",
    options: [
      { letter: "A", text: "Emulsificar gorduras (atuar como um detergente biológico, facilitando a ação das lipases)." },
      { letter: "B", text: "Produzir ácido clorídrico no estômago." },
      { letter: "C", text: "Digerir proteínas exclusivamente na boca." },
      { letter: "D", text: "Absorver água e formar fezes no intestino grosso." }
    ],
    correctAnswer: "A",
    explanation: "A bile fragmenta as gotas de gordura em gotículas minúsculas (emulsificação), permitindo que as enzimas lipases quebrem os lipídios eficientemente."
  },
  {
    grade: "6",
    topic: "Sistema Digestório",
    keywords: ["intestino", "grosso", "agua", "fezes", "bacterias"],
    difficulty: "facil",
    question: "A principal função do intestino grosso no sistema digestório humano é:",
    options: [
      { letter: "A", text: "Reabsorver água e sais minerais dos restos alimentares e formar o bolo fecal." },
      { letter: "B", text: "Realizar a mastigação mecânica dos alimentos sólidos." },
      { letter: "C", text: "Bombear o oxigênio para os tecidos do corpo." },
      { letter: "D", text: "Produzir suco gástrico extremamente ácido." }
    ],
    correctAnswer: "A",
    explanation: "No intestino grosso ocorre a absorção de grande parte da água restante, compactando os resíduos indigeríveis na forma de fezes para eliminação."
  },

  // --- TÓPICO: Sistema Respiratório e Circulatório ---
  {
    grade: "6",
    topic: "Sistema Respiratório",
    keywords: ["respiratorio", "alveolos", "trocas", "gasosas", "hematose", "oxigenio", "gas", "carbonico"],
    difficulty: "medio",
    question: "As trocas gasosas entre o ar que respiramos e o sangue que circula nos capilares pulmonares (absorção de O2 e liberação de CO2) ocorrem especificamente nos:",
    options: [
      { letter: "A", text: "Alvéolos pulmonares." },
      { letter: "B", text: "Brônquios principais." },
      { letter: "C", text: "Anéis de cartilagem da traqueia." },
      { letter: "D", text: "Músculos intercostais da laringe." }
    ],
    correctAnswer: "A",
    explanation: "Os alvéolos pulmonares são sacos microscópicos de paredes extremamente finas cercados por vasos sanguíneos, onde ocorre a hematose (troca gasosa)."
  },
  {
    grade: "6",
    topic: "Sistema Respiratório",
    keywords: ["diafragma", "musculo", "respiracao", "inspiracao", "expiracao"],
    difficulty: "facil",
    question: "O principal músculo responsável pela mecânica respiratória, que se contrai e desce durante a inspiração para expandir a caixa torácica, é o:",
    options: [
      { letter: "A", text: "Diafragma." },
      { letter: "B", text: "Bíceps braquial." },
      { letter: "C", text: "Quadríceps femoral." },
      { letter: "D", text: "Trapézio cervical." }
    ],
    correctAnswer: "A",
    explanation: "O diafragma separa a cavidade torácica da abdominal; sua contração aumenta o volume dos pulmões, criando pressão negativa que faz o ar entrar."
  },
  {
    grade: "6",
    topic: "Sistema Cardiovascular",
    keywords: ["coracao", "cavidades", "atrios", "ventriculos", "circulatorio"],
    difficulty: "facil",
    question: "O coração humano é um órgão muscular oco que atua como uma bomba de sangue e é dividido internamente em quantas cavidades?",
    options: [
      { letter: "A", text: "4 cavidades (dois átrios e dois ventrículos)." },
      { letter: "B", text: "2 cavidades (um átrio e um ventrículo)." },
      { letter: "C", text: "3 cavidades (dois átrios e um ventrículo)." },
      { letter: "D", text: "6 cavidades musculares independentes." }
    ],
    correctAnswer: "A",
    explanation: "O coração dos mamíferos possui 4 cavidades: átrio direito e ventrículo direito (circulação venosa/pulmonar), e átrio esquerdo e ventrículo esquerdo (circulação arterial/sistêmica)."
  },
  {
    grade: "6",
    topic: "Sistema Cardiovascular",
    keywords: ["sangue", "hemoglobina", "hemacias", "globulos", "vermelhos", "oxigenio"],
    difficulty: "medio",
    question: "Qual componente do sangue contém a proteína hemoglobina, responsável pelo transporte do gás oxigênio dos pulmões para todas as células do corpo?",
    options: [
      { letter: "A", text: "Hemácias (glóbulos vermelhos)." },
      { letter: "B", text: "Leucócitos (glóbulos brancos)." },
      { letter: "C", text: "Plaquetas sanguíneas (trombócitos)." },
      { letter: "D", text: "Plasma sanguíneo acelular." }
    ],
    correctAnswer: "A",
    explanation: "As hemácias são células anucleadas em formato bicôncavo repletas de hemoglobina, que se liga quimicamente ao oxigênio nos alvéolos."
  },
  {
    grade: "6",
    topic: "Sistema Cardiovascular",
    keywords: ["plaquetas", "coagulacao", "estancar", "sangramento"],
    difficulty: "facil",
    question: "Quando sofremos um pequeno corte na pele, o sangramento cessa após alguns minutos devido à formação de um coágulo protetor. O componente sanguíneo responsável pela coagulação é:",
    options: [
      { letter: "A", text: "As plaquetas (fragmentos celulares)." },
      { letter: "B", text: "Os neurônios sensitivos." },
      { letter: "C", text: "As células musculares lisas." },
      { letter: "D", text: "O gás carbônico dissolvido." }
    ],
    correctAnswer: "A",
    explanation: "As plaquetas aderem ao local da lesão vascular e ativam fatores de coagulação que formam uma rede de fibrina, contendo o fluxo sanguíneo."
  },

  // --- TÓPICO: Sistema Nervoso e Sentidos ---
  {
    grade: "6",
    topic: "Sistema Nervoso",
    keywords: ["sistema", "nervoso", "neuronio", "impulso", "sinapse", "celula"],
    difficulty: "medio",
    question: "A célula especializada responsável por receber, processar e transmitir informações na forma de impulsos eletroquímicos pelo corpo é o:",
    options: [
      { letter: "A", text: "Neurônio." },
      { letter: "B", text: "Osteócito." },
      { letter: "C", text: "Adipócito." },
      { letter: "D", text: "Miócito." }
    ],
    correctAnswer: "A",
    explanation: "O neurônio é a unidade funcional do sistema nervoso, composto por corpo celular, dendritos (receptores) e axônio (transmissor do impulso)."
  },
  {
    grade: "6",
    topic: "Sistema Nervoso",
    keywords: ["arco", "reflexo", "medula", "espinhal", "involuntario"],
    difficulty: "dificil",
    question: "Ao tocar inadvertidamente em uma panela fervendo, retiramos a mão antes mesmo de sentir plenamente a dor consciente no cérebro. Esse movimento rápido de defesa involuntário é controlado pela:",
    options: [
      { letter: "A", text: "Medula espinhal (ato reflexo medular)." },
      { letter: "B", text: "Glândula tireoide." },
      { letter: "C", text: "Artéria aorta carotídea." },
      { letter: "D", text: "Bexiga urinária." }
    ],
    correctAnswer: "A",
    explanation: "O ato reflexo é uma resposta de emergência integrada na medula espinhal, permitindo uma reação motora instantânea sem esperar o processamento cerebral."
  },

  // --- TÓPICO: Ecologia e Cadeias Alimentares ---
  {
    grade: "7",
    topic: "Cadeias e Teias Alimentares",
    keywords: ["ecologia", "cadeia", "alimentar", "produtores", "autotrofos", "fotossintese", "plantas"],
    difficulty: "facil",
    question: "Em uma cadeia alimentar terrestre típica, os seres vivos capazes de produzir seu próprio alimento orgânico a partir da luz solar e de substâncias inorgânicas são chamados de:",
    options: [
      { letter: "A", text: "Produtores (autótrofos)." },
      { letter: "B", text: "Consumidores primários." },
      { letter: "C", text: "Decompositores finais." },
      { letter: "D", text: "Carnívoros de topo." }
    ],
    correctAnswer: "A",
    explanation: "Os produtores (como plantas, árvores e algas) ocupam o primeiro nível trófico das cadeias alimentares, sintetizando glicose por fotossíntese."
  },
  {
    grade: "7",
    topic: "Cadeias e Teias Alimentares",
    keywords: ["decompositores", "fungos", "bacterias", "reciclagem", "materia"],
    difficulty: "medio",
    question: "Fungos e bactérias desempenham um papel ecológico insubstituível em todos os ecossistemas do planeta porque atuam como decompositores. Sua função principal é:",
    options: [
      { letter: "A", text: "Degradar a matéria orgânica morta e reciclar os nutrientes minerais no solo e na água." },
      { letter: "B", text: "Alimentar-se exclusivamente da luz do Sol sem produzir resíduos." },
      { letter: "C", text: "Polinizar flores para que as plantas deem frutos." },
      { letter: "D", text: "Absorver todo o oxigênio da atmosfera terrestre." }
    ],
    correctAnswer: "A",
    explanation: "Os decompositores decompõem cadáveres e dejetos orgânicos, devolvendo sais minerais ao ambiente para que novos produtores possam aproveitá-los."
  },
  {
    grade: "7",
    topic: "Cadeias e Teias Alimentares",
    keywords: ["herbivoro", "consumidor", "primario", "vegetais", "grilo", "vaca"],
    difficulty: "facil",
    question: "Em uma cadeia formada por: Capim → Grilo → Sapo → Serpente → Gavião, o grilo é classificado como:",
    options: [
      { letter: "A", text: "Consumidor primário (herbívoro)." },
      { letter: "B", text: "Produtor autotrófico." },
      { letter: "C", text: "Consumidor terciário carnívoro." },
      { letter: "D", text: "Consumidor quaternário de topo." }
    ],
    correctAnswer: "A",
    explanation: "O grilo alimenta-se diretamente do produtor (capim), sendo portanto o consumidor primário (herbívoro) da cadeia."
  },
  {
    grade: "7",
    topic: "Relações Ecológicas",
    keywords: ["mutualismo", "relacoes", "ecologicas", "liquens", "beneficio", "mutuo"],
    difficulty: "medio",
    question: "Os líquens são formados pela associação íntima entre algas unicelulares e fungos, onde a alga fornece alimento fotossintetizado e o fungo fornece proteção e umidade. Essa relação harmônica obrigatória é classificada como:",
    options: [
      { letter: "A", text: "Mutualismo." },
      { letter: "B", text: "Parasitismo." },
      { letter: "C", text: "Predatismo." },
      { letter: "D", text: "Competição interespecífica." }
    ],
    correctAnswer: "A",
    explanation: "No mutualismo, ambas as espécies se beneficiam e a relação é tão estreita que garante a sobrevivência de ambos os organismos."
  },
  {
    grade: "7",
    topic: "Relações Ecológicas",
    keywords: ["parasitismo", "lombriga", "carrapato", "hospedeiro", "prejuizo"],
    difficulty: "facil",
    question: "O carrapato fixado na pele de um cão alimenta-se do seu sangue e pode transmitir bactérias nocivas, causando enfraquecimento e doenças ao animal. Essa relação ecológica é um:",
    options: [
      { letter: "A", text: "Parasitismo (uma espécie se beneficia e a outra é prejudicada)." },
      { letter: "B", text: "Comensalismo neutro." },
      { letter: "C", text: "Sociedade cooperativa." },
      { letter: "D", text: "Mutualismo ecológico." }
    ],
    correctAnswer: "A",
    explanation: "No parasitismo, o parasita (carrapato) extrai nutrientes do hospedeiro (cão), causando-lhe danos sem a intenção imediata de matá-lo."
  },

  // --- TÓPICO: Calor, Temperatura e Propagação Térmica ---
  {
    grade: "7",
    topic: "Calor e Temperatura",
    keywords: ["calor", "temperatura", "agitacao", "energia", "termica"],
    difficulty: "medio",
    question: "Em Ciências, os conceitos de 'temperatura' e 'calor' têm significados físicos distintos. A temperatura de um corpo mede:",
    options: [
      { letter: "A", text: "O grau médio de agitação das partículas que compõem aquele corpo." },
      { letter: "B", text: "A quantidade de massa em quilogramas existente dentro do objeto." },
      { letter: "C", text: "A força da gravidade que atua sobre o objeto." },
      { letter: "D", text: "O volume de líquido que cabe dentro de um recipiente." }
    ],
    correctAnswer: "A",
    explanation: "A temperatura é a grandeza física que mensura a energia cinética média (agitação) dos átomos e moléculas de um corpo."
  },
  {
    grade: "7",
    topic: "Calor e Temperatura",
    keywords: ["calor", "energia", "transito", "equilibrio", "termico"],
    difficulty: "medio",
    question: "O calor é definido cientificamente como a energia térmica que:",
    options: [
      { letter: "A", text: "Transfere-se espontaneamente do corpo de maior temperatura para o de menor temperatura." },
      { letter: "B", text: "Fica presa para sempre em um objeto isolado sem se propagar." },
      { letter: "C", text: "Move-se naturalmente do corpo mais frio para o corpo mais quente." },
      { letter: "D", text: "Existe apenas quando há combustão com fogo visível." }
    ],
    correctAnswer: "A",
    explanation: "O calor é energia térmica em trânsito, fluindo sempre do corpo de maior temperatura para o de menor temperatura até que atinjam o equilíbrio térmico."
  },
  {
    grade: "7",
    topic: "Propagação Térmica",
    keywords: ["conducao", "termica", "metal", "colher", "solidos"],
    difficulty: "medio",
    question: "Ao esquentar uma panela no fogão com uma colher de metal dentro, o cabo da colher fica quente após alguns minutos. O processo de propagação de calor ocorrido pelo contato direto partícula a partícula no metal é a:",
    options: [
      { letter: "A", text: "Condução térmica." },
      { letter: "B", text: "Convecção térmica." },
      { letter: "C", text: "Irradiação eletromagnética." },
      { letter: "D", text: "Sublimação térmica." }
    ],
    correctAnswer: "A",
    explanation: "A condução é o processo de transferência de calor característico dos sólidos, onde a vibração térmica passa de átomo para átomo pelo contato direto."
  },
  {
    grade: "7",
    topic: "Propagação Térmica",
    keywords: ["conveccao", "correntes", "ar", "condicionado", "fluidos", "vento"],
    difficulty: "medio",
    question: "Aparelhos de ar-condicionado são instalados preferencialmente no alto das paredes das salas para otimizar a climatização. O ar frio desce e o ar quente sobe, gerando correntes térmicas pelo processo de:",
    options: [
      { letter: "A", text: "Convecção térmica." },
      { letter: "B", text: "Condução estática." },
      { letter: "C", text: "Reflexão óptica." },
      { letter: "D", text: "Evaporação atômica." }
    ],
    correctAnswer: "A",
    explanation: "A convecção ocorre em fluidos (líquidos e gases): o ar frio, sendo mais denso, desce, e o ar quente, menos denso, sobe, criando correntes de circulação eficientes."
  },
  {
    grade: "7",
    topic: "Propagação Térmica",
    keywords: ["irradiacao", "sol", "vacuo", "ondas", "eletromagneticas"],
    difficulty: "medio",
    question: "O calor emitido pelo Sol viaja através do vácuo do espaço cósmico até atingir a Terra e aquecer nossa atmosfera. Como no vácuo não há matéria, esse calor se propaga exclusivamente por:",
    options: [
      { letter: "A", text: "Irradiação térmica (por meio de ondas eletromagnéticas/infravermelho)." },
      { letter: "B", text: "Condução de partículas gasosas." },
      { letter: "C", text: "Convecção de correntes atmosféricas." },
      { letter: "D", text: "Fusão nuclear direta na crosta terrestre." }
    ],
    correctAnswer: "A",
    explanation: "A irradiação térmica ocorre através de ondas eletromagnéticas (como a radiação infravermelha), sendo o único mecanismo capaz de transportar calor no vácuo."
  },

  // --- TÓPICO: Fontes de Energia ---
  {
    grade: "7",
    topic: "Fontes de Energia",
    keywords: ["energia", "renovavel", "solar", "eolica", "biomassa", "sustentavel"],
    difficulty: "facil",
    question: "São consideradas fontes de energia renováveis e limpas, que não se esgotam com o uso e geram baixíssimo impacto de emissão de gases de efeito estufa:",
    options: [
      { letter: "A", text: "Solar e Eólica." },
      { letter: "B", text: "Carvão mineral e Petróleo." },
      { letter: "C", text: "Gás natural fóssil e Urânio enriquecido." },
      { letter: "D", text: "Diesel e Gasolina automotiva." }
    ],
    correctAnswer: "A",
    explanation: "A energia solar (da luz e calor do sol) e a eólica (da força dos ventos) são recursos naturais inesgotáveis em escala humana e renováveis."
  },
  {
    grade: "7",
    topic: "Fontes de Energia",
    keywords: ["combustiveis", "fosseis", "petroleo", "carvao", "poluicao", "co2"],
    difficulty: "facil",
    question: "Combustíveis fósseis como o carvão mineral e os derivados de petróleo foram formados há centenas de milhões de anos. O principal problema ambiental associado à queima desses combustíveis é:",
    options: [
      { letter: "A", text: "A emissão maciça de dióxido de carbono (CO2), agravando o efeito estufa e o aquecimento global." },
      { letter: "B", text: "A redução da gravidade terrestre." },
      { letter: "C", text: "A extinção definitiva de minerais de ferro." },
      { letter: "D", text: "O congelamento imediato dos oceanos tropicais." }
    ],
    correctAnswer: "A",
    explanation: "A queima de combustíveis fósseis libera bilhões de toneladas de CO2 na atmosfera, intensificando a retenção de calor e as mudanças climáticas globais."
  },

  // --- TÓPICO: Terra, Universo e Astronomia ---
  {
    grade: "6",
    topic: "Terra e Universo",
    keywords: ["rotacao", "terra", "dia", "noite", "eixo"],
    difficulty: "facil",
    question: "O movimento que o planeta Terra realiza girando em torno de seu próprio eixo imaginário tem duração aproximada de 24 horas e é responsável por qual fenômeno natural?",
    options: [
      { letter: "A", text: "A sucessão dos dias e das noites." },
      { letter: "B", text: "A alternância das quatro estações do ano." },
      { letter: "C", text: "A ocorrência de maremotos e tsunamis." },
      { letter: "D", text: "As quatro fases da Lua." }
    ],
    correctAnswer: "A",
    explanation: "O movimento de rotação da Terra dura 23 horas, 56 minutos e 4 segundos (aprox. 24h), determinando a alternância entre o período iluminado pelo sol (dia) e o escuro (noite)."
  },
  {
    grade: "6",
    topic: "Terra e Universo",
    keywords: ["translacao", "terra", "estacoes", "ano", "inclinacao"],
    difficulty: "medio",
    question: "A alternância das quatro estações do ano (Primavera, Verão, Outono e Inverno) ocorre devido à combinação de dois fatores astronômicos fundamentais:",
    options: [
      { letter: "A", text: "O movimento de translação da Terra ao redor do Sol e a inclinação do eixo de rotação terrestre." },
      { letter: "B", text: "A distância variável entre a Lua e o centro da Terra." },
      { letter: "C", text: "A rotação rápida do núcleo de ferro fundido terrestre." },
      { letter: "D", text: "A explosão periódica de erupções solares." }
    ],
    correctAnswer: "A",
    explanation: "A inclinação do eixo terrestre (cerca de 23,5°) faz com que os hemisférios recebam incidência de luz solar desigual ao longo do ano durante a translação em órbita do Sol."
  },
  {
    grade: "6",
    topic: "Terra e Universo",
    keywords: ["fases", "lua", "nova", "crescente", "cheia", "minguante"],
    difficulty: "medio",
    question: "Durante a fase da Lua Nova, o que acontece com a face iluminada da Lua vista a partir da Terra?",
    options: [
      { letter: "A", text: "A face iluminada está voltada para o Sol e a face escura voltada para a Terra, tornando a Lua invisível no céu noturno." },
      { letter: "B", text: "A face voltada para a Terra está 100% iluminada como um círculo brilhante." },
      { letter: "C", text: "A Lua fica avermelhada por causa de um eclipse solar obrigatório." },
      { letter: "D", text: "Apenas metade exata do disco lunar fica iluminada em forma de letra 'C'." }
    ],
    correctAnswer: "A",
    explanation: "Na Lua Nova, ela encontra-se alinhada entre a Terra e o Sol, de modo que o lado iluminado pelos raios solares está no hemisfério lunar oposto ao observado pela Terra."
  },
  {
    grade: "6",
    topic: "Camadas da Terra",
    keywords: ["camadas", "terra", "crosta", "manto", "nucleo"],
    difficulty: "facil",
    question: "O planeta Terra é estruturado internamente em camadas concêntricas com composições e temperaturas diferentes. Da superfície externa para o centro mais profundo, a sequência correta é:",
    options: [
      { letter: "A", text: "Crosta terrestre → Manto → Núcleo (externo e interno)." },
      { letter: "B", text: "Núcleo → Crosta → Manto superficial." },
      { letter: "C", text: "Manto → Núcleo central → Crosta rochosa." },
      { letter: "D", text: "Litosfera → Atmosfera → Hidrosfera profunda." }
    ],
    correctAnswer: "A",
    explanation: "A crosta é a camada sólida e fina externa; abaixo dela fica o manto (rochoso e viscoso) e no centro fica o núcleo (composto predominantemente de ferro e níquel)."
  },

  // --- TÓPICO: Reprodução Humana e ISTs (8º ano) ---
  {
    grade: "8",
    topic: "Reprodução Humana e ISTs",
    keywords: ["gametas", "reproducao", "espermatozoide", "ovocito", "fecundacao"],
    difficulty: "facil",
    question: "Na reprodução sexuada humana, os gametas masculinos e femininos que se fundem durante a fecundação para dar origem ao zigoto são, respectivamente:",
    options: [
      { letter: "A", text: "Espermatozoide e ovócito secundário (óvulo)." },
      { letter: "B", text: "Neurônio e hemácia." },
      { letter: "C", text: "Hormônio testosterona e progesterona." },
      { letter: "D", text: "Uretra e tuba uterina." }
    ],
    correctAnswer: "A",
    explanation: "O espermatozoide é a célula reprodutora masculina produzida nos testículos e o ovócito secundário é a célula feminina liberada pelos ovários na ovulação."
  },
  {
    grade: "8",
    topic: "Reprodução Humana e ISTs",
    keywords: ["fecundacao", "tuba", "uterina", "utero", "nidação"],
    difficulty: "medio",
    question: "No sistema reprodutor feminino, o encontro biológico do espermatozoide com o ovócito (fecundação) ocorre tipicamente nas:",
    options: [
      { letter: "A", text: "Tubas uterinas." },
      { letter: "B", text: "Paredes internas da bexiga." },
      { letter: "C", text: "Glândulas de Bartholin." },
      { letter: "D", text: "Fibras do endométrio cervical." }
    ],
    correctAnswer: "A",
    explanation: "A fecundação ocorre no terço distal das tubas uterinas. Após a fusão, o zigoto inicia sucessivas divisões celulares enquanto desce em direção ao útero para fixar-se (nidação)."
  },
  {
    grade: "8",
    topic: "Reprodução Humana e ISTs",
    keywords: ["metodos", "contraceptivos", "preservativo", "camisinha", "ists"],
    difficulty: "facil",
    question: "Dentre os métodos contraceptivos disponíveis, qual é o ÚNICO que, além de prevenir a gravidez indesejada, atua simultaneamente como barreira eficaz contra Infecções Sexualmente Transmissíveis (ISTs)?",
    options: [
      { letter: "A", text: "Preservativo (camisinha masculina ou feminina)." },
      { letter: "B", text: "Pílula anticoncepcional oral combinada." },
      { letter: "C", text: "Dispositivo intrauterino (DIU) de cobre." },
      { letter: "D", text: "Tabelinha com contagem do ciclo menstrual." }
    ],
    correctAnswer: "A",
    explanation: "O preservativo é um método de barreira física que impede a troca de fluídos corporais e o contato direto com mucosas, protegendo contra vírus como HIV, HPV e bactérias causadoras de sífilis e gonorreia."
  },
  {
    grade: "8",
    topic: "Reprodução Humana e ISTs",
    keywords: ["puberdade", "hormonios", "testosterona", "estrogenio"],
    difficulty: "medio",
    question: "Durante a puberdade, o corpo passa por diversas transformações físicas e biológicas desencadeadas por hormônios sexuais. Os principais hormônios responsáveis pelos caracteres sexuais secundários masculinos e femininos são, respectivamente:",
    options: [
      { letter: "A", text: "Testosterona nos meninos e Estrogênio/Progesterona nas meninas." },
      { letter: "B", text: "Insulina nos meninos e Glucagon nas meninas." },
      { letter: "C", text: "Adrenalina nos meninos e Cortisol nas meninas." },
      { letter: "D", text: "Tiroxina nos meninos e Calcitonina nas meninas." }
    ],
    correctAnswer: "A",
    explanation: "A testosterona estimula o engrossamento da voz e desenvolvimento muscular nos meninos; já o estrogênio e a progesterona coordenam o desenvolvimento das mamas e o ciclo menstrual nas meninas."
  },

  // --- TÓPICO: Sistema Excretor e Renal ---
  {
    grade: "8",
    topic: "Sistema Excretor",
    keywords: ["excretor", "rins", "nefron", "urina", "ureia", "filtracao"],
    difficulty: "medio",
    question: "Os rins atuam como verdadeiros filtros do sangue humano. A unidade funcional microscópica dos rins encarregada de filtrar o plasma, reabsorver água e produzir a urina é o:",
    options: [
      { letter: "A", text: "Néfron." },
      { letter: "B", text: "Glóbulo branco." },
      { letter: "C", text: "Ureter." },
      { letter: "D", text: "Alvéolo." }
    ],
    correctAnswer: "A",
    explanation: "Cada rim humano possui cerca de um milhão de néfrons, onde ocorrem as etapas de filtração glomerular, reabsorção de substâncias úteis e secreção de resíduos metabólicos como a ureia."
  },
  {
    grade: "8",
    topic: "Sistema Excretor",
    keywords: ["bexiga", "ureter", "uretra", "armazenamento", "urina"],
    difficulty: "facil",
    question: "Qual órgão do sistema urinário é responsável por acumular e armazenar temporariamente a urina trazida pelos ureteres até que ocorra a micção voluntária?",
    options: [
      { letter: "A", text: "Bexiga urinária." },
      { letter: "B", text: "Uretra esponjosa." },
      { letter: "C", text: "Fígado." },
      { letter: "D", text: "Baço." }
    ],
    correctAnswer: "A",
    explanation: "A bexiga é um órgão muscular elástico capaz de se expandir à medida que recebe urina filtrada continuamente pelos rins."
  },

  // --- TÓPICO: Atmosfera, Clima e Efeito Estufa ---
  {
    grade: "7",
    topic: "Atmosfera e Efeito Estufa",
    keywords: ["camada", "ozonio", "ultravioleta", "estratosfera", "raios", "uv"],
    difficulty: "medio",
    question: "A camada de ozônio (O3), localizada na estratosfera terrestre, é de vital importância para a manutenção da vida no planeta porque ela:",
    options: [
      { letter: "A", text: "Filtra e bloqueia grande parte da radiação ultravioleta (UV-B e UV-C) nociva emitida pelo Sol." },
      { letter: "B", text: "Retém a gravidade para que as pessoas não flutuem no espaço." },
      { letter: "C", text: "Gera oxigênio líquido diretamente para as chuvas torrenciais." },
      { letter: "D", text: "Impede completamente que meteoros entrem em órbita." }
    ],
    correctAnswer: "A",
    explanation: "O ozônio estratosférico absorve comprimentos de onda de radiação UV nocivos, prevenindo mutações no DNA celular, queimaduras graves e câncer de pele."
  },
  {
    grade: "7",
    topic: "Atmosfera e Efeito Estufa",
    keywords: ["efeito", "estufa", "natural", "gases", "aquecimento"],
    difficulty: "medio",
    question: "O 'efeito estufa natural' é um fenômeno indispensável para a vida na Terra. Se ele não existisse, o que aconteceria com o nosso planeta?",
    options: [
      { letter: "A", text: "A temperatura média global seria de cerca de -18°C, congelando quase toda a água e inviabilizando a maior parte das formas de vida." },
      { letter: "B", text: "A Terra ficaria quente demais, evaporando todos os oceanos instantaneamente." },
      { letter: "C", text: "Os dias seriam cem vezes mais longos que as noites." },
      { letter: "D", text: "O ar ficaria pesado e impediria qualquer animal de caminhar." }
    ],
    correctAnswer: "A",
    explanation: "O efeito estufa natural mantém o planeta em uma temperatura média amena (cerca de 15°C); o problema moderno é a intensificação artificial desse efeito pela poluição humana."
  },
  {
    grade: "7",
    topic: "Atmosfera e Efeito Estufa",
    keywords: ["gases", "estufa", "metano", "co2", "vapor"],
    difficulty: "facil",
    question: "Dentre os gases presentes na atmosfera, quais são os dois principais agentes responsáveis pela retenção de calor no efeito estufa?",
    options: [
      { letter: "A", text: "Dióxido de carbono (CO2) e Gás Metano (CH4)." },
      { letter: "B", text: "Hélio e Argônio puro." },
      { letter: "C", text: "Nitrogênio líquido e Cloro gasoso." },
      { letter: "D", text: "Ozônio troposférico e Monóxido de silício." }
    ],
    correctAnswer: "A",
    explanation: "O gás carbônico (liberado pela queima de combustíveis) e o metano (oriundo da pecuária e decomposição) possuem alta capacidade de absorver e reemitir radiação infravermelha."
  },

  // --- TÓPICO: Reino Vegetal e Fotossíntese ---
  {
    grade: "7",
    topic: "Reino Vegetal e Fotossíntese",
    keywords: ["fotossintese", "plantas", "reagentes", "glicose", "oxigenio", "luz"],
    difficulty: "facil",
    question: "Durante a fotossíntese realizada pelas folhas verdes dos vegetais, quais elementos são consumidos para produzir glicose e liberar gás oxigênio na atmosfera?",
    options: [
      { letter: "A", text: "Água, gás carbônico (CO2) e luz solar." },
      { letter: "B", text: "Oxigênio gasoso, areia e calor seco." },
      { letter: "C", text: "Monóxido de carbono e fertilizantes sintéticos." },
      { letter: "D", text: "Ácido sulfúrico e cinzas vulcânicas." }
    ],
    correctAnswer: "A",
    explanation: "A equação básica da fotossíntese utiliza energia luminosa absorvida pela clorofila para combinar água (do solo) com CO2 (do ar), gerando glicose (alimento da planta) e O2."
  },
  {
    grade: "7",
    topic: "Reino Vegetal e Fotossíntese",
    keywords: ["vasos", "condutores", "xilema", "floema", "seiva"],
    difficulty: "medio",
    question: "Nas plantas vasculares, os tecidos encarregados de transportar a seiva bruta (água e sais minerais da raiz até as folhas) e a seiva elaborada (açúcares das folhas para todo o vegetal) são chamados, respectivamente, de:",
    options: [
      { letter: "A", text: "Xilema e Floema." },
      { letter: "B", text: "Artrópodes e Quelicerados." },
      { letter: "C", text: "Cloroplasto e Mitocôndria." },
      { letter: "D", text: "Epiderme e Cutícula impermeável." }
    ],
    correctAnswer: "A",
    explanation: "O xilema (ou vasos lenhosos) transporta a seiva mineral ascendente, e o floema (ou vasos liberianos) conduz a seiva orgânica com nutrientes sintetizados pelas folhas."
  },

  // --- TÓPICO: Reino Animal e Invertebrados ---
  {
    grade: "7",
    topic: "Diversidade dos Seres Vivos",
    keywords: ["invertebrados", "artropodes", "exoesqueleto", "insetos", "quitina"],
    difficulty: "medio",
    question: "Os artrópodes (como formigas, borboletas, caranguejos e aranhas) formam o filo com o maior número de espécies do planeta Terra. Uma característica marcante comum a todos eles é a presença de:",
    options: [
      { letter: "A", text: "Exoesqueleto de quitina e apêndices articulados." },
      { letter: "B", text: "Coluna vertebral de ossos calcificados." },
      { letter: "C", text: "Respiração exclusivamente cutânea." },
      { letter: "D", text: "Ausência total de órgãos e tecidos especializados." }
    ],
    correctAnswer: "A",
    explanation: "Artrópode significa 'pés articulados'. O exoesqueleto rígido de quitina protege o corpo e impede a perda excessiva de água no meio terrestre, passando por mudas periódicas (ecdise)."
  },
  {
    grade: "7",
    topic: "Diversidade dos Seres Vivos",
    keywords: ["vertebrados", "mamiferos", "pelos", "glandulas", "mamarias"],
    difficulty: "facil",
    question: "São características exclusivas que definem a classe dos mamíferos no reino animal:",
    options: [
      { letter: "A", text: "Presença de pelos no corpo e glândulas mamárias para amamentar os filhotes." },
      { letter: "B", text: "Pele com escamas secas e fecundação externa na água." },
      { letter: "C", text: "Esqueleto cartilaginoso sem mandíbula e corpo em forma de tubo." },
      { letter: "D", text: "Reprodução exclusiva por esporos aéreos." }
    ],
    correctAnswer: "A",
    explanation: "Os mamíferos são animais vertebrados endotérmicos caracterizados por pelos, glândulas mamárias produtoras de leite e três ossículos na orelha média."
  },

  // --- TÓPICO: Eletricidade e Magnetismo (8º ano) ---
  {
    grade: "8",
    topic: "Eletricidade e Circuitos",
    keywords: ["eletricidade", "circuito", "condutores", "isolantes", "cobre"],
    difficulty: "facil",
    question: "Na montagem de circuitos elétricos em nossas residências, os fios metálicos internos são feitos de cobre, enquanto a capa externa que os envolve é feita de borracha ou plástico. Isso ocorre porque:",
    options: [
      { letter: "A", text: "O cobre é um bom condutor elétrico e o plástico é um isolante que protege contra choques." },
      { letter: "B", text: "O cobre é um isolante térmico que não esquenta nunca." },
      { letter: "C", text: "O plástico conduz eletricidade muito mais rápido que o cobre." },
      { letter: "D", text: "Ambos são substâncias puras com idêntica condutividade elétrica." }
    ],
    correctAnswer: "A",
    explanation: "Materiais condutores possuem elétrons livres que se deslocam facilmente gerando corrente elétrica, enquanto materiais isolantes retêm seus elétrons, prevenindo curtos-circuitos e choques."
  },
  {
    grade: "8",
    topic: "Eletricidade e Circuitos",
    keywords: ["potencia", "eletrica", "watts", "consumo", "chuveiro"],
    difficulty: "medio",
    question: "Um chuveiro elétrico ligado na posição 'inverno' consome cerca de 5.500 Watts (W), enquanto uma lâmpada LED consome cerca de 9 Watts (W). A grandeza física expressa em Watts que mede a rapidez com que a energia elétrica é transformada é a:",
    options: [
      { letter: "A", text: "Potência elétrica." },
      { letter: "B", text: "Resistência acústica." },
      { letter: "C", text: "Carga estática de repulsão." },
      { letter: "D", text: "Velocidade luminosa angular." }
    ],
    correctAnswer: "A",
    explanation: "A potência elétrica (Watt = Joule/segundo) indica a quantidade de energia elétrica consumida ou convertida por unidade de tempo em um aparelho."
  }
];
