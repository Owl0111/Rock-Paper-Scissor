function getComputerChoice() {
    let choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * 3)];
}
function playRound(playerChoice, computerChoice) {
    if ((playerChoice == "rock" && computerChoice == "scissor") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissor" && computerChoice == "paper")) {
        return `You win! ${playerChoice} beats ${computerChoice}`;
    }
    else if ((playerChoice == "paper" && computerChoice == "scissor") ||
        (playerChoice == "scissor" && computerChoice == "rock") ||
        (playerChoice == "rock" && computerChoice == "paper")) {
        return `You lose! ${computerChoice} beats ${playerChoice}`;
    }
    else {
        return `You Draw!`;
    }
}
function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Please enter a player choice:");
        let computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
    }
}
game();