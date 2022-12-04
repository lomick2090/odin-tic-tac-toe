const squares = document.querySelectorAll('.square');
const nameSubmits = document.querySelectorAll('.namesubmit');
const playerName = document.querySelectorAll('div>h1')


const gameControls = (() => {

    let gameState = {
        player1: {name: 'PLAYER 1',
                  wins: 0},
        player2: {name: 'PLAYER 2',
                  wins: 0},
        gameBoard: [],
        turn: 1,
        gameComplete: false,
    }

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
                gameState.gameComplete = true;
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
                gameState.gameComplete = true;
            } else if (gameState.gameBoard.length == 9 && !(gameState.gameBoard.includes(undefined))) {
                //tie game
                console.log('tie game!')
                gameState.gameComplete = true;
            }
    }

    const updateGameState = (square, move) => {
        gameState.gameBoard[square] = move;
        checkForWin();
    }

    function updatePlayerName(input, position) {
        gameState.player1.name = input;
        playerName[position].innerHTML = input;
    }

    function makeMove() {

        if (gameState.gameComplete){
            alert('Game Over ... restart game to play!')
        } else if (this.innerHTML == '') {
            if (!(gameState.turn % 2 == 0)) {
                this.innerHTML = 'X';
                gameState.turn++;
                updateGameState(this.data , 1);

            } else {
                this.innerHTML = 'O';
                gameState.turn++;
                updateGameState(this.data , 2);
            }
        };
    
    
    };

    return {
        makeMove,
        updatePlayerName
    }

})();


nameSubmits.forEach((button) => button.addEventListener('click', function() { 
    gameControls.updatePlayerName(button.previousElementSibling.value, Array.prototype.indexOf.call(nameSubmits, button));
    button.parentNode.remove();
    }));

for (i=0; i < squares.length; i ++) {
    squares[i].addEventListener('click', gameControls.makeMove);
    squares[i].data = i;
};