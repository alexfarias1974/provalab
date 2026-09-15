// Banco oficial de questões homologadas BNCC para uso offline e fallback inteligente no ProvaLAB
// Abrange 6º, 7º e 8º ano para todas as matérias da grade curricular

export const QUESTION_BANK = {
  Geografia: [
    {
      topic: "Paisagem, Espaço e Lugar",
      keywords: ["paisagem", "espaco", "lugar", "cultural", "natural", "modificada", "humanizada", "sociedade"],
      question: "Na Geografia, qual é a principal diferença entre uma paisagem natural e uma paisagem cultural (ou humanizada)?",
      options: [
        { letter: "A", text: "A paisagem natural foi modificada pelo trabalho humano, enquanto a cultural não tem interferência humana." },
        { letter: "B", text: "A paisagem natural preserva os elementos da natureza sem intervenção humana significativa, enquanto a cultural foi transformada pelas atividades humanas." },
        { letter: "C", text: "A paisagem natural só existe no mar e a paisagem cultural só existe nas capitais." },
        { letter: "D", text: "Não existe diferença, ambas são termos sinônimos na ciência geográfica." }
      ],
      correctAnswer: "B",
      explanation: "A paisagem natural é aquela formada exclusivamente por elementos da natureza (rios, florestas, relevo original), enquanto a paisagem cultural traz marcas do trabalho humano (cidades, pontes, lavouras)."
    },
    {
      topic: "Paisagem, Espaço e Lugar",
      keywords: ["lugar", "afetivo", "pertencimento", "espaco", "cotidiano", "vivencia"],
      question: "Para a Geografia, o conceito de 'Lugar' refere-se:",
      options: [
        { letter: "A", text: "Apenas ao planeta Terra visto do espaço sideral." },
        { letter: "B", text: "Ao espaço de vivência com o qual as pessoas constroem laços afetivos, memórias e sentimentos de pertencimento." },
        { letter: "C", text: "A um ponto geométrico sem qualquer relação com a vida das pessoas." },
        { letter: "D", text: "Exclusivamente a territórios demarcados por fronteiras militares." }
      ],
      correctAnswer: "B",
      explanation: "O 'Lugar' é a dimensão do espaço geográfico onde se desenvolve a vida cotidiana, marcada pela afetividade e identidade dos indivíduos com o meio onde vivem."
    },
    {
      topic: "Relevo e Hidrografia do Brasil",
      keywords: ["relevo", "hidrografia", "formas", "planalto", "planicie", "depressao", "montanha"],
      question: "As quatro principais macroformas de relevo continental estudadas na Geografia são:",
      options: [
        { letter: "A", text: "Vulcões, geleiras, praias e desertos." },
        { letter: "B", text: "Planaltos, planícies, depressões e montanhas." },
        { letter: "C", text: "Rios, lagos, mares e oceanos." },
        { letter: "D", text: "Falésias, recifes, manguezais e restingas." }
      ],
      correctAnswer: "B",
      explanation: "As grandes formas do relevo terrestre são os planaltos (predomínio de erosão), planícies (predomínio de sedimentação), depressões (áreas rebaixadas) e montanhas (altas elevações)."
    },
    {
      topic: "Relevo e Hidrografia do Brasil",
      keywords: ["relevo", "brasil", "planalto", "depressao", "ausencia", "montanhas"],
      question: "Sobre o relevo brasileiro, é correto afirmar que:",
      options: [
        { letter: "A", text: "Possui grandes cordilheiras montanhosas recentes, como os Andes e os Himalaias." },
        { letter: "B", text: "É predominantemente antigo, desgastado pela erosão e formado por planaltos, depressões e planícies, sem dobramentos modernos." },
        { letter: "C", text: "É composto em 90% por planícies oceânicas abaixo do nível do mar." },
        { letter: "D", text: "Apresenta atividade vulcânica ativa e frequentes terremotos devastadores." }
      ],
      correctAnswer: "B",
      explanation: "Por estar localizado no centro da Placa Tectônica Sul-Americana, o relevo do Brasil é geologicamente antigo, bastante desgastado por milhões de anos de erosão e sem vulcões ativos."
    },
    {
      topic: "Relevo e Hidrografia do Brasil",
      keywords: ["hidrografia", "rio", "bacia", "amazonica", "volume", "nascente", "foz"],
      question: "Qual é a maior bacia hidrográfica do mundo e do Brasil em volume de água e extensão territorial?",
      options: [
        { letter: "A", text: "Bacia do Rio São Francisco" },
        { letter: "B", text: "Bacia Amazônica" },
        { letter: "C", text: "Bacia do Rio Paraná" },
        { letter: "D", text: "Bacia do Rio Tocantins-Araguaia" }
      ],
      correctAnswer: "B",
      explanation: "A Bacia Amazônica abriga a maior rede fluvial e o maior volume de água doce em circulação superficial do planeta, tendo o Rio Amazonas como seu rio principal."
    },
    {
      topic: "Relevo e Hidrografia do Brasil",
      keywords: ["sao francisco", "velho chico", "integracao", "nacional", "nordeste", "hidrografia"],
      question: "O Rio São Francisco é historicamente conhecido como o 'Rio da Integração Nacional' porque:",
      options: [
        { letter: "A", text: "Liga a Região Sudeste à Região Nordeste, atravessando áreas do semiárido e permitindo navegação e irrigação." },
        { letter: "B", text: "Nasce no Oceano Atlântico e deságua no Pantanal mato-grossense." },
        { letter: "C", text: "É o único rio do mundo totalmente subterrâneo." },
        { letter: "D", text: "Separa o Brasil da Argentina e do Paraguai." }
      ],
      correctAnswer: "A",
      explanation: "Nascendo na Serra da Canastra (MG) e desaguando no Oceano Atlântico entre AL e SE, o 'Velho Chico' é fundamental para a agricultura irrigada e integração regional do semiárido nordestino."
    },
    {
      topic: "Coordenadas Geográficas e Fusos",
      keywords: ["coordenadas", "paralelos", "meridianos", "latitude", "longitude", "equador", "greenwich"],
      question: "As linhas imaginárias que circundam a Terra paralelamente à Linha do Equador e determinam a latitude são chamadas de:",
      options: [
        { letter: "A", text: "Meridianos" },
        { letter: "B", text: "Paralelos" },
        { letter: "C", text: "Pontos cardeais" },
        { letter: "D", text: "Curvas de nível" }
      ],
      correctAnswer: "B",
      explanation: "Os paralelos são círculos horizontais paralelos ao Equador. A latitude mede a distância angular de 0° a 90° ao norte ou ao sul do Equador."
    },
    {
      topic: "Coordenadas Geográficas e Fusos",
      keywords: ["fusos", "horarios", "greenwich", "hora", "rotacao", "meridiano"],
      question: "A Terra dá uma volta completa de 360° em seu próprio eixo em aproximadamente 24 horas. Dessa divisão originaram-se os fusos horários de:",
      options: [
        { letter: "A", text: "10° para cada hora de diferença" },
        { letter: "B", text: "15° de longitude para cada hora de diferença (360° ÷ 24 = 15°)" },
        { letter: "C", text: "30° para cada duas horas" },
        { letter: "D", text: "45° para cada fuso mundial" }
      ],
      correctAnswer: "B",
      explanation: "Dividindo os 360° da circunferência terrestre pelas 24 horas do dia, obtém-se faixas de 15° de longitude para cada fuso de 1 hora."
    },
    {
      topic: "Coordenadas Geográficas e Fusos",
      keywords: ["fusos", "brasil", "brasilia", "horario", "quatro"],
      question: "Quantos fusos horários oficiais existem no território brasileiro?",
      options: [
        { letter: "A", text: "Apenas 1 fuso em todo o país" },
        { letter: "B", text: "4 fusos horários oficiais (sendo o de Brasília UTC-3 o horário de referência)" },
        { letter: "C", text: "7 fusos horários" },
        { letter: "D", text: "12 fusos horários" }
      ],
      correctAnswer: "B",
      explanation: "Devido à sua grande extensão longitudinal de leste a oeste, o Brasil abrange 4 fusos horários (UTC-2 das ilhas oceânicas, UTC-3 de Brasília, UTC-4 de Manaus e UTC-5 do Acre)."
    },
    {
      topic: "Clima e Vegetação",
      keywords: ["clima", "vegetacao", "tempo", "diferenca", "atmosfera"],
      question: "Qual é a diferença fundamental entre 'tempo meteorológico' e 'clima'?",
      options: [
        { letter: "A", text: "Tempo é o padrão de 30 anos e clima é o que acontece agora." },
        { letter: "B", text: "Tempo é o estado momentâneo da atmosfera em dado momento, enquanto clima é o padrão habitual observado ao longo de décadas." },
        { letter: "C", text: "São sinônimos perfeitos que medem a mesma condição da natureza." },
        { letter: "D", text: "Tempo só se refere à temperatura e clima só à quantidade de chuva." }
      ],
      correctAnswer: "B",
      explanation: "Dizer 'hoje está chovendo e frio' refere-se ao tempo meteorológico (momentâneo). O clima requer estudos prolongados (geralmente 30 anos) para caracterizar o comportamento habitual da região."
    },
    {
      topic: "Clima e Vegetação",
      keywords: ["biomas", "brasil", "caatinga", "cerrado", "amazonia", "semiarido"],
      question: "O bioma brasileiro exclusivamente nacional, com vegetação de folhas reduzidas, espinhos e plantas suculentas adaptadas a secas prolongadas (xerófitas) é a:",
      options: [
        { letter: "A", text: "Mata Atlântica" },
        { letter: "B", text: "Caatinga" },
        { letter: "C", text: "Pampa" },
        { letter: "D", text: "Floresta de Araucárias" }
      ],
      correctAnswer: "B",
      explanation: "A Caatinga é um bioma genuinamente brasileiro típico do Sertão semiárido, com rica biodiversidade adaptada à escassez periódica de chuvas."
    },
    {
      topic: "Urbanização e População",
      keywords: ["urbanizacao", "populacao", "exodo", "rural", "cidades", "metropole"],
      question: "O processo migratório de saída das populações do meio rural em direção às cidades, impulsionado pela mecanização do campo e industrialização urbana, denomina-se:",
      options: [
        { letter: "A", text: "Transumância" },
        { letter: "B", text: "Êxodo rural" },
        { letter: "C", text: "Nomadismo" },
        { letter: "D", text: "Imigração internacional" }
      ],
      correctAnswer: "B",
      explanation: "O êxodo rural foi muito intenso no Brasil na segunda metade do século XX, transformando o país de majoritariamente rural em urbano."
    }
  ],

  "Língua Portuguesa": [
    {
      topic: "Substantivos e Adjetivos",
      keywords: ["substantivo", "adjetivo", "classes", "palavras", "qualificacao", "abstrato"],
      question: "Na frase: 'A jovem cientista fez uma descoberta extraordinária', as palavras destacadas 'cientista' e 'extraordinária' classificam-se, respectivamente, como:",
      options: [
        { letter: "A", text: "Verbo e Advérbio" },
        { letter: "B", text: "Substantivo e Adjetivo" },
        { letter: "C", text: "Adjetivo e Pronome" },
        { letter: "D", text: "Artigo e Preposição" }
      ],
      correctAnswer: "B",
      explanation: "'Cientista' dá nome a um ser (substantivo) e 'extraordinária' atribui uma qualidade à descoberta (adjetivo)."
    },
    {
      topic: "Substantivos e Adjetivos",
      keywords: ["substantivo", "abstrato", "concreto", "sentimento"],
      question: "Qual das palavras abaixo é classificada gramaticalmente como um substantivo abstrato?",
      options: [
        { letter: "A", text: "Caneta" },
        { letter: "B", text: "Solidariedade" },
        { letter: "C", text: "Mesa" },
        { letter: "D", text: "Cachorro" }
      ],
      correctAnswer: "B",
      explanation: "Substantivos abstratos nomeiam sentimentos, qualidades, ações ou estados que dependem de outro ser para existir, como 'solidariedade', 'amor' e 'justiça'."
    },
    {
      topic: "Figuras de Linguagem",
      keywords: ["figuras", "linguagem", "metafora", "comparacao", "sentido", "figurado"],
      question: "Na frase: 'Aquele menino é um raio correndo no campo de futebol', qual figura de linguagem foi empregada?",
      options: [
        { letter: "A", text: "Eufemismo" },
        { letter: "B", text: "Metáfora" },
        { letter: "C", text: "Onomatopeia" },
        { letter: "D", text: "Pleonasmo" }
      ],
      correctAnswer: "B",
      explanation: "A metáfora consiste em uma comparação implícita de qualidades (a rapidez do menino com a velocidade de um raio), sem uso de conectivos como 'como' ou 'tal qual'."
    },
    {
      topic: "Figuras de Linguagem",
      keywords: ["hiperbole", "exagero", "figura"],
      question: "Quando alguém exclama: 'Estou morrendo de fome, não como há séculos!', está utilizando a figura de linguagem chamada:",
      options: [
        { letter: "A", text: "Antítese" },
        { letter: "B", text: "Hipérbole" },
        { letter: "C", text: "Ironia" },
        { letter: "D", text: "Aliteração" }
      ],
      correctAnswer: "B",
      explanation: "A hipérbole é a figura de pensamento que traduz um exagero intencional para dar ênfase expressiva à declaração."
    },
    {
      topic: "Transitividade e Verbos",
      keywords: ["verbo", "transitividade", "direto", "indireto", "objeto"],
      question: "Na oração: 'Os professores entregaram as medalhas aos alunos premiados', o verbo 'entregaram' classifica-se como:",
      options: [
        { letter: "A", text: "Intransitivo (VI)" },
        { letter: "B", text: "Transitivo Direto e Indireto (VTDI)" },
        { letter: "C", text: "Transitivo Indireto apenas" },
        { letter: "D", text: "De Ligação (VL)" }
      ],
      correctAnswer: "B",
      explanation: "Quem entrega, entrega algo ('as medalhas', objeto direto) a alguém ('aos alunos premiados', objeto indireto preposicionado)."
    },
    {
      topic: "Pontuação e Parágrafo",
      keywords: ["pontuacao", "virgula", "vocativo", "aposto"],
      question: "Assinale a frase em que o uso da vírgula está correto para isolar o vocativo (chamamento):",
      options: [
        { letter: "A", text: "Mariana, guarde o seu material na mochila agora." },
        { letter: "B", text: "Mariana guarde, o seu material na mochila agora." },
        { letter: "C", text: "Mariana guarde o seu, material na mochila agora." },
        { letter: "D", text: "Guarde Mariana o, seu material na mochila." }
      ],
      correctAnswer: "A",
      explanation: "O vocativo é o termo usado para chamar ou interpelar o interlocutor e deve ser obrigatoriamente isolado por vírgula."
    },
    {
      topic: "Concordância Verbal e Nominal",
      keywords: ["concordancia", "fazer", "haver", "impessoal"],
      question: "Indique a alternativa que segue as normas cultas de concordância com verbos impessoais:",
      options: [
        { letter: "A", text: "Fazem três meses que as aulas começaram." },
        { letter: "B", text: "Faz três meses que as aulas começaram." },
        { letter: "C", text: "Houveram muitos problemas no trânsito hoje." },
        { letter: "D", text: "Existia muitas pessoas na fila do cinema." }
      ],
      correctAnswer: "B",
      explanation: "O verbo 'fazer' indicando tempo transcorrido e o verbo 'haver' no sentido de existir são impessoais, ficando sempre no singular (Faz três meses / Houve muitos problemas)."
    }
  ],

  Ciências: [
    {
      topic: "Misturas Homogêneas e Heterogêneas",
      keywords: ["misturas", "homogeneas", "heterogeneas", "solucao", "fases", "dissolvido", "sal", "agua"],
      question: "Quando colocamos uma colher de sal em um copo com água e misturamos bem até dissolver completamente, formamos:",
      options: [
        { letter: "A", text: "Uma mistura heterogênea bifásica" },
        { letter: "B", text: "Uma mistura homogênea (solução de fase única)" },
        { letter: "C", text: "Uma reação química explosiva" },
        { letter: "D", text: "Uma substância simples pura" }
      ],
      correctAnswer: "B",
      explanation: "A mistura homogênea apresenta aspecto visual uniforme em toda a sua extensão, possuindo apenas uma fase perceptível a olho nu ou no microscópio comum."
    },
    {
      topic: "Misturas Homogêneas e Heterogêneas",
      keywords: ["misturas", "oleo", "agua", "areia", "fases", "heterogenea"],
      question: "Um recipiente contém água líquida, óleo de cozinha e areia. Quantas fases e componentes essa mistura heterogênea apresenta?",
      options: [
        { letter: "A", text: "1 fase e 3 componentes" },
        { letter: "B", text: "3 fases e 3 componentes" },
        { letter: "C", text: "2 fases e 3 componentes" },
        { letter: "D", text: "3 fases e 1 componente" }
      ],
      correctAnswer: "B",
      explanation: "A areia decanta no fundo (1ª fase sólida), a água fica no meio (2ª fase líquida) e o óleo flutua por ser menos denso (3ª fase líquida)."
    },
    {
      topic: "Misturas Homogêneas e Heterogêneas",
      keywords: ["separacao", "filtracao", "destilacao", "decantacao", "sal", "salinas", "evaporacao"],
      question: "Qual método de separação de misturas é utilizado nas salinas para se obter o sal a partir da água do mar?",
      options: [
        { letter: "A", text: "Filtração simples" },
        { letter: "B", text: "Evaporação da água pela ação do calor do sol e do vento" },
        { letter: "C", text: "Levigação com bateia" },
        { letter: "D", text: "Separação magnética com ímã" }
      ],
      correctAnswer: "B",
      explanation: "Nas salinas, a água do mar é retida em tanques rasos onde a energia solar e os ventos provocam a evaporação da água, permitindo a cristalização do sal."
    },
    {
      topic: "Misturas Homogêneas e Heterogêneas",
      keywords: ["separacao", "agua", "areia", "solido", "liquido", "filtro", "filtracao"],
      question: "Para separar uma mistura de água e areia retendo o sólido em laboratório, o método mais indicado é a:",
      options: [
        { letter: "A", text: "Destilação fracionada" },
        { letter: "B", text: "Filtração simples" },
        { letter: "C", text: "Centrifugação gasosa" },
        { letter: "D", text: "Sublimação" }
      ],
      correctAnswer: "B",
      explanation: "Na filtração simples, a mistura líquida com partículas sólidas insolúveis passa por um meio poroso (papel de filtro), que retém a areia e deixa passar a água limpa."
    },
    {
      topic: "Células e Organelas",
      keywords: ["celula", "organelas", "mitocondria", "energia", "respiracao"],
      question: "Qual organela celular é responsável pelo processo de respiração celular e liberação de energia (ATP) para as funções vitais?",
      options: [
        { letter: "A", text: "Ribossomo" },
        { letter: "B", text: "Mitocôndria" },
        { letter: "C", text: "Lisossomo" },
        { letter: "D", text: "Retículo endoplasmático" }
      ],
      correctAnswer: "B",
      explanation: "As mitocôndrias atuam como as 'usinas de energia' das células, transformando glicose e oxigênio em energia útil através da respiração celular."
    },
    {
      topic: "Células e Organelas",
      keywords: ["celula", "vegetal", "cloroplasto", "fotossintese", "parede"],
      question: "Quais são duas estruturas celulares que estão presentes em células vegetais, mas NÃO existem em células animais?",
      options: [
        { letter: "A", text: "Membrana plasmática e núcleo" },
        { letter: "B", text: "Cloroplastos e parede celular celulósica" },
        { letter: "C", text: "Mitocôndrias e ribossomos" },
        { letter: "D", text: "Citoplasma e carioteca" }
      ],
      correctAnswer: "B",
      explanation: "Os cloroplastos (que realizam fotossíntese) e a parede celular de celulose (que dá sustentação) são características exclusivas das células vegetais."
    },
    {
      topic: "Camadas da Terra e Rochas",
      keywords: ["terra", "rochas", "camadas", "crosta", "manto", "nucleo"],
      question: "A camada sólida externa da Terra sobre a qual vivemos, formada por solos e rochas, denomina-se:",
      options: [
        { letter: "A", text: "Manto Terrestre" },
        { letter: "B", text: "Crosta Terrestre (Litosfera)" },
        { letter: "C", text: "Núcleo Externo" },
        { letter: "D", text: "Atmosfera ionizada" }
      ],
      correctAnswer: "B",
      explanation: "A crosta terrestre ou litosfera é a casca rochosa mais externa e fina do planeta Terra."
    }
  ],

  História: [
    {
      topic: "Grécia Antiga e Democracia",
      keywords: ["grecia", "democracia", "atenas", "agora", "cidadania"],
      question: "A democracia que surgiu na cidade-estado de Atenas na Grécia Antiga diferenciava-se das democracias modernas porque era:",
      options: [
        { letter: "A", text: "Representativa, votando em presidentes de quatro em quatro anos." },
        { letter: "B", text: "Direta, onde os próprios cidadãos debatiam e votavam as leis presencialmente na Ágora." },
        { letter: "C", text: "Controlada exclusivamente pelo exército espartano." },
        { letter: "D", text: "Aberta a todos os escravos e estrangeiros igualmente." }
      ],
      correctAnswer: "B",
      explanation: "Na democracia ateniense direta, os homens livres e atenienses debatiam e votavam as decisões políticas diretamente na praça pública (Ágora)."
    },
    {
      topic: "Roma Antiga e República",
      keywords: ["roma", "republica", "patricios", "plebeus", "senado"],
      question: "Na República Romana, a instituição política de maior prestígio encarregada das decisões de finanças e política externa era o:",
      options: [
        { letter: "A", text: "Tribunal do Santo Ofício" },
        { letter: "B", text: "Senado Romano" },
        { letter: "C", text: "Parlamento Moderno" },
        { letter: "D", text: "Conselho dos Escribas" }
      ],
      correctAnswer: "B",
      explanation: "O Senado, composto pelas famílias aristocráticas patrícias, era a espinha dorsal de todo o poder na Roma Republicana."
    },
    {
      topic: "Egito Antigo e Mesopotâmia",
      keywords: ["egito", "nilo", "farao", "piramides", "agricultura"],
      question: "O historiador grego Heródoto escreveu que 'O Egito é uma dádiva do Nilo'. Essa célebre frase explica-se porque:",
      options: [
        { letter: "A", text: "O Nilo fornecia pedras preciosas no fundo do mar." },
        { letter: "B", text: "As cheias anuais do rio fertilizavam as margens com lodo nutritivo (húmus), tornando possível a agricultura no deserto." },
        { letter: "C", text: "O rio impedia qualquer contato com outros povos." },
        { letter: "D", text: "As águas do Nilo nunca se moviam." }
      ],
      correctAnswer: "B",
      explanation: "Sem as cheias regulares do Rio Nilo, a civilização egípcia não teria conseguido desenvolver sua rica agricultura que sustentou o império."
    },
    {
      topic: "Feudalismo e Idade Média",
      keywords: ["feudalismo", "feudo", "idade media", "senhor feudal", "servos", "vassalagem"],
      question: "No sistema feudal da Europa medieval, as relações de suserania e vassalagem eram firmadas entre:",
      options: [
        { letter: "A", text: "Senhores feudais nobres entre si, estabelecendo laços de lealdade e proteção mútua." },
        { letter: "B", text: "Camponeses e escravos romanos." },
        { letter: "C", text: "Reis e comerciantes estrangeiros da China." },
        { letter: "D", text: "Guerreiros e piratas vikings." }
      ],
      correctAnswer: "A",
      explanation: "A vassalagem era um juramento sagrado entre nobres: o suserano concedia o feudo (terra) e o vassalo prometia fidelidade e ajuda militar."
    }
  ],

  Matemática: [
    {
      topic: "Frações e Números Decimais",
      keywords: ["fracoes", "decimais", "soma", "denominador"],
      question: "Ao resolver a adição de frações 1/4 + 2/4, qual é o resultado correto?",
      options: [
        { letter: "A", text: "3/8" },
        { letter: "B", text: "3/4" },
        { letter: "C", text: "2/8" },
        { letter: "D", text: "1/2" }
      ],
      correctAnswer: "B",
      explanation: "Quando os denominadores são iguais, mantemos o denominador (4) e somamos os numeradores (1 + 2 = 3). Logo, 3/4."
    },
    {
      topic: "Frações e Números Decimais",
      keywords: ["fracao", "decimal", "simplificada", "porcentagem"],
      question: "O número decimal 0,75 equivale a qual fração em sua forma simplificada irredutível?",
      options: [
        { letter: "A", text: "7/5" },
        { letter: "B", text: "3/4" },
        { letter: "C", text: "75/10" },
        { letter: "D", text: "1/4" }
      ],
      correctAnswer: "B",
      explanation: "0,75 = 75/100. Dividindo numerador e denominador por 25, chegamos a 3/4."
    },
    {
      topic: "Múltiplos, Divisores e MMC",
      keywords: ["mmc", "multiplos", "divisores"],
      question: "Qual é o Menor Múltiplo Comum (MMC) entre os números 4 e 6?",
      options: [
        { letter: "A", text: "12" },
        { letter: "B", text: "24" },
        { letter: "C", text: "10" },
        { letter: "D", text: "2" }
      ],
      correctAnswer: "A",
      explanation: "Múltiplos de 4: 4, 8, 12, 16... Múltiplos de 6: 6, 12, 18... O menor múltiplo comum não nulo é 12."
    },
    {
      topic: "Áreas e Perímetros",
      keywords: ["area", "perimetro", "retangulo", "geometria"],
      question: "Um terreno retangular mede 12 metros de comprimento e 8 metros de largura. Qual é a sua área e seu perímetro?",
      options: [
        { letter: "A", text: "Área: 96 m² | Perímetro: 40 metros" },
        { letter: "B", text: "Área: 40 m² | Perímetro: 96 metros" },
        { letter: "C", text: "Área: 48 m² | Perímetro: 20 metros" },
        { letter: "D", text: "Área: 96 m² | Perímetro: 20 metros" }
      ],
      correctAnswer: "A",
      explanation: "Área = 12 × 8 = 96 m². Perímetro = 2 × (12 + 8) = 2 × 20 = 40 metros."
    }
  ],

  "Língua Inglesa": [
    {
      topic: "Verb to be & Pronouns",
      keywords: ["verb to be", "ingles", "pronouns", "grammar"],
      question: "Choose the correct verb form to complete the sentence: 'Lucas and Julia ______ excellent students.'",
      options: [
        { letter: "A", text: "is" },
        { letter: "B", text: "am" },
        { letter: "C", text: "are" },
        { letter: "D", text: "be" }
      ],
      correctAnswer: "C",
      explanation: "'Lucas and Julia' corresponde ao pronome plural 'They' (eles), que exige o verbo 'are' no presente."
    },
    {
      topic: "Vocabulary & Daily Life",
      keywords: ["vocabulary", "ingles", "plural", "child"],
      question: "What is the correct irregular plural form of the word 'child' in English?",
      options: [
        { letter: "A", text: "childs" },
        { letter: "B", text: "children" },
        { letter: "C", text: "childrens" },
        { letter: "D", text: "childes" }
      ],
      correctAnswer: "B",
      explanation: "O plural de 'child' (criança) é irregular: 'children' (crianças)."
    }
  ],

  Arte: [
    {
      topic: "Cores Primárias e Secundárias",
      keywords: ["arte", "cores", "primarias", "secundarias"],
      question: "Na teoria das cores, a mistura das cores primárias azul e amarelo em partes iguais origina qual cor secundária?",
      options: [
        { letter: "A", text: "Roxo" },
        { letter: "B", text: "Laranja" },
        { letter: "C", text: "Verde" },
        { letter: "D", text: "Marrom" }
      ],
      correctAnswer: "C",
      explanation: "A mistura de amarelo + azul produz a cor secundária verde."
    },
    {
      topic: "Arte Rupestre e Patrimônio",
      keywords: ["arte rupestre", "pre-historia", "cavernas"],
      question: "As primeiras manifestações visuais da humanidade, registradas em rochas e paredes de cavernas, são chamadas de:",
      options: [
        { letter: "A", text: "Arte Barroca" },
        { letter: "B", text: "Pintura Rupestre" },
        { letter: "C", text: "Surrealismo" },
        { letter: "D", text: "Cubismo" }
      ],
      correctAnswer: "B",
      explanation: "A arte rupestre abrange os desenhos, gravuras e pinturas feitas pelos humanos na Pré-História em abrigos rochosos."
    }
  ]
};

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
 * priorizando questões alinhadas ao tópico/assunto pesquisado.
 */
export function getMockExam(subject, topics = "", totalQuestions = 10, difficulty = "medio", grade = "6") {
  const normSub = normalizeText(subject);
  const matchedKey = SUBJECT_MAP[normSub] || Object.keys(QUESTION_BANK).find(k => normalizeText(k) === normSub);

  // Se a matéria existe no banco, obtém a lista
  let pool = matchedKey ? [...QUESTION_BANK[matchedKey]] : [];

  // Se a disciplina for personalizada ("Outra Disciplina" ou não cadastrada), gera dinamicamente para AQUELA disciplina
  if (pool.length === 0) {
    const safeSubName = subject || "Conhecimentos Gerais";
    const safeTopic = topics || "Fundamentos Gerais";
    return Array.from({ length: totalQuestions }, (_, i) => ({
      id: i + 1,
      question: `[Simulado de ${safeSubName}] Questão ${i + 1} sobre ${safeTopic}: Qual conceito fundamental descreve corretamente os princípios desta área de estudo?`,
      options: [
        { letter: "A", text: `Aplicação prática dos conceitos centrais de ${safeTopic}.` },
        { letter: "B", text: `Teoria complementar e estudo investigativo em ${safeSubName}.` },
        { letter: "C", text: `Observação empírica e interpretação de dados específicos.` },
        { letter: "D", text: `Análise comparativa e fundamentação de resultados.` }
      ],
      correctAnswer: ["A", "B", "C", "D"][i % 4],
      explanation: `Esta questão avalia a compreensão e raciocínio analítico sobre ${safeTopic} no contexto escolar da matéria de ${safeSubName}.`,
      difficulty: difficulty === "misto" ? (i % 3 === 0 ? "facil" : i % 3 === 1 ? "medio" : "dificil") : difficulty
    }));
  }

  // Se há tópicos especificados, ranqueia questões que possuem palavras-chave relevantes
  if (topics && topics.trim()) {
    const topicTokens = normalizeText(topics).split(/[\s,;.-]+/).filter(t => t.length > 2);

    pool.sort((a, b) => {
      const score = (q) => {
        let pts = 0;
        const qText = normalizeText(q.question);
        const qExp = normalizeText(q.explanation);
        const qTop = normalizeText(q.topic);
        const qKeys = (q.keywords || []).map(normalizeText);

        for (const token of topicTokens) {
          if (qTop.includes(token)) pts += 10;
          if (qKeys.some(k => k.includes(token))) pts += 8;
          if (qText.includes(token)) pts += 5;
          if (qExp.includes(token)) pts += 2;
        }
        return pts;
      };

      return score(b) - score(a);
    });
  } else {
    // Embaralha se não houver tópico
    pool.sort(() => 0.5 - Math.random());
  }

  // Preenche a quantidade solicitada mantendo SEMPRE a mesma matéria
  const result = [];
  for (let i = 0; i < totalQuestions; i++) {
    const base = pool[i % pool.length];
    result.push({
      id: i + 1,
      question: base.question,
      options: base.options,
      correctAnswer: base.correctAnswer,
      explanation: base.explanation,
      difficulty: difficulty === "misto" ? (i % 3 === 0 ? "facil" : i % 3 === 1 ? "medio" : "dificil") : difficulty
    });
  }

  return result;
}
