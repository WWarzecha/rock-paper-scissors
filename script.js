let humanScore = 0;
let computerScore = 0;


const scoreChangeEvent = new Event("scoreChange", {bubbles: true, cancelable: false});


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
    body.dispatchEvent(scoreChangeEvent);
}

function humanLost(humanChoice, computerChoice){
    resultsDiv.textContent = `You lost! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
    body.dispatchEvent(scoreChangeEvent);
}

function humanTied(humanChoice, computerChoice){
    resultsDiv.textContent = `It's a tie! ${humanChoice} ties ${computerChoice}.`;
    body.dispatchEvent(scoreChangeEvent);
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

function checkGameEnd(){
    if(humanScore === 5){
        resultsDiv.textContent = "Human WON!!!"
        resetScore();
    }
    else if(computerScore === 5){
        resultsDiv.textContent = "Computer won :("
        resetScore();
    }
}

function resetScore(){
    humanScore = 0;
    computerScore = 0;
}

function updateScore(){
    computerScoreValue.textContent = computerScore;
    humanScoreValue.textContent = humanScore;
}

// DOM
    const scoreDiv = document.createElement("div");
    const computerScoreDiv = document.createElement("div");
    computerScoreDiv.style.display = "flex";
    computerScoreDiv.style.gap = "10px";
        const computerScoreText = document.createElement("div");
        computerScoreText.textContent = "Computer score: ";
        const computerScoreValue = document.createElement("div");
        computerScoreValue.textContent = computerScore;
        computerScoreDiv.appendChild(computerScoreText);
        computerScoreDiv.appendChild(computerScoreValue);
        
    const humanScoreDiv = document.createElement("div");
    humanScoreDiv.style.display = "flex";
    humanScoreDiv.style.gap = "10px";
        const humanScoreText = document.createElement("div");
        humanScoreText.textContent = "Human score: ";
        const humanScoreValue = document.createElement("div");
        humanScoreValue.textContent = computerScore;
        humanScoreDiv.appendChild(humanScoreText);
        humanScoreDiv.appendChild(humanScoreValue);
    
    scoreDiv.appendChild(computerScoreDiv);
    scoreDiv.appendChild(humanScoreDiv);

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

body.appendChild(scoreDiv);
body.appendChild(resultsDiv);
body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);

body.addEventListener(scoreChangeEvent.type, () => {
    updateScore();
    checkGameEnd();
});