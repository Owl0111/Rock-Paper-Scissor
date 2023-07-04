let computer_score = 0;
let player_score = 0;
let choices = document.querySelectorAll(".choice")
function disable() {
    choices.forEach((event) => event.disabled = true);
}
function enable() {
    choices.forEach((event) => event.disabled = false)

}
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
function reset() {
    let reset_button = document.createElement("button");
    reset_button.innerText = "Retry";
    reset_button.classList.add("reset");
    document.body.appendChild(reset_button)
    reset_button.addEventListener("click", (event) => {
        let player_count = document.querySelector("#player-count");

        let computer_count = document.querySelector("#computer-count");

        let round_result = document.querySelector("#round-result");
        player_count.innerText = 0;
        computer_count.innerText = 0;
        round_result.innerText = "";
        computer_score = 0;
        player_score = 0;
        enable();
        event.currentTarget.remove();
    });


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




choices.forEach(event => {
    event.addEventListener('click', event => {
        let round_result = document.querySelector("#round-result");
        if (player_score >= 5) {
            disable();
            round_result.innerText = "Player Wins!!";
            reset();
            return;
        }
        else if (computer_score >= 5) {
            disable();
            round_result.innerText = "Computer Wins!!";
            reset();
            return;
        }
        let target = event.currentTarget;
        let value = target.dataset.name;
        console.log(value)
        let computerChoice = getComputerChoice();
        round_result.innerText = playRound(value, computerChoice);
    })
})
