
// function which will return rock paper or scissors at random from an array
function getComputerChoice (array) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * array.length);
    // get random item
    const item = array[randomIndex];
    return item;
}

// function which will loop through the game 5 times
function playRound(playerSelection, computerSelection) {

    //set variables for win/draw/lose with string value
    let draw = `Its a draw, ${playerSelection} does not beat ${computerSelection}`;
    let win = `You won! ${playerSelection} beats ${computerSelection}`;
    let lose = `You lost! ${playerSelection} does not beat ${computerSelection}`;
    
    //if userinput is equal to computer choice return variable
    if (playerSelection === computerSelection) {
        rounds --;
        return draw;
        }
    //if userinput is not equal return win, add 1 to score
    else if (
        (playerSelection === choice[0] && computerSelection === choice[2]) || 
        (playerSelection === choice[1] && computerSelection === choice[0]) ||
        (playerSelection === choice[2] && computerSelection === choice[1])) {
        score ++;
        return win;
        }

    //if user input is not equal return lose
    else if (
        (playerSelection === choice[0] && computerSelection === choice[1]) ||
        (playerSelection === choice[1] && computerSelection === choice[2]) ||
        (playerSelection === choice[2] && computerSelection === choice[0])) {
        return lose;
        }
}

// array of choices
const choice = ['rock', 'paper', 'scissors'];

// set score variable
let score = 0;

let rounds = 1;

for(let rounds = 1; rounds <= 5; rounds++){
    const computerSelection = getComputerChoice(choice);
    //get input from the user and convert to lower case
    let userInput = prompt("Rock, Paper or Scissors?").toLowerCase();
    while (userInput !== 'rock' && userInput !== 'scissors' && userInput !== 'paper') {
        userInput = prompt("Rock, Paper or Scissors?").toLowerCase();
    }
    console.log(playRound(userInput, computerSelection));
    console.log(`Rounds: ${rounds}`);
    console.log(`Score: ${score}`);
}

console.log(`Total Score: ${score} out of 5`)
if (score >= 3) {
    console.log(`You've won!`)
}
else {
    console.log(`You've lost!`)
}















