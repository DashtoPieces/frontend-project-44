import _ from "lodash";
import { randomNum, gameLogic } from "../index.js";

const start = "Find the greatest common divisor of given numbers.";

const gsd = () => {
  const nums = `${randomNum()} ${randomNum()}`;

  const gcdCheck = ([a, b]) => {
    let first = a;
    let second = b;

    while (second !== 0) {
      const temp = second;
      second = first % second;
      first = temp;
    }
    return first;
  };
  const checkAnswer = gcdCheck(_.split(nums, " "));
  return { question: nums, answer: checkAnswer };
};

const gameGCD = [start, gsd];

const startGCDGame = () => gameLogic(gameGCD);

export default startGCDGame;
