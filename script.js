const squares = document.querySelectorAll('.square');

let gameState = {
    gameBoard: [],
    turn: 1
}

const gameControls = (() => {

    const checkForWin = () => {
        if ((gameState.gameBoard[0] == 1 && gameState.gameBoard[1] == 1 && gameState.gameBoard[2] == 1) ||
            (gameState.gameBoard[3] == 1 && gameState.gameBoard[4] == 1 && gameState.gameBoard[5] == 1) ||
            (gameState.gameBoard[6] == 1 && gameState.gameBoard[7] == 1 && gameState.gameBoard[8] == 1) ||
            (gameState.gameBoard[0] == 1 && gameState.gameBoard[3] == 1 && gameState.gameBoard[6] == 1) ||
            (gameState.gameBoard[1] == 1 && gameState.gameBoard[4] == 1 && gameState.gameBoard[7] == 1) ||
            (gameState.gameBoard[2] == 1 && gameState.gameBoard[5] == 1 && gameState.gameBoard[8] == 1) ||
            (gameState.gameBoard[0] == 1 && gameState.gameBoard[4] == 1 && gameState.gameBoard[8] == 1) ||
            (gameState.gameBoard[6] == 1 && gameState.gameBoard[4] == 1 && gameState.gameBoard[2] == 1)) {
                //x's win
                console.log('x wins!')
            } else if((gameState.gameBoard[0] == 2 && gameState.gameBoard[1] == 2 && gameState.gameBoard[2] == 2) ||
            (gameState.gameBoard[3] == 2 && gameState.gameBoard[4] == 2 && gameState.gameBoard[5] == 2) ||
            (gameState.gameBoard[6] == 2 && gameState.gameBoard[7] == 2 && gameState.gameBoard[8] == 2) ||
            (gameState.gameBoard[0] == 2 && gameState.gameBoard[3] == 2 && gameState.gameBoard[6] == 2) ||
            (gameState.gameBoard[1] == 2 && gameState.gameBoard[4] == 2 && gameState.gameBoard[7] == 2) ||
            (gameState.gameBoard[2] == 2 && gameState.gameBoard[5] == 2 && gameState.gameBoard[8] == 2) ||
            (gameState.gameBoard[0] == 2 && gameState.gameBoard[4] == 2 && gameState.gameBoard[8] == 2) ||
            (gameState.gameBoard[6] == 2 && gameState.gameBoard[4] == 2 && gameState.gameBoard[2] == 2)) {
                //o's win
                console.log('o wins!')
            } else if (gameState.gameBoard.length == 9 && !(gameState.gameBoard.includes(undefined))) {
                //tie game
                console.log('tie game!')
            }
    }

    const updateGameState = (square, move) => {
        gameState.gameBoard[square] = move;
        checkForWin();
    }

    function makeMove() {

        if (this.innerHTML == '') {
            if (!(gameState.turn % 2 == 0)) {
                this.innerHTML = 'X';
                gameState.turn++
                updateGameState(this.data , 1)

            } else {
                this.innerHTML = 'O';
                gameState.turn++
                updateGameState(this.data , 2)
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