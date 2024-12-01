import { randomNum } from "../src/index.js"
import _ from "lodash";



const start = 'Find the greatest common divisor of given numbers.'
const question = () => `${randomNum()} ${randomNum()}`

const gcd = ([first, second]) => {
    while (second !== 0) {
        const temp = second;
        second = first % second;
        first = temp;
    }
    return first;
}

const checkAnswer = (arr) => gcd(_.split(arr, ' '));
 

  const gameGCD = [start, question, checkAnswer] ;
  export default gameGCD;