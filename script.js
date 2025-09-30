let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.round(Math.random()) + Math.round(Math.random()) + 1;
    switch (computerChoice) {
      case 1:
        console.log('Computer picked: rock');
        break;
      case 2:
        console.log('Computer picked: paper')
        break;
      case 3:
        console.log('Computer picked: scissors')
        break;
    }
  return computerChoice;
}

function getHumanChoice() {
  let humanChoiceEntered = prompt('Rock, paper or scissors?', ' ');
  let humanChoice = humanChoiceEntered.toLowerCase();
  console.log('You picked: ' + humanChoice);
    switch (humanChoice) {
      case 'rock':
        humanChoice = 1;
        break;
      case 'paper':
        humanChoice = 2;
        break;
      case 'scissors':
        humanChoice = 3;
        break;
    }
  return humanChoice;  
}

function keepScore(userScore, computerScore) {
  console.log('User Score: ' + userScore);
  console.log('Computer Score: ' + computerScore);
}

function playRound() {
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  if (humanSelection == computerSelection) {
    console.log("It's a tie! There is no winner for this round.");
  } else if ((humanSelection == 1) && (computerSelection == 2)) {
    console.log('Paper beats rock! The computer wins this round.');
    computerScore++;
  } else if ((humanSelection == 1) && (computerSelection == 3)) {
    console.log('Rock beats scissors! The user wins this round.');
    humanScore++;
  } else if ((humanSelection == 2) && (computerSelection == 1)) {
    console.log('Paper beats rock! The user wins this round.');
    humanScore++;
  } else if ((humanSelection == 2) && (computerSelection == 3)) {
    console.log('Scissors beat paper! The computer wins this round.');
    computerScore++;
  } else if ((humanSelection == 3) && (computerSelection == 1)) {
    console.log('Rock beats scissors! The computer wins this round.');
    computerScore++;
  } else if ((humanSelection == 3) && (computerSelection == 2)) {
    console.log('Scissors beat paper! The user wins this round.');
    humanScore++;
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;
  for (i = 1; i <= 5; i++) {
    console.log('');
    console.log(`Round ${i}`);
    playRound();
    keepScore(humanScore, computerScore);
  } 
  console.log('');
  console.log('Final results:');
  if (humanScore == computerScore) {
    console.log("It's a tie! There is no winner. Try again.");
  } else if (humanScore < computerScore) {
    console.log('You won the game!');
  } else if (humanScore > computerScore) {
    console.log('Computer won the game!');
  }
}