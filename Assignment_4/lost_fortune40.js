/* Lost Fortune */
/* Barry Calligan */
/* JavaScript COP2801 */
const readlineSync = require('readline-sync');
const inventory = require('inventory');
console.log("Welcome to Lost Fortune");

var soldier = ("Clint Eastwood", "Kirk Douglas", "Gene Hackman", "Chuck Norris");
var hero = getLeader();
var playAgain = 'y';
var lives = 3;

displayMenu(hero);


function displayStats(score,distance,lives,enemiesKilled,soldiersKilled,soldiersRescued,shieldsUp,engineTemp,bonus,playerHealth) {
	console.log("Here are the stats for the game so far:\n");
	console.log("\tStats\t");
	console.log("           ");
	console.log("Score: ", score);
	console.log("Enemy Distance: ", distance);
	console.log("Lives: ", lives);
	console.log("Health: ", playerHealth);
	console.log("Enemies Killed", enemiesKilled);
	console.log("Soldiers Killed", soldiersKilled);
	console.log("Soldiers Rescued", soldiersRescued);
	console.log("Shields Up: ", shieldsUp);
	console.log("Current Engine Temperature: ", engineTemp);
	console.log("Bonus: ", bonus);
}


function getLeader() {
	var name = readlineSync.question("Enter your name: ");
	return name;
}


function displayIntroduction(hero,soldiersKilled,soldiersRescued) { 
  console.log("A brave group of U.S. Soldiers set out on a mission in search of a top secret dossier called Lost Fortune. The group was led by the great American War Hero,", hero, ". Along the way, a band of Viet Cong ambushed the group. All fought for their lives under the command of", hero, " and the Viet Cong were defeated but at a cost. Of the Soldiers,", soldiersKilled, "were K.I.A., leaving just", hero, "and the", soldiersRescued, " men in the group.");
}

function displayMenu(hero) {
	var score = 200;
	var distance = 0;
	var enemiesKilled = 20;
	var soldiersKilled = 10;
	var soldiersRescued = 30;
	var shieldsUp = true;
	var engineTemp = 6582.89;
	var bonus = lives * 10;
	var playerHealth = 100;
	const ENEMY_POINTS = 250;
	var isGameOver = false;
	displayIntroduction(hero,soldiersKilled,soldiersRescued);
	displayStats(score,distance,lives,enemiesKilled,soldiersKilled,soldiersRescued,shieldsUp,engineTemp,bonus,playerHealth);
	while (playAgain == 'y') {
		console.log("Enter the battlefield\n");
		console.log("0) Display the current inventory");
		console.log("1) Go West");
		console.log("2) Go East");
		console.log("3) Go North");
		console.log("4) Go South");
		console.log("5) Display the current game stats");
		var choice = parseInt(readlineSync.question("Pick an option: "));
		switch (choice) {
			case 0:
				inventory.displayInventory();
				break;
			case 1:
				 console.log("To the west there is a tree line that recently was hit with a napalm strike. In this desolate tree line you fall into a hole and break your ankle. You take 50 points damage")
				 playerHealth = doDamage(playerHealth,50);
				 break;
			case 2:
				 console.log("To the east there is a small bunker. In the bunker you find a jar of peanut butter.");
				 var answer = readlineSync.question("Do you want to add the peanut butter to your inventory? (y/n)");
				 if(answer === 'y') { inventory.addToInventory("Peanut Butter"); }
				 break;
			 case 3:
				 console.log("To the north you find a village overrun with a small group of viet cong fighters. You eliminate the threat but take 75 points damage. One of the villagers cooks you a rotissere chicken.");
				 var answer - readlineSync.question("Do you want to add the rotissere chicken to your inventory? (y/n)");
				 if(answer === 'y') { inventory.addToInventory("Rotissere Chicken"); }
				 playerHealth - doDamage(playerHealth, 75);
				 break;
			 case 4:
				 console.log("To the south is your FOB. You are safe.");
				 break;
			 case 5:
				displayStats(score,distance,lives,enemiesKilled,soldiersKilled,soldiersRescued,shieldsUp,engineTemp,bonus,playerHealth);
				break;
			 default:
				 console.log("Invalid Selection");
		 }
		 var gameOver = checkGameOver(playerHealth, isGameOver);
		 isGameOver = gameOver.isGameOver;
		 if(isGameOver) {
			 break;
		 }
		 else {
			 playerHealth = gameOver.health;
		 }
		 console.log("You played a very exciting game,", hero);
		 playAgain = readlineSync.question("Would you like to play again(y/n)?");
	}

	console.log("Okay, Dismissed!");

	if (score >= 0 && score <= 500)
		console.log("Well, at least you didn't go AWOL.");
	else if (score > 500 && score < 3000)
		console.log("Congrats,", hero," you scored over 500. Carry on, soldier!");
	else if (score == 3000) {
		console.log("You scored a perfect 3000!\n");
		console.log("Now that's the spirit, soldier!");
	} else {
		console.log("WHAT IS YOUR MAJOR MALFUNCTION!");
	}
}

function doDamage(health,damage) {
	return health -= damage;
}

function checkGameOver(health,isGameOver) {
	if(health <= 0) {
		lives--;
		if(lives == 0) {
			console.log("Game Over");
			isGameOver = true;
		}
		else {
			console.log("You lost a life.");
			health = 100;
		}
	}
	return { isGameOver, health };
}


