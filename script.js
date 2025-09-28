/* 
There will be 3 rounds
The computer will make a choice
The user will make a choice
Compare inputs and give a point to the winner of that round
After 3 rounds we will count who has more points and declare an overall winner 
*/

function getComputerChoice() {
let computerChoice = Math.round(Math.random()) + Math.round(Math.random()) + 1;
  switch (computerChoice) {
    case 1:
      document.getElementById('computerResult');
      break;
    case 2:
      return 'Paper';
      break;
    case 3:
      return 'Scissors';
      break;
  }
}

// const choice1 = document.getElementById('rockButton');
// const choice2 = document.getElementById('paperButton');
// const choice3 = document.getElementById('scissorsButton');

// choice1.addEventListener("click", getHumanChoice);
// choice2.addEventListener("click", getHumanChoice);
// choice3.addEventListener("click", getHumanChoice);

function getHumanChoice() {
  let humanChoice = prompt('Rock, paper or scissors?', ' ');
    if (humanChoice != null) {
    document.getElementById('humanResult').innerHTML =
    'You picked: ' + humanChoice + '!';
    }
}