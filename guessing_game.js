var readlineSync = require('readline-sync');

let numberOfTries = 1;
let rand_num = Math.floor(Math.random() * (10 - 1) + 1);

let user_guess = readlineSync.question("What is your guess?");

while (user_guess != rand_num){
    numberOfTries++;
    if (user_guess > rand_num)
	    console.log("Too High");
    else if (user_guess < rand_num)
	    console.log("Too Low");
	    
	user_guess = readlineSync.question("What is your guess?");
}

console.log("Congradulations, you guess the number in " + numberOfTries + " tries.");