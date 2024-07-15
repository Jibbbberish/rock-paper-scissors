let hScore = 0;
let cScore = 0;

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

function playRound(hChoice, cChoice) {
    if (hChoice == "rock" && cChoice == "scissors") {
        alert("You win! Rock beats Scissors!");
        hScore += 1;
        humanScore.textContent = `Your score is: ${hScore}`;
    } else if (hChoice == "scissors" && cChoice == "paper") {
        alert("You win! Scissors beats Paper!");
        hScore += 1;
        humanScore.textContent = `Your score is: ${hScore}`;
    } else if (hChoice == "paper" && cChoice == "rock") {
        alert("You win! Paper beats Rock!");
        hScore += 1;
        humanScore.textContent = `Your score is: ${hScore}`;
    } else if (hChoice == "paper" && cChoice == "scissors") {
        alert("You lose! Scissors beats Paper!");
        cScore += 1;
        computerScore.textContent = `Computer score is ${cScore}`;
    } else if (hChoice == "scissors" && cChoice == "rock") {
        alert("You lose! Rock beats Scissors!");
        cScore += 1;
        computerScore.textContent = `Computer score is ${cScore}`;
    } else if (hChoice == "rock" && cChoice == "paper") {
        alert("You lose! Paper beats Rock!");
        cScore += 1;
        computerScore.textContent = `Computer score is ${cScore}`;
    } else {
        alert("You tie! You picked the same thing as the computer!");
    }
    if (hScore === 5) {
        alert("You Win!");
        stopGame = true;
    } else if (cScore === 5) {
        alert("You Lose.");
        stopGame = true;
    }
}

let stopGame = false;
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const container = document.querySelector("#results");
const humanScore = document.createElement("p");
const computerScore = document.createElement("p");

humanScore.textContent = `Your score is: ${hScore}`;
computerScore.textContent = `Computer score is ${cScore}`;

container.appendChild(humanScore);
container.appendChild(computerScore);

rock.addEventListener("click", () => {
    if (stopGame == false) {
        playRound("rock", getComputerChoice())
    } 
});
paper.addEventListener("click", () => {
    if (stopGame == false) {
        playRound("paper", getComputerChoice())
    }
});
scissors.addEventListener("click", () => {
    if (stopGame == false) {
        playRound("scissors", getComputerChoice())
    }
});