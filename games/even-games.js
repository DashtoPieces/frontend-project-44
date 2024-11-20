import { randomNum } from "../src/index.js"

const start = 'Answer "yes" if the number is even, otherwise answer "no".'
const question = () => `${randomNum()}`
const isEven =  question % 2 == 0 ? 'yes' : 'no';

const gameIsEven = [start, question(), isEven] 
export default gameIsEven;