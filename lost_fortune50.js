/* Lost Fortune */
/* Barry Calligan */
/* JavaScript COP2801 */

class game {
	//this is the class declaration for
	constructor (gName) {
		this.name = gName;
	}
};

class gameConsole {
	constructor () {
		this.games = [];
	}
	
	load() {
		this.games.push(new game("Zelda"));
		this.games.push(new game("Mario"));
		this.games.push(new game("Halo"));	
	}

	log () {
		// Create a function to iterate the array called "games"
		this.games.forEach((game) => {
			console.log(game.name);
		});
	}	

};
	// Create an empty array called "games"
	// Create a function to load the array called "games"




var gameStation = new gameConsole();
gameStation.load();
gameStation.log();