const board = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const restartBtn = document.getElementById('restart');

let currentPlayer = "X";
let boardState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
];

function checkWinner() {
    for (const condition of winningConditions) {
        const [a, b, c] = condition;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            gameActive = false;
            statusText.textContent = `${currentPlayer} wins!`;
            board[a].classList.add('win');
            board[b].classList.add('win');
            board[c].classList.add('win');
            return;
        }
    }

    if (!boardState.includes("")) {
        gameActive = false;
        statusText.textContent = "It's a draw!";
    }
}

function handleClick(event) {
    const index = event.target.dataset.index;

    if (boardState[index] !== "" || !gameActive) return;

    boardState[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    event.target.classList.add('taken');

    checkWinner();

    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function restartGame() {
    boardState.fill("");
    gameActive = true;
    currentPlayer = "X";
    statusText.textContent = "";

    board.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove('taken', 'win');
    });
}

board.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);