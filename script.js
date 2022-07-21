
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

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log("Player: " + playerSelection + " vs. Computer: " + computerSelection);

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


console.log("The winner is " + playRound(playerSelection,computerSelection));
// console.log("Computer selection: " + computerSelection + " vs. player selection: " + playerSelection + " the winner is: " + playRound(playerSelection, computerSelection) );


