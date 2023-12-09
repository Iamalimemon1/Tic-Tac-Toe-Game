let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');
let gameActive = true;

function makeMove(cell) {
    if (!gameActive || cell.innerText !== '') return;

    cell.innerText = currentPlayer;
    cell.classList.add(currentPlayer === 'X' ? 'x' : 'o');

    if (checkWin()) {
        alert(`${currentPlayer} wins!`);
        gameActive = false;
    } else if (isBoardFull()) {
        alert("It's a tie!");
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return cells[a].innerText !== '' &&
            cells[a].innerText === cells[b].innerText &&
            cells[a].innerText === cells[c].innerText;
    });
}

function isBoardFull() {
    return Array.from(cells).every(cell => cell.innerText !== '');
}

function restartGame() {
    cells.forEach(cell => {
        cell.innerText = '';
        cell.classList.remove('x', 'o');
    });

    currentPlayer = 'X';
    gameActive = true;
}
