import _ from 'lodash';
import readlineSync from 'readline-sync';
import { userName } from './cli.js';

export const randomNum = () => _.random(1, 25);

export const gameLogic = ([start, quest]) => {
  console.log(start);
  let round = 0
  while (round < 3) {
    const usedQuest = quest();
    console.log(`Question: ${usedQuest.question}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    if (answer === `${usedQuest.answer}`) {
      console.log('Correct!');
      round += 1
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${usedQuest.answer}".`);
      break;
    }
  }
  if (round === 3) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
