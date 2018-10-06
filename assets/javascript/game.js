var Choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guesses = {};
var guessesLeft = 10;

var computerChoice = Choices[Math.floor(Math.random() * Choices.length)];

document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice){
		wins++;
	 alert(" YOU WIN TRY AGAIN")

    }else{
		losses++;
		guessesLeft-= -1;
		
    }

    if(guessesLeft === 0){
        losses++
	}
	

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "guessesleft: " + guesses;
};