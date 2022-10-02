let playerScore = 0;
let computerScore = 0;

const scores = document.querySelector('#scores');
const results = document.querySelector('.results');

const playAgainBtn = document.createElement('button');
playAgainBtn.textContent = "Play Again!";
playAgainBtn.addEventListener('click', playAgain );

const selectionBtns = document.querySelectorAll('.selectionBtn');
selectionBtns.forEach((btn) => {
  btn.addEventListener('click', () => game(btn))
}); 


function getComputerChoice() {
    randomNum = Math.floor(Math.random()*11);
    if (randomNum < 3) {
        return "rock";
    }
    else if( randomNum  < 7){
        return "paper";
    }
    return "scissors";
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

function game(btn){
    if (computerScore == 5 || playerScore == 5) {
        let message  = (playerScore > computerScore) ? `You win this round! ${playerScore} to ${computerScore}` :
                    `You lose this round! ${playerScore} to ${computerScore}`;
        if (scores.textContent != message) {
            scores.textContent = message;
            results.appendChild(playAgainBtn);
        }
    }
    else {
        scores.textContent = (playRound(btn.id, getComputerChoice()));
    }
}

function playAgain(){
    playerScore = 0;
    computerScore = 0;
    scores.textContent = "Click any of the options above to start this round";
    results.removeChild(playAgainBtn);
}