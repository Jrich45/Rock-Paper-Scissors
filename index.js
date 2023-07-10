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
            console.log("You lose!");
            return ("You lose!");
        } else if (computerSelection === "Scissors") {
            console.log("You win!");
            return ("You win!");
        } else {
            console.log("It's a tie!")
            return ("It's a tie!");
        }
    }

    if (playerSelection === "Paper") {
        if(computerSelection === "Rock") {
            console.log("You win!");
            return ("You win");
        } else if (computerSelection === "Scissors") {
            console.log("You lose!");
            return ("You lose!");
        } else {
            console.log("It's a tie!")
            return ("It's a tie!");
        }
    }
    
    if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            console.log("You lose!");
            return ("You lose!");
        } else if ( computerSelection === "Paper") {
            console.log("You win!");
            return ("You win!");
        } else {
            console.log("It's a tie!")
            return ("It's a tie!");
        }
    }
    return
    
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
    
    
    
    

    


    
