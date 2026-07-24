import { Node } from "./nodeClass.js";

class Board {
    constructor() {
        this.board = [];
        this.buildBoard();
    }

    buildBoard() {
        for (let i = 0; i < 8; i++) {
            this.board.push(new Array());
            for (let j = 0; j < 8; j++) {
                this.board[i].push(new Node(i, j));
                if (i > 0)
                    this.linkNode(this.board[i - 1][j], this.board[i][j]);
                if (j > 0)
                    this.linkNode(this.board[i ][j - 1], this.board[i][j]);
            }
        }
    }

    linkNode(n1, n2) {
        let x = n1.x - n2.x;
        let y = n1.y - n2.y;

        if (x == -1) {
            n1.right = n2;
            n2.left = n1;
        } else if (x == 1) {
            n1.left = n2;
            n2.right = n1;
        } else if (y == -1) {
            n1.top = n2;
            n2.bottom = n1;
        } else {
            n1.bottom = n2;
            n2.top = n1;
        }
    }
}

export { Board };