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