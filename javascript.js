
// function which will return rock paper or scissors at random from an array
function getComputerChoice (array) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * array.length);

    // get random item
    const item = array[randomIndex];

    return item;

}

// array of choices
const choice = ['rock', 'paper', 'scissors'];
//console.log(getComputerChoice(choice))

//console.log(userInput); 

function playRound(playerSelection, computerSelection) {
    let draw = `Its a draw, ${playerSelection} does not beat ${computerSelection}`;
    let win = `You won! ${playerSelection} beats ${computerSelection}`;
    let lose = `You lost! ${playerSelection} does not beat ${computerSelection}`;

    if (playerSelection === computerSelection){
        return draw;
    }

    else if (
        (playerSelection === choice[0] && computerSelection === choice[2]) || 
        (playerSelection === choice[1] && computerSelection === choice[0]) ||
        (playerSelection === choice[2] && computerSelection === choice[1])) {
        return win;
    }

    else if (
        (playerSelection === choice[0] && computerSelection === choice[1]) ||
        (playerSelection === choice[1] && computerSelection === choice[2]) ||
        (playerSelection === choice[2] && computerSelection === choice[0])) {
        return lose;
    }
  }
  //get input from the user and convert to lower case
let userInput = prompt("Rock, Paper or Scissors?").toLowerCase();
while (userInput !== 'rock' && userInput !== 'scissors' && userInput !== 'paper') {
    let userInput = prompt("Rock, Paper or Scissors?");
    }
  const computerSelection = getComputerChoice(choice);
  console.log(playRound(userInput, computerSelection));