let choices = ["Rock", "Paper", "Scissors"];
let playerSelection = prompt("Do you choose Rock, Paper or Scissors?")
let computerSelection = getComputerChoice();
let winner = playRound(playerSelection, computerSelection);
let games = 0;
let human = 0;
let computer = 0;

function getComputerChoice() {
    
    choice = choices[Math.floor(Math.random() * choices.length)];
    console.log(choice)
    return choice;
    
  
   
   }


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return ("You lose");
        } else if (computerSelection === "Scissors") {
            return ("You win!");
        } else {
            return ("It's a tie!");
        }
    }

    if (playerSelection === "Paper") {
        if(computerSelection === "Rock") {
            return ("You win");
        } else if (computerSelection === "Scissors") {
            return ("You lose");
        } else {
            return ("It's a tie!");
        }
    }
    
    if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return ("You lose!");
        } else if ( computerSelection === "Paper") {
            return ("You win!");
        } else {
            return ("It's a tie!");
        }
    }
    
}



    function game(playRound) {
        for (let i = 0; i < 5; i++) {
            if (playRound === "You lose") {
                computer++;
                return;
            } else if (playRound === "You win") {
                human++;
                return;
            } else {
                return;
            } 

        }

    }
    
    
    
    

    


    
