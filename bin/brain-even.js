import readlineSync from 'readline-sync'
import { userName } from '../src/cli.js';

export let randomNumber = Math.floor(Math.random() * 10 + 1)
const isEven = (num) => { return num % 2 == 0; }

export const isEvenGame = () => {
 console.log('Answer "yes" if the number is even, otherwise answer "no".')
 let i = 0;
 while (i < 3) {
    let num = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${num}`);
    let answer = readlineSync.question("Your answer: ").toLowerCase();
    if (isEven(num)) {
        if (answer === "yes")  {
            console.log("Correct!");
            i += 1
        } else {console.log(`"${answer}"is wrong answer ;(. Correct answer was 'yes'.`);
        break; 
    }
 } else { 
        if (answer === "no")    {
            console.log("Correct!");
            i += 1
        } else {console.log(`"${answer}"is wrong answer ;(. Correct answer was 'no'.`);
        break
    } 
    }
}
  i === 3 ? console.log("Congratulations, " + userName + "!") : console.log(`Let's try again, ${userName}!`);
}