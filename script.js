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
    while (!(option === "rock" || option == "paper" || option == "scissors")){
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
