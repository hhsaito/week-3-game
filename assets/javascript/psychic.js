// letter variables and initial values
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var      wins = 0,
       losses = 0,
  guessesLeft = 9,
  userGuesses = [],
computerGuess = '';

// This sets the computer guess equal to the random and resets letters guessed and guesses left
function reset() {
	userGuesses = [];
	guessesLeft = 9;
	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	console.log(computerGuess);
}
// Set variables to the same as the beginning.
function resetAll() {
	     wins = 0,
       losses = 0, 
  guessesLeft = 9,
  userGuesses = [],
computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	tallyScore();
}
function tallyScore() {
	// Taking the tallies and displaying them in HTML
		var html = "<p>Wins: " + 
		wins + 
		"</p>" +
		"<p>Losses: " + 
		losses + 
		"</p>" +
		"<p>Guesses left: " + 
		guessesLeft + 
		"</p>" +
		"<p>Your guesses so far: <span id='bad-guess'>" + 
		userGuesses + "</span></p>";

		// Placing the html into the game ID
		document.querySelector('#theGame').innerHTML = html;
}
reset();

document.getElementById("resetGame").onclick = function() {resetAll()};

// When the user presses the key it records the keypress and then sets it to userguess
document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	// Making sure the user chooses a value in the array, hasn't been previously guessed and guesses remaining is more than 0
	if (( computerChoices.indexOf( userGuess ) != -1  ) && ( userGuesses.indexOf( userGuess ) == -1 ) && ( guessesLeft > 0 )) {
		
		// It tests to determine if the user guess is the same as the computer random 
		if (userGuess == computerGuess){
			wins++;
			reset();
		}
		else if ( guessesLeft > 1 ) {
			guessesLeft--;
			userGuesses.push(userGuess);
		}
		else {
			losses++;
			reset();
		}

	tallyScore();
	
	}
}