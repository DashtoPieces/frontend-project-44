import gameIsPrime from '../games/prime-games.js';
import { gameLogic } from '../src/index.js';
import { greatings } from '../src/cli.js';

greatings();
gameLogic(gameIsPrime);
