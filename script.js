/* 
There will be 3 rounds
The computer will make a choice
The user will make a choice
Compare inputs and give a point to the winner of that round
After 3 rounds we will count who has more points and declare an overall winner 
*/

function getComputerChoice() {
let choice = Math.round(Math.random()) + Math.round(Math.random()) + 1;
  switch (choice) {
    case 1:
      return 'Rock';
      break;
    case 2:
      return 'Paper';
      break;
    case 3:
      return 'Scissors';
      break;
  }
}

