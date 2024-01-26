const Sync = require("readline-sync");
const inventory = ["M4A1 Rifle", "Chili Mac MRE", "Toothbrush", "Wet Wipes", "Can of Dip"];
const maxInventorySize = 5;

function addToInventory(item) {
	if(inventory.length === maxInventorySize) {
		console.log("You cannot add another item to your inventory, please trade");
		var answer = Sync.question(`Would you like to trade an item in your inventory for ${item} (y/n)?`);
		if(answer === 'y') {
			for(var i = 0; i < inventory.length; i++ ) {
				console.log(`${i+1}) {inventory[i]}\n`);
			}
			var toReplace = Sync.question(`Enter the number of the item you want to trade for {item}: `);
			inventory[toReplace-1] = item;
		}
	}
}

function displayInventory() {
	console.log("Here is your inventory: \n");
	for(var i = 0; i < inventory.length; i++) {
		console.log(inventory[i] + '\n');
	}
}

module.exports = { addToInventory, displayInventory};
