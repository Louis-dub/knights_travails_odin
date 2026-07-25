import { Board } from "./boardClass.js";
import { Node } from "./nodeClass.js";

const board = new Board();

function findNode(graph, x, y) {
  return graph.find((n) => n.x === x && n.y === y);
}

test("All nodes in board", () => {
    expect(board.graph.length).toBe(64);
});

test("Corner node [0,0] has correct knight moves", () => {
    const node = findNode(board.graph, 0, 0);
    const expected = [[1, 2], [2, 1]];

    expect(node.moves.length).toBe(expected.length);
    expected.forEach(([x, y]) => {
        expect(node.moves.some((n) => n.x === x && n.y === y)).toBe(true);
    });
});

test("Edge node [0,3] has correct knight moves", () => {
    const node = findNode(board.graph, 0, 3);
    const expected = [[1, 1], [1, 5], [2, 2], [2, 4]];

    expect(node.moves.length).toBe(expected.length);
    expected.forEach(([x, y]) => {
        expect(node.moves.some((n) => n.x === x && n.y === y)).toBe(true);
    });
});

test("Center node [4,4] has correct knight moves (all 8)", () => {
    const node = findNode(board.graph, 4, 4);
    const expected = [
        [5, 6], [5, 2], [3, 6], [3, 2],
        [6, 5], [6, 3], [2, 5], [2, 3],
    ];

    expect(node.moves.length).toBe(8);
    expected.forEach(([x, y]) => {
        expect(node.moves.some((n) => n.x === x && n.y === y)).toBe(true);
    });
});