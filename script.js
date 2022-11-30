const squares = document.querySelectorAll('.square');
let gameboard = [];


const game = (() => {

    let turn = 1;

    function makeMove() {

        if (this.innerHTML == '') {
            if (!(turn % 2 == 0)) {
                this.innerHTML = 'X';
                turn++

            } else {
                this.innerHTML = 'O';
                turn++
            }
        };
    
    
    };

    return {
        makeMove
    }

})();



squares.forEach((element) => {
    element.addEventListener('click', game.makeMove)
});