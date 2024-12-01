import _ from "lodash";
import readlineSync from 'readline-sync'
import { userName } from '../src/cli.js';

export const randomNum = () => _.random(1, 20);

export const gameLogic = ([strt, quest, ans]) => {
    console.log(strt)
    let i = 0;
    while (i < 3) {        
       const usedQuest = quest();
       console.log('Question: ' + usedQuest);
       let correctAnswer = `${ans(usedQuest)}`;
       let answer = readlineSync.question("Your answer: ").toLowerCase();
       if (answer === correctAnswer)  {
               console.log("Correct!");
               i += 1
           } else {console.log(`"${answer}" is wrong answer ;(. Correct answer was "` + correctAnswer + `".`);
           break; 
       }
    
   }
     i === 3 ? console.log("Congratulations, " + userName + "!") : console.log(`Let's try again, ${userName}!`);
   }