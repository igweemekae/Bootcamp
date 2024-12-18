
// This is the function to get Human's choice:
function getComputerChoice() {
    
    let computeChoice = " ";
    
    let compute = Math.floor(Math.random() * 3);
    if (compute === 0) {
        computeChoice = "rock";
    }
    if (compute === 1) {
        computeChoice = "paper";
    }
    if (compute === 2) {
         computeChoice = "scissors";
    }
    console.log(`computer: ${computeChoice}`);
    return computeChoice;
}

// This is the function to get Human's choice:

function getHumanChoice() {
    
    let humanChoice = " ";
    
    let human = prompt("Predict the perfect match for the computer between 'rock', 'paper' and 'scissors' ").toLowerCase();

    switch(human) {
        case "rock":
                humanChoice = "rock";
                break;
        case "paper":
                humanChoice = "paper";
                break;
        case "scissors":
                humanChoice = "scissors";
                break;
        default:
    }
    console.log(`player: ${humanChoice}`);
    return humanChoice;
}

//To keep record of players scores
let humanScore = 0;
let computerScore = 0;

let playRound = function(humanChoice, computeChoice) {
    
    if (humanChoice === computeChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
    } 
    else if (
        (humanChoice === "rock" && computeChoice === "scissors") ||
        (humanChoice === "paper" && computeChoice === "rock") ||
        (humanChoice === "scissors" && computeChoice === "paper")) 
        {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computeChoice}.`);
    } 
    else if (
        (computeChoice === "rock" && humanChoice === "scissors") ||
        (computeChoice === "paper" && humanChoice === "rock") ||
        (computeChoice === "scissors" && humanChoice === "paper")) 
        {
        computerScore++;
        console.log(`You lose! ${computeChoice} beats ${humanChoice}.`);
    } 
    else {
        console.log("Invalid input. Please enter 'rock', 'paper', or 'scissors'.");
    }

    // Log the updated scores
    console.log(`Player - ${humanScore} : Computer - ${computerScore}`);
};

function playGame() {
    
    for (let i = 0; i < 5; i++) { 
        playRound(getHumanChoice(), getComputerChoice());  
    }
    
    if (humanScore > computerScore) {
        console.log("Hello Player! You WON!");
        console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    }
    else if (humanScore < computerScore) {
        console.log("Hello player! Computer WON!");
        console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    }
    else {
        console.log("Ooh! we go again!");
        console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    }
}
playGame();