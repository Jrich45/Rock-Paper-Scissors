let human = 0;
let computer = 0;

let choices = ["Rock", "Paper", "Scissors"];
let playerSelection = prompt("Do you choose Rock, Paper or Scissors?")

let computerSelection = getComputerChoice();
let winner = playRound(playerSelection, computerSelection);



function getComputerChoice() {
    
    choice = choices[Math.floor(Math.random() * choices.length)];
    console.log(choice)
    return choice;
    
  
   
   }


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            console.log("You lose!");
            computer++;
            return ("You lose!");
        } else if (computerSelection === "Scissors") {
            console.log("You win!");
            human++;
            return ("You win!");
        } else {
            console.log("It's a tie!")
            return ("It's a tie!");
        }
    }

    if (playerSelection === "Paper") {
        if(computerSelection === "Rock") {
            console.log("You win!");
            human++;
            return ("You win");
        } else if (computerSelection === "Scissors") {
            console.log("You lose!");
            computer++;
            return ("You lose!");
        } else {
            console.log("It's a tie!")
            return ("It's a tie!");
        }
    }
    
    if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            console.log("You lose!");
            computer++;
            return ("You lose!");
        } else if ( computerSelection === "Paper") {
            console.log("You win!");
            human++;
            return ("You win!");
        } else {
            console.log("It's a tie!")
            return ("It's a tie!");
        }
    }
    return
    
}



    function game(human, computer) {
        let game = 0;
        for (let i = 0; i < 5; i++) {
            if (winner === "You lose") {
                return computer++;
            } else if (winner === "You win") {
                return human++;
            } else {
                return;
            } 

        }

    }
    
    
    
    

    


    
