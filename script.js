
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]; // game options
    let randomNum = Math.floor((Math.floor((Math.random() * 100)))/33); // get a random number from 0-3
    return options[randomNum]; // get a random game option
}

function getPlayerChoice() {
   
    let notEnd = true; // a loop will not stop unless notEnd = false;

    while(notEnd) {
        const choice = prompt("rock, paper or scissors?").toLowerCase(); // ask user to choose his/her answer
        if(choice == "rock") {
            notEnd = "false";
            return choice;
        } else if(choice == "paper") {
            notEnd = "false";
            return choice;
        } else if (choice === "scissors") {
            notEnd = "false";
            return choice;
        } else {
            console.log("You typed wrong option. Please enter your choice again.");
        }
    }
}




function playRound(playerSelection, computerSelection) {
    let winner = "none, it's a draw";
   
    if(playerSelection === computerSelection) {
        winner == "none";
    }else if(playerSelection == "paper" && computerSelection == "rock") {
        winner = "player";
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        winner = "computer"
    }else if(playerSelection == "scissors" && computerSelection == "paper") {
        winner = "player";
    }else if(playerSelection == "paper" && computerSelection == "scissors") {
        winner = "computer";
    }else if(playerSelection == "rock" && computerSelection == "scissors") {
        winner = "player";
    }else {
        winner = "computer";
    }

    return winner;
}


function game() {

    let playerScores = 0;
    let computerScores = 0;
    let round = 1;

    for(let i = 0; i<5; i++) {
        const playerSelection = getPlayerChoice(); // get player choice
        const computerSelection = getComputerChoice(); // get a random computer choice
        let tempWinner = playRound(playerSelection, computerSelection); 

        if(tempWinner == "computer") {
            computerScores++;
        }else if(tempWinner == "player") {
            playerScores++;
        }else {
            playerScores = playerScores;
            computerScores = computerScores;
        }

        console.log("Player selection: " + playerSelection + " vs.Computer selection: " + computerSelection + "\nWinner of round " + round + ": " + tempWinner);
        round++;
    }

    // reports winner or looser at the end
    let theWinner = "none";
    if(playerScores == computerScores) {
        theWinner = "none, it's a draw";
    } else if(playerScores > computerScores) {
        theWinner = "player";
    }else {
        theWinner = "computer";
    }

    console.log("Computer scores: " + computerScores + "\nPlayer scores: " + playerScores);
    return theWinner;
}


console.log("\nWinner of the game is: " + game());