/* 
There will be 3 rounds
The computer will make a choice
The user will make a choice
Compare inputs and give a point to the winner of that round
After 3 rounds we will count who has more points and declare an overall winner 
*/

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.round(Math.random()) + Math.round(Math.random()) + 1;
    switch (computerChoice) {
      case 1:
        document.getElementById('computerResult').innerHTML = 'rock';
        break;
      case 2:
        document.getElementById('computerResult').innerHTML = 'paper';
        break;
      case 3:
        document.getElementById('computerResult').innerHTML = 'scissors';
        break;
    }
  console.log(computerChoice);  
  return computerChoice;
}

function getHumanChoice() {
  let humanChoiceEntered = prompt('Rock, paper or scissors?', ' ');
  let humanChoice = humanChoiceEntered.toLowerCase();
  document.getElementById('humanResult').innerHTML = humanChoice;
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
  console.log(humanChoice); 
  return humanChoice;  
}

function playRound() {
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  if (humanSelection == computerSelection) {
    console.log('tie!');
    document.getElementById('results').innerHTML = "It's a tie. Try again!";
  } else if ((humanSelection == 1) && (computerSelection == 2)) {
    document.getElementById('results').innerHTML = "Paper beats rock! The computer wins this round.";
    computerScore++;
  } else if ((humanSelection == 1) && (computerSelection == 3)) {
    document.getElementById('results').innerHTML = "Rock beats scissors! The user wins this round.";
    humanScore++;
  } else if ((humanSelection == 2) && (computerSelection == 1)) {
    document.getElementById('results').innerHTML = "Paper beats rock! The user wins this round.";
    humanScore++;
  } else if ((humanSelection == 2) && (computerSelection == 3)) {
    document.getElementById('results').innerHTML = "Scissors beat paper! The computer wins this round.";
    computerScore++;
  } else if ((humanSelection == 3) && (computerSelection == 1)) {
    document.getElementById('results').innerHTML = "Rocks beats scissors! The computer wins this round.";
    computerScore++;
  } else if ((humanSelection == 3) && (computerSelection == 2)) {
    document.getElementById('results').innerHTML = "Scissors beat paper! The user wins this round.";
    humanScore++;
  }
}
