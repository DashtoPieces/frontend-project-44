import { randomNum, gameLogic } from "../src/index.js"



const start = 'What is the result of the expression?'
const generateExpression = randomNum() + " " + ['+', '-', '*'][Math.floor(Math.random() * 3)] + " " + randomNum();
const checkAnswer = () => {
  const expression = generateExpression;
      const correctAnswer = eval(expression);
    return `${correctAnswer}`}
 

  const gameCalc = [start, generateExpression, checkAnswer()] ;
  export default gameCalc;