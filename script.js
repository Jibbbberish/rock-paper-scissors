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