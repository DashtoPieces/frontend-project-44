import { randomNum } from '../src/index.js';

const start = 'What is the result of the expression?';

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const generateExpression = () => {
  const num1 = randomNum();
  const num2 = randomNum();
  const operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];

  const expression = `${num1} ${operator} ${num2}`;
  const checkAnswer = calculate(num1, operator, num2);

  return { question: expression, answer: checkAnswer };
};

const gameCalc = [start, generateExpression];
export default gameCalc;
