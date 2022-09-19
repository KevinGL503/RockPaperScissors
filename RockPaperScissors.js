playerScore = 0;
computerScore = 0;


function getComputerChoice() {
    randomNum = Math.floor(Math.random()*11);
    if (randomNum < 3) {
        return "Rock";
    }
    else if( randomNum  < 7){
        return "Paper";
    }
    return "Scissors";
}


function playRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase();
    computer = computerSelection.toLowerCase();

    if ( player == computer ){
        return `It's a draw! you both chose ${player}`;
    }
    if (player == "rock") {
        if (computer == "scissors"){
            playerScore++;
            return `You Win! ${player} beats ${computer}`
        }
        else {
            computerScore++;
            return `You Lose! ${computer} beats ${player}`
        }
    }

    if (player == "paper") {
        if (computer == "rock") {
            playerScore++;
            return `You Win! ${player} beats ${computer}`
        }
        else {
            computerScore++;
            return `You Lose! ${computer} beats ${player}`
        }
    }

    if (player == "scissors") {
        if (computer == "paper") {
            playerScore++;
            return `You Win! ${player} beats ${computer}`
        }
        else {
            computerScore++;
            return `You Lose! ${computer} beats ${player}`
        }
    }

  }

  function game(){
    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++){
        playerSelection = prompt("1,2,3, Choose!")
        console.log(playRound(playerSelection, getComputerChoice()));
    }
    let message  = (playerScore > computerScore) ? `You win! ${playerScore} to ${computerScore}` :
                `You lose! ${playerScore} to ${computerScore}`;
    console.log(message);
  }