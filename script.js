let humanScore = 0;
let computerScore = 0;
const winningScore = 5;
const buttons = document.querySelectorAll("button");
const container = document.querySelector("#container");
const choices = document.querySelector(".choices");
const userChoice = document.querySelector("#userChoice");
const compChoice = document.querySelector("#computerChoice");
const results = document.querySelector("#results");
const score = document.querySelector("#scores");
const userScore = document.querySelector("#userScore");
const compScore = document.querySelector("#computerScore");

function getComputerChoice() {
  let computerChoice = Math.round(Math.random()) + Math.round(Math.random()) + 1;
    switch (computerChoice) {
      case 1:
        compChoice.textContent = 'Computer picked: rock';
        break;
      case 2:
        compChoice.textContent = 'Computer picked: paper';
        break;
      case 3:
        compChoice.textContent = 'Computer picked: scissors';
        break;
    }
  return computerChoice;
}

function playRound() {

  if (humanScore < 5 && computerScore < 5) {
    computerSelection = getComputerChoice();
    if (humanSelection == computerSelection) {
      results.textContent = "It's a tie! There is no winner for this round.";
    } else if ((humanSelection == 1) && (computerSelection == 2)) {
      results.textContent = 'Paper beats rock! The computer wins this round.';
      computerScore++;
    } else if ((humanSelection == 1) && (computerSelection == 3)) {
      results.textContent = 'Rock beats scissors! The user wins this round.';
      humanScore++;
    } else if ((humanSelection == 2) && (computerSelection == 1)) {
      results.textContent = 'Paper beats rock! The user wins this round.';
      humanScore++;
    } else if ((humanSelection == 2) && (computerSelection == 3)) {
      results.textContent = 'Scissors beat paper! The computer wins this round.';
      computerScore++;
    } else if ((humanSelection == 3) && (computerSelection == 1)) {
      results.textContent = 'Rock beats scissors! The computer wins this round.';
      computerScore++;
    } else if ((humanSelection == 3) && (computerSelection == 2)) {
      results.textContent = 'Scissors beat paper! The user wins this round.';
      humanScore++;
    }
  } 

  score.textContent = "Score Board";
  userScore.textContent = 'User: ' + humanScore;
  compScore.textContent = 'Computer: ' + computerScore;

  if (humanScore == winningScore || computerScore == winningScore) {
    choices.removeChild(userChoice);
    choices.removeChild(compChoice);
  } 
  
  if (humanScore == winningScore) {
    results.textContent = "You won the game!";
  } else if (computerScore == winningScore) {
    results.textContent = "The computer won the game!";
  }

};

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
      humanSelection = button.id;
      userChoice.textContent = 'You picked: ' + humanSelection;
      switch (humanSelection) {
        case 'rock':
          humanSelection = 1;
          break;
        case 'paper':
          humanSelection = 2;
          break;
        case 'scissors':
          humanSelection = 3;
          break; 
      }
      playRound();
  });
});