import { Board } from "./boardClass.js";
import { Node } from "./nodeClass.js";

const board = new Board();

const allCoords = [];
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        allCoords.push([i, j]);
    }
}

test.each(allCoords)("Node [%i][%i] is linked correctly to its neighbors", (i, j) => {
    const node = board.board[i][j];

    // Right
    if (i < 7) {
        expect(node.right.x).toBe(i + 1);
        expect(node.right.y).toBe(j);
    } else {
        expect(node.right).toBeNull();
    }

    // Left
    if (i > 0) {
        expect(node.left.x).toBe(i - 1);
        expect(node.left.y).toBe(j);
    } else {
        expect(node.left).toBeNull();
    }

    // Top
    if (j < 7) {
        expect(node.top.x).toBe(i);
        expect(node.top.y).toBe(j + 1);
    } else {
        expect(node.top).toBeNull();
    }

    // Bottom
    if (j > 0) {
        expect(node.bottom.x).toBe(i);
        expect(node.bottom.y).toBe(j - 1);
    } else {
        expect(node.bottom).toBeNull();
    }
});