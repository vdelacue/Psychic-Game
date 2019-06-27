// Create a small array
var letters = ["a", "b", "c"];

// Create an empty array to hold what the user guesses

// Create a variable that will be randomly assigned one of the three letters

// Set a limit for the user guesses left and assign that to a variable. 

// Create counters for wins and losses and assign them the value of zero

// Create three functions to update guesses, update guesses left, and update guesses so far

  // In the update guesses left function create a code to grab the HTML element and setting it equal to the guesses left.
  // (i.e. guesses left will get displayed in HTML)


  // In the update guesses function we get a random letter-to-guess and assign it based on a random generator (only looking at a, b, or c)


 
  // In the update guesses-so-far function we take the guesses the user has tried -- then display it as letters separated by commas.

// Create a reset function will be called when we reset everything
// The reset Function should assign the values of the variables to their original values before the user started to play
// For example, the guesses left variable, the guessed letter empty array ...etc

// Call the functions that you created above

// Create a document.onkeydown function that will capture the keyboard clicks.

  // This function should reduce the guesses by one

  // Set the event.key to Lowercase the letter and save it in a variable 

  // Then push the guess to the guessedLetters array

  // Then its going to run the update functions


  // We create an if-statement to check if there's a match.


    // If there is then we win and we'll update the HTML to display the win.

    // Then we'll reset the game

  // If we are out of guesses...

    // Then we will loss and we'll update the HTML to display the loss.

    // Then we'll call the reset.

    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ['r', 'p', 's'];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var ties = 0;

    // Create variables that hold references to the places in the HTML where we want to display things.
    var directionsText = document.getElementById('directions-text');
    var userChoiceText = document.getElementById('userchoice-text');
    var computerChoiceText = document.getElementById('computerchoice-text');
    var winsText = document.getElementById('wins-text');
    var lossesText = document.getElementById('losses-text');
    var tiesText = document.getElementById('ties-text');

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      // Determines which key was pressed.
      var userGuess = event.key;

      // if (userGuess !== 'r' || userGuess !== 's' || userGuess !== 'p') {
      //   return false;
      // }
      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // Reworked our code from last step to use "else if" instead of lots of if statements.

      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
      if (userGuess === 'r' || userGuess === 'p' || userGuess === 's') {
        if (
          (userGuess === 'r' && computerGuess === 's') ||
          (userGuess === 's' && computerGuess === 'p') ||
          (userGuess === 'p' && computerGuess === 'r')
        ) {
          wins++;
        } else if (userGuess === computerGuess) {
          ties++;
        } else {
          losses++;
        }

        // Hide the directions
        directionsText.textContent = '';

        // Display the user and computer guesses, and wins/losses/ties.
        userChoiceText.textContent = 'You chose: ' + userGuess;
        computerChoiceText.textContent = 'The computer chose: ' + computerGuess;
        winsText.textContent = 'wins: ' + wins;
        lossesText.textContent = 'losses: ' + losses;
        tiesText.textContent = 'ties: ' + ties;
      }
    };