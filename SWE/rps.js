function getComputerChoice() {
    
    let computerChoice = " "
    
    let computer = ["rock", "paper", "scissors"]

    let value = Math.floor(Math.random() * computer.length);
    if (value === 0) {
        computerChoice = computer[0];
    }
    if (value === 1) {
        computerChoice = computer[1];
    }
    if (value === 2) {
         computerChoice = computer[2];
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


// This is the function to play a single round of the game:

let playRound = function(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        humanScore++;
        console.log("You win! " + humanChoice + " beats "  + computerChoice);
        console.log(`player: ${humanScore}  :  computer: ${computerScore}`);
    }
    else if (humanChoice !== computerChoice) {
        computerScore++;
        console.log("You loose! " + computerChoice + " beats "  + humanChoice);
        console.log(`player: ${humanScore}  :  computer: ${computerScore}`);
    }
    else {
        console.log("Invalid response provided, please try again!");
    }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// This is the function to play 5 rounds of the game:

let playGame = function() {
    // To play the game in find rounds, repeat the rounds 5 times.
    //round 1:
    playRound(humanSelection, computerSelection);

    //round 2: 
    playRound(humanSelection, computerSelection);

    //round 3:
    playRound(humanSelection, computerSelection);

    //round 4: 
    playRound(humanSelection, computerSelection);

    //round 5:
    playRound(humanSelection, computerSelection);

    // Let us have a winner after 5 rounds of play:

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
};

playGame();
