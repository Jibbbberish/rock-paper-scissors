let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randNum = Math.random();
    if (randNum < (1/3)) {
        return "paper";
    } else if (randNum > (2/3)) {
        return "rock";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let initial = prompt("Choose Rock, Paper or Scissors!");
    let choice = initial.toLowerCase();
    
    if (choice == "paper" || choice == "rock" || choice == "scissors") {
        return choice;
    } else {
        alert("Choose rock, paper or scissors!");
        getHumanChoice();
    }
}

function playGame() {
    function playRound(hChoice, cChoice) {
        if (hChoice == "rock" && cChoice == "scissors") {
            console.log("You win! Rock beats Scissors!");
            humanScore += 1;
        } else if (hChoice == "scissors" && cChoice == "paper") {
            console.log("You win! Scissors beats Paper!");
            humanScore += 1;
        } else if (hChoice == "paper" && cChoice == "rock") {
            console.log("You win! Paper beats Rock!");
            humanScore += 1;
        } else if (hChoice == "paper" && cChoice == "scissors") {
            console.log("You lose! Scissors beats Paper!");
            computerScore += 1;
        } else if (hChoice == "scissors" && cChoice == "rock") {
            console.log("You lose! Rock beats Scissors!");
            computerScore += 1;
        } else if (hChoice == "rock" && cChoice == "paper") {
            console.log("You lose! Paper beats Rock!");
            computerScore += 1;
        } else {
            console.log("You tie! You picked the same thing as the computer!");
        }
    }
    
    while (humanScore<3 && computerScore<3) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore >= 3) {
        console.log("You win the game!")
    } else if (computerScore >= 3) {
        console.log("You lose the game. Better luck next time.")
    }
}

playGame();