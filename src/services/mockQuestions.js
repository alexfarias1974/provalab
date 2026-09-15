// Banco de simulados de alta qualidade para o 6º ano (BNCC) para uso offline / demonstração
export const mockSubjectQuestions = {
  Matemática: [
    {
      question: "Qual é o resultado da soma das frações 1/4 + 2/4?",
      options: [
        { letter: "A", text: "3/8" },
        { letter: "B", text: "3/4" },
        { letter: "C", text: "2/8" },
        { letter: "D", text: "1/2" }
      ],
      correctAnswer: "B",
      explanation: "Na adição de frações com o mesmo denominador, mantemos o denominador (4) e somamos os numeradores: 1 + 2 = 3. Portanto, o resultado é 3/4."
    },
    {
      question: "Um retângulo tem 8 cm de comprimento e 5 cm de largura. Qual é a sua área?",
      options: [
        { letter: "A", text: "26 cm²" },
        { letter: "B", text: "40 cm²" },
        { letter: "C", text: "13 cm²" },
        { letter: "D", text: "45 cm²" }
      ],
      correctAnswer: "B",
      explanation: "A área do retângulo é calculada multiplicando o comprimento pela largura: 8 × 5 = 40 cm²."
    },
    {
      question: "Qual é o Menor Múltiplo Comum (MMC) entre os números 4 e 6?",
      options: [
        { letter: "A", text: "12" },
        { letter: "B", text: "24" },
        { letter: "C", text: "10" },
        { letter: "D", text: "2" }
      ],
      correctAnswer: "A",
      explanation: "Os múltiplos positivos de 4 são 4, 8, 12, 16... e de 6 são 6, 12, 18... O menor múltiplo comum diferente de zero é 12."
    },
    {
      question: "Como se escreve o número decimal 0,75 na forma de fração simplificada?",
      options: [
        { letter: "A", text: "7/5" },
        { letter: "B", text: "75/10" },
        { letter: "C", text: "3/4" },
        { letter: "D", text: "1/4" }
      ],
      correctAnswer: "C",
      explanation: "0,75 equivale a 75/100. Dividindo o numerador e o denominador por 25, obtemos a fração simplificada 3/4."
    },
    {
      question: "Um triângulo que possui todos os três lados com medidas iguais é chamado de:",
      options: [
        { letter: "A", text: "Triângulo Isósceles" },
        { letter: "B", text: "Triângulo Escaleno" },
        { letter: "C", text: "Triângulo Retângulo" },
        { letter: "D", text: "Triângulo Equilátero" }
      ],
      correctAnswer: "D",
      explanation: "O triângulo equilátero tem os três lados com a mesma medida (congruentes) e todos os ângulos internos medindo 60°."
    },
    {
      question: "Qual é o valor da expressão numérica: 15 + 3 × 4 - 2?",
      options: [
        { letter: "A", text: "70" },
        { letter: "B", text: "25" },
        { letter: "C", text: "35" },
        { letter: "D", text: "29" }
      ],
      correctAnswer: "B",
      explanation: "Pela ordem das operações, resolve-se primeiro a multiplicação: 3 × 4 = 12. Depois as adições e subtrações da esquerda para a direita: 15 + 12 = 27; 27 - 2 = 25."
    },
    {
      question: "Qual é o perímetro de um quadrado cujo lado mede 7 metros?",
      options: [
        { letter: "A", text: "49 metros" },
        { letter: "B", text: "28 metros" },
        { letter: "C", text: "14 metros" },
        { letter: "D", text: "21 metros" }
      ],
      correctAnswer: "B",
      explanation: "O perímetro é a soma de todos os lados. Como o quadrado tem 4 lados iguais: 4 × 7 = 28 metros."
    },
    {
      question: "O ângulo reto mede exatamente:",
      options: [
        { letter: "A", text: "45 graus" },
        { letter: "B", text: "180 graus" },
        { letter: "C", text: "90 graus" },
        { letter: "D", text: "360 graus" }
      ],
      correctAnswer: "C",
      explanation: "O ângulo reto mede exatamente 90°, formando uma quina perfeita de esquadro (como a quina de uma folha de papel)."
    },
    {
      question: "Se uma pizza foi dividida em 8 fatias iguais e Pedro comeu 3 fatias, que fração sobrou?",
      options: [
        { letter: "A", text: "3/8" },
        { letter: "B", text: "5/8" },
        { letter: "C", text: "1/8" },
        { letter: "D", text: "5/5" }
      ],
      correctAnswer: "B",
      explanation: "A pizza inteira corresponde a 8/8. Se Pedro comeu 3/8, a fração restante é 8/8 - 3/8 = 5/8."
    },
    {
      question: "Qual é o número primo entre as opções abaixo?",
      options: [
        { letter: "A", text: "9" },
        { letter: "B", text: "15" },
        { letter: "C", text: "13" },
        { letter: "D", text: "21" }
      ],
      correctAnswer: "C",
      explanation: "Um número primo só pode ser dividido por 1 e por ele mesmo. 13 só é divisível por 1 e 13. (9 = 3×3, 15 = 3×5, 21 = 3×7)."
    },
    {
      question: "Quanto é 25% de 200 reais?",
      options: [
        { letter: "A", text: "R$ 25" },
        { letter: "B", text: "R$ 50" },
        { letter: "C", text: "R$ 75" },
        { letter: "D", text: "R$ 100" }
      ],
      correctAnswer: "B",
      explanation: "25% é o mesmo que a quarta parte (1/4). 200 dividido por 4 é igual a R$ 50."
    },
    {
      question: "Qual é o antecessor do número natural 1.000?",
      options: [
        { letter: "A", text: "999" },
        { letter: "B", text: "1.001" },
        { letter: "C", text: "990" },
        { letter: "D", text: "900" }
      ],
      correctAnswer: "A",
      explanation: "O antecessor de um número natural é aquele que vem imediatamente antes dele (1000 - 1 = 999)."
    },
    {
      question: "Um carro percorre 12 km com 1 litro de gasolina. Quantos quilômetros ele percorrerá com 5 litros?",
      options: [
        { letter: "A", text: "50 km" },
        { letter: "B", text: "55 km" },
        { letter: "C", text: "60 km" },
        { letter: "D", text: "72 km" }
      ],
      correctAnswer: "C",
      explanation: "Basta multiplicar a distância percorrida por litro pela quantidade de litros: 12 × 5 = 60 km."
    },
    {
      question: "Quantos minutos existem em 2 horas e meia?",
      options: [
        { letter: "A", text: "120 minutos" },
        { letter: "B", text: "130 minutos" },
        { letter: "C", text: "150 minutos" },
        { letter: "D", text: "180 minutos" }
      ],
      correctAnswer: "C",
      explanation: "1 hora tem 60 minutos. Logo, 2 horas = 120 minutos. Meia hora = 30 minutos. 120 + 30 = 150 minutos."
    },
    {
      question: "Qual das frações abaixo é equivalente a 2/5?",
      options: [
        { letter: "A", text: "4/10" },
        { letter: "B", text: "5/2" },
        { letter: "C", text: "6/12" },
        { letter: "D", text: "2/10" }
      ],
      correctAnswer: "A",
      explanation: "Multiplicando o numerador e o denominador de 2/5 por 2, obtemos (2×2)/(5×2) = 4/10."
    },
    {
      question: "Quantos gramas existem em 3,5 quilogramas (kg)?",
      options: [
        { letter: "A", text: "350 g" },
        { letter: "B", text: "3.500 g" },
        { letter: "C", text: "35.000 g" },
        { letter: "D", text: "35 g" }
      ],
      correctAnswer: "B",
      explanation: "1 kg equivale a 1.000 g. Portanto, 3,5 kg × 1.000 = 3.500 gramas."
    },
    {
      question: "Qual é a média aritmética das notas: 6, 8 e 10?",
      options: [
        { letter: "A", text: "7" },
        { letter: "B", text: "8" },
        { letter: "C", text: "9" },
        { letter: "D", text: "8,5" }
      ],
      correctAnswer: "B",
      explanation: "Soma-se os valores e divide-se pela quantidade: (6 + 8 + 10) / 3 = 24 / 3 = 8."
    },
    {
      question: "Qual é o valor da potência 2 elevado a 4 (2⁴)?",
      options: [
        { letter: "A", text: "8" },
        { letter: "B", text: "16" },
        { letter: "C", text: "12" },
        { letter: "D", text: "6" }
      ],
      correctAnswer: "B",
      explanation: "2⁴ = 2 × 2 × 2 × 2 = 16. Cuidado para não multiplicar a base pelo expoente (2 × 4 = 8)."
    },
    {
      question: "Um polígono de 5 lados é denominado:",
      options: [
        { letter: "A", text: "Quadrilátero" },
        { letter: "B", text: "Hexágono" },
        { letter: "C", text: "Pentágono" },
        { letter: "D", text: "Heptágono" }
      ],
      correctAnswer: "C",
      explanation: "O polígono de 5 lados e 5 ângulos internos chama-se pentágono."
    },
    {
      question: "Qual é a raiz quadrada exata de 81?",
      options: [
        { letter: "A", text: "7" },
        { letter: "B", text: "8" },
        { letter: "C", text: "9" },
        { letter: "D", text: "11" }
      ],
      correctAnswer: "C",
      explanation: "A raiz quadrada de 81 é 9, pois 9 × 9 = 81."
    }
  ],

  História: [
    {
      question: "Qual civilização antiga desenvolveu a democracia na cidade-estado de Atenas?",
      options: [
        { letter: "A", text: "Egípcia" },
        { letter: "B", text: "Romana" },
        { letter: "C", text: "Grega" },
        { letter: "D", text: "Mesopotâmica" }
      ],
      correctAnswer: "C",
      explanation: "A democracia nasceu na Grécia Antiga, mais precisamente na polis (cidade-estado) de Atenas, no século V a.C."
    },
    {
      question: "Os rios Tigre e Eufrates foram fundamentais para o desenvolvimento de qual região da Antiguidade?",
      options: [
        { letter: "A", text: "Mesopotâmia" },
        { letter: "B", text: "Grécia" },
        { letter: "C", text: "Roma" },
        { letter: "D", text: "Península Ibérica" }
      ],
      correctAnswer: "A",
      explanation: "A palavra 'Mesopotâmia' significa 'terra entre rios' em grego, referindo-se aos férteis vales dos rios Tigre e Eufrates."
    },
    {
      question: "O período pré-histórico caracterizado pelo surgimento da agricultura e domesticação de animais é o:",
      options: [
        { letter: "A", text: "Paleolítico (Idade da Pedra Lascada)" },
        { letter: "B", text: "Neolítico (Idade da Pedra Polida)" },
        { letter: "C", text: "Idade dos Metais" },
        { letter: "D", text: "Idade Média" }
      ],
      correctAnswer: "B",
      explanation: "A chamada 'Revolução Neolítica' marcou a transição do nomadismo para a fixação na terra através da agricultura e pastoreio."
    },
    {
      question: "Na Roma Antiga, os cidadãos ricos e proprietários de terras eram chamados de:",
      options: [
        { letter: "A", text: "Plebeus" },
        { letter: "B", text: "Patrícios" },
        { letter: "C", text: "Gladiadores" },
        { letter: "D", text: "Escravizados" }
      ],
      correctAnswer: "B",
      explanation: "Os patrícios formavam a elite aristocrática romana, possuíam grandes terras e tinham plenos direitos políticos nos primeiros séculos de Roma."
    },
    {
      question: "O rio Nilo foi fundamental para o florescimento de qual civilização antiga?",
      options: [
        { letter: "A", text: "Civilização Chinesa" },
        { letter: "B", text: "Civilização Fenícia" },
        { letter: "C", text: "Civilização Egípcia" },
        { letter: "D", text: "Civilização Inca" }
      ],
      correctAnswer: "C",
      explanation: "Como disse o historiador Heródoto, 'o Egito é uma dádiva do Nilo', pois suas cheias anuais tornavam as margens férteis para o plantio."
    },
    {
      question: "A escrita cuneiforme, uma das primeiras da humanidade, foi criada por qual povo mesopotâmico?",
      options: [
        { letter: "A", text: "Sumérios" },
        { letter: "B", text: "Persas" },
        { letter: "C", text: "Romanos" },
        { letter: "D", text: "Espartanos" }
      ],
      correctAnswer: "A",
      explanation: "Os sumérios desenvolveram a escrita cuneiforme por volta de 3200 a.C. gravando símbolos com estiletes em placas de argila úmida."
    },
    {
      question: "Em Esparta, na Grécia Antiga, a educação das crianças era voltada prioritariamente para:",
      options: [
        { letter: "A", text: "A filosofia e o teatro" },
        { letter: "B", text: "A formação militar e guerreira" },
        { letter: "C", text: "O comércio marítimo" },
        { letter: "D", text: "A agricultura pacífica" }
      ],
      correctAnswer: "B",
      explanation: "Os meninos espartanos eram entregues ao Estado aos 7 anos para um rigoroso treinamento focado na disciplina e na guerra (agogê)."
    },
    {
      question: "Qual destas fontes históricas é considerada uma 'fonte material arqueológica'?",
      options: [
        { letter: "A", text: "Uma lenda contada por um avô" },
        { letter: "B", text: "Um poema antigo registrado em papiro" },
        { letter: "C", text: "Um vaso de cerâmica encontrado em escavação" },
        { letter: "D", text: "Uma música folclórica gravada" }
      ],
      correctAnswer: "C",
      explanation: "Fontes materiais são vestígios físicos de objetos construídos e utilizados pelos seres humanos no passado, como ferramentas e cerâmicas."
    },
    {
      question: "O famoso 'Código de Hamurábi', conhecido pelo princípio do 'olho por olho, dente por dente', pertencia à civilização:",
      options: [
        { letter: "A", text: "Babilônica" },
        { letter: "B", text: "Egípcia" },
        { letter: "C", text: "Grega" },
        { letter: "D", text: "Romana" }
      ],
      correctAnswer: "A",
      explanation: "O Código de Hamurábi foi elaborado pelo rei Hamurábi no Império Babilônico (Mesopotâmia) no século XVIII a.C."
    },
    {
      question: "A passagem da Pré-História para a Idade Antiga é tradicionalmente marcada por qual acontecimento?",
      options: [
        { letter: "A", text: "O domínio do fogo" },
        { letter: "B", text: "A invenção da escrita" },
        { letter: "C", text: "A invenção da roda" },
        { letter: "D", text: "A queda de Roma" }
      ],
      correctAnswer: "B",
      explanation: "A invenção dos sistemas de escrita (por volta de 4.000 a 3.000 a.C.) é a convenção historiográfica que delimita o fim da Pré-História."
    },
    {
      question: "Os Jogos Olímpicos na Antiguidade eram realizados de 4 em 4 anos em homenagem a qual deus grego?",
      options: [
        { letter: "A", text: "Apolo" },
        { letter: "B", text: "Poseidon" },
        { letter: "C", text: "Zeus" },
        { letter: "D", text: "Ares" }
      ],
      correctAnswer: "C",
      explanation: "Os Jogos Olímpicos da Antiguidade eram realizados no santuário de Olímpia em honra a Zeus, o rei dos deuses gregos."
    },
    {
      question: "Na sociedade egípcia antiga, o governante supremo era considerado um deus vivo e chamava-se:",
      options: [
        { letter: "A", text: "Faraó" },
        { letter: "B", text: "Imperador" },
        { letter: "C", text: "Sultão" },
        { letter: "D", text: "Cônsul" }
      ],
      correctAnswer: "A",
      explanation: "O faraó exercia uma monarquia teocrática no Egito Antigo, sendo adorado como a encarnação do deus Hórus na Terra."
    },
    {
      question: "Qual era a principal atividade econômica dos fenícios na Antiguidade?",
      options: [
        { letter: "A", text: "A agricultura em larga escala" },
        { letter: "B", text: "O comércio marítimo e navegação" },
        { letter: "C", text: "A mineração de ouro no deserto" },
        { letter: "D", text: "A pecuária de renas" }
      ],
      correctAnswer: "B",
      explanation: "Devido ao relevo montanhoso e à localização litorânea, os fenícios se tornaram os maiores comerciantes e navegadores do Mediterrâneo."
    },
    {
      question: "O monoteísmo (crença em um único Deus) foi uma característica marcante da religião de qual povo antigo?",
      options: [
        { letter: "A", text: "Egípcios" },
        { letter: "B", text: "Hebreus" },
        { letter: "C", text: "Gregos" },
        { letter: "D", text: "Romanos" }
      ],
      correctAnswer: "B",
      explanation: "Enquanto a maioria dos povos antigos era politeísta (adorava vários deuses), os hebreus destacaram-se pela fé monoteísta em Javé (Iavé)."
    },
    {
      question: "Qual das opções descreve corretamente o nomadismo no período Paleolítico?",
      options: [
        { letter: "A", text: "Viver sempre na mesma cidade fortificada" },
        { letter: "B", text: "Deslocar-se constantemente em busca de alimento, caça e abrigo" },
        { letter: "C", text: "Praticar agricultura em fazendas familiares fixas" },
        { letter: "D", text: "Construir grandes palácios de pedra" }
      ],
      correctAnswer: "B",
      explanation: "Os grupos humanos paleolíticos eram nômades porque esgotavam os recursos naturais de uma região e precisavam se mudar para sobreviver."
    },
    {
      question: "Qual importante legado arquitetônico e de engenharia os romanos construíram para transportar água limpa até as cidades?",
      options: [
        { letter: "A", text: "Pirâmides" },
        { letter: "B", text: "Aquedutos" },
        { letter: "C", text: "Zigurates" },
        { letter: "D", text: "Esfinges" }
      ],
      correctAnswer: "B",
      explanation: "Os aquedutos romanos eram canais elevados sustentados por arcos de pedra que conduziam água de nascentes distantes até os centros urbanos."
    },
    {
      question: "A Ágora ateniense na Grécia Antiga era:",
      options: [
        { letter: "A", text: "Uma praça pública onde os cidadãos debatiam política e faziam comércio" },
        { letter: "B", text: "Um estádio exclusivo para corrida de cavalos" },
        { letter: "C", text: "O templo secreto dos sacerdotes" },
        { letter: "D", text: "A prisão militar de Atenas" }
      ],
      correctAnswer: "A",
      explanation: "A Ágora era o coração da vida pública em Atenas, espaço de encontro onde a democracia e o comércio ganhavam vida."
    },
    {
      question: "Quem eram os escribas no Egito Antigo?",
      options: [
        { letter: "A", text: "Guerreiros que combatiam de bigas" },
        { letter: "B", text: "Camponeses que plantavam trigo" },
        { letter: "C", text: "Funcionários especializados em ler, escrever e registrar impostos" },
        { letter: "D", text: "Comerciantes estrangeiros de especiarias" }
      ],
      correctAnswer: "C",
      explanation: "Dominar a escrita hieroglífica exigia anos de estudo. Por isso, os escribas gozavam de prestígio e administravam os bens do Estado."
    },
    {
      question: "A religião da Grécia Antiga caracterizava-se por:",
      options: [
        { letter: "A", text: "Ser monoteísta e sem templos" },
        { letter: "B", text: "Ser politeísta, com deuses antropomórficos (com forma e sentimentos humanos)" },
        { letter: "C", text: "Não acreditar na existência de vida após a morte" },
        { letter: "D", text: "Adorar unicamente o Sol" }
      ],
      correctAnswer: "B",
      explanation: "Os gregos eram politeístas e seus deuses tinham virtudes e defeitos humanos (ciúmes, raiva, amor), embora fossem imortais."
    },
    {
      question: "Na República Romana, a instituição mais poderosa, composta por anciãos das famílias patrícias, era o:",
      options: [
        { letter: "A", text: "Senado" },
        { letter: "B", text: "Tribunal do Júri" },
        { letter: "C", text: "Conselho dos Plebeus" },
        { letter: "D", text: "Templo de Vesta" }
      ],
      correctAnswer: "A",
      explanation: "O Senado Romano tomava as decisões mais importantes sobre finanças, guerra, religião e política externa de Roma."
    }
  ],

  Ciências: [
    {
      question: "Qual é a menor unidade estrutural e funcional de todos os seres vivos?",
      options: [
        { letter: "A", text: "O órgão" },
        { letter: "B", text: "O tecido" },
        { letter: "C", text: "A célula" },
        { letter: "D", text: "O átomo" }
      ],
      correctAnswer: "C",
      explanation: "De acordo com a Teoria Celular, todos os organismos vivos são formados por uma ou mais células, que são suas unidades fundamentais."
    },
    {
      question: "Qual estrutura celular é responsável por abrigar o material genético (DNA) nas células eucariontes?",
      options: [
        { letter: "A", text: "O núcleo celular" },
        { letter: "B", text: "A mitocôndria" },
        { letter: "C", text: "O ribossomo" },
        { letter: "D", text: "O vacúolo" }
      ],
      correctAnswer: "A",
      explanation: "O núcleo celular é envolto pela carioteca e protege as instruções genéticas (DNA) que comandam o funcionamento da célula."
    },
    {
      question: "A mistura de água com sal totalmente dissolvido é um exemplo de:",
      options: [
        { letter: "A", text: "Mistura heterogênea" },
        { letter: "B", text: "Mistura homogênea (solução)" },
        { letter: "C", text: "Substância pura simples" },
        { letter: "D", text: "Reação química explosiva" }
      ],
      correctAnswer: "B",
      explanation: "Uma mistura homogênea apresenta uma única fase visual uniforme em toda a sua extensão quando o soluto está completamente dissolvido."
    },
    {
      question: "Qual camada da Terra é a mais externa, sólida e onde nós vivemos?",
      options: [
        { letter: "A", text: "Manto Superior" },
        { letter: "B", text: "Núcleo Externo" },
        { letter: "C", text: "Crosta Terrestre (Litosfera)" },
        { letter: "D", text: "Núcleo Interno" }
      ],
      correctAnswer: "C",
      explanation: "A crosta terrestre é a fina camada rochosa externa do planeta Terra, onde se formam os solos, montanhas e continentes."
    },
    {
      question: "Qual organela celular vegetal é responsável pela realização da fotossíntese?",
      options: [
        { letter: "A", text: "Cloroplasto" },
        { letter: "B", text: "Complexo de Golgi" },
        { letter: "C", text: "Lisossomo" },
        { letter: "D", text: "Centríolo" }
      ],
      correctAnswer: "A",
      explanation: "Os cloroplastos contêm clorofila, o pigmento verde que absorve a luz solar para transformar água e gás carbônico em glicose e oxigênio."
    },
    {
      question: "O método de separação de misturas utilizado para separar água e areia é a:",
      options: [
        { letter: "A", text: "Destilação simples" },
        { letter: "B", text: "Filtração" },
        { letter: "C", text: "Catação" },
        { letter: "D", text: "Centrifugação de gases" }
      ],
      correctAnswer: "B",
      explanation: "A filtração utiliza uma superfície porosa (filtro) que retém o sólido insolúvel (areia) permitindo a passagem do líquido (água)."
    },
    {
      question: "Como se chama o movimento de rotação da Terra e qual é o seu principal efeito?",
      options: [
        { letter: "A", text: "Giro em torno do Sol, causando as estações do ano" },
        { letter: "B", text: "Giro em torno do seu próprio eixo, causando a sucessão dos dias e das noites" },
        { letter: "C", text: "Giro em torno da Lua, provocando os eclipses" },
        { letter: "D", text: "Movimento em linha reta pelo espaço" }
      ],
      correctAnswer: "B",
      explanation: "A rotação é o giro da Terra em torno de seu próprio eixo imaginário (duração aproximada de 24 horas), originando a alternância entre dia e noite."
    },
    {
      question: "Qual tipo de rocha se origina a partir do resfriamento e solidificação do magma vulcânico?",
      options: [
        { letter: "A", text: "Rochas sedimentares" },
        { letter: "B", text: "Rochas magmáticas (ou ígneas)" },
        { letter: "C", text: "Rochas metamórficas" },
        { letter: "D", text: "Rochas fósseis" }
      ],
      correctAnswer: "B",
      explanation: "As rochas ígneas ou magmáticas (como o basalto e o granito) são formadas quando o magma derretido se resfria e se cristaliza."
    },
    {
      question: "Qual destes componentes do sangue é responsável pelo transporte de oxigênio para todo o organismo?",
      options: [
        { letter: "A", text: "Plaquetas" },
        { letter: "B", text: "Leucócitos (glóbulos brancos)" },
        { letter: "C", text: "Hemácias (glóbulos vermelhos)" },
        { letter: "D", text: "Plasma líquido apenas" }
      ],
      correctAnswer: "C",
      explanation: "As hemácias contêm hemoglobina, proteína rica em ferro que se liga ao gás oxigênio nos pulmões e o distribui para as células."
    },
    {
      question: "A atmosfera da Terra é composta em sua maior porcentagem por qual gás?",
      options: [
        { letter: "A", text: "Gás Oxigênio (O₂)" },
        { letter: "B", text: "Gás Carbônico (CO₂)" },
        { letter: "C", text: "Gás Nitrogênio (N₂)" },
        { letter: "D", text: "Gás Hélio (He)" }
      ],
      correctAnswer: "C",
      explanation: "Cerca de 78% da atmosfera terrestre é formada por gás nitrogênio, enquanto o oxigênio representa aproximadamente 21%."
    }
  ]
};

// Questões específicas do 7º Ano
export const mockQuestions7Ano = {
  Matemática: [
    {
      question: "Qual é o valor da operação com números inteiros: (-15) + (+8) - (-4)?",
      options: [
        { letter: "A", text: "-3" },
        { letter: "B", text: "-11" },
        { letter: "C", text: "+3" },
        { letter: "D", text: "-7" }
      ],
      correctAnswer: "A",
      explanation: "Subtrair um número negativo equivale a somar: -15 + 8 - (-4) = -15 + 8 + 4 = -7 + 4 = -3."
    },
    {
      question: "Resolvendo a equação do 1º grau 3x - 7 = 14, qual é o valor de x?",
      options: [
        { letter: "A", text: "x = 5" },
        { letter: "B", text: "x = 7" },
        { letter: "C", text: "x = 9" },
        { letter: "D", text: "x = 21" }
      ],
      correctAnswer: "B",
      explanation: "Isolando x: 3x = 14 + 7 => 3x = 21 => x = 21 / 3 => x = 7."
    },
    {
      question: "Em uma receita de suco, a razão de polpa para água é de 2 para 5. Se forem usados 300 ml de polpa, quantos ml de água serão necessários?",
      options: [
        { letter: "A", text: "600 ml" },
        { letter: "B", text: "750 ml" },
        { letter: "C", text: "500 ml" },
        { letter: "D", text: "850 ml" }
      ],
      correctAnswer: "B",
      explanation: "Montando a proporção 2/5 = 300/x => 2x = 1500 => x = 750 ml de água."
    },
    {
      question: "Um tênis que custava R$ 200,00 teve um desconto de 15%. Qual é o novo preço do tênis?",
      options: [
        { letter: "A", text: "R$ 170,00" },
        { letter: "B", text: "R$ 185,00" },
        { letter: "C", text: "R$ 160,00" },
        { letter: "D", text: "R$ 175,00" }
      ],
      correctAnswer: "A",
      explanation: "15% de 200 é (15 × 200) / 100 = 30 reais de desconto. Preço final: 200 - 30 = R$ 170,00."
    }
  ],
  Ciências: [
    {
      question: "Qual bioma brasileiro é caracterizado pelo clima semiárido, vegetação xerófila com cactos e árvores que perdem as folhas na estação seca?",
      options: [
        { letter: "A", text: "Mata Atlântica" },
        { letter: "B", text: "Caatinga" },
        { letter: "C", text: "Pantanal" },
        { letter: "D", text: "Pampa" }
      ],
      correctAnswer: "B",
      explanation: "A Caatinga é um bioma exclusivamente brasileiro do semiárido, adaptado à escassez de chuvas (folhas reduzidas ou transformadas em espinhos)."
    },
    {
      question: "A transmissão de calor que ocorre sem a necessidade de meio material, como o calor do Sol que chega até a Terra pelo vácuo, chama-se:",
      options: [
        { letter: "A", text: "Condução" },
        { letter: "B", text: "Convecção" },
        { letter: "C", text: "Irradiação térmica" },
        { letter: "D", text: "Evaporação" }
      ],
      correctAnswer: "C",
      explanation: "A irradiação térmica ocorre por meio de ondas eletromagnéticas (infravermelho) e é a única forma de propagação do calor no vácuo."
    },
    {
      question: "Os vírus diferenciam-se da maioria dos seres vivos porque:",
      options: [
        { letter: "A", text: "Possuem muitas células eucarióticas" },
        { letter: "B", text: "São acelulares e necessitam de uma célula hospedeira para se reproduzir" },
        { letter: "C", text: "Produzem seu próprio alimento por fotossíntese" },
        { letter: "D", text: "São todos benéficos ao ser humano" }
      ],
      correctAnswer: "B",
      explanation: "Os vírus não têm estrutura celular própria (são acelulares) e são parasitas intracelulares obrigatórios."
    }
  ],
  História: [
    {
      question: "Na sociedade feudal da Idade Média, a base da economia e da relação social fundamentava-se em:",
      options: [
        { letter: "A", text: "Grande comércio marítimo e indústrias" },
        { letter: "B", text: "Posse da terra (feudo) e laços de suserania e vassalagem" },
        { letter: "C", text: "Uso exclusivo de moedas digitais e bancos modernos" },
        { letter: "D", text: "Democracia direta nas grandes cidades" }
      ],
      correctAnswer: "B",
      explanation: "O feudalismo baseava-se na posse da terra (o feudo), com economia rural autossuficiente e alianças de suserania e vassalagem entre nobres."
    },
    {
      question: "O movimento cultural e científico dos séculos XIV a XVI que resgatou ideais da Antiguidade Clássica e colocou o ser humano no centro (Humanismo) foi o:",
      options: [
        { letter: "A", text: "Renascimento" },
        { letter: "B", text: "Iluminismo" },
        { letter: "C", text: "Modernismo" },
        { letter: "D", text: "Romantismo" }
      ],
      correctAnswer: "A",
      explanation: "O Renascimento cultural teve origem nas cidades italianas e destacou o antropocentrismo, a valorização da razão e da ciência."
    }
  ],
  Geografia: [
    {
      question: "O Brasil é dividido oficialmente pelo IBGE em quantas grandes regiões geográficas?",
      options: [
        { letter: "A", text: "4 regiões" },
        { letter: "B", text: "5 regiões (Norte, Nordeste, Centro-Oeste, Sudeste e Sul)" },
        { letter: "C", text: "6 regiões" },
        { letter: "D", text: "3 regiões geoeconômicas apenas" }
      ],
      correctAnswer: "B",
      explanation: "A divisão oficial do IBGE agrupa os estados brasileiros em 5 macrorregiões: Norte, Nordeste, Centro-Oeste, Sudeste e Sul."
    }
  ],
  'Língua Portuguesa': [
    {
      question: "Na frase 'O aluno comprou um livro interessante', o verbo 'comprou' classifica-se quanto à transitividade como:",
      options: [
        { letter: "A", text: "Verbo Transitivo Indireto (VTI)" },
        { letter: "B", text: "Verbo Transitivo Direto (VTD)" },
        { letter: "C", text: "Verbo Intransitivo (VI)" },
        { letter: "D", text: "Verbo de Ligação (VL)" }
      ],
      correctAnswer: "B",
      explanation: "Quem compra, compra algo ('um livro interessante', objeto direto sem preposição obrigatória). Logo, é Transitivo Direto."
    }
  ],
  'Língua Inglesa': [
    {
      question: "Which sentence is in the Simple Past?",
      options: [
        { letter: "A", text: "She travels to London tomorrow." },
        { letter: "B", text: "She is watching TV now." },
        { letter: "C", text: "She watched a good movie yesterday." },
        { letter: "D", text: "She likes ice cream." }
      ],
      correctAnswer: "C",
      explanation: "O verbo 'watched' termina com '-ed', indicando ação concluída no passado (Simple Past) com o marcador 'yesterday'."
    }
  ]
};

// Questões específicas do 8º Ano
export const mockQuestions8Ano = {
  Matemática: [
    {
      question: "O número 450.000 escrito em Notação Científica é representado por:",
      options: [
        { letter: "A", text: "45 × 10⁴" },
        { letter: "B", text: "4,5 × 10⁵" },
        { letter: "C", text: "4,5 × 10⁻⁵" },
        { letter: "D", text: "0,45 × 10⁶" }
      ],
      correctAnswer: "B",
      explanation: "Na notação científica o coeficiente deve estar entre 1 e 10. Deslocando a vírgula 5 casas para a esquerda: 4,5 × 10⁵."
    },
    {
      question: "Desenvolvendo o produto notável (x + 3)², obtemos qual polinômio?",
      options: [
        { letter: "A", text: "x² + 9" },
        { letter: "B", text: "x² + 6x + 9" },
        { letter: "C", text: "x² + 3x + 9" },
        { letter: "D", text: "x² + 6x + 6" }
      ],
      correctAnswer: "B",
      explanation: "O quadrado da soma de dois termos é dado por: (a + b)² = a² + 2ab + b² => x² + 2(x)(3) + 3² = x² + 6x + 9."
    },
    {
      question: "Em um sistema de equações: x + y = 10 e x - y = 4. Quais são os valores de x e y?",
      options: [
        { letter: "A", text: "x = 7 e y = 3" },
        { letter: "B", text: "x = 6 e y = 4" },
        { letter: "C", text: "x = 8 e y = 2" },
        { letter: "D", text: "x = 5 e y = 5" }
      ],
      correctAnswer: "A",
      explanation: "Somando as duas equações: 2x = 14 => x = 7. Substituindo: 7 + y = 10 => y = 3."
    }
  ],
  Ciências: [
    {
      question: "Durante a puberdade humana, o aumento da produção de hormônios sexuais desencadeia o surgimento dos caracteres sexuais secundários. Qual hormônio é o principal responsável por essas transformações nos meninos?",
      options: [
        { letter: "A", text: "Insulina" },
        { letter: "B", text: "Testosterona" },
        { letter: "C", text: "Estrogênio" },
        { letter: "D", text: "Progesterona" }
      ],
      correctAnswer: "B",
      explanation: "A testosterona, produzida principalmente nos testículos, é o hormônio responsável pelas transformações masculinas na puberdade (engrossamento da voz, pelos corporais, etc.)."
    },
    {
      question: "Qual das seguintes grandezas físicas mede a oposição de um material à passagem da corrente elétrica?",
      options: [
        { letter: "A", text: "Tensão elétrica (Volts)" },
        { letter: "B", text: "Resistência elétrica (Ohms)" },
        { letter: "C", text: "Potência elétrica (Watts)" },
        { letter: "D", text: "Corrente elétrica (Amperes)" }
      ],
      correctAnswer: "B",
      explanation: "A resistência elétrica (medida em Ohms, Ω) representa a dificuldade que as cargas elétricas encontram para atravessar um condutor."
    }
  ],
  História: [
    {
      question: "O Iluminismo, movimento intelectual do século XVIII, tinha como principal pilar:",
      options: [
        { letter: "A", text: "A defesa do poder absoluto dos reis sem questionamento" },
        { letter: "B", text: "O uso da razão e da ciência contra o absolutismo e o obscurantismo" },
        { letter: "C", text: "O retorno ao sistema feudal medieval" },
        { letter: "D", text: "A proibição do estudo das ciências naturais" }
      ],
      correctAnswer: "B",
      explanation: "Os filósofos iluministas defendiam a razão ('a luz'), a liberdade individual, o progresso científico e criticavam os privilégios da nobreza e do clero."
    },
    {
      question: "A Revolução Industrial, iniciada na Inglaterra na segunda metade do século XVIII, foi impulsionada principalmente pela introdução de:",
      options: [
        { letter: "A", text: "Carros elétricos e computadores" },
        { letter: "B", text: "Máquinas a vapor movidas a carvão mineral" },
        { letter: "C", text: "Moinhos de vento tradicionais apenas" },
        { letter: "D", text: "Trabalho exclusivamente artesanal e manual" }
      ],
      correctAnswer: "B",
      explanation: "O aperfeiçoamento da máquina a vapor por James Watt e o uso do carvão mineral como combustível revolucionaram a produção têxtil e os transportes."
    }
  ],
  Geografia: [
    {
      question: "O continente americano é dividido geograficamente em três porções de terra principais, que são:",
      options: [
        { letter: "A", text: "América do Norte, América Central e América do Sul" },
        { letter: "B", text: "América Anglo-Saxônica e América do Caribe apenas" },
        { letter: "C", text: "América Latina e América Ocidental" },
        { letter: "D", text: "América do Norte e América do Sul apenas" }
      ],
      correctAnswer: "A",
      explanation: "Pelo critério geográfico/físico, a América subdivide-se em América do Norte, América Central (Ístmica e Insular) e América do Sul."
    }
  ],
  'Língua Portuguesa': [
    {
      question: "Na frase 'A ponte foi construída pelos operários em dois anos', a oração está em qual voz verbal?",
      options: [
        { letter: "A", text: "Voz Ativa" },
        { letter: "B", text: "Voz Passiva Analítica" },
        { letter: "C", text: "Voz Reflexiva" },
        { letter: "D", text: "Voz Passiva Sintética" }
      ],
      correctAnswer: "B",
      explanation: "O sujeito 'a ponte' sofre a ação (sujeito paciente) realizada pelo agente da passiva 'pelos operários' com a locução verbal 'foi construída'."
    }
  ],
  'Língua Inglesa': [
    {
      question: "Complete: 'Mount Everest is ______ mountain in the world.'",
      options: [
        { letter: "A", text: "the highest" },
        { letter: "B", text: "higher than" },
        { letter: "C", text: "the most high" },
        { letter: "D", text: "high" }
      ],
      correctAnswer: "A",
      explanation: "Para adjetivos curtos no superlativo ('high'), usamos 'the' + adjetivo com '-est': 'the highest'."
    }
  ]
};

/**
 * Gera questões a partir do banco de dados local ou gera dinamicamente para o assunto e ano escolar
 */
export function getMockExam(subject, topics, totalQuestions = 10, difficulty = 'medio', grade = '6') {
  const gradePool = mockSubjectQuestions; // base sólida de questões BNCC

  let pool = gradePool[subject] || mockSubjectQuestions[subject] || [];

  // Se não encontrar matéria exata, usa Ciências ou Matemática como base
  if (pool.length === 0) {
    pool = gradePool['Ciências'] || gradePool['Matemática'] || [];
  }

  // Embaralhar e selecionar a quantidade
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  const selected = [];

  for (let i = 0; i < totalQuestions; i++) {
    const template = shuffled[i % shuffled.length];
    selected.push({
      id: i + 1,
      question: template.question,
      options: template.options,
      correctAnswer: template.correctAnswer,
      explanation: template.explanation,
      difficulty: difficulty === 'misto' ? (i % 3 === 0 ? 'facil' : i % 3 === 1 ? 'medio' : 'dificil') : difficulty
    });
  }

  return selected;
}

