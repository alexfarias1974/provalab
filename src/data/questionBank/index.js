import { cienciasQuestions } from './ciencias.js';
import { geografiaQuestions } from './geografia.js';
import { historiaQuestions } from './historia.js';
import { portuguesQuestions } from './portugues.js';
import { matematicaQuestions } from './matematica.js';
import { inglesQuestions } from './ingles.js';
import { arteQuestions } from './arte.js';

export const QUESTION_BANK = {
  Ciências: cienciasQuestions,
  Geografia: geografiaQuestions,
  História: historiaQuestions,
  'Língua Portuguesa': portuguesQuestions,
  Matemática: matematicaQuestions,
  'Língua Inglesa': inglesQuestions,
  Arte: arteQuestions
};

/**
 * Embaralha as alternativas de uma questão e atualiza a letra da alternativa correta.
 * Isso garante que mesmo uma questão repetida terá alternativas em ordens diferentes!
 */
export function shuffleQuestionOptions(question) {
  const correctText = question.options.find(o => o.letter === question.correctAnswer)?.text;
  
  // Clona e embaralha as opções
  const shuffledOptionsText = question.options
    .map(o => o.text)
    .sort(() => 0.5 - Math.random());

  const letters = ['A', 'B', 'C', 'D'];
  const newOptions = shuffledOptionsText.map((text, idx) => ({
    letter: letters[idx],
    text
  }));

  const newCorrectOption = newOptions.find(o => o.text === correctText);

  return {
    ...question,
    options: newOptions,
    correctAnswer: newCorrectOption ? newCorrectOption.letter : 'A'
  };
}

/**
 * Gerador procedimental de questões matemáticas para garantir infinitas variações numéricas.
 */
export function generateProceduralMathQuestions(count = 5, difficulty = 'medio') {
  const procedural = [];

  for (let i = 0; i < count; i++) {
    const type = i % 5;
    if (type === 0) {
      // Equação do 1º grau: ax + b = c
      const a = 2 + Math.floor(Math.random() * 4); // 2 a 5
      const x = 3 + Math.floor(Math.random() * 10); // 3 a 12
      const b = 1 + Math.floor(Math.random() * 15); // 1 a 15
      const c = a * x + b;
      
      const distractors = [x - 2, x + 2, x + 3].filter(v => v !== x);

      const options = [
        { letter: 'A', text: `x = ${x}` },
        { letter: 'B', text: `x = ${distractors[0]}` },
        { letter: 'C', text: `x = ${distractors[1]}` },
        { letter: 'D', text: `x = ${distractors[2] || x + 1}` }
      ];

      procedural.push({
        grade: '7',
        topic: 'Equações do 1º Grau',
        keywords: ['equacao', 'algebra', 'incognita', 'calculo'],
        difficulty: 'medio',
        question: `Qual é o valor numérico da incógnita 'x' que resolve a equação: ${a}x + ${b} = ${c}?`,
        options,
        correctAnswer: 'A',
        explanation: `Subtraindo ${b} dos dois lados: ${a}x = ${c - b}. Dividindo por ${a}: x = ${c - b} / ${a} = ${x}.`
      });
    } else if (type === 1) {
      // Porcentagem
      const perc = [10, 15, 20, 25, 30, 50][Math.floor(Math.random() * 6)];
      const baseVal = [100, 120, 160, 200, 240, 300, 400][Math.floor(Math.random() * 7)];
      const res = (perc / 100) * baseVal;

      const distractors = [res + 10, res - 5 > 0 ? res - 5 : res + 15, res * 2];

      const options = [
        { letter: 'A', text: `R$ ${res.toFixed(2).replace('.', ',')}` },
        { letter: 'B', text: `R$ ${distractors[0].toFixed(2).replace('.', ',')}` },
        { letter: 'C', text: `R$ ${distractors[1].toFixed(2).replace('.', ',')}` },
        { letter: 'D', text: `R$ ${distractors[2].toFixed(2).replace('.', ',')}` }
      ];

      procedural.push({
        grade: '6',
        topic: 'Porcentagem e Proporcionalidade',
        keywords: ['porcentagem', 'desconto', 'calculo', 'reais'],
        difficulty: 'facil',
        question: `Uma mercadoria custa R$ ${baseVal},00. Em uma liquidação, ela recebeu um desconto de ${perc}%. Qual é o valor em reais desse desconto?`,
        options,
        correctAnswer: 'A',
        explanation: `Calculando ${perc}% de R$ ${baseVal},00: (${perc} / 100) × ${baseVal} = R$ ${res.toFixed(2).replace('.', ',')}.`
      });
    } else if (type === 2) {
      // Área de Retângulo
      const b = 4 + Math.floor(Math.random() * 8); // 4 a 11
      const h = 3 + Math.floor(Math.random() * 6); // 3 a 8
      const area = b * h;
      const perim = 2 * (b + h);

      const options = [
        { letter: 'A', text: `${area} m²` },
        { letter: 'B', text: `${perim} m² (este seria o perímetro)` },
        { letter: 'C', text: `${area + 6} m²` },
        { letter: 'D', text: `${area - 4 > 0 ? area - 4 : area + 10} m²` }
      ];

      procedural.push({
        grade: '6',
        topic: 'Geometria e Medidas',
        keywords: ['area', 'retangulo', 'geometria', 'metros'],
        difficulty: 'facil',
        question: `Um terreno retangular possui ${b} metros de comprimento e ${h} metros de largura. A área desse terreno é de:`,
        options,
        correctAnswer: 'A',
        explanation: `A área do retângulo é calculada por A = base × altura = ${b} m × ${h} m = ${area} m².`
      });
    } else if (type === 3) {
      // Operações com Números Inteiros
      const n1 = -(2 + Math.floor(Math.random() * 8));
      const n2 = 3 + Math.floor(Math.random() * 7);
      const prod = n1 * n2;

      const options = [
        { letter: 'A', text: `${prod}` },
        { letter: 'B', text: `${Math.abs(prod)}` },
        { letter: 'C', text: `${n1 + n2}` },
        { letter: 'D', text: `${n1 - n2}` }
      ];

      procedural.push({
        grade: '7',
        topic: 'Números Inteiros (Z)',
        keywords: ['inteiros', 'sinais', 'multiplicacao'],
        difficulty: 'medio',
        question: `Qual é o resultado da multiplicação entre os números inteiros: (${n1}) × (+${n2})?`,
        options,
        correctAnswer: 'A',
        explanation: `Na multiplicação de sinais diferentes (negativo vezes positivo), o resultado é sempre negativo: (${n1}) × (+${n2}) = ${prod}.`
      });
    } else {
      // Média Aritmética
      const v1 = 6 + Math.floor(Math.random() * 4);
      const v2 = 7 + Math.floor(Math.random() * 3);
      const v3 = 5 + Math.floor(Math.random() * 5);
      const sum = v1 + v2 + v3;
      const media = (sum / 3).toFixed(1).replace('.', ',');

      const options = [
        { letter: 'A', text: `${media}` },
        { letter: 'B', text: `${(sum / 2).toFixed(1).replace('.', ',')}` },
        { letter: 'C', text: `${(sum / 4).toFixed(1).replace('.', ',')}` },
        { letter: 'D', text: `${(parseFloat(media) + 1.2).toFixed(1).replace('.', ',')}` }
      ];

      procedural.push({
        grade: '7',
        topic: 'Estatística e Médias',
        keywords: ['media', 'aritmetica', 'estatistica'],
        difficulty: 'facil',
        question: `Um estudante obteve as notas ${v1},0; ${v2},0 e ${v3},0 em três trabalhos escolares. A sua média aritmética é:`,
        options,
        correctAnswer: 'A',
        explanation: `Média = (${v1} + ${v2} + ${v3}) / 3 = ${sum} / 3 ≈ ${media}.`
      });
    }
  }

  return procedural.map(shuffleQuestionOptions);
}
