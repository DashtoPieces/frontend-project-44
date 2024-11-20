#!/usr/bin/env node

import { greatings } from '../src/cli.js';
import gameCalc from "../games/calc-games.js";
import { gameLogic } from "../src/index.js";
import gameIsEven from '../games/even-games.js';



greatings();
gameLogic(gameCalc)




