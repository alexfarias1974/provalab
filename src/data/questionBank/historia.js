// Banco de questões de História - 6º, 7º e 8º ano (BNCC)
export const historiaQuestions = [
  // --- TÓPICO: Fontes Históricas e Tempo ---
  {
    grade: "6",
    topic: "Introdução aos Estudos Históricos",
    keywords: ["fontes", "historicas", "documentos", "vestigios", "arqueologia", "orais", "visuais"],
    difficulty: "facil",
    question: "Para investigar e reconstruir acontecimentos do passado, os historiadores utilizam diferentes tipos de vestígios deixados pela humanidade. Esses vestígios são chamados de:",
    options: [
      { letter: "A", text: "Fontes históricas (escritas, orais, materiais e visuais)." },
      { letter: "B", text: "Profecias astronômicas comprovadas." },
      { letter: "C", text: "Leis fixas da física moderna." },
      { letter: "D", text: "Opiniões fictícias de ficção científica." }
    ],
    correctAnswer: "A",
    explanation: "Cartas, fotografias, ferramentas, relatos orais, pinturas e esqueletos são fontes históricas que servem de matéria-prima para o historiador interpretar o passado das sociedades."
  },
  {
    grade: "6",
    topic: "Introdução aos Estudos Históricos",
    keywords: ["tempo", "cronologico", "historico", "calendario", "periodizacao"],
    difficulty: "medio",
    question: "Enquanto o tempo cronológico é medido por relógios e calendários em horas, dias e anos astronômicos, o 'tempo histórico' analisa:",
    options: [
      { letter: "A", text: "As permanências e as transformações políticas, culturais e econômicas vivenciadas pelas sociedades ao longo das épocas." },
      { letter: "B", text: "Exclusivamente a velocidade em que o planeta Terra orbita o Sol." },
      { letter: "C", text: "O tempo de duração das baterias de aparelhos digitais." },
      { letter: "D", text: "Apenas as previsões meteorológicas para o próximo inverno." }
    ],
    correctAnswer: "A",
    explanation: "O tempo histórico foca nas mudanças e continuidades das experiências humanas: revoluções, modos de vida, crenças e transformações sociais profundas."
  },

  // --- TÓPICO: Pré-História: Paleolítico e Neolítico ---
  {
    grade: "6",
    topic: "Pré-História da Humanidade",
    keywords: ["paleolitico", "pedra", "lascada", "nomadismo", "fogo", "cacadores", "coletores"],
    difficulty: "facil",
    question: "No período Paleolítico (Idade da Pedra Lascada), os grupos humanos sobreviviam basicamente da caça, da pesca e da coleta de frutos e raízes. Por esgotarem os recursos de uma área e mudarem constantemente de lugar, eles eram considerados:",
    options: [
      { letter: "A", text: "Nômades." },
      { letter: "B", text: "Sedentários urbanos." },
      { letter: "C", text: "Industrializados." },
      { letter: "D", text: "Feudatários servis." }
    ],
    correctAnswer: "A",
    explanation: "Os grupos nômades não fixavam moradia definitiva; deslocavam-se periodicamente conforme as estações climáticas e a disponibilidade de animais e vegetais silvestres."
  },
  {
    grade: "6",
    topic: "Pré-História da Humanidade",
    keywords: ["paleolitico", "fogo", "cozimento", "protecao", "frio", "aquecimento"],
    difficulty: "medio",
    question: "O controle e o domínio intencional do fogo representou uma das maiores conquistas da humanidade no Paleolítico porque permitiu:",
    options: [
      { letter: "A", text: "Aquecer-se nas noites frias, afugentar predadores perigosos, iluminar cavernas escuras e cozinhar alimentos." },
      { letter: "B", text: "Construir os primeiros computadores mecânicos da antiguidade." },
      { letter: "C", text: "Navegar imediatamente ao redor de todo o globo terrestre de avião." },
      { letter: "D", text: "Eliminar a necessidade de beber água potável." }
    ],
    correctAnswer: "A",
    explanation: "O cozimento dos alimentos facilitou a mastigação e digestão de proteínas, melhorando a nutrição dos hominídeos e auxiliando no desenvolvimento do cérebro."
  },
  {
    grade: "6",
    topic: "Pré-História da Humanidade",
    keywords: ["neolitico", "revolucao", "agricola", "sedentarizacao", "domesticação", "animais"],
    difficulty: "medio",
    question: "A chamada 'Revolução Neolítica' (ou Revolução Agrícola) transformou radicalmente a trajetória da espécie humana por volta de 10.000 a.C. devido:",
    options: [
      { letter: "A", text: "Ao desenvolvimento da agricultura e à domesticação de animais, permitindo que os grupos humanos se fixassem em aldeias (sedentarização)." },
      { letter: "B", text: "À invenção das máquinas a vapor e das ferrovias de alta velocidade." },
      { letter: "C", text: "Ao abandono definitivo do uso de instrumentos de pedra e barro." },
      { letter: "D", text: "À extinção completa de todas as plantas selvagens comestíveis." }
    ],
    correctAnswer: "A",
    explanation: "Com o plantio de grãos (trigo, cevada, arroz) e a criação de rebanhos, as comunidades puderam estocar excedentes alimentares, fixar residência definitiva e multiplicar suas populações."
  },

  // --- TÓPICO: Primeiras Civilizações: Mesopotâmia e Egito ---
  {
    grade: "6",
    topic: "Primeiras Civilizações da Antiguidade",
    keywords: ["mesopotamia", "rios", "tigre", "eufrates", "cuneiforme", "cidades-estado"],
    difficulty: "facil",
    question: "A Mesopotâmia (palavra que significa 'terra entre rios') desenvolveu-se no Oriente Médio no fértil vale banhado pelos rios:",
    options: [
      { letter: "A", text: "Tigre e Eufrates." },
      { letter: "B", text: "Nilo e Jordão." },
      { letter: "C", text: "Amazonas e Prata." },
      { letter: "D", text: "Ganges e Danúbio." }
    ],
    correctAnswer: "A",
    explanation: "Os rios Tigre e Eufrates (no atual Iraque) transbordavam fertilizando as margens, possibilitando a emergência de ricas cidades-estado como Ur, Uruk e Babilônia."
  },
  {
    grade: "6",
    topic: "Primeiras Civilizações da Antiguidade",
    keywords: ["codigo", "hamurabi", "taliao", "olho", "por", "dente", "babilônia"],
    difficulty: "medio",
    question: "O Código de Hamurabi, gravado em pedra no Império Babilônico por volta de 1750 a.C., é um dos mais antigos conjuntos de leis escritas conhecidos e celebrizou-se pela Lei de Talião, sintetizada no princípio:",
    options: [
      { letter: "A", text: "'Olho por olho, dente por dente' (a punição deveria ser proporcional ao dano causado)." },
      { letter: "B", text: "'Todos os homens nascem livres e absolutamente iguais em riquezas'." },
      { letter: "C", text: "'Perdoe aos seus inimigos em qualquer circunstância legal'." },
      { letter: "D", text: "'As leis só valem para estrangeiros forasteiros sem propriedade'." }
    ],
    correctAnswer: "A",
    explanation: "A Lei de Talião estabelecia retribuição punitiva rigorosa, embora na prática as penas variassem conforme a classe social da vítima e do agressor na sociedade babilônica."
  },
  {
    grade: "6",
    topic: "Primeiras Civilizações da Antiguidade",
    keywords: ["egito", "antigo", "nilo", "farao", "teocracia", "múmias"],
    difficulty: "medio",
    question: "No Egito Antigo, a forma de governo em que o governante supremo (o Faraó) era venerado simultaneamente como autoridade política e como uma verdadeira encarnação viva de um deus na Terra é denominada:",
    options: [
      { letter: "A", text: "Teocracia." },
      { letter: "B", text: "Democracia participativa popular." },
      { letter: "C", text: "República parlamentarista constitucional." },
      { letter: "D", text: "Anarquia socialista cooperativa." }
    ],
    correctAnswer: "A",
    explanation: "Em uma teocracia, o poder político é exercido em nome de divindades ou pelo próprio monarca divinizado (o Faraó era considerado filho de Rá e a personificação de Hórus)."
  },

  // --- TÓPICO: Grécia Antiga: Pólis e Democracia ---
  {
    grade: "6",
    topic: "Grécia Antiga",
    keywords: ["grecia", "polis", "cidade-estado", "atenas", "esparta", "autonomia"],
    difficulty: "facil",
    question: "Na Grécia Antiga, o território nunca formou um país politicamente unificado com um único rei; em vez disso, organizava-se em cidades-estado independentes que possuíam suas próprias leis e exércitos, chamadas de:",
    options: [
      { letter: "A", text: "Pólis." },
      { letter: "B", text: "Feudos." },
      { letter: "C", text: "Capitanias." },
      { letter: "D", text: "Províncias imperiais." }
    ],
    correctAnswer: "A",
    explanation: "Cada pólis (como Atenas, Esparta, Corinto e Tebas) tinha soberania política e econômica própria, compartilhando entre si a língua grega e as crenças religiosas comuns."
  },
  {
    grade: "6",
    topic: "Grécia Antiga",
    keywords: ["atenas", "democracia", "direta", "cidadania", "assembleia", "ecclesia"],
    difficulty: "medio",
    question: "Atenas destacou-se na Antiguidade clássica por criar a Democracia. No entanto, o conceito de cidadão com direito a votar e discursar nas assembleias era restrito a:",
    options: [
      { letter: "A", text: "Homens livres, maiores de idade, nascidos em Atenas e filhos de pais atenienses (excluindo mulheres, escravizados e estrangeiros)." },
      { letter: "B", text: "Todos os moradores que residissem na cidade há mais de um mês, incluindo escravizados." },
      { letter: "C", text: "Apenas aos guerreiros espartanos que vencessem os Jogos Olímpicos." },
      { letter: "D", text: "Exclusivamente às mulheres chefes de família nobres." }
    ],
    correctAnswer: "A",
    explanation: "A democracia ateniense era direta (o cidadão votava sem intermediários), mas excludente: cerca de 80% a 90% da população total da pólis não gozava de direitos de cidadania."
  },
  {
    grade: "6",
    topic: "Grécia Antiga",
    keywords: ["esparta", "militarismo", "oligarguia", "guerreiros", "disciplina"],
    difficulty: "medio",
    question: "Diferente de Atenas, a pólis grega de Esparta caracterizava-se por uma estrutura social e política voltada essencialmente para:",
    options: [
      { letter: "A", text: "O militarismo rigoroso, a educação rígida dos soldados desde a infância e o controle político oligárquico." },
      { letter: "B", text: "O comércio marítimo internacional pacífico e as discussões teatrais de rua." },
      { letter: "C", text: "A abolição total de qualquer forma de exército armado." },
      { letter: "D", text: "A eleição de reis por voto universal de crianças e servos." }
    ],
    correctAnswer: "A",
    explanation: "Os espartanos mantinham os hilotas (servos públicos) subjugados pela força armada permanente, educando seus jovens (a agogê) para serem os soldados de infantaria mais disciplinados da Grécia."
  },

  // --- TÓPICO: Roma Antiga: República e Império ---
  {
    grade: "6",
    topic: "Roma Antiga",
    keywords: ["roma", "republica", "patricios", "plebeus", "senado", "conflito"],
    difficulty: "medio",
    question: "Durante a República Romana (509 a.C. a 27 a.C.), a sociedade romana foi marcada por intensos conflitos sociais entre duas classes sociais principais:",
    options: [
      { letter: "A", text: "Os Patrícios (aristocratas donos de terras com poder político) e os Plebeus (trabalhadores livres que lutavam por direitos e leis escritas)." },
      { letter: "B", text: "Os Senhores Feudais e os Servos da gleba medievais." },
      { letter: "C", text: "Os Burgueses fabris e o Proletariado operário moderno." },
      { letter: "D", text: "Os Nobres cavaleiros e os Corsários caribenhos." }
    ],
    correctAnswer: "A",
    explanation: "Após sucessivas revoltas e greves em que os plebeus se recusavam a lutar nas guerras, eles conquistaram a criação do Tribuno da Plebe e a Lei das Doze Tábuas (leis públicas escritas)."
  },
  {
    grade: "6",
    topic: "Roma Antiga",
    keywords: ["pao", "circo", "gladiadores", "coliseu", "imperadores", "distracao"],
    difficulty: "facil",
    question: "No Império Romano, a política adotada pelos governantes para manter a plebe empobrecida e ociosa sob controle, distribuindo trigo gratuito e oferecendo espetáculos violentos de gladiadores e corridas de bigas, ficou conhecida como:",
    options: [
      { letter: "A", text: "Política do 'Pão e Circo' (Panem et Circenses)." },
      { letter: "B", text: "Tratado de Paz de Versalhes." },
      { letter: "C", text: "Acordo de Livre Comércio Mediterrâneo." },
      { letter: "D", text: "Reforma Agrária Coletiva dos Gracos." }
    ],
    correctAnswer: "A",
    explanation: "A política do pão e circo desviava a atenção das massas populares dos graves problemas políticos e da desigualdade, evitando revoltas sociais urbanas."
  },

  // --- TÓPICO: Idade Média e Feudalismo (7º ano) ---
  {
    grade: "7",
    topic: "Idade Média e Feudalismo",
    keywords: ["feudalismo", "sociedade", "estamental", "clero", "nobreza", "servos"],
    difficulty: "facil",
    question: "Na Europa medieval feudal, a sociedade estamental era rigidamente dividida em três ordens sociais clássicas, resumidas na função que cada uma desempenhava:",
    options: [
      { letter: "A", text: "Os que oram (Clero), os que guerreiam e protegem (Nobreza) e os que trabalham para sustentar a todos (Servos e camponeses)." },
      { letter: "B", text: "Os industriais, os operários e os comerciantes marítimos." },
      { letter: "C", text: "Os senadores, os generais e os gladiadores livres." },
      { letter: "D", text: "Os presidentes, os deputados e os eleitores assalariados." }
    ],
    correctAnswer: "A",
    explanation: "Quase não havia mobilidade social no feudalismo: a posição do indivíduo era determinada pelo nascimento, e a Igreja Católica legitimava essa divisão como uma vontade divina."
  },
  {
    grade: "7",
    topic: "Idade Média e Feudalismo",
    keywords: ["feudo", "autossuficiente", "economia", "troca", "servidao", "corveia"],
    difficulty: "medio",
    question: "A economia feudal que predominou na Europa Ocidental entre os séculos V e XI tinha como principal característica ser:",
    options: [
      { letter: "A", text: "Agrária, ruralizada, praticamente autossuficiente e com escasso uso de moedas comerciais." },
      { letter: "B", text: "Totalmente baseada em transações digitais bancárias em grandes metrópoles." },
      { letter: "C", text: "Focada na exportação de algodão em massa para a América." },
      { letter: "D", text: "Controlada pelo comércio industrial de máquinas e motores a vapor." }
    ],
    correctAnswer: "A",
    explanation: "Com o colapso do Império Romano e as invasões, as cidades esvaziaram-se e a vida refugiou-se nos campos. Os feudos produziam quase tudo que consumiam, e o trabalho era servil."
  },
  {
    grade: "7",
    topic: "Idade Média e Cruzadas",
    keywords: ["cruzadas", "terra", "santa", "jerusalem", "igreja", "muçulmanos", "comercio"],
    difficulty: "medio",
    question: "As Cruzadas foram expedições militares e religiosas convocadas pela Igreja Católica entre os séculos XI e XIII com o objetivo oficial de:",
    options: [
      { letter: "A", text: "Reconquistar a Terra Santa (Jerusalém) do domínio dos muçulmanos e expandir a influência cristã." },
      { letter: "B", text: "Descobrir as terras do continente americano para Portugal." },
      { letter: "C", text: "Combater a Revolução Francesa e as ideias iluministas." },
      { letter: "D", text: "Encontrar minas de ouro na Cordilheira dos Andes." }
    ],
    correctAnswer: "A",
    explanation: "Apesar do pretexto religioso iniciado pelo Papa Urbano II em 1095, as Cruzadas reabriram as rotas comerciais no Mar Mediterrâneo e impulsionaram o renascimento do comércio europeu."
  },

  // --- TÓPICO: Renascimento Cultural e Científico ---
  {
    grade: "7",
    topic: "Renascimento Cultural e Científico",
    keywords: ["renascimento", "antropocentrismo", "teocentrismo", "humanismo", "razao", "italia"],
    difficulty: "medio",
    question: "O movimento de renovação artística, literária e científica surgido nas ricas cidades italianas no século XIV, que valorizou a razão humana, a observação e as culturas greco-romanas, contrapôs o Teocentrismo medieval ao:",
    options: [
      { letter: "A", text: "Antropocentrismo (o ser humano e sua capacidade racional no centro das atenções)." },
      { letter: "B", text: "Absolutismo teocrático perpétuo." },
      { letter: "C", text: "Feudalismo camponês isolado." },
      { letter: "D", text: "Anarquismo comunal primitivo." }
    ],
    correctAnswer: "A",
    explanation: "O Antropocentrismo humanista colocava as realizações, a ciência e a dignidade do ser humano como protagonistas, rompendo com a visão medieval que subordinava tudo exclusivamente à fé cega."
  },
  {
    grade: "7",
    topic: "Renascimento Cultural e Científico",
    keywords: ["heliocentrismo", "copernico", "galileu", "sol", "terra", "ciencia"],
    difficulty: "medio",
    question: "A teoria heliocêntrica, defendida corajosamente por cientistas renascentistas como Nicolau Copérnico e Galileu Galilei, afirmava que:",
    options: [
      { letter: "A", text: "O Sol é o centro do nosso sistema planetário, e a Terra e os outros planetas giram em torno dele." },
      { letter: "B", text: "A Terra é o centro imóvel do Universo inteiro e tudo gira ao redor dela (Geocentrismo)." },
      { letter: "C", text: "O Universo é uma cúpula plana sustentada por elefantes gigantescos." },
      { letter: "D", text: "A Terra não se movimenta em nenhuma hipótese física." }
    ],
    correctAnswer: "A",
    explanation: "O heliocentrismo desafiou o geocentrismo sustentado pelo clero na época, marcando o nascimento da ciência experimental moderna apoiada em observações com telescópios."
  },

  // --- TÓPICO: Reformas Religiosas ---
  {
    grade: "7",
    topic: "Reformas Religiosas",
    keywords: ["reforma", "protestante", "lutero", "95", "teses", "indulgencias", "alemanha"],
    difficulty: "facil",
    question: "Em 1517, o monge alemão Martinho Lutero afixou 95 Teses na porta da igreja de Wittenberg, desencadeando a Reforma Protestante. A sua principal crítica inicial voltava-se contra:",
    options: [
      { letter: "A", text: "A venda de indulgências (o perdão dos pecados em troca de dinheiro) e a corrupção do clero." },
      { letter: "B", text: "A leitura da Bíblia na língua própria de cada povo." },
      { letter: "C", text: "O direito dos camponeses de aprenderem a ler e escrever." },
      { letter: "D", text: "A existência de qualquer forma de religião ou crença em Deus." }
    ],
    correctAnswer: "A",
    explanation: "Lutero defendia que a salvação alcança-se pela fé individual e não por pagamentos materiais, além de propor a livre tradução e interpretação das Sagradas Escrituras."
  },

  // --- TÓPICO: Grandes Navegações e Colonização do Brasil ---
  {
    grade: "7",
    topic: "Expansão Marítima e Brasil Colonial",
    keywords: ["grandes", "navegacoes", "portugal", "pioneirismo", "especiarias", "indias"],
    difficulty: "medio",
    question: "Portugal foi o primeiro país europeu a lançar-se nas Grandes Navegações oceânicas no século XV. Dentre os fatores que explicaram o pioneirismo português, destacam-se:",
    options: [
      { letter: "A", text: "A posição geográfica privilegiada voltada para o Atlântico, a monarquia precoce e centralizada e o conhecimento náutico (Escola de Sagres)." },
      { letter: "B", text: "O apoio financeiro maciço do Império Otomano islâmico." },
      { letter: "C", text: "A falta total de florestas e madeiras em seu território continental." },
      { letter: "D", text: "A proibição do consumo de sal e peixe na península ibérica." }
    ],
    correctAnswer: "A",
    explanation: "Com a unificação política precoce na Revolução de Avis (1385) e uma burguesia comercial forte aliada à coroa, Portugal dominou técnicas de bússola, caravelas e astrolábios."
  },
  {
    grade: "7",
    topic: "Expansão Marítima e Brasil Colonial",
    keywords: ["tratado", "tordesilhas", "portugal", "espanha", "partilha", "atlantico"],
    difficulty: "medio",
    question: "Assinado em 1494 entre as coroas de Portugal e Espanha com a bênção do Papa, o Tratado de Tordesilhas tinha como objetivo:",
    options: [
      { letter: "A", text: "Dividir as terras descobertas e por descobrir fora da Europa por meio de uma linha imaginária a 370 léguas a oeste de Cabo Verde." },
      { letter: "B", text: "Declarar a independência imediata de todas as colônias americanas." },
      { letter: "C", text: "Proibir a navegação marítima no Oceano Pacífico para sempre." },
      { letter: "D", text: "Unificar os reinos da França e da Inglaterra sob uma mesma coroa." }
    ],
    correctAnswer: "A",
    explanation: "O meridiano de Tordesilhas garantiu à coroa portuguesa o direito sobre a faixa leste da América do Sul onde Cabral aportaria seis anos mais tarde, em 1500."
  },
  {
    grade: "7",
    topic: "Expansão Marítima e Brasil Colonial",
    keywords: ["pau-brasil", "escambo", "indigenas", "tinta", "madeira", "feitorias"],
    difficulty: "facil",
    question: "Nas primeiras três décadas após 1500 (período pré-colonial), a principal atividade econômica de Portugal no litoral brasileiro foi a extração do pau-brasil. A mão de obra indígena era obtida através do:",
    options: [
      { letter: "A", text: "Escambo (troca de toras de madeira pelo fornecimento de ferramentas, machados, espelhos e tecidos)." },
      { letter: "B", text: "Pagamento de salários mensais em moedas de ouro maciço." },
      { letter: "C", text: "Trabalho assalariado com carteira assinada e previdência social." },
      { letter: "D", text: "Compra de escravizados trazidos do extremo sul da África." }
    ],
    correctAnswer: "A",
    explanation: "Não havia colonização permanente ainda; os portugueses construíam feitorias e negociavam com os povos indígenas nativos que cortavam e transportavam as toras em troca de mercadorias úteis de metal."
  },
  {
    grade: "7",
    topic: "Brasil Colonial: Economia Açucareira",
    keywords: ["acucar", "engenho", "nordeste", "plantation", "latifundio", "escravidao"],
    difficulty: "medio",
    question: "A colonização e povoamento efetivo do Brasil a partir de 1530 baseou-se na montagem da economia açucareira no litoral do Nordeste. Esse modelo produtivo era estruturado no tripé da 'Plantation', que consistia em:",
    options: [
      { letter: "A", text: "Latifúndio (grandes propriedades de terra), Monocultura voltada para exportação e Trabalho escravizado." },
      { letter: "B", text: "Minifúndios policultores familiares com mão de obra exclusivamente assalariada." },
      { letter: "C", text: "Fábricas estatais urbanas com robôs a vapor de alta tecnologia." },
      { letter: "D", text: "Terras comunitárias sem proprietário privado divididas entre os nativos." }
    ],
    correctAnswer: "A",
    explanation: "O açúcar tinha alto valor no mercado europeu e o solo fértil de 'massapê' do Nordeste era ideal, justificando os enormes investimentos nos engenhos movidos por trabalho escravizado."
  },
  {
    grade: "7",
    topic: "Brasil Colonial: Escravidão e Resistência",
    keywords: ["escravidao", "quilombo", "palmares", "zumbi", "resistencia", "senzalada"],
    difficulty: "facil",
    question: "Durante os mais de três séculos de escravidão no Brasil, os africanos escravizados nunca aceitaram passivamente o cativeiro, organizando fugas, revoltas e comunidades livres no interior das matas chamadas de:",
    options: [
      { letter: "A", text: "Quilombos (sendo o maior deles o Quilombo dos Palmares, liderado por Zumbi)." },
      { letter: "B", text: "Capitanias Hereditárias reais." },
      { letter: "C", text: "Sindicatos fabris de resistência." },
      { letter: "D", text: "Câmaras Municipais de nobres." }
    ],
    correctAnswer: "A",
    explanation: "Os quilombos eram núcleos de refúgio e preservação cultural onde africanos e afrodescendentes organizavam agricultura, comércio e defesa armada contra os capitães do mato."
  },

  // --- TÓPICO: Iluminismo e Revoluções (8º ano) ---
  {
    grade: "8",
    topic: "Iluminismo e Revolução Francesa",
    keywords: ["iluminismo", "razao", "seculo", "luzes", "absolutismo", "liberdade"],
    difficulty: "medio",
    question: "O Iluminismo, movimento intelectual que floresceu na Europa no século XVIII ('Século das Luzes'), combatia abertamente o Antigo Regime. Suas principais bandeiras eram:",
    options: [
      { letter: "A", text: "O uso da Razão crítica contra o absolutismo monárquico, a defesa das liberdades individuais e a igualdade jurídica de todos perante a lei." },
      { letter: "B", text: "O fortalecimento ilimitado do poder divino dos reis e o aumento dos privilégios nobres." },
      { letter: "C", text: "A reintrodução da escravidão na Europa Ocidental." },
      { letter: "D", text: "O fechamento de todas as universidades e jornais científicos." }
    ],
    correctAnswer: "A",
    explanation: "Pensadores iluministas como Voltaire, Rousseau e Locke argumentavam que o governo devia servir ao povo e garantir direitos fundamentais como vida, propriedade e liberdade de expressão."
  },
  {
    grade: "8",
    topic: "Iluminismo e Revolução Francesa",
    keywords: ["montesquieu", "tres", "poderes", "executivo", "legislativo", "judiciario"],
    difficulty: "facil",
    question: "O pensador iluminista Barão de Montesquieu, em sua célebre obra 'O Espírito das Leis', formulou uma teoria fundamental para as democracias contemporâneas ao propor:",
    options: [
      { letter: "A", text: "A divisão tripartite do poder do Estado em Executivo, Legislativo e Judiciário, equilibrando-se mutuamente para evitar tiranias." },
      { letter: "B", text: "A entrega de todo o poder governamental para generais do exército permanente." },
      { letter: "C", text: "A inexistência de juízes e leis escritas em julgamentos criminais." },
      { letter: "D", text: "O poder vitalício concentrado nas mãos do Papa em Roma." }
    ],
    correctAnswer: "A",
    explanation: "Para Montesquieu, apenas o 'poder freando o poder' garantia a liberdade dos cidadãos contra arbitrariedades de governantes autoritários."
  },
  {
    grade: "8",
    topic: "Iluminismo e Revolução Francesa",
    keywords: ["revolucao", "francesa", "bastilha", "1789", "terceiro", "estado"],
    difficulty: "medio",
    question: "A Queda da Bastilha, fortaleza-prisão símbolo do absolutismo francês invadida pelo povo de Paris em 14 de julho de 1789, marcou o início histórico de qual grande acontecimento mundial?",
    options: [
      { letter: "A", text: "A Revolução Francesa." },
      { letter: "B", text: "A Primeira Guerra Mundial." },
      { letter: "C", text: "A Guerra Fria entre EUA e URSS." },
      { letter: "D", text: "A Independência dos Estados Unidos." }
    ],
    correctAnswer: "A",
    explanation: "A Revolução Francesa destruiu o Antigo Regime na França, aboliu privilégios feudais da nobreza e do clero e promulgou a 'Declaração dos Direitos do Homem e do Cidadão'."
  },
  {
    grade: "8",
    topic: "Revolução Industrial",
    keywords: ["revolucao", "industrial", "inglaterra", "maquina", "vapor", "operarios", "proletariado"],
    difficulty: "facil",
    question: "Iniciada na Inglaterra na segunda metade do século XVIII, a Revolução Industrial substituiu o trabalho manual das oficinas artesanais pelo uso pioneiro de:",
    options: [
      { letter: "A", text: "Máquinas a vapor movidas a carvão mineral nas primeiras fábricas mecânicas têxteis." },
      { letter: "B", text: "Motores a combustão eletrônica computadorizados." },
      { letter: "C", text: "Painéis solares fotovoltaicos interligados à rede." },
      { letter: "D", text: "Caravelas oceânicas sem chaminés." }
    ],
    correctAnswer: "A",
    explanation: "A mecanização do tear mecânico e da máquina a vapor de James Watt permitiu multiplicar exponencialmente a produção em série de tecidos, inaugurando o sistema fabril capitalista."
  },
  // --- NOVAS QUESTÕES DE HISTÓRIA ---
  {
    grade: "7",
    topic: "Brasil Colonial: Capitanias e Governo-Geral",
    keywords: ["capitanias", "hereditarias", "governo-geral", "salvador", "primeira", "capital"],
    difficulty: "medio",
    question: "Após o fracasso da maior parte das Capitanias Hereditárias devido ao isolamento e ataques, a Coroa Portuguesa instituiu em 1548 o Governo-Geral, fundando como a primeira capital oficial do Brasil a cidade de:",
    options: [
      { letter: "A", text: "Salvador (na capitania da Bahia de Todos os Santos)." },
      { letter: "B", text: "Rio de Janeiro." },
      { letter: "C", text: "São Paulo de Piratininga." },
      { letter: "D", text: "Brasília." }
    ],
    correctAnswer: "A",
    explanation: "O primeiro governador-geral foi Tomé de Sousa, que desembarcou em 1549 com colonos, jesuítas e soldados para erguer a cidade-fortaleza de Salvador."
  },
  {
    grade: "7",
    topic: "Brasil Colonial: Ciclo do Ouro",
    keywords: ["ouro", "minas", "gerais", "quinto", "derrama", "impostos"],
    difficulty: "medio",
    question: "No século XVIII, a descoberta de ricas jazidas de ouro na região de Minas Gerais deslocou o eixo econômico da colônia para o Centro-Sul. A Coroa portuguesa cobrava como imposto a quinta parte (20%) de todo o ouro extraído, taxa chamada de:",
    options: [
      { letter: "A", text: "O Quinto." },
      { letter: "B", text: "O Dízimo industrial." },
      { letter: "C", text: "A Alvavala espanhola." },
      { letter: "D", text: "O Tributo de Tordesilhas." }
    ],
    correctAnswer: "A",
    explanation: "O ouro era fundido e carimbado nas Casas de Fundição reais, onde 20% ficava retido para a coroa portuguesa como o imposto do Quinto."
  },
  {
    grade: "8",
    topic: "Inconfidência Mineira",
    keywords: ["inconfidencia", "mineira", "tiradentes", "derrama", "liberdade"],
    difficulty: "facil",
    question: "A Inconfidência Mineira (1789), revolta separatista de caráter republicano e iluminista deflagrada em Vila Rica contra a opressão fiscal portuguesa, teve como líder mártir executado e esquartejado:",
    options: [
      { letter: "A", text: "Joaquim José da Silva Xavier, o Tiradentes." },
      { letter: "B", text: "Zumbi dos Palmares." },
      { letter: "C", text: "Dom Pedro I." },
      { letter: "D", text: "Duque de Caxias." }
    ],
    correctAnswer: "A",
    explanation: "Tiradentes foi o único inconfidente condenado à morte na forca e transformado mais tarde em herói cívico e patrono da nação brasileira republicana."
  },
  {
    grade: "8",
    topic: "Brasil Império: Independência",
    keywords: ["independencia", "brasil", "ipiranga", "pedro", "1822"],
    difficulty: "facil",
    question: "Em 7 de setembro de 1822, às margens do riacho do Ipiranga, o príncipe regente D. Pedro proferiu o 'Grito do Ipiranga', rompendo os laços coloniais com Portugal e tornando-se:",
    options: [
      { letter: "A", text: "O primeiro Imperador do Brasil independente, como D. Pedro I." },
      { letter: "B", text: "O presidente eleito por sufrágio universal direto." },
      { letter: "C", text: "O primeiro-ministro britânico em terras tropicais." },
      { letter: "D", text: "O governador perpétuo de Lisboa." }
    ],
    correctAnswer: "A",
    explanation: "O Brasil adotou uma monarquia constitucional hereditária rara na América Latina, coroando D. Pedro I como imperador constitucional."
  },
  {
    grade: "8",
    topic: "Abolição da Escravidão no Brasil",
    keywords: ["lei", "aurea", "1888", "abolicionismo", "princesa", "isabel", "escravidao"],
    difficulty: "facil",
    question: "Após décadas de intensa pressão popular, revoltas de escravizados e campanhas abolicionistas, a escravidão foi oficialmente e definitivamente extinta no Brasil em 13 de maio de 1888 com a assinatura da:",
    options: [
      { letter: "A", text: "Lei Áurea, assinada pela Princesa Isabel." },
      { letter: "B", text: "Lei do Ventre Livre." },
      { letter: "C", text: "Lei dos Sexagenários." },
      { letter: "D", text: "Constituição Cidadã de 1988." }
    ],
    correctAnswer: "A",
    explanation: "O Brasil foi o último país das Américas a abolir a escravidão, através da Lei Áurea promulgada em 1888."
  },
  {
    grade: "8",
    topic: "Proclamação da República",
    keywords: ["proclamacao", "republica", "1889", "deodoro", "fonseca", "marechal"],
    difficulty: "facil",
    question: "Em 15 de novembro de 1889, um golpe militar liderado pelo Marechal Deodoro da Fonseca destituiu o imperador D. Pedro II e instaurou no Brasil:",
    options: [
      { letter: "A", text: "A República Federativa Presidencialista." },
      { letter: "B", text: "O retorno ao domínio colonial de Portugal." },
      { letter: "C", text: "O Império Absoluto dos Três Poderes." },
      { letter: "D", text: "Uma monarquia parlamentarista regida pela Inglaterra." }
    ],
    correctAnswer: "A",
    explanation: "Com a Proclamação da República na Praça da Aclamação no Rio de Janeiro, Deodoro tornou-se o primeiro presidente provisório do Brasil."
  }
];
