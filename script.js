function getComputerChoice(){
    // get random number
    let optionValue = Math.random();

    // decide which option will it be
    let option = (optionValue > 2/3) ? "rock" : (optionValue > 1/3) ? "paper" : "scissors";

    // return chosen option
    return option;
}