import { randomNum } from '../src/index.js';

const start = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrime = (num) => {
  if (num === 1) { return 'yes'; }
  let primeIndicator = 0;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) primeIndicator += 1;
  }
  if (primeIndicator > 1) { return 'no'; }
  return 'yes';
};

const isPrime = () => {
  const usedNum = `${randomNum()}`;
  const checkAnswer = checkPrime(usedNum);

  return { question: usedNum, answer: checkAnswer };
};

const gameIsPrime = [start, isPrime];
export default gameIsPrime;
