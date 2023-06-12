console.log("Hi")

const options = ["rock", "paper", "scissors"];
function getComputerChoice() {
    const choice = options[Math.floor(Math.random()*options.length)]
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection==computerSelection){
        return "draw";
    }
    else if(
    (playerSelection=="rock" && computerSelection=="scissors") || 
    (playerSelection=="scissors" && computerSelection=="paper") || 
    (playerSelection=="paper" && computerSelection=="rock")
    ){
        return "Player";
    }
    else if (
        (computerSelection=="rock" && playerSelection=="scissors") || 
        (computerSelection=="scissors" && playerSelection=="paper") || 
        (computerSelection=="paper" && playerSelection=="rock") 
    ){
        return "Computer";
    }
else {
    return "problem";
}
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result=="Tie"){
        return "It's a Tie!";
    }
    else if (result=="Player"){
        return `You've won! ${playerSelection} beats ${computerSelection}!`;
    }
    else if (result=="Computer"){
        return `You've lost! ${computerSelection} beats ${playerSelection}!`;
    }
    else if (result=="problem"){
        return "There's been an issue, are you sure you picked rock, paper or scissors?"
    }
    else {
        return "There's been an issue, are you sure you picked rock, paper or scissors?"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));