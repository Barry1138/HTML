/* Lost Fortune */
/* Barry Calligan */
/* JavaScript COP2801 */
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