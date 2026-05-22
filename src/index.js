import readlineSync from 'readline-sync';
import { userName, greatings } from './cli.js';

export const randomNum = () => Math.floor(Math.random() * 25) + 1;

export const gameLogic = ([start, quest]) => {
  greatings();
  console.log(start);  
  let round = 0;
  while (round < 3) {
    const usedQuest = quest();
    console.log(`Question: ${usedQuest.question}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    if (answer === `${usedQuest.answer}`) {
      console.log('Correct!');
      round += 1;
    } else {
      console.log(
        `"${answer}" is wrong answer ;(. Correct answer was "${usedQuest.answer}".`,
      );
      break;
    }
  }
  if (round === 3) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
