import { knightMoves } from "./knightMoves.js";
import { Board } from "./boardClass.js";

const t1 = [3, 3];
const t2 = [4, 3];
const path = knightMoves(t1, t2);

console.log(`> knightMoves([${t1}], [${t2}])\n=> You made it in ${path.length - 1}! Here's your path:`);
path.forEach(n => console.log(`\t${n}`));