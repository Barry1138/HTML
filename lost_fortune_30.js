/* Lost Fortune */
/* Barry Calligan */
/* JavaScript COP2801 */

console.log("Welcome to Lost Fortune");

var soldier = ("Clint Eastwood", "Kirk Douglas", "Gene Hackman", "Chuck Norris");
var hero = "John Wayne";

let score = 0;
let distance = 0;
let playagain = 'y';
let lives = 10;
let enemiesKilled = 0;
let soldiersKilled = 0;
let soldiersRescued = 0;
let shieldsUp = true;
let engineTemp = 6582.89;

const ENEMY_POINTS = 250;

console.log("\tStats\t");
console.log("           ");
console.log("Score: ", score);
console.log("Enemy Distance: ", distance);
console.log("Lives: ", lives);
console.log("Enemies Killed", enemiesKilled);
console.log("Soldiers Killed", soldiersKilled);
console.log("Soldiers Rescued", soldiersRescued);
console.log("Shields Up: ", shieldsUp);
console.log("Current Engine Temperature: ", engineTemp);

score = score + 100;
score += 100;
lives++;
let bonus = lives * 10;

console.log("\tStats\t");
console.log("           ");
console.log("Score: ", score);
console.log("Enemy Distance: ", distance);
console.log("Lives: ", lives);
console.log("Enemies Killed", enemiesKilled);
console.log("Soldiers Killed", soldiersKilled);
console.log("Soldiers Rescued", soldiersRescued);
console.log("Shields Up: ", shieldsUp);
console.log("Current Engine Temperature: ", engineTemp);
console.log("Bonus: ", bonus);

enemiesKilled = 20;
score = enemiesKilled * ENEMY_POINTS;

soldiersKilled = 10;
score = soldiersKilled - ENEMY_POINTS;

soldiersRescued = 30;
score = soldiersRescued + ENEMY_POINTS;

console.log("A brave group of U.S. Soldiers set out on a mission in search of a top secret dossier called Lost Fortune. The group was led by the great American War Hero,", hero, ". Along the way, a band of Viet Cong ambushed the group. All fought for their lives under the command of", hero, " and the Viet Cong were defeated but at a cost. Of the Soldiers,", soldiersKilled, "were K.I.A., leaving just", hero, "and the", soldiersRescued, " men in the group.");

const readlineSync = require('readline-sync');

let username = prompt("Enter your name:");

let again = 'x';
while (again == 'y') {
    console.log("Enter the battlefield\n");
    console.log("1 - Easy");
    console.log("2 - Normal");
    console.log("3 - Hard");
    console.log("4 - War Hero");

    const choice = parseInt(readlineSync.question("Enter your battlestation: "));
    console.log(typeof(choice));
    switch (choice) {
	    case "1":
	         console.log("You chose easy!");
		     break;
	    case "2":
	         console.log("You chose normal!");
		     break;
	     case "3":
	         console.log("You chose Hard!");
		     break;
	     case "4":
	         console.log("You chose War Hero. NOW GO GET 'EM!");
		     break;
	     default:
	         console.log("Invalid Selection");
     }

     console.log("You played a very exciting game,", username);
     again = readlineSync.question("Would you like to play again(y/n)?", username);
}

console.log("Okay, Dismissed!");

const score = 3000;

if (score >= 0 && score <= 500)
    console.log("Well, at you didn't go AWOL.");
else if (score > 500 && score < 3000)
	console.log("Congradulations,", username," you scored over 500. Carry on, soldier!");
else if (score == 3000) {
	console.log("You scored a perfect 3000!\n");
    console.log("Now that's the spirit, soldier!");
} else {
	console.log("WHAT IS YOUR MAJOR MALFUNCTION!");
}

const MAX_ITEMS = 5;
let inventory = ["Rifle", "Combat Helmet", "Knife", "Map", "Ammo"];

console.log("Your Items:\n");
for (let i = 0; i < inventory.length; i++) {
	console.log(inventory[i]);
}

console.log("You trade your knife for a handgun");
inventory[0] = "Handgun";

console.log("Your Items:\n");
for (let i = 0; i < inventory.length; i++) {
	console.log(inventory[i]);
}

console.log("You find a medkit.");
if (inventory.length < MAX_ITEMS)
	inventory.push("Medkit");
else
	console.log("You have too many items and can't carry another");
    // ask to trade
	// if yes inventory[5] == newitem
	// if no then continue the story

console.log("Your Items:\n");
for (let i = 0; i < inventory.length; i++) {
	console.log(inventory[i]);
}