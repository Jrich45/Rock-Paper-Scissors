let playerSelection = prompt("Do you choose Rock, Paper or Scissors?")
let computerSelection = getComputerChoice();
function playRound(playerSelection, computerSelection) {
    

    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lose"
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose"
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose"
    } else if (playerSelection && computerSelection === "Rock" || playerSelection && computerSelection === "Paper" || playerSelection && computerSelection === "Scissors") {
        return "Tie"
    } else {
        return "You win!"
    }
    
}
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    if (choice == 0) {
    return "Rock"
    } else if (choice == 1) {
    return "Paper"
    } else {
    return "Scissors";
    
    }
    
    }
    
    

    


    
