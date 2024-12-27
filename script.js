
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
    resultsDiv.textContent = `You won! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
}

function humanLost(humanChoice, computerChoice){
    resultsDiv.textContent = `You lost! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
}

function humanTied(humanChoice, computerChoice){
    resultsDiv.textContent = `It's a tie! ${humanChoice} ties ${computerChoice}.`;
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

// DOM
const resultsDiv = document.createElement("div");
resultsDiv.textContent = "Let's play a game";

const rockButton = document.createElement("button");
rockButton.textContent = 'Rock';
rockButton.addEventListener("click", () =>{
    playRound('rock', getComputerChoice())
});

const paperButton = document.createElement("button");
paperButton.textContent = 'Paper';
paperButton.addEventListener("click", () =>{
    playRound('paper', getComputerChoice())
});

const scissorsButton = document.createElement("button");
scissorsButton.textContent = 'Scissors';
scissorsButton.addEventListener("click", () =>{
    playRound('scissors', getComputerChoice())
});

const body = document.querySelector("body");

body.appendChild(resultsDiv);
body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);


let humanScore = 0;
let computerScore = 0;


    // let humanChoice;
    // let computerChoice;

    // alert("Welcome in Rock Paper Scissors game!")

    
    
    //decide who is the winner
    // if (humanScore>computerScore){
    //     alert("Congratulations, you WON!");
    // }
    // else if (humanScore == computerScore){
    //     alert("It's a tie!")
    // }
    // else{
    //     alert("You lost :(");
    // }
