console.log("Hi")

const options = ["rock", "paper", "scissors"];
function getComputerChoice() {
    const choice = options[Math.floor(Math.random()*options.length)]
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    playerSelection=playerSelection.toLowerCase();
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
    if (result=="draw"){
        return "It's a Tie!";
    }
    else if (result=="Player"){
        return `You've won! ${playerSelection.toLowerCase()} beats ${computerSelection}!`;
    }
    else if (result=="Computer"){
        return `You've lost! ${computerSelection} beats ${playerSelection.toLowerCase()}!`;
    }
    else if (result=="problem"){
        return "There's been an issue, are you sure you picked rock, paper or scissors?"
    }
    else {
        return "There's been an issue, are you sure you picked rock, paper or scissors?"
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput== false){
        const choice = prompt("Rock Paper Scissors");
        if (choice==null){
            continue;
        }
        if (options){
            validatedInput=true;
            return choice;
        }
    }
}

function game(){
    console.log("Ready to Play?")
    for (let i = 0; i < 5; i++) {
        const playerSelection=getPlayerChoice();
        const computerSelection=getComputerChoice();
        const result=playRound(playerSelection,computerSelection);
        console.log(result);
    }
}

game()