//Player class

function Player () {
	// this.name = name
}

Player.prototype.picks = function(pick) {
	this.pick = pick
}

function Game (player1, player2) {
	console.log("New game created");
	this.player1 = player1;
	this.player2 = player2;
	
}


Game.prototype.winner = function() {
	//return player1;
	if(pairs[this.player1.pick].contains(this.player2.pick)) {		
		return this.player1;
	} else if(pairs[this.player2.pick].contains(this.player1.pick)) {
		return this.player2;
	} else {
		// Draw game
		console.log("the game is a draw");
		return null;
	}
}

var pairs = { 
	'rock': ['scissors', 'lizard'], 
	'paper': ['rock', 'spock'], 
	'scissors': ['paper', 'lizard'], 
	'lizard': ['spock', 'paper'],
	'spock': ['rock', 'scissors']
}

Array.prototype.contains = function(pick) {

	for(var item in this) {
		if(this[item] == pick) {
			return true
		}
	}
	return false;
}

// nil in javascript - if function doesn't return anything you receive 'undefined'
// don't need to pass in all arguments
//call method - in ruby player.say_hello  -- in javascript player.sayHello()