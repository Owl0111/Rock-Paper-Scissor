let computer_score = 0;
let player_score = 0;
function getComputerChoice() {
    let choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * 3)];
}
function upadate() {
    let player_count = document.querySelector("#player-count");
    let computer_count = document.querySelector("#computer-count");
    player_count.innerText = player_score;
    computer_count.innerText = computer_score;


}
function playRound(playerChoice, computerChoice) {
    if ((playerChoice == "rock" && computerChoice == "scissor") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissor" && computerChoice == "paper")) {
        player_score++;
        upadate();
        return `You win! ${playerChoice} beats ${computerChoice}`;

    }
    else if ((playerChoice == "paper" && computerChoice == "scissor") ||
        (playerChoice == "scissor" && computerChoice == "rock") ||
        (playerChoice == "rock" && computerChoice == "paper")) {
        computer_score++;
        upadate()
        return `You lose! ${computerChoice} beats ${playerChoice}`;
    }
    else {
        upadate();
        return `You Draw!`;
    }
}
// function game() {
//     for (let i = 0; i < 5; i++) {
//         let playerChoice = prompt("Please enter a player choice:");
//         let computerChoice = getComputerChoice();
//         console.log(playRound(playerChoice, computerChoice));
//     }
// }
// game();
// rock.disabled = true;
let choices = document.querySelectorAll(".choice")
function disable() {
    choices.forEach((event) => event.disabled = true)
}
choices.forEach(event => {
    event.addEventListener('click', event => {
        let round_result = document.querySelector("#round-result");
        if (player_score >= 5) {
            disable();
            round_result.innerText = "Player Wins!!";
            return;
        }
        else if (computer_score >= 5) {
            disable();
            round_result.innerText = "Computer Wins!!";
            return;
        }
        let target = event.currentTarget;
        let value = target.dataset.name;
        console.log(value)
        let computerChoice = getComputerChoice();
        round_result.innerText = playRound(value, computerChoice);
    })
})