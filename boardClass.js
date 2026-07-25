import { Node } from "./nodeClass.js";

function findMoves(x, y) {
    const moves = [
        [x + 2, y + 1], [x + 1, y + 2],
        [x + 2, y - 1], [x + 1, y - 2],
        [x - 2, y - 1], [x - 1, y - 2],
        [x - 2, y + 1], [x - 1, y + 2],
    ];

    return moves.filter(coor => {
        return coor[0] >= 0 && coor[0] < 8 && coor[1] >= 0 && coor[1] < 8;
    });
}

class Board {
    constructor() {
        this.graph = [];
        this.buildGraph();
    }

    buildGraph() {
        for (let i = 0; i < 8; i++)
            for (let j = 0; j < 8; j++)
                this.graph.push(new Node(i, j));
        
        this.graph.forEach(node => {
            const moves = findMoves(node.x, node.y);

            if (node.x == 0 && node.y == 0)
                console.log(moves);
            moves.forEach(coor => {
                node.moves.push(this.findNode(coor[0], coor[1]));
            });
        });
    }

    findNode(x, y) {
        return this.graph.find(n => n.x == x && n.y == y);
    }
}

export { Board };