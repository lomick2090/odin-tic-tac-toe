const squares = document.querySelectorAll('.square');
let gameBoard = [];
let turn = 1;


const gameControls = (() => {

    const checkForWin = () => {
        if ((gameBoard[0] == 1 && gameBoard[1] == 1 && gameBoard[2] == 1) ||
            (gameBoard[3] == 1 && gameBoard[4] == 1 && gameBoard[5] == 1) ||
            (gameBoard[6] == 1 && gameBoard[7] == 1 && gameBoard[8] == 1) ||
            (gameBoard[0] == 1 && gameBoard[3] == 1 && gameBoard[6] == 1) ||
            (gameBoard[1] == 1 && gameBoard[4] == 1 && gameBoard[7] == 1) ||
            (gameBoard[2] == 1 && gameBoard[5] == 1 && gameBoard[8] == 1) ||
            (gameBoard[0] == 1 && gameBoard[3] == 1 && gameBoard[8] == 1) ||
            (gameBoard[6] == 1 && gameBoard[4] == 1 && gameBoard[2] == 1)) {
                //x's win
                console.log('x wins!')
            } else if((gameBoard[0] == 2 && gameBoard[1] == 2 && gameBoard[2] == 2) ||
            (gameBoard[3] == 2 && gameBoard[4] == 2 && gameBoard[5] == 2) ||
            (gameBoard[6] == 2 && gameBoard[7] == 2 && gameBoard[8] == 2) ||
            (gameBoard[0] == 2 && gameBoard[3] == 2 && gameBoard[6] == 2) ||
            (gameBoard[1] == 2 && gameBoard[4] == 2 && gameBoard[7] == 2) ||
            (gameBoard[2] == 2 && gameBoard[5] == 2 && gameBoard[8] == 2) ||
            (gameBoard[0] == 2 && gameBoard[4] == 2 && gameBoard[8] == 2) ||
            (gameBoard[6] == 2 && gameBoard[4] == 2 && gameBoard[2] == 2)) {
                //o's win
                console.log('o wins!')
            }
    }

    const updateGameBoard = (square, move) => {
        gameBoard[square] = move;
        checkForWin();
    }

    function makeMove() {

        if (this.innerHTML == '') {
            if (!(turn % 2 == 0)) {
                this.innerHTML = 'X';
                turn++
                updateGameBoard(this.data , 1)

            } else {
                this.innerHTML = 'O';
                turn++
                updateGameBoard(this.data , 2)
            }
        };
    
    
    };

    return {
        makeMove
    }

})();

for (i=0; i < squares.length; i ++) {
    squares[i].addEventListener('click', gameControls.makeMove);
    squares[i].data = i;
}