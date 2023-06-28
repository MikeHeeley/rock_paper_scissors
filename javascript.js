
// function which will return rock paper or scissors at random from an array
function getComputerChoice (array) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * array.length);

    // get random item
    const item = array[randomIndex];

    return item;

}

// array of choice
const choice = ['rock', 'paper', 'scissors'];

console.log(getComputerChoice(choice))