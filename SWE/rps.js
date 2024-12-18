
// This is the function to get Human's choice:
function getComputerChoice() {
    
    let computerChoice = " ";
    
    let compute = Math.floor(Math.random() * 3);
    if (compute === 0) {
        computerChoice = "rock";
    }
    if (compute === 1) {
        computerChoice = "paper";
    }
    if (compute === 2) {
         computerChoice = "scissors";
    }
    console.log(`computer: ${computerChoice}`);
    return computerChoice;
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

let computerScore = 0;
let humanScore = 0;

// This is the function to play a single round of the game:

let playRound = function(humanChoice, computerChoice) {
    
    if (humanSelect === computeSelect) {
        humanScore++;
        console.log(`You win! human beats computer`);
        console.log(`player: ${humanScore}  :  computer: ${computerScore}`);
    }
    else if (humanSelect !== computeSelect) {
        computerScore++;
        console.log("You loose! computer beats human");
        console.log(`player: ${humanScore}  :  computer: ${computerScore}`);
    }
    else {
        console.log("Invalid response provided, please try again!");
    }
};

const humanSelect = getHumanChoice();
const computeSelect = getComputerChoice();
playRound(humanSelect, computeSelect);


function playGame() {
    
    for (let i = 0; i < 5; i++) {
        
    playRound(humanSelect, computeSelect);
        
}
    console.log(`Here are the final result`);
    console.log(`player: ${humanScore}  :  computer: ${computerScore}`); 

    if (humanScore > computerScore) {
        console.log("Hello Player! You WON!");
    }
    else if (humanScore < computerScore) {
        console.log("Hello player! Computer WON!");
    }
    else {
        console.log("Ooh! we go again!");
    }
}
playGame();