import { randomNum } from '../src/index.js';

const start = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = () => {
  const usedNum = `${randomNum()}`;
  const checkAnswer = (question) => (question % 2 === 0 ? 'yes' : 'no');
  return { question: usedNum, answer: checkAnswer };
};

const gameIsEven = [start, isEven];
export default gameIsEven;
