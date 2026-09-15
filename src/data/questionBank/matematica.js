// Banco de questões de Matemática - 6º, 7º e 8º ano (BNCC)
export const matematicaQuestions = [
  // --- TÓPICO: Múltiplos, Divisores, MMC e MDC ---
  {
    grade: "6",
    topic: "Múltiplos e Divisores",
    keywords: ["primos", "numeros", "divisores", "divisibilidade"],
    difficulty: "facil",
    question: "Um número natural maior que 1 é classificado como 'número primo' quando possui exatamente dois divisores distintos: o número 1 e ele mesmo. Qual das sequências abaixo é composta APENAS por números primos?",
    options: [
      { letter: "A", text: "2, 3, 5, 7, 11 e 13." },
      { letter: "B", text: "1, 2, 4, 6, 8 e 10." },
      { letter: "C", text: "3, 6, 9, 12 e 15." },
      { letter: "D", text: "2, 4, 8, 16 e 32." }
    ],
    correctAnswer: "A",
    explanation: "Os números 2, 3, 5, 7, 11 e 13 só podem ser divididos exatamente por 1 e por si mesmos. O número 2 é o único número primo que é par."
  },
  {
    grade: "6",
    topic: "Múltiplos e Divisores",
    keywords: ["mmc", "minimo", "multiplo", "comum", "remedios", "intervalos"],
    difficulty: "medio",
    question: "Um paciente precisa tomar um comprimido A de 6 em 6 horas e um comprimido B de 8 em 8 horas. Se ele tomou os dois remédios juntos exatamente às 12h, após quantas horas ele tomará os dois remédios juntos novamente?",
    options: [
      { letter: "A", text: "Após 24 horas (às 12h do dia seguinte)." },
      { letter: "B", text: "Após 14 horas." },
      { letter: "C", text: "Após 48 horas." },
      { letter: "D", text: "Após 16 horas." }
    ],
    correctAnswer: "A",
    explanation: "Calcula-se o Mínimo Múltiplo Comum (MMC) entre os intervalos de 6 e 8 horas: MMC(6, 8) = 24. Portanto, a cada 24 horas os horários coincidem."
  },

  // --- TÓPICO: Frações e Decimais ---
  {
    grade: "6",
    topic: "Frações e Números Decimais",
    keywords: ["fracoes", "equivalentes", "simplificacao", "metade"],
    difficulty: "facil",
    question: "Uma pizza inteira foi dividida em 8 pedaços rigorosamente iguais. Se Lucas comeu 4 desses pedaços, a fração simplificada da pizza que ele consumiu corresponde a:",
    options: [
      { letter: "A", text: "1/2 (metade da pizza inteira)." },
      { letter: "B", text: "1/4 da pizza." },
      { letter: "C", text: "3/8 da pizza." },
      { letter: "D", text: "2/3 da pizza." }
    ],
    correctAnswer: "A",
    explanation: "A fração é 4/8. Dividindo o numerador e o denominador por 4 (simplificação), obtemos 1/2, que representa metade do total."
  },
  {
    grade: "6",
    topic: "Frações e Números Decimais",
    keywords: ["soma", "fracoes", "denominadores", "diferentes", "mmc"],
    difficulty: "medio",
    question: "Ao resolver a adição de frações com denominadores diferentes: 1/3 + 1/2, qual é o resultado correto?",
    options: [
      { letter: "A", text: "5/6." },
      { letter: "B", text: "2/5." },
      { letter: "C", text: "1/5." },
      { letter: "D", text: "2/6." }
    ],
    correctAnswer: "A",
    explanation: "O MMC entre os denominadores 3 e 2 é 6. Reduzindo as frações ao mesmo denominador: 1/3 = 2/6 e 1/2 = 3/6. Somando os numeradores: 2/6 + 3/6 = 5/6."
  },
  {
    grade: "6",
    topic: "Frações e Números Decimais",
    keywords: ["decimal", "conversao", "centavos", "reais"],
    difficulty: "facil",
    question: "A fração decimal 3/4 pode ser representada na sua forma decimal exata como:",
    options: [
      { letter: "A", text: "0,75." },
      { letter: "B", text: "0,34." },
      { letter: "C", text: "0,43." },
      { letter: "D", text: "0,25." }
    ],
    correctAnswer: "A",
    explanation: "Dividindo o numerador 3 pelo denominador 4: 3 ÷ 4 = 0,75."
  },

  // --- TÓPICO: Porcentagem e Matemática Financeira ---
  {
    grade: "6",
    topic: "Porcentagem e Proporcionalidade",
    keywords: ["porcentagem", "desconto", "preco", "loja", "calc"],
    difficulty: "facil",
    question: "Um par de tênis que custava R$ 200,00 está com uma promoção especial de 15% de desconto para pagamento à vista. Qual é o valor em reais do desconto concedido?",
    options: [
      { letter: "A", text: "R$ 30,00." },
      { letter: "B", text: "R$ 15,00." },
      { letter: "C", text: "R$ 25,00." },
      { letter: "D", text: "R$ 40,00." }
    ],
    correctAnswer: "A",
    explanation: "15% de R$ 200,00 = (15 / 100) × 200 = 0,15 × 200 = R$ 30,00 de desconto (o tênis sairá por R$ 170,00)."
  },
  {
    grade: "7",
    topic: "Porcentagem e Proporcionalidade",
    keywords: ["porcentagem", "turma", "alunos", "fracao"],
    difficulty: "medio",
    question: "Em uma turma com 40 estudantes, 25% dos alunos praticam natação no contraturno escolar. Quantos alunos dessa turma fazem natação?",
    options: [
      { letter: "A", text: "10 alunos." },
      { letter: "B", text: "15 alunos." },
      { letter: "C", text: "8 alunos." },
      { letter: "D", text: "12 alunos." }
    ],
    correctAnswer: "A",
    explanation: "25% equivale à quarta parte (1/4). Portanto: 40 ÷ 4 = 10 alunos."
  },

  // --- TÓPICO: Números Inteiros (Positivos e Negativos) ---
  {
    grade: "7",
    topic: "Números Inteiros (Z)",
    keywords: ["numeros", "inteiros", "negativos", "saldo", "banco", "temperatura"],
    difficulty: "facil",
    question: "Às 6h da manhã, os termômetros de uma cidade serrana marcavam -3°C. Ao meio-dia, a temperatura havia subido 8°C. Qual era a nova temperatura registrada ao meio-dia?",
    options: [
      { letter: "A", text: "+5°C." },
      { letter: "B", text: "-11°C." },
      { letter: "C", text: "+11°C." },
      { letter: "D", text: "-5°C." }
    ],
    correctAnswer: "A",
    explanation: "Realizando a adição na reta numérica: -3 + 8 = +5°C."
  },
  {
    grade: "7",
    topic: "Números Inteiros (Z)",
    keywords: ["jogo", "sinais", "multiplicacao", "regra", "negativo"],
    difficulty: "medio",
    question: "De acordo com as regras de sinais para a multiplicação e divisão de números inteiros no conjunto Z, o produto de dois números negativos, como (-4) × (-5), resulta em:",
    options: [
      { letter: "A", text: "+20 (positivo, pois menos vezes menos é mais)." },
      { letter: "B", text: "-20 (negativo)." },
      { letter: "C", text: "-9." },
      { letter: "D", text: "+1." }
    ],
    correctAnswer: "A",
    explanation: "Na multiplicação e divisão de números inteiros: sinais iguais resultam em sinal positivo (+), logo (-4) × (-5) = +20."
  },

  // --- TÓPICO: Álgebra e Equações do 1º Grau ---
  {
    grade: "7",
    topic: "Equações do 1º Grau",
    keywords: ["equacao", "primeiro", "grau", "incognita", "x", "valor"],
    difficulty: "facil",
    question: "Qual é o valor numérico da incógnita 'x' que torna verdadeira a equação do 1º grau: 2x + 6 = 20?",
    options: [
      { letter: "A", text: "x = 7." },
      { letter: "B", text: "x = 10." },
      { letter: "C", text: "x = 14." },
      { letter: "D", text: "x = 5." }
    ],
    correctAnswer: "A",
    explanation: "Passando o +6 para o outro lado subtraindo: 2x = 20 - 6 ⇒ 2x = 14. Dividindo por 2: x = 14 / 2 ⇒ x = 7."
  },
  {
    grade: "7",
    topic: "Equações do 1º Grau",
    keywords: ["problema", "dobro", "idade", "equacao"],
    difficulty: "medio",
    question: "O dobro da quantia em dinheiro que Ana possui somado a R$ 15,00 é igual a R$ 75,00. Quanto dinheiro Ana possui?",
    options: [
      { letter: "A", text: "R$ 30,00." },
      { letter: "B", text: "R$ 35,00." },
      { letter: "C", text: "R$ 45,00." },
      { letter: "D", text: "R$ 60,00." }
    ],
    correctAnswer: "A",
    explanation: "Montando a equação: 2x + 15 = 75 ⇒ 2x = 75 - 15 ⇒ 2x = 60 ⇒ x = 60 / 2 ⇒ x = R$ 30,00."
  },

  // --- TÓPICO: Regra de Três Simples e Proporção ---
  {
    grade: "7",
    topic: "Regra de Três Simples",
    keywords: ["regra", "tres", "proporcionalidade", "direta", "velocidade"],
    difficulty: "medio",
    question: "Se 4 cadernos escolares de mesma marca custam juntos R$ 32,00, quanto custarão 7 cadernos idênticos?",
    options: [
      { letter: "A", text: "R$ 56,00." },
      { letter: "B", text: "R$ 64,00." },
      { letter: "C", text: "R$ 48,00." },
      { letter: "D", text: "R$ 52,00." }
    ],
    correctAnswer: "A",
    explanation: "Como são grandezas diretamente proporcionais: cada caderno custa R$ 32 ÷ 4 = R$ 8,00. Logo, 7 cadernos custarão 7 × R$ 8 = R$ 56,00."
  },

  // --- TÓPICO: Geometria: Ângulos, Perímetro e Área ---
  {
    grade: "6",
    topic: "Geometria e Medidas",
    keywords: ["angulos", "reto", "graus", "agudo", "obtuso"],
    difficulty: "facil",
    question: "Em Geometria, um ângulo que mede exatamente 90 graus (90°), correspondente ao canto reto de uma folha de papel ou ao encontro perpendicular de duas paredes, é denominado:",
    options: [
      { letter: "A", text: "Ângulo Reto." },
      { letter: "B", text: "Ângulo Agudo (menor que 90°)." },
      { letter: "C", text: "Ângulo Obtuso (maior que 90°)." },
      { letter: "D", text: "Ângulo Raso (180°)." }
    ],
    correctAnswer: "A",
    explanation: "O ângulo reto possui amplitude fixa de 90° e é fundamental no teorema de Pitágoras e no estudo dos triângulos retângulos."
  },
  {
    grade: "6",
    topic: "Geometria e Medidas",
    keywords: ["perimetro", "soma", "lados", "retangulo"],
    difficulty: "facil",
    question: "Um campo de futebol retangular possui 100 metros de comprimento e 70 metros de largura. Para dar uma volta completa correndo ao redor de toda a linha externa desse campo, um atleta percorrerá um perímetro de:",
    options: [
      { letter: "A", text: "340 metros." },
      { letter: "B", text: "170 metros." },
      { letter: "C", text: "7.000 metros." },
      { letter: "D", text: "200 metros." }
    ],
    correctAnswer: "A",
    explanation: "O perímetro do retângulo é a soma dos quatro lados: P = 100 + 70 + 100 + 70 = 340 metros."
  },
  {
    grade: "6",
    topic: "Geometria e Medidas",
    keywords: ["area", "retangulo", "metro", "quadrado", "terreno"],
    difficulty: "facil",
    question: "A área de uma sala retangular que tem 6 metros de comprimento por 4 metros de largura é igual a:",
    options: [
      { letter: "A", text: "24 metros quadrados (m²)." },
      { letter: "B", text: "20 metros quadrados (m²)." },
      { letter: "C", text: "10 metros quadrados (m²)." },
      { letter: "D", text: "48 metros quadrados (m²)." }
    ],
    correctAnswer: "A",
    explanation: "A área do retângulo é calculada pela fórmula: Área = base × altura = 6 m × 4 m = 24 m²."
  },
  {
    grade: "7",
    topic: "Geometria e Medidas",
    keywords: ["area", "triangulo", "base", "altura", "dividir"],
    difficulty: "medio",
    question: "Um triângulo possui base medindo 10 cm e altura relativa a essa base medindo 6 cm. A área desse triângulo é dada por:",
    options: [
      { letter: "A", text: "30 cm² (pois Área = (base × altura) / 2)." },
      { letter: "B", text: "60 cm²." },
      { letter: "C", text: "16 cm²." },
      { letter: "D", text: "25 cm²." }
    ],
    correctAnswer: "A",
    explanation: "A fórmula da área do triângulo é A = (b × h) / 2. Substituindo: A = (10 × 6) / 2 = 60 / 2 = 30 cm²."
  },
  {
    grade: "8",
    topic: "Geometria e Medidas",
    keywords: ["volume", "paralelepipedo", "caixa", "agua", "litros"],
    difficulty: "medio",
    question: "Uma caixa d'água em formato de paralelepípedo reto-retângulo tem 2 metros de comprimento, 1 metro de largura e 1,5 metro de profundidade. O seu volume total é de:",
    options: [
      { letter: "A", text: "3 metros cúbicos (m³), equivalentes a 3.000 litros de água." },
      { letter: "B", text: "4,5 metros cúbicos." },
      { letter: "C", text: "1,5 metro cúbico." },
      { letter: "D", text: "300 litros." }
    ],
    correctAnswer: "A",
    explanation: "Volume = comprimento × largura × altura = 2 × 1 × 1,5 = 3 m³. Como cada 1 m³ equivale a 1.000 litros, a capacidade é de 3.000 litros."
  },

  // --- TÓPICO: Estatística e Média Aritmética ---
  {
    grade: "7",
    topic: "Estatística e Probabilidade",
    keywords: ["media", "aritmetica", "notas", "bimestre", "soma"],
    difficulty: "facil",
    question: "Um estudante obteve as seguintes notas nos quatro bimestres escolares: 7,0; 8,0; 6,0 e 9,0. A média aritmética final desse aluno foi:",
    options: [
      { letter: "A", text: "7,5." },
      { letter: "B", text: "8,0." },
      { letter: "C", text: "7,0." },
      { letter: "D", text: "8,5." }
    ],
    correctAnswer: "A",
    explanation: "Para encontrar a média aritmética simples, somam-se os valores e divide-se pela quantidade de termos: (7 + 8 + 6 + 9) / 4 = 30 / 4 = 7,5."
  },
  {
    grade: "7",
    topic: "Estatística e Probabilidade",
    keywords: ["probabilidade", "dado", "faces", "chance"],
    difficulty: "medio",
    question: "Ao lançar um dado cúbico comum não viciado com as faces numeradas de 1 a 6, qual é a probabilidade teórica de sair um número par (2, 4 ou 6)?",
    options: [
      { letter: "A", text: "3/6 (ou 1/2, que corresponde a 50% de chance)." },
      { letter: "B", text: "1/6 (cerca de 16,6%)." },
      { letter: "C", text: "2/6." },
      { letter: "D", text: "5/6." }
    ],
    correctAnswer: "A",
    explanation: "O espaço amostral possui 6 resultados possíveis (1, 2, 3, 4, 5, 6). Os casos favoráveis de número par são 3 números (2, 4, 6). Logo, P = 3/6 = 1/2 = 50%."
  },
  // --- NOVAS QUESTÕES DE MATEMÁTICA ---
  {
    grade: "6",
    topic: "Potenciação e Radiciação",
    keywords: ["potenciacao", "expoente", "base", "quadrado", "cubo"],
    difficulty: "facil",
    question: "Na potenciação, a base é multiplicada por si mesma tantas vezes quantas indicar o expoente. O valor numérico da potência 2 elevado à quinta potência (2⁵) é igual a:",
    options: [
      { letter: "A", text: "32 (pois 2 × 2 × 2 × 2 × 2 = 32)." },
      { letter: "B", text: "10 (2 × 5)." },
      { letter: "C", text: "25." },
      { letter: "D", text: "64." }
    ],
    correctAnswer: "A",
    explanation: "Multiplicando 2 cinco vezes consecutivas: 2 × 2 = 4; 4 × 2 = 8; 8 × 2 = 16; 16 × 2 = 32."
  },
  {
    grade: "6",
    topic: "Potenciação e Radiciação",
    keywords: ["raiz", "quadrada", "exata", "radiciacao"],
    difficulty: "facil",
    question: "A raiz quadrada exata de um número é o valor positivo que, multiplicado por si mesmo, resulta naquele número. Qual é o valor de √81?",
    options: [
      { letter: "A", text: "9 (pois 9 × 9 = 81)." },
      { letter: "B", text: "8,1." },
      { letter: "C", text: "18." },
      { letter: "D", text: "7." }
    ],
    correctAnswer: "A",
    explanation: "A operação inversa da potenciação quadrada é a raiz quadrada: como 9² = 81, a raiz quadrada de 81 é 9."
  },
  {
    grade: "6",
    topic: "Critérios de Divisibilidade",
    keywords: ["divisibilidade", "soma", "algarismos", "divisivel"],
    difficulty: "medio",
    question: "Um número natural é divisível por 3 quando a soma de todos os seus algarismos resulta em um múltiplo de 3. Qual dos seguintes números é divisível por 3?",
    options: [
      { letter: "A", text: "432 (4 + 3 + 2 = 9, que é divisível por 3)." },
      { letter: "B", text: "521 (5 + 2 + 1 = 8)." },
      { letter: "C", text: "103 (1 + 0 + 3 = 4)." },
      { letter: "D", text: "712 (7 + 1 + 2 = 10)." }
    ],
    correctAnswer: "A",
    explanation: "Aplicando o critério: a soma dos algarismos de 432 é 4 + 3 + 2 = 9. Como 9 divide exatamente por 3, 432 é divisível por 3 (432 ÷ 3 = 144)."
  },
  {
    grade: "6",
    topic: "Operações com Frações",
    keywords: ["multiplicacao", "fracoes", "numerador", "denominador"],
    difficulty: "facil",
    question: "Para multiplicar duas frações, multiplica-se numerador por numerador e denominador por denominador. O resultado simplificado da multiplicação (2/3) × (3/5) é:",
    options: [
      { letter: "A", text: "2/5 (simplificando o 3 do numerador com o do denominador)." },
      { letter: "B", text: "5/8." },
      { letter: "C", text: "6/15 apenas sem poder simplificar." },
      { letter: "D", text: "1/2." }
    ],
    correctAnswer: "A",
    explanation: "(2 × 3) / (3 × 5) = 6/15. Dividindo numerador e denominador por 3, obtém-se 2/5."
  },
  {
    grade: "6",
    topic: "Operações com Frações",
    keywords: ["divisao", "fracoes", "inverso", "segunda"],
    difficulty: "medio",
    question: "Na divisão de frações, a regra prática estabelece que devemos manter a primeira fração e multiplicá-la pelo inverso da segunda fração. Quanto é (3/4) ÷ (1/2)?",
    options: [
      { letter: "A", text: "3/2 (ou 1,5)." },
      { letter: "B", text: "3/8." },
      { letter: "C", text: "1/4." },
      { letter: "D", text: "2/3." }
    ],
    correctAnswer: "A",
    explanation: "(3/4) ÷ (1/2) = (3/4) × (2/1) = 6/4. Simplificando por 2: 3/2 = 1,5."
  },
  {
    grade: "7",
    topic: "Números Inteiros (Z)",
    keywords: ["expressao", "sinais", "parenteses", "multiplicacao"],
    difficulty: "medio",
    question: "Resolva a expressão numérica com números inteiros: (-3) + (+5) × (-2). O resultado correto é:",
    options: [
      { letter: "A", text: "-13." },
      { letter: "B", text: "-4." },
      { letter: "C", text: "+13." },
      { letter: "D", text: "+7." }
    ],
    correctAnswer: "A",
    explanation: "Pela ordem de precedência matemática, resolve-se primeiro a multiplicação: (+5) × (-2) = -10. Em seguida, soma-se: (-3) + (-10) = -13."
  },
  {
    grade: "7",
    topic: "Equações do 1º Grau",
    keywords: ["consecutivos", "soma", "numeros", "equacao"],
    difficulty: "medio",
    question: "A soma de dois números inteiros consecutivos é igual a 47. Quais são esses dois números?",
    options: [
      { letter: "A", text: "23 e 24." },
      { letter: "B", text: "20 e 27." },
      { letter: "C", text: "22 e 25." },
      { letter: "D", text: "21 e 26." }
    ],
    correctAnswer: "A",
    explanation: "Se o primeiro número é x, o consecutivo é (x + 1). Montando a equação: x + (x + 1) = 47 ⇒ 2x + 1 = 47 ⇒ 2x = 46 ⇒ x = 23. Os números são 23 e 24."
  },
  {
    grade: "7",
    topic: "Regra de Três Inversa",
    keywords: ["inversamente", "proporcionais", "operarios", "dias", "obra"],
    difficulty: "dificil",
    question: "Se 6 pedreiros constroem um muro em exatamente 10 dias, quantos dias levarão 12 pedreiros com o mesmo ritmo de trabalho para construir o mesmo muro?",
    options: [
      { letter: "A", text: "5 dias (pois dobrando o número de operários, o tempo cai pela metade)." },
      { letter: "B", text: "20 dias." },
      { letter: "C", text: "8 dias." },
      { letter: "D", text: "15 dias." }
    ],
    correctAnswer: "A",
    explanation: "São grandezas inversamente proporcionais: mais trabalhadores demandam menos tempo. 6 × 10 = 12 × x ⇒ 60 = 12x ⇒ x = 60 / 12 = 5 dias."
  },
  {
    grade: "7",
    topic: "Geometria e Triângulos",
    keywords: ["triangulo", "soma", "angulos", "internos", "180"],
    difficulty: "facil",
    question: "Um dos teoremas mais importantes da geometria plana afirma que a soma dos ângulos internos de QUALQUER triângulo é sempre igual a:",
    options: [
      { letter: "A", text: "180 graus (180°)." },
      { letter: "B", text: "360 graus (360°)." },
      { letter: "C", text: "90 graus (90°)." },
      { letter: "D", text: "100 graus (100°)." }
    ],
    correctAnswer: "A",
    explanation: "Em todo triângulo (seja equilátero, isósceles ou escaleno), a soma dos três ângulos internos totaliza invariavelmente 180°."
  },
  {
    grade: "7",
    topic: "Geometria e Triângulos",
    keywords: ["triangulo", "equilatero", "lados", "iguais", "angulos"],
    difficulty: "facil",
    question: "Um triângulo que possui todos os três lados com rigorosamente a mesma medida de comprimento é classificado como:",
    options: [
      { letter: "A", text: "Triângulo Equilátero (e todos os seus ângulos internos medem 60°)." },
      { letter: "B", text: "Triângulo Isósceles (que tem apenas dois lados iguais)." },
      { letter: "C", text: "Triângulo Escaleno (com os três lados diferentes)." },
      { letter: "D", text: "Triângulo Obtusângulo oblíquo." }
    ],
    correctAnswer: "A",
    explanation: "Triângulo equilátero tem 3 lados congruentes e 3 ângulos iguais de 60° (já que 180° ÷ 3 = 60°)."
  },
  {
    grade: "8",
    topic: "Geometria: Teorema de Pitágoras",
    keywords: ["pitagoras", "hipotenusa", "catetos", "triangulo", "retangulo"],
    difficulty: "medio",
    question: "Em um triângulo retângulo, os dois catetos medem 3 cm e 4 cm. Pelo Teorema de Pitágoras (a² = b² + c²), qual é a medida da hipotenusa?",
    options: [
      { letter: "A", text: "5 cm (pois 3² + 4² = 9 + 16 = 25, e √25 = 5)." },
      { letter: "B", text: "7 cm (3 + 4)." },
      { letter: "C", text: "12 cm." },
      { letter: "D", text: "6 cm." }
    ],
    correctAnswer: "A",
    explanation: "O quadrado da hipotenusa é igual à soma dos quadrados dos catetos: h² = 3² + 4² = 9 + 16 = 25 ⇒ h = √25 = 5 cm."
  },
  {
    grade: "8",
    topic: "Área de Figuras Planas",
    keywords: ["trapezio", "area", "base", "maior", "menor", "altura"],
    difficulty: "medio",
    question: "Um trapézio tem base maior medindo 12 cm, base menor medindo 8 cm e altura de 5 cm. A sua área é calculada pela fórmula A = [(B + b) × h] / 2 e vale:",
    options: [
      { letter: "A", text: "50 cm² (pois [(12 + 8) × 5] / 2 = (20 × 5) / 2 = 100 / 2 = 50)." },
      { letter: "B", text: "100 cm²." },
      { letter: "C", text: "40 cm²." },
      { letter: "D", text: "25 cm²." }
    ],
    correctAnswer: "A",
    explanation: "Aplicando a fórmula do trapézio: A = (B + b) × h / 2 = (12 + 8) × 5 / 2 = 20 × 5 / 2 = 100 / 2 = 50 cm²."
  },
  {
    grade: "8",
    topic: "Estatística e Medidas de Tendência Central",
    keywords: ["mediana", "moda", "estatistica", "rol", "termo", "central"],
    difficulty: "medio",
    question: "Considere a lista de idades de 5 amigos: 12, 11, 14, 12 e 16. Colocando os valores em ordem crescente (rol: 11, 12, 12, 14, 16), a MEDIANA e a MODA são, respectivamente:",
    options: [
      { letter: "A", text: "Mediana: 12 (termo central) e Moda: 12 (valor mais frequente)." },
      { letter: "B", text: "Mediana: 14 e Moda: 16." },
      { letter: "C", text: "Mediana: 13 e Moda: 11." },
      { letter: "D", text: "Mediana: 11 e Moda: 14." }
    ],
    correctAnswer: "A",
    explanation: "A mediana é o valor central da lista ordenada (12). A moda é o valor que aparece com maior frequência na amostra (o 12 aparece duas vezes)."
  }
];
