// Create a small array
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create an empty array to hold what the user guesses
var userGuesses = [];

var wins = 0;
var losses = 0;

// Create a variable that will be randomly assigned one of the three letters

var randomLetter = letters[Math.floor(Math.random() * letters.length)];

// Set a limit for the user guesses left and assign that to a variable. 
var remainingGuesses = 9;

function resetGame() {
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
    userGuesses = [];
    remainingGuesses = 9;
    winMessage.textContent = "";
    lossMessage.textContent = "";
};

// Create three functions to update guesses, update guesses left, and update guesses so far

// In the update guesses left function create a code to grab the HTML element and setting it equal to the guesses left.
// (i.e. guesses left will get displayed in HTML)


// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById('directions-text');
var userGuessHTML = document.getElementById('userGuesses');
var remainingGuessHTML = document.getElementById('remainingGuesses');
var winMessage = document.getElementById('youWin');
var lossMessage = document.getElementById('youLose')

var winsText = document.getElementById('wins-text');
var lossesText = document.getElementById('losses-text');
var tiesText = document.getElementById('ties-text');

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    // Determines which key was pressed.

    if (event.which >= 65 && event.which <= 90) {
    var userGuess = event.key;
    remainingGuesses--;
    remainingGuessHTML.textContent = "remaining guesses: " + remainingGuesses;
    userGuesses.push(userGuess);
    userGuessHTML.textContent = 'You chose: ' + userGuesses;
    
    if (userGuess === randomLetter) {
        wins++;
        winMessage.textContent = "You Won!!";
        winsText.textContent = 'wins: ' + wins;
        resetGame();
    }

    if (remainingGuesses === 0) {
        losses++;
        lossMessage.textContent = "You Lost!"
        lossesText.textContent = 'losses: ' + losses;
        resetGame();
    }
    // if (userGuess !== randomLetter && userGuesses.indexOf(userGuess) != -1 && remainingGuesses > 0) {
    //     userGuesses.push(userGuess)

    // } else if (userGuess.toLocaleLowerCase() === randomLetter) {
    //     winMessage.textContent = "You Won!!";
    // } else {
    //     lossMessage.textContent = "You Lost!";
    // };


    // Hide the directions
    directionsText.textContent = '';

    // Display the user and computer guesses, and wins/losses/ties.
    // computerChoiceText.textContent = 'The computer chose: ' + computerGuess;
    // winsText.textContent = 'wins: ' + wins;
    // lossesText.textContent = 'losses: ' + losses;
    // tiesText.textContent = 'ties: ' + ties;
}
};