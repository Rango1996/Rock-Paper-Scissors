const options = ["Rock", "Paper", "Scissors"];
const resultDisplay = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

let scorePlayer = 0;
let scoreComputer = 0;

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function getPlayerChoice(playerSelection) {
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    displayResult(winner, playerSelection, computerSelection);
    updateScore(winner);
    checkGameOver();
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "draw";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function displayResult(winner, playerSelection, computerSelection) {
    let result;
    if (winner === "draw") {
        result = `It's a Tie! You both picked ${playerSelection}`;
    } else if (winner === "Player") {
        result = `You've won! ${playerSelection} beats ${computerSelection}!`;
    } else if (winner === "Computer") {
        result = `You've lost! ${computerSelection} beats ${playerSelection}!`;
    } else {
        result = "There's been an issue, are you sure you picked Rock, Paper, or Scissors?";
    }
    resultDisplay.textContent = result;
}

function updateScore(winner) {
    if (winner === "Player") {
        scorePlayer++;
    } else if (winner === "Computer") {
        scoreComputer++;
    }
    scoreDisplay.textContent = `Player: ${scorePlayer} | Computer: ${scoreComputer}`;
}

function checkGameOver() {
    if (scorePlayer >= 5 || scoreComputer >= 5) {
        const gameResult =
            scorePlayer > scoreComputer
                ? "You've won the game!"
                : scorePlayer < scoreComputer
                ? "You've lost the game."
                : "It's a draw!";
        resultDisplay.textContent = `Game Over. ${gameResult}`;

        gameButtons.forEach(button => button.disabled = true);
    }
}

document.getElementById('restart').addEventListener('click', restartGame);

function restartGame() {
    scorePlayer = 0;
    scoreComputer = 0;
    resultDisplay.textContent = '';
    scoreDisplay.textContent = `Player: ${scorePlayer} | Computer: ${scoreComputer}`;

    gameButtons.forEach(button => button.disabled = false);
}

const gameButtons = document.querySelectorAll(".BtnsOptions button");
gameButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const playerChoice = button.id;
        getPlayerChoice(playerChoice);
    });
});
