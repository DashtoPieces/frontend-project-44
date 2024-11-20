import _ from "lodash";
import readlineSync from 'readline-sync'
import { userName } from '../src/cli.js';

export const randomNum = () => _.random(1, 100);

export const gameLogic = ([strt, quest, ans]) => {
    console.log(strt)
    let i = 0;
    while (i < 3) {        
       console.log('Question: ' + quest);
       let correctAnswer = ans
       let answer = readlineSync.question("Your answer: ").toLowerCase();
       if (quest) {
           if (answer === ans)  {
               console.log("Correct!");
               i += 1
           } else {console.log(`"${answer}" is wrong answer ;(. Correct answer was "` + correctAnswer + `".`);
           break; 
       }
    } 
   }
     i === 3 ? console.log("Congratulations, " + userName + "!") : console.log(`Let's try again, ${userName}!`);
   }