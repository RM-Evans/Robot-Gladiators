// // window.alert("This is an alert! JavaScript is running!");
// var playerName = window.prompt("What is your robot's name?");
// //note the lack of quotations around playerName
// console.log(playerName);
// console.log("This logs a string, good for leaving yourself a message");
// //this will do math and log 20
// console.log(10+10);
// //what is this?
// console.log("Our robot's name is " + playerName);

// function fight() {
//     window.alert("The fight has begun!");
// }
// fight();


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 50;
var playerMoney = 10;

//can also log multiple values at once like
//console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player chooses to fight, then fight
    if ( promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by subtracting the amount set in the player attack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        //if player choose to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
      }
    // if no (false), ask question again by running fight() again
     else {
        fight();
    } 
    // if the player didnt choose 1 or 2 in prompt
    } else {
        window.alert("You need to pick a valid option. Try again!");
  }
}; 
fight();





//     //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
//     enemyHealth = enemyHealth - playerAttack;
//     //Log a resulting message to the console so we know that it worked.
//     console.log(
//         playerName + " attacked " + enemyName + ". " + enemyName + "now has " + enemyHealth + "health remaining."
//     );
//     // Subtract the value of `enemyAttack` from the value of `playerHealth`and use that result to update the value in the `playerHealth` variable.
//     playerHealth = playerHealth - enemyAttack;
//     // Log a resulting message to the console so that we know that it worked.
//     console.log(
//         enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
//     );

//     // check enemy's health
//     if (enemyHealth <= 0) {
//         window.alert(enemyName + " has died!");
//     }
//     else {
//         window.alert(enemyName + " still has " + enemyHealth + " health left.");
//     }
// };