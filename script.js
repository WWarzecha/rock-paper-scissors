let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    // get random number
    let optionValue = Math.random();

    // decide which option will it be
    let option = (optionValue > 2/3) ? "rock" : (optionValue > 1/3) ? "paper" : "scissors";

    // return chosen option
    return option;
}

// get users choice
function getHumanChoice(){
    // ask for input, give 3 options
    let option = prompt("Give me your choice: \"rock\", \"paper\" or \"scissors\"?");
    while (!(option.toLocaleLowerCase() === "rock" || option.toLocaleLowerCase() == "paper" || option.toLocaleLowerCase() == "scissors")){
        if(option === null){
            option = prompt("You can't cancel my messages. Type in \"rock\", \"paper\" or \"scissors\"?");
        }
        else{
            option = prompt("You spelled it bad. Give me CORRECT choice: \"rock\", \"paper\" or \"scissors\"?");
        }
    }
    // return given input
    return option;
}

function humanWon(humanChoice, computerChoice){
    console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
}

function humanLost(humanChoice, computerChoice){
    console.log(`You lost! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
}

function humanTied(humanChoice, computerChoice){
    console.log(`It's a tie! ${humanChoice} ties ${computerChoice}.`);
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLocaleLowerCase();
    if (humanChoice === 'rock'){
        if (computerChoice ==='paper'){
            humanLost(humanChoice, computerChoice);
        }
        else if (computerChoice === 'scissors'){
            humanWon(humanChoice, computerChoice);
        }
        else{
            humanTied(humanChoice, computerChoice);
        }
    }
    else if(humanChoice === 'paper'){
        if (computerChoice ==='scissors'){
            humanLost(humanChoice, computerChoice);
        }
        else if (computerChoice === 'rock'){
            humanWon(humanChoice, computerChoice);
        }
        else{
            humanTied(humanChoice, computerChoice);
        }
    }
    else{
        if (computerChoice ==='rock'){
            humanLost(humanChoice, computerChoice);
        }
        else if (computerChoice === 'paper'){
            humanWon(humanChoice, computerChoice);
        }
        else{
            humanTied(humanChoice, computerChoice);
        }
    }
}