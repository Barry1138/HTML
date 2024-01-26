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