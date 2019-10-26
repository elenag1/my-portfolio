/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
/*----- app's state (variables) -----*/
let board;
let turn = "X";
let win;

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
const message = document.querySelector('h2')
const resetButton = document.getElementById('reset-button')

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);

resetButton.addEventListener('click', init);


/*----- functions -----*/
function getWinner() {
    // loop over the board array and compare the marks ot see if they match with a winning combo
    let winner = null;
    winningCombos.forEach(function (combo) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
    });

    //return winner ? winner : board.includes('') ? null : 'T'
    if (winner){
        return winner
    } else if (board.includes('')) {
        return null
    } else {
        return 'T'
    }
};

function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    // new code below
    console.log(board)
    board[idx] = turn;
    turn = turn === 'X' ? 'O': "X"
    win = getWinner();
    console.log(win)
    render();
    //message.textContent = getText();
    // check your console logs to make sure it's working!
    //console.log(board);
    
};




function init() {
    board = ['', '', '', '', '', '', '', '', ''
    ];
    render();

}
const getText = () => {
     //this function checks for a winner and returns a message as a string.
     //if the winner is 'T' then the message will be 'It's a tie!' 
     //if the winner is <X or O> the message is <X or O> wins the game
     // if the winner is nit determined yet the message 'It's <X or O>'s turn
     let text = '';

     if (win === 'T') {
         text = "That's a tie!";
     } else if (win === 'X' || win ==='O') {
         text = `${win} wins the game!`
     } else {
         text = `It's ${turn}'s turn!`
     }
     return text;
}

function render() {
    // some logic for determining how to render the game
    board.forEach(function (mark, index) {
        squares[index].textContent = mark;
    });
    
    message.textContent = getText();
}


init()