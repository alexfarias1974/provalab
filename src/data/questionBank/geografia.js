// Banco de questões de Geografia - 6º, 7º e 8º ano (BNCC)
export const geografiaQuestions = [
  // --- TÓPICO: Paisagem, Espaço e Lugar ---
  {
    grade: "6",
    topic: "Paisagem, Espaço e Lugar",
    keywords: ["paisagem", "espaco", "lugar", "cultural", "natural", "modificada", "humanizada", "sociedade"],
    difficulty: "facil",
    question: "Na Geografia, qual é a principal diferença entre uma paisagem natural e uma paisagem cultural (ou humanizada)?",
    options: [
      { letter: "A", text: "A paisagem natural preserva os elementos da natureza sem intervenção humana significativa, enquanto a cultural foi transformada pelas atividades humanas." },
      { letter: "B", text: "A paisagem natural foi totalmente construída pela engenharia humana, enquanto a cultural só existe nas florestas virgens." },
      { letter: "C", text: "A paisagem natural só existe no oceano profundo e a paisagem cultural só existe nas grandes capitais." },
      { letter: "D", text: "Não existe qualquer distinção, ambos são termos idênticos para designar relevo montanhoso." }
    ],
    correctAnswer: "A",
    explanation: "A paisagem natural é composta por elementos da dinâmica da natureza (rios, vegetação nativa, formas de relevo), enquanto a cultural apresenta pontes, lavouras, edificações e estradas erguidas pelas sociedades humanas."
  },
  {
    grade: "6",
    topic: "Paisagem, Espaço e Lugar",
    keywords: ["lugar", "afetivo", "pertencimento", "espaco", "cotidiano", "vivencia"],
    difficulty: "medio",
    question: "Para os geógrafos, a categoria de análise espacial denominada 'Lugar' é definida fundamentalmente como:",
    options: [
      { letter: "A", text: "O espaço de vivência imediata onde as pessoas constroem laços de afetividade, identidade e sentimentos de pertencimento." },
      { letter: "B", text: "Qualquer ponto geométrico de coordenadas no globo desprovido de presença humana." },
      { letter: "C", text: "Uma área delimitada exclusivamente por tropas armadas e fronteiras bélicas internacionais." },
      { letter: "D", text: "Um pedaço de terra comprado exclusivamente por empresas multinacionais." }
    ],
    correctAnswer: "A",
    explanation: "O conceito de 'Lugar' carrega forte carga subjetiva e emocional: é a nossa casa, nossa rua, nosso bairro ou nossa escola, onde interagimos com o mundo e criamos memórias."
  },
  {
    grade: "6",
    topic: "Paisagem, Espaço e Lugar",
    keywords: ["territorio", "fronteira", "poder", "estado", "dominio"],
    difficulty: "medio",
    question: "O conceito geográfico de 'Território' está diretamente associado às relações de:",
    options: [
      { letter: "A", text: "Poder, soberania, controle e domínio exercido por um indivíduo, grupo ou Estado sobre um espaço delimitado." },
      { letter: "B", text: "Apenas ao tipo de solo arenoso ou argiloso existente em uma praia." },
      { letter: "C", text: "À quantidade de chuva medida por pluviômetros anualmente." },
      { letter: "D", text: "À temperatura do manto superior da Terra." }
    ],
    correctAnswer: "A",
    explanation: "O território é um espaço apropriado e delimitado sobre o qual se exercem relações de poder e autoridade política (ex: o território nacional brasileiro)."
  },

  // --- TÓPICO: Orientação, Bússola e Coordenadas Geográficas ---
  {
    grade: "6",
    topic: "Orientação e Cartografia",
    keywords: ["rosa", "ventos", "pontos", "cardeais", "norte", "sul", "leste", "oeste"],
    difficulty: "facil",
    question: "Ao nos posicionarmos com o braço direito estendido apontando para a direção onde o Sol nasce pela manhã (nascente), estamos indicando o ponto cardeal:",
    options: [
      { letter: "A", text: "Leste (Oriente)." },
      { letter: "B", text: "Oeste (Ocidente)." },
      { letter: "C", text: "Norte (Setentrional)." },
      { letter: "D", text: "Sul (Meridional)." }
    ],
    correctAnswer: "A",
    explanation: "O Sol surge aparentemente no horizonte a Leste (nascente) e põe-se a Oeste (poente). Apontando o braço direito para o Leste, sua frente apontará para o Norte e suas costas para o Sul."
  },
  {
    grade: "6",
    topic: "Orientação e Cartografia",
    keywords: ["coordenadas", "geograficas", "latitude", "equador", "paralelos"],
    difficulty: "medio",
    question: "A latitude é a distância em graus medida a partir de qual linha imaginária de referência do planeta Terra?",
    options: [
      { letter: "A", text: "Linha do Equador (0° de latitude), variando de 0° a 90° para o Norte ou para o Sul." },
      { letter: "B", text: "Meridiano de Greenwich (0° de longitude), variando até 180°." },
      { letter: "C", text: "Trópico de Capricórnio fixo no polo sul." },
      { letter: "D", text: "Círculo Polar Ártico exclusivo da Europa." }
    ],
    correctAnswer: "A",
    explanation: "A Linha do Equador é o paralelo principal (0°). A latitude mede o afastamento em relação a ela, indo de 0° no Equador até 90°N no Polo Norte e 90°S no Polo Sul."
  },
  {
    grade: "6",
    topic: "Orientação e Cartografia",
    keywords: ["longitude", "greenwich", "meridiano", "leste", "oeste", "fusos"],
    difficulty: "medio",
    question: "A longitude é a medida em graus de qualquer ponto da superfície terrestre em relação ao:",
    options: [
      { letter: "A", text: "Meridiano de Greenwich (0°), variando de 0° a 180° a Leste ou a Oeste." },
      { letter: "B", text: "Paralelo do Equador (0°), variando apenas verticalmente." },
      { letter: "C", text: "Trópico de Câncer." },
      { letter: "D", text: "Fundo da Fossa das Marianas." }
    ],
    correctAnswer: "A",
    explanation: "O Meridiano de Greenwich é o marco zero de longitude, dividindo o planeta nos hemisférios Ocidental (Oeste) e Oriental (Leste)."
  },
  {
    grade: "6",
    topic: "Orientação e Cartografia",
    keywords: ["escala", "cartografica", "mapa", "reducao", "medida"],
    difficulty: "dificil",
    question: "Em um mapa escolar com escala numérica 1:500.000, o que significa essa proporção matemática?",
    options: [
      { letter: "A", text: "Cada 1 centímetro desenhado no mapa representa 500.000 centímetros (ou 5 quilômetros) no terreno real." },
      { letter: "B", text: "O mapa foi aumentado 500.000 vezes em relação ao mundo real." },
      { letter: "C", text: "A distância do mapa só é válida para viagens espaciais de foguete." },
      { letter: "D", text: "Existem 500.000 cidades representadas naquele desenho." }
    ],
    correctAnswer: "A",
    explanation: "A escala cartográfica indica quantas vezes a superfície real foi reduzida para caber na folha. 500.000 cm = 5.000 m = 5 km."
  },

  // --- TÓPICO: Placas Tectônicas e Relevo ---
  {
    grade: "6",
    topic: "Relevo e Dinâmica da Terra",
    keywords: ["placas", "tectonicas", "terremotos", "tsunamis", "vulcoes", "litosfera"],
    difficulty: "facil",
    question: "A litosfera da Terra não é uma camada contínua inteiriça, mas sim dividida em grandes blocos semirrígidos que flutuam sobre o manto pastoso chamados:",
    options: [
      { letter: "A", text: "Placas tectônicas." },
      { letter: "B", text: "Crateras lunares." },
      { letter: "C", text: "Bacias oceânicas frias." },
      { letter: "D", text: "Sedimentos estratificados." }
    ],
    correctAnswer: "A",
    explanation: "As placas tectônicas movimentam-se lentamente impulsionadas pelas correntes de convecção do manto, gerando terremotos, vulcanismo e a formação de cadeias de montanhas nas suas bordas de contato."
  },
  {
    grade: "6",
    topic: "Relevo e Dinâmica da Terra",
    keywords: ["brasil", "ausencia", "terremotos", "montanhas", "placa", "sul-americana"],
    difficulty: "medio",
    question: "O Brasil raramente registra terremotos de grande magnitude e não possui vulcões ativos. O principal motivo geológico para essa estabilidade é que o território brasileiro está situado:",
    options: [
      { letter: "A", text: "No centro estável da Placa Tectônica Sul-Americana, longe das áreas de atrito nas bordas." },
      { letter: "B", text: "Exatamente sobre a fenda vulcânica da Dorsal Mesoatlântica." },
      { letter: "C", text: "Sobre uma enorme placa oceânica de gelo fóssil impermeável." },
      { letter: "D", text: "Acima de uma zona de subducção ativa permanente." }
    ],
    correctAnswer: "A",
    explanation: "Os grandes abalos sísmicos e erupções vulcânicas ocorrem nos limites de encontro de placas (como nos Andes e no Círculo de Fogo do Pacífico). O Brasil está assentado no centro da placa, usufruindo de grande estabilidade geológica."
  },
  {
    grade: "6",
    topic: "Relevo e Dinâmica da Terra",
    keywords: ["macroformas", "relevo", "planaltos", "planicies", "depressoes", "montanhas"],
    difficulty: "facil",
    question: "As quatro macroformas clássicas de relevo continental estudadas na Geografia física são:",
    options: [
      { letter: "A", text: "Planaltos, planícies, depressões e montanhas." },
      { letter: "B", text: "Praias, falésias, recifes e restingas marinhas." },
      { letter: "C", text: "Geleiras, fiordes, vulcões e desertos arenosos." },
      { letter: "D", text: "Rios, lagos, mares e oceanos." }
    ],
    correctAnswer: "A",
    explanation: "Os planaltos sofrem mais erosão do que sedimentação; as planícies acumulam sedimentos; as depressões são áreas rebaixadas em relação ao relevo circundante; e as montanhas são elevações imponentes originadas por forças tectônicas."
  },
  {
    grade: "6",
    topic: "Relevo e Dinâmica da Terra",
    keywords: ["relevo", "brasileiro", "jurandyr", "ross", "planalto", "depressao"],
    difficulty: "medio",
    question: "Segundo a classificação moderna do geógrafo Jurandyr Ross, o relevo brasileiro é caracterizado por:",
    options: [
      { letter: "A", text: "Predomínio de planaltos e depressões desgastados por longa erosão, e estreitas planícies litorâneas e fluviais, sem dobramentos modernos." },
      { letter: "B", text: "Gigantescas montanhas pontiagudas recém-formadas no período Terciário." },
      { letter: "C", text: "90% de planícies de afundamento tectônico cobertas de geleiras." },
      { letter: "D", text: "Inúmeros vulcões ativos espalhados por todos os estados do Centro-Oeste." }
    ],
    correctAnswer: "A",
    explanation: "A geologia brasileira é antiquíssima (escudos cristalinos e bacias sedimentares). A ausência de dobramentos recentes e a ação milenar dos ventos e chuvas resultaram em formas aplainadas e colinas suaves."
  },

  // --- TÓPICO: Hidrografia Brasileira ---
  {
    grade: "6",
    topic: "Hidrografia do Brasil",
    keywords: ["bacia", "amazonica", "maior", "mundo", "volume", "vazao"],
    difficulty: "facil",
    question: "A maior bacia hidrográfica do mundo, tanto em extensão territorial quanto em volume de vazão de água doce descarregada no oceano, é a:",
    options: [
      { letter: "A", text: "Bacia Hidrográfica Amazônica." },
      { letter: "B", text: "Bacia do Rio Nilo no Egito." },
      { letter: "C", text: "Bacia do Rio São Francisco." },
      { letter: "D", text: "Bacia do Rio Mississipi nos Estados Unidos." }
    ],
    correctAnswer: "A",
    explanation: "A Bacia Amazônica drena cerca de 7 milhões de km² na América do Sul e o Rio Amazonas descarrega aproximadamente um quinto de toda a água doce que chega aos oceanos do planeta."
  },
  {
    grade: "6",
    topic: "Hidrografia do Brasil",
    keywords: ["rio", "sao", "francisco", "velho", "chico", "integracao", "nacional"],
    difficulty: "medio",
    question: "O Rio São Francisco nasce na Serra da Canastra (MG), percorre o sertão semiárido nordestino e deságua no Oceano Atlântico. Historicamente, ele é conhecido popularmente pelo apelido de:",
    options: [
      { letter: "A", text: "'Rio da Integração Nacional' (ou 'Velho Chico')." },
      { letter: "B", text: "'Rio da Prata dos Andes'." },
      { letter: "C", text: "'Canal do Pantanal Profundo'." },
      { letter: "D", text: "'Gigante Gelado do Sul'." }
    ],
    correctAnswer: "A",
    explanation: "O 'Velho Chico' recebeu esse título porque serviu de via de povoamento, transporte e ligação cultural e econômica entre as regiões Sudeste e Nordeste do Brasil."
  },
  {
    grade: "6",
    topic: "Hidrografia do Brasil",
    keywords: ["itaipu", "bacia", "parana", "hidreletrica", "energia"],
    difficulty: "medio",
    question: "A Usina Hidrelétrica Binacional de Itaipu, uma das maiores geradoras de energia limpa do planeta, operada em parceria entre Brasil e Paraguai, está construída sobre o leito do:",
    options: [
      { letter: "A", text: "Rio Paraná." },
      { letter: "B", text: "Rio Amazonas." },
      { letter: "C", text: "Rio Xingu." },
      { letter: "D", text: "Rio Tietê." }
    ],
    correctAnswer: "A",
    explanation: "A Bacia do Rio Paraná possui grande potencial hidráulico devido ao relevo de planalto cortado por quedas d'água expressivas e volume caudaloso perene."
  },

  // --- TÓPICO: Climas e Biomas do Brasil ---
  {
    grade: "7",
    topic: "Climas do Brasil",
    keywords: ["clima", "semiarido", "nordeste", "sertao", "caatinga", "seca"],
    difficulty: "facil",
    question: "O clima que predomina no interior do Sertão Nordestino brasileiro, caracterizado por temperaturas elevadas durante todo o ano, chuvas escassas e secas prolongadas, é o:",
    options: [
      { letter: "A", text: "Clima Semiárido." },
      { letter: "B", text: "Clima Equatorial Úmido." },
      { letter: "C", text: "Clima Polar Antártico." },
      { letter: "D", text: "Clima Subtropical de geada." }
    ],
    correctAnswer: "A",
    explanation: "O clima semiárido apresenta precipitação média anual inferior a 800 mm, distribuída de forma irregular em poucos meses do ano, condicionando a vegetação de Caatinga."
  },
  {
    grade: "7",
    topic: "Climas do Brasil",
    keywords: ["clima", "subtropical", "sul", "geada", "neve", "estações"],
    difficulty: "medio",
    question: "Na Região Sul do Brasil (ao sul do Trópico de Capricórnio), predomina um tipo climático que apresenta as quatro estações bem definidas, invernos frios com geadas ocasionais e chuvas bem distribuídas ao longo do ano todo. Esse clima é o:",
    options: [
      { letter: "A", text: "Clima Subtropical." },
      { letter: "B", text: "Clima Tropical Típico com seca de inverno." },
      { letter: "C", text: "Clima Equatorial Superúmido." },
      { letter: "D", text: "Clima Desértico quente." }
    ],
    correctAnswer: "A",
    explanation: "A zona subtropical brasileira situa-se na faixa temperada média, sofrendo atuação frequente da Massa Polar Atlântica (mPa) no inverno."
  },
  {
    grade: "7",
    topic: "Biomas do Brasil",
    keywords: ["cerrado", "savana", "arvores", "tortuosas", "casca", "grossa", "raizes"],
    difficulty: "medio",
    question: "O Cerrado é considerado a 'savana mais rica em biodiversidade do mundo'. Qual das seguintes opções descreve com precisão as adaptações das plantas do Cerrado à estação seca?",
    options: [
      { letter: "A", text: "Troncos de casca espessa, galhos retorcidos e raízes muito profundas capazes de buscar água nos lençóis freáticos subterrâneos." },
      { letter: "B", text: "Folhas gigantes e tenras que precisam de alagamento ininterrupto para não morrer." },
      { letter: "C", text: "Ausência total de raízes e caules, reproduzindo-se apenas no gelo." },
      { letter: "D", text: "Pinheiros de folhas em formato de agulha que não suportam calor superior a 15°C." }
    ],
    correctAnswer: "A",
    explanation: "As plantas do Cerrado são adaptadas ao fogo natural periódico e aos meses de estiagem: a casca grossa protege o tecido vivo e as raízes profundas garantem sobrevivência mesmo quando a superfície do solo seca."
  },
  {
    grade: "7",
    topic: "Biomas do Brasil",
    keywords: ["pantanal", "maior", "planicie", "alagavel", "cheias"],
    difficulty: "facil",
    question: "O bioma brasileiro localizado nos estados de Mato Grosso e Mato Grosso do Sul, reconhecido como a maior planície de inundação contínua de água doce do planeta, é o:",
    options: [
      { letter: "A", text: "Pantanal." },
      { letter: "B", text: "Pampa gaúcho." },
      { letter: "C", text: "Cerrado central." },
      { letter: "D", text: "Mata dos Cocais." }
    ],
    correctAnswer: "A",
    explanation: "O Pantanal possui relevo plano cercado de planaltos; na estação chuvosa de verão, os rios da Bacia do Paraguai transbordam, inundando vastas áreas e criando um ecossistema aquático exuberante."
  },
  {
    grade: "7",
    topic: "Biomas do Brasil",
    keywords: ["mata", "atlantica", "desmatamento", "litoral", "biodiversidade", "hotspot"],
    difficulty: "medio",
    question: "A Mata Atlântica cobria originalmente quase toda a faixa litorânea do Brasil. Hoje resta menos de 12% da sua cobertura original devido a séculos de ocupação econômica e urbanização. Por abrigar grande biodiversidade ameaçada, ela é classificada como um:",
    options: [
      { letter: "A", text: "Hotspot mundial de biodiversidade." },
      { letter: "B", text: "Deserto rochoso infértil." },
      { letter: "C", text: "Área estéril para reflorestamento." },
      { letter: "D", text: "Território de tundra ártica desabitada." }
    ],
    correctAnswer: "A",
    explanation: "Hotspots são áreas com altíssima riqueza biológica e número expressivo de espécies endêmicas (que só existem ali) que perderam mais de 70% de sua vegetação original."
  },

  // --- TÓPICO: População, Urbanização e Regiões do Brasil ---
  {
    grade: "7",
    topic: "População e Demografia",
    keywords: ["migracao", "exodo", "rural", "campo", "cidade", "industria"],
    difficulty: "facil",
    question: "O intenso movimento migratório ocorrido no Brasil, principalmente entre 1950 e 1980, no qual milhões de trabalhadores deixaram o campo em direção às grandes cidades em busca de empregos fabris e melhores condições de vida, é denominado:",
    options: [
      { letter: "A", text: "Êxodo rural." },
      { letter: "B", text: "Migração pendular diária." },
      { letter: "C", text: "Transumância sazonal." },
      { letter: "D", text: "Emigração internacional forçada." }
    ],
    correctAnswer: "A",
    explanation: "A mecanização do campo combinada com o processo de industrialização nas cidades do Sudeste impulsionou o êxodo rural, transformando o Brasil em um país predominantemente urbano."
  },
  {
    grade: "7",
    topic: "Urbanização e Metrópoles",
    keywords: ["conurbacao", "cidades", "mancha", "urbana", "metropole"],
    difficulty: "medio",
    question: "Quando duas ou mais cidades vizinhas crescem geograficamente a ponto de unirem seus tecidos urbanos, formando uma única malha urbana contínua onde muitas vezes é difícil perceber a divisão física entre elas, ocorre o fenômeno da:",
    options: [
      { letter: "A", text: "Conurbação." },
      { letter: "B", text: "Desertificação antrópica." },
      { letter: "C", text: "Gentrificação rural." },
      { letter: "D", text: "Segregação climática." }
    ],
    correctAnswer: "A",
    explanation: "A conurbação é frequente nas regiões metropolitanas (ex: São Paulo unida aos municípios do Grande ABC e Guarulhos), gerando a necessidade de transporte e saneamento integrados."
  },
  {
    grade: "7",
    topic: "Regiões do Brasil",
    keywords: ["regioes", "ibge", "cinco", "macrorregioes", "divisao"],
    difficulty: "facil",
    question: "O Instituto Brasileiro de Geografia e Estatística (IBGE) divide oficialmente o território brasileiro em cinco macrorregiões geográficas administrativas. São elas:",
    options: [
      { letter: "A", text: "Norte, Nordeste, Centro-Oeste, Sudeste e Sul." },
      { letter: "B", text: "Amazônia, Caatinga, Sertão, Litoral e Pampas." },
      { letter: "C", text: "Zona Franca, Agronegócio, Polo Industrial e Mercosul." },
      { letter: "D", text: "Setentrional, Ocidental, Central e Meridional apenas." }
    ],
    correctAnswer: "A",
    explanation: "A divisão regional do IBGE agrupa os 26 estados mais o Distrito Federal com base em semelhanças fisiográficas, econômicas e demográficas."
  },
  {
    grade: "7",
    topic: "Regiões do Brasil",
    keywords: ["sudeste", "economia", "pib", "industria", "polo"],
    difficulty: "facil",
    question: "A macrorregião brasileira que concentra a maior população absoluta, o maior parque industrial e a maior participação percentual na geração do Produto Interno Bruto (PIB) do país é a:",
    options: [
      { letter: "A", text: "Região Sudeste (SP, RJ, MG e ES)." },
      { letter: "B", text: "Região Norte." },
      { letter: "C", text: "Região Centro-Oeste." },
      { letter: "D", text: "Região Nordeste." }
    ],
    correctAnswer: "A",
    explanation: "Impulsionado pela herança econômica do café, pela malha ferroviária e pela concentração de capitais, o Sudeste consolidou-se como o polo econômico e financeiro líder do Brasil."
  },
  {
    grade: "7",
    topic: "Regiões do Brasil",
    keywords: ["centro-oeste", "agronegocio", "soja", "pecuaria", "brasilia"],
    difficulty: "medio",
    question: "A Região Centro-Oeste teve sua ocupação e crescimento econômico fortemente acelerados a partir da década de 1960 devido a dois grandes marcos históricos:",
    options: [
      { letter: "A", text: "A construção e transferência da capital federal para Brasília e a expansão do agronegócio moderno (soja, milho e pecuária bovina)." },
      { letter: "B", text: "A descoberta de jazidas de petróleo em alto-mar no Pantanal." },
      { letter: "C", text: "A instalação de montadoras de navios transatlânticos de guerra." },
      { letter: "D", text: "O fechamento de todas as fronteiras terrestres com a Bolívia." }
    ],
    correctAnswer: "A",
    explanation: "A inauguração de Brasília em 1960 e a correção da acidez do solo do Cerrado através do calcário permitiram uma explosão da fronteira agrícola e urbana no Centro-Oeste."
  },

  // --- TÓPICO: América Latina e Geopolítica (8º ano) ---
  {
    grade: "8",
    topic: "América Latina e Geopolítica",
    keywords: ["america", "latina", "colonizacao", "espanha", "portugal", "idiomas"],
    difficulty: "facil",
    question: "A divisão do continente americano pelo critério histórico-cultural divide a América em 'América Anglo-Saxônica' e 'América Latina'. Os países latino-americanos têm como característica comum terem sido colonizados principalmente por:",
    options: [
      { letter: "A", text: "Povos de línguas neolatinas (Portugal e Espanha, além da França)." },
      { letter: "B", text: "Povos germânicos e anglo-saxões exclusivamente da Inglaterra e Alemanha." },
      { letter: "C", text: "Impérios do leste asiático como Japão e Coreia." },
      { letter: "D", text: "Sociedades nômades que nunca fundaram cidades." }
    ],
    correctAnswer: "A",
    explanation: "A América Latina engloba as nações do México à ponta sul da América do Sul colonizadas prioritariamente pelas potências ibéricas que impuseram línguas originadas do latim (português e espanhol)."
  },
  {
    grade: "8",
    topic: "América Latina e Geopolítica",
    keywords: ["cordilheira", "andes", "relevo", "dobramento", "moderno", "placas"],
    difficulty: "medio",
    question: "A Cordilheira dos Andes estende-se por mais de 7.000 km na porção ocidental da América do Sul. Essa imponente cadeia montanhosa foi formada por:",
    options: [
      { letter: "A", text: "O choque convergente entre a Placa Tectônica de Nazca e a Placa Sul-Americana (dobramento moderno)." },
      { letter: "B", text: "A quebra e afastamento estático da placa Africana no meio do Atlântico." },
      { letter: "C", text: "A queda ininterrupta de cometas gelados na era Cenozóica." },
      { letter: "D", text: "A escavação milenar promovida pelas chuvas tropicais nos desertos." }
    ],
    correctAnswer: "A",
    explanation: "A subducção da densa placa oceânica de Nazca sob a placa continental Sul-Americana enrugou a borda continental, erguendo picos nevados com altitudes superiores a 6.000 metros."
  },
  {
    grade: "8",
    topic: "América Latina e Geopolítica",
    keywords: ["mercosul", "bloco", "economico", "brasil", "argentina", "comercio"],
    difficulty: "medio",
    question: "O Mercado Comum do Sul (Mercosul), criado oficialmente pelo Tratado de Assunção em 1991, teve como membros fundadores plenos:",
    options: [
      { letter: "A", text: "Brasil, Argentina, Uruguai e Paraguai." },
      { letter: "B", text: "Estados Unidos, Canadá e México." },
      { letter: "C", text: "Chile, Colômbia, Venezuela e Cuba." },
      { letter: "D", text: "Brasil, França, Inglaterra e Alemanha." }
    ],
    correctAnswer: "A",
    explanation: "O Mercosul foi instituído para promover a integração econômica, a livre circulação de bens e serviços e uma Tarifa Externa Comum (TEC) entre os quatro países fundadores do Cone Sul."
  },
  // --- NOVAS QUESTÕES DE GEOGRAFIA ---
  {
    grade: "6",
    topic: "Fusos Horários",
    keywords: ["fusos", "horarios", "greenwich", "rotacao", "horas", "brasil"],
    difficulty: "medio",
    question: "A Terra possui 360° de circunferência e realiza uma rotação completa em 24 horas. Portanto, cada fuso horário corresponde a uma faixa longitudinal de:",
    options: [
      { letter: "A", text: "15° de longitude, correspondendo à variação de 1 hora." },
      { letter: "B", text: "30° de longitude, correspondendo a 2 horas." },
      { letter: "C", text: "45° de latitude sul." },
      { letter: "D", text: "10° de altitude montanhosa." }
    ],
    correctAnswer: "A",
    explanation: "Dividindo 360° por 24 horas, obtém-se 15° para cada fuso de 1 hora. Como a Terra gira de Oeste para Leste, as horas aumentam para o Leste e diminuem para o Oeste."
  },
  {
    grade: "6",
    topic: "Fusos Horários",
    keywords: ["fusos", "brasil", "brasilia", "acre", "noronha", "oficial"],
    difficulty: "medio",
    question: "Devido à sua enorme extensão territorial de Leste a Oeste, o Brasil possui oficialmente quantos fusos horários?",
    options: [
      { letter: "A", text: "4 fusos horários (sendo o horário oficial de Brasília situado no fuso -3h em relação a Greenwich)." },
      { letter: "B", text: "Apenas 1 único fuso unificado." },
      { letter: "C", text: "8 fusos horários distintos." },
      { letter: "D", text: "12 fusos contínuos." }
    ],
    correctAnswer: "A",
    explanation: "O Brasil tem 4 fusos: ilhas oceânicas (UTC-2), fuso de Brasília/maior parte do país (UTC-3), parte do Centro-Oeste e Amazonas (UTC-4) e Acre/oeste do Amazonas (UTC-5)."
  },
  {
    grade: "6",
    topic: "Agentes do Relevo e Solos",
    keywords: ["intemperismo", "erosao", "quimico", "fisico", "rochas"],
    difficulty: "medio",
    question: "O processo natural de desagregação mecânica (física) e decomposição química das rochas ao longo do tempo pela ação da chuva, temperatura, vento e seres vivos é denominado:",
    options: [
      { letter: "A", text: "Intemperismo." },
      { letter: "B", text: "Tectonismo magmático." },
      { letter: "C", text: "Metamorfismo nuclear." },
      { letter: "D", text: "Isostasia vulcânica." }
    ],
    correctAnswer: "A",
    explanation: "O intemperismo quebra e altera os minerais das rochas, gerando os fragmentos sedimentares que constituirão os horizontes do solo fértil."
  },
  {
    grade: "6",
    topic: "Agentes do Relevo e Solos",
    keywords: ["erosao", "vocoroca", "chuva", "curvas", "nivel", "solo"],
    difficulty: "medio",
    question: "Em encostas e terrenos inclinados, o desmatamento facilita a formação de grandes fendas e buracos gigantes causados pela força das enxurradas, conhecidos como voçorocas. Uma técnica agrícola eficiente para conter essa erosão é:",
    options: [
      { letter: "A", text: "O plantio em curvas de nível e terraceamento." },
      { letter: "B", text: "A queima completa da vegetação nativa rasteira." },
      { letter: "C", text: "A irrigação por inundação de água salgada." },
      { letter: "D", text: "A remoção de todas as raízes profundas das árvores." }
    ],
    correctAnswer: "A",
    explanation: "As curvas de nível acompanham as linhas de mesma altitude da encosta, desacelerando a velocidade de descida da água da chuva e permitindo que ela infiltre no solo sem arrancar a terra."
  },
  {
    grade: "6",
    topic: "Camadas da Atmosfera",
    keywords: ["troposfera", "estratosfera", "camadas", "ar", "fenomenos"],
    difficulty: "facil",
    question: "A camada mais baixa da atmosfera terrestre, onde vivemos e onde ocorrem praticamente todos os fenômenos meteorológicos como nuvens, chuvas, ventos e tempestades, é a:",
    options: [
      { letter: "A", text: "Troposfera." },
      { letter: "B", text: "Termosfera." },
      { letter: "C", text: "Mesosfera." },
      { letter: "D", text: "Exosfera." }
    ],
    correctAnswer: "A",
    explanation: "A troposfera concentra cerca de 75% da massa de ar da atmosfera e praticamente todo o vapor de água do planeta."
  },
  {
    grade: "7",
    topic: "Biomas do Brasil",
    keywords: ["caatinga", "xerofitas", "mandacaru", "adaptacao", "espinhas"],
    difficulty: "facil",
    question: "A vegetação da Caatinga no Sertão Nordestino é formada por plantas xerófitas, como o cacto mandacaru. Essas plantas apresentam como adaptação à escassez hídrica:",
    options: [
      { letter: "A", text: "Folhas transformadas em espinhos (para evitar perda de água por transpiração) e caules suculentos que armazenam água." },
      { letter: "B", text: "Folhas largas e finas que liberam litros de orvalho toda manhã." },
      { letter: "C", text: "Ausência total de caules e frutos comestíveis." },
      { letter: "D", text: "Florescimento contínuo apenas no meio de geleiras." }
    ],
    correctAnswer: "A",
    explanation: "Ao substituir folhas por espinhos, as cactáceas minimizam a área de evapotranspiração e acumulam mucilagem líquida no caule para resistir aos meses secos."
  },
  {
    grade: "7",
    topic: "Biomas do Brasil",
    keywords: ["araucarias", "mata", "pinha", "sul", "parana"],
    difficulty: "facil",
    question: "A Mata de Araucárias (ou Mata dos Pinhais) é uma formação florestal típica das áreas de planalto da Região Sul do Brasil, caracterizada pela presença marcante da árvore:",
    options: [
      { letter: "A", text: "Pinheiro-do-paraná (Araucaria angustifolia), produtor do pinhão." },
      { letter: "B", text: "Seringueira produtora de borracha amazônica." },
      { letter: "C", text: "Cacaueiro tropical do litoral baiano." },
      { letter: "D", text: "Palmeira de açaí dos manguezais." }
    ],
    correctAnswer: "A",
    explanation: "A araucária é adaptada ao clima subtropical frio e úmido com geadas, possuindo copa em formato de taça e produzindo pinhões ricos em nutrientes."
  },
  {
    grade: "7",
    topic: "Domínios Morfoclimáticos",
    keywords: ["dominios", "morfoclimaticos", "aziz", "absaber", "mares", "morros"],
    difficulty: "medio",
    question: "O célebre geógrafo brasileiro Aziz Ab'Sáber classificou o relevo suavemente ondulado da faixa litorânea do Sudeste (conhecido como 'meias-laranjas') como o domínio dos:",
    options: [
      { letter: "A", text: "Mares de Morros." },
      { letter: "B", text: "Chapadões do Pantanal." },
      { letter: "C", text: "Tabuleiros Costeiros Amazônicos." },
      { letter: "D", text: "Campos Limpos do Pampa." }
    ],
    correctAnswer: "A",
    explanation: "O domínio dos Mares de Morros acompanha a Serra do Mar e a Serra da Mantiqueira, com colinas arredondadas desgastadas por séculos de chuvas tropicais constantes."
  },
  {
    grade: "7",
    topic: "Hidrografia do Brasil",
    keywords: ["tocantins", "araguaia", "bananal", "ilha", "tucurui"],
    difficulty: "medio",
    question: "A Bacia Hidrográfica do Tocantins-Araguaia destaca-se por abrigar a Ilha do Bananal (maior ilha fluvial do mundo) e a Usina Hidrelétrica de Tucuruí. Essa bacia tem como particularidade:",
    options: [
      { letter: "A", text: "Ser a maior bacia hidrográfica localizada inteiramente dentro do território brasileiro." },
      { letter: "B", text: "Desaguar diretamente no Oceano Pacífico através dos Andes." },
      { letter: "C", text: "Estar congelada durante metade do ano civil." },
      { letter: "D", text: "Não possuir nenhum afluente ou peixe nativo." }
    ],
    correctAnswer: "A",
    explanation: "Diferente das bacias Amazônica e Platina (que são transnacionais e compartilham águas com outros países), a bacia do Tocantins-Araguaia é 100% brasileira."
  },
  {
    grade: "7",
    topic: "Regiões do Brasil: Nordeste",
    keywords: ["sub-regioes", "nordeste", "zona", "mata", "agreste", "sertao", "meio-norte"],
    difficulty: "medio",
    question: "O Nordeste brasileiro é comumente dividido em quatro sub-regiões geográficas com características naturais e humanas distintas. A faixa litorânea mais úmida e urbanizada é a:",
    options: [
      { letter: "A", text: "Zona da Mata." },
      { letter: "B", text: "Sertão." },
      { letter: "C", text: "Agreste." },
      { letter: "D", text: "Meio-Norte." }
    ],
    correctAnswer: "A",
    explanation: "A Zona da Mata compreende a faixa litorânea oriental onde ficava a Mata Atlântica original, concentrando as principais capitais nordestinas e lavouras de cana-de-açúcar."
  },
  {
    grade: "7",
    topic: "Regiões do Brasil: Norte",
    keywords: ["zona", "franca", "manaus", "industria", "eletronicos", "incentivos"],
    difficulty: "facil",
    question: "Criada na década de 1960 para atrair indústrias e dinamizar a economia da Região Norte, a Zona Franca de Manaus (AM) oferece:",
    options: [
      { letter: "A", text: "Isenção e redução de impostos fiscais para montagem de aparelhos eletrônicos, motocicletas e informática." },
      { letter: "B", text: "Empréstimos agrícolas para cultivo exclusivo de trigo no gelo." },
      { letter: "C", text: "Comércio de produtos bélicos nucleares internacionais." },
      { letter: "D", text: "Livre mineração de carvão mineral no leito dos rios." }
    ],
    correctAnswer: "A",
    explanation: "O polo industrial da Zona Franca de Manaus permitiu a geração de empregos qualificados no coração da Amazônia através de incentivos fiscais da Suframa."
  },
  {
    grade: "7",
    topic: "Problemas Urbanos e Ambientais",
    keywords: ["ilha", "calor", "asfalto", "concreto", "temperatura", "cidade"],
    difficulty: "medio",
    question: "Nas grandes metrópoles, o centro urbano densamente edificado, coberto de asfalto e com pouca arborização registra temperaturas médias sensivelmente mais altas do que os bairros periféricos e áreas rurais vizinhas. Esse fenômeno microclimático é a:",
    options: [
      { letter: "A", text: "Ilha de Calor." },
      { letter: "B", text: "Chuva ácida estática." },
      { letter: "C", text: "Eutrofização térmica." },
      { letter: "D", text: "Corrente de El Niño costeira." }
    ],
    correctAnswer: "A",
    explanation: "O concreto e o asfalto absorvem calor solar durante o dia e o reemitem à noite, formando uma 'ilha' térmica central com até 5°C a 10°C a mais que as áreas verdes periféricas."
  },
  {
    grade: "7",
    topic: "Problemas Urbanos e Ambientais",
    keywords: ["inversao", "termica", "inverno", "ar", "frio", "poluicao"],
    difficulty: "medio",
    question: "Nas manhãs frias de inverno em cidades poluídas como São Paulo, uma camada de ar frio fica retida próxima ao solo sob uma camada de ar quente, impedindo a dispersão da fumaça dos escapamentos. Esse fenômeno atmosférico é a:",
    options: [
      { letter: "A", text: "Inversão Térmica." },
      { letter: "B", text: "Geada negra marítima." },
      { letter: "C", text: "Ciclone extratropical seco." },
      { letter: "D", text: "Maré vermelha tóxica." }
    ],
    correctAnswer: "A",
    explanation: "Na inversão térmica, a circulação vertical do ar fica bloqueada, retendo poluentes tóxicos junto ao solo e aumentando problemas respiratórios na população."
  },
  {
    grade: "7",
    topic: "População e Demografia",
    keywords: ["piramide", "etaria", "envelhecimento", "natalidade", "expectativa"],
    difficulty: "medio",
    question: "Nas últimas décadas, a pirâmide etária da população brasileira vem sofrendo uma mudança marcante com o estreitamento da sua base e o alargamento do topo. Isso indica que no Brasil:",
    options: [
      { letter: "A", text: "Houve queda significativa na taxa de natalidade (menos nascimentos) e aumento na expectativa de vida (envelhecimento da população)." },
      { letter: "B", text: "Todas as pessoas com mais de 50 anos deixaram de trabalhar para sempre." },
      { letter: "C", text: "O número de crianças com menos de 5 anos triplicou em relação aos adultos." },
      { letter: "D", text: "A população total do país diminuiu em 80% nos últimos dez anos." }
    ],
    correctAnswer: "A",
    explanation: "Com a urbanização e o planejamento familiar, as famílias têm menos filhos e a medicina prolongou a longevidade média do brasileiro."
  },
  {
    grade: "8",
    topic: "Geopolítica e América Latina",
    keywords: ["canal", "panama", "ligacao", "atlantico", "pacifico", "comercio"],
    difficulty: "facil",
    question: "O Canal do Panamá é uma via marítima artificial de extrema importância para a economia mundial porque ele:",
    options: [
      { letter: "A", text: "Liga o Oceano Atlântico diretamente ao Oceano Pacífico, encurtando em milhares de quilômetros a rota de navios cargueiros." },
      { letter: "B", text: "Abastece de água doce os desertos do Saara." },
      { letter: "C", text: "Conecta a Europa à Ásia pelo Mar Báltico." },
      { letter: "D", text: "Separa a Groenlândia do Canadá ártico." }
    ],
    correctAnswer: "A",
    explanation: "Inaugurado em 1914 no istmo do Panamá, o canal utiliza eclusas para elevar e descer navios através da cordilheira central, evitando a perigosa circum-navegação pelo Cabo Horn."
  }
];
