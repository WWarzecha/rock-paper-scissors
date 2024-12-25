

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


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function humanWon(humanChoice, computerChoice){
        alert(`You won! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
    
    function humanLost(humanChoice, computerChoice){
        alert(`You lost! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
    
    function humanTied(humanChoice, computerChoice){
        alert(`It's a tie! ${humanChoice} ties ${computerChoice}.`);
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

    let humanChoice;
    let computerChoice;

    alert("Welcome in Rock Paper Scissors game!")

    //5 rounds loop
        //get human choice
        //get computer choice
        //play a round

    for(i = 0; i < 5; i++){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    
    //decide who is the winner
    if (humanScore>computerScore){
        alert("Congratulations, you WON!");
    }
    else if (humanScore == computerScore){
        alert("It's a tie!")
    }
    else{
        alert("You lost :(");
    }
}
