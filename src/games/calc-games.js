import { randomNum } from '../index.js';
import { gameLogic } from '../index.js';

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
  const rounds = 3; 
  const operator = ['+', '-', '*'][Math.floor(Math.random() * rounds)];

  const expression = `${num1} ${operator} ${num2}`;
  const checkAnswer = calculate(num1, operator, num2);

  return { question: expression, answer: checkAnswer };
};

const gameCalc = [start, generateExpression];

const startCalcGame = () => gameLogic(gameCalc);

export default startCalcGame;
