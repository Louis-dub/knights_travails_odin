import { Board } from "./boardClass.js";

export function knightMoves(c1, c2) {
    const board = new Board();
    const n1 = board.findNode(c1[0], c1[1]);
    const n2 = board.findNode(c2[0], c2[1]);
    const visit = [[null, n1]];
    const path = [[n2.x, n2.y]];
    let curNode = n1;
    let end = false;
    let i = 0;

    while (!end) {
        curNode = board.findNode(visit[i][1].x, visit[i][1].y);
        curNode.moves = curNode.allMoves.filter(n => !visit.some(node => node[1] === n));
        if (curNode.moves.includes(n2))
            end = true;
        else {
            curNode.moves.forEach(n => visit.push([curNode, n]));
            i++;
        }
    }
    let node = visit.find(n => n[1] === curNode);
    while (curNode !== n1) {
        curNode = node[1];
        path.push([curNode.x, curNode.y]);
        node = visit.find(n => n[1] === node[0]);
    }
    return path.reverse();
}
