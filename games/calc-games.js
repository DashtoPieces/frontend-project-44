import { randomNum, gameLogic } from "../src/index.js"
import _ from "lodash";



const start = 'What is the result of the expression?'
const generateExpression = () => randomNum() + " " + ['+', '-', '*'][_.random(0, 2)] + " " + randomNum();
const checkAnswer = (expression) => eval(expression);
 

  const gameCalc = [start, generateExpression, checkAnswer] ;
  export default gameCalc;