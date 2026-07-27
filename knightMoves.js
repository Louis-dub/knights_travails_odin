import { Board } from "./boardClass.js";

export function knightMoves(c1, c2) {
    const board = new Board();
    const n1 = board.findNode(c1[0], c1[1]);
    const n2 = board.findNode(c2[0], c2[1]);
    const visit = [n1];
    const path = [[n2.x, n2.y]];
    let curNode = n1;
    let end = false;
    let i = 0;

    while (!end) {
        curNode = board.findNode(visit[i].x, visit[i].y);
        curNode.moves = curNode.allMoves.filter(n => !visit.includes(n));
        if (curNode.moves.includes(n2)) {
            end = true;
            path.push([curNode.x, curNode.y]);
        }
        else {
            curNode.moves.forEach(n => visit.push(n));
            i++;
        }
    }
    while (curNode !== n1) {
        curNode = curNode.allMoves.find(n => visit.includes(n) && !curNode.moves.includes(n));
        path.push([curNode.x, curNode.y]);
    }
    return path.reverse();
}
