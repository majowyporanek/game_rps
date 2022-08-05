
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]; // game options
    let randomNum = Math.floor((Math.floor((Math.random() * 100)))/33); // get a random number from 0-2;
    if(randomNum !== "undefined") {
        return options[randomNum];
    }else {
        getComputerChoice(); //try again
    } // get a random game option
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


//AUDIO
let clapping = document.getElementById('clapping');
let sad = document.getElementById('sad');




function playRound(playerSelection, computerSelection = "") {
    results.textContent = "";
    let winner = "none, it's a draw";
    computerSelection = getComputerChoice();
    if(playerSelection === computerSelection) {
        winner == "none";
        results.textContent += `${computerSelection} vs. ${playerSelection}.\r\n `;
    }else if(playerSelection == "paper" && computerSelection == "rock") {
        winner = "player";
        results.textContent += `${playerSelection} beats ${computerSelection}. \r\n`;
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        winner = "computer";
        results.textContent += `${computerSelection} beats ${playerSelection}.\r\n `;
    }else if(playerSelection == "scissors" && computerSelection == "paper") {
        winner = "player";
        results.textContent += `${playerSelection} beats ${computerSelection}. \r\n`;
    }else if(playerSelection == "paper" && computerSelection == "scissors") {
        winner = "computer";
        results.textContent += `${computerSelection} beats ${playerSelection}.\r\n `;
    }else if(playerSelection == "rock" && computerSelection == "scissors") {
        winner = "player";
        results.textContent += `${playerSelection} beats ${computerSelection}.\r\n `;
    }else {
        winner = "computer";
        results.textContent += `${computerSelection} beats ${playerSelection}.\r\n `;
    }
    return winner;

}




const container = document.querySelector('.container');
const buttonsContainer = document.querySelector('.buttons');
const buttonOne = document.createElement('button');
const buttonTwo = document.createElement('button');
const buttonThree = document.createElement('button');

//styling container
container.style.margin = "0";
container.style.padding = "0";
container.style.textAlign = "center";


// appending buttons to body
buttonsContainer.appendChild(buttonOne);
buttonsContainer.appendChild(buttonTwo);
buttonsContainer.appendChild(buttonThree);

buttonOne.textContent = "ROCK";
buttonTwo.textContent = "PAPER";
buttonThree.textContent = "SCISSORS";

const buttons = document.querySelectorAll('button');

// //styling buttons;
// buttons.forEach((button) => {button.style.margin = '2em 0';});

//adding event handlers do buttons

let playerPoints = 0;
let computerPoints = 0;
let round = 1;

function disableButtonClick() {
    buttons.forEach((button) => {
        button.disabled = 'true';
    });
}

function enableButtonClick() {
    buttons.forEach((button)=> {
        button.disabled = 'false';
    });
}


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let winner = playRound(button.textContent.toLowerCase());


        if(winner == "computer") {
            computerPoints++;
        }

        if(winner == "player") {
            playerPoints++;
        }

        results.textContent += `Points of round ${round}: ${playerPoints} (player) VS. ${computerPoints} (computer)`;

        if(round == 5) {
            let winnerFive = "";
            if(computerPoints == playerPoints) {
                results.textContent = `COMPUTER: ${computerPoints} VS. PLAYER: ${playerPoints}.\r\n It's a draw!`;
                computerPoints = 0;
                playerPoints = 0;
                round = 0;
            }else if(computerPoints>playerPoints) {
                sad.play();

                if (sad.paused == false) {
                        disableButtonClick();
                }else {
                    enableButtonClick();
                }

                

                results.textContent = `COMPUTER: ${computerPoints} VS. PLAYER: ${playerPoints}.\r\n You loose! Computer wins`;
                computerPoints = 0;
                playerPoints = 0;
                round = 0;
            }else {
                clapping.play();
                //clapping.paused == false
                if (clapping.currentTime >= 0) {
                    disableButtonClick();
                }

                if(clapping.paused == true) {
                    enableButtonClick();
                }

                results.textContent = `COMPUTER: ${computerPoints} VS. PLAYER: ${playerPoints}.\r\n You win! Congratulations`;
                computerPoints = 0;
                playerPoints = 0;
                round = 0;
            }
        }

        round ++;
    });
});




//creating div with results: 

let results = document.createElement('div');
results.classList.add('results');
container.appendChild(results);
results.style.margin = 0;
results.style.padding = 0;
results.style.color = "pink";
results.setAttribute('style', 'white-space: pre;');


