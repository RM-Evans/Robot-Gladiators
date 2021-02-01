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
var playerAttack = 25;
var playerMoney = 10;

//can also log multiple values at once like
//console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
//  console.log(enemyNames);
//  console.log(enemyNames[0]);
//  console.log(enemyNames[1]);
//  console.log(enemyNames[2]);
//  console.log(enemyNames[3]);
//  console.log(enemyNames.length);
//makes it unresponsive? runs out of memory, maybe : below
//  for(var i = 0; enemyNames.length; i++) {
//  console.log(enemyNames[i]);
//  }
// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index");
//   }

var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
    debugger;
    //repeat and execute as long as enemy is alive
    while (enemyHealth > 0 && playerHealth > 0) {
        // Alert players that they are starting the round
        //window.alert("Welcome to Robot Gladiators");

        var promptFight = window.prompt(
            "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
        );
        // if player chooses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //remove enemy's health by subtracting the amount set in the player attack variable
            var damage = randomNumber(playerAttack - 3, playerAttack);
            enemyHealth = Math.max(0, enemyHealth - damage);
            console.log(
                playerName +
                " attacked " +
                enemyName +
                ". " +
                enemyName +
                " now has " +
                enemyHealth +
                " health remaining."
            );

            //check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            //remove player's health by subtracting the amount set in the enemyAttack variable
            var damage = randomNumber(enemyAttack - 3, enemyAttack);
            playerHealth = Math.max(0, playerHealth - damage);
            console.log(
                enemyName +
                " attacked " +
                playerName +
                ". " +
                playerName +
                " now has " +
                playerHealth +
                " health remaining."
            );

            //check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(
                    playerName + " still has " + playerHealth + " health left."
                );
            }
            //if player picks "skip" confirm and then stop the loop
        }
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;
            }
            //if (playerMoney <=0}{
            //window.alert("out of money! no more skips!")
            //}
            // if no (false), ask question again by running fight() again
            else {
                fight();
            }
            // if the player didnt choose 1 or 2 in prompt
         } //else {
        //     window.alert("You need to pick a valid option. Try again!");
        // }
    }
};

var startGame = function () {

    //reset player stats
    playerHealth = 100;
    playerAttack = 25;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // notify what round they are in (note: arrays start at 0, so +1)
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            //pick new enemy based on index of EnemyNames array
            var pickedEnemyName = enemyNames[i];
            //reset enemy health each round
            enemyHealth = randomNumber(40, 60);
            console.log(enemyHealth);
            //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
            //if were not the last enemy in the array and health is not depleted
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                if (storeConfirm) {
                    shop();
                }
            }
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
        //call fight function with enemy robot
        //fight(pickedEnemyName[i]);
    }
    //play again
    endGame();
};
// function to end entire game
var endGame = function () {
    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }

};

var shop = function () {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    //switch to carryout actions
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7)
            window.alert("Refilling players health by 20 for 7 dollars.");
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            break;
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7)
            window.alert("Upgrading players attack by 6 for 7 dollars.");
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
};

//function to generate random numeric value
var randomNumber = function() {
    var value = Math.floor(Math.random() * 21) + 40;

    return value;
}

startGame();

//     //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
//     enemyHealth = enemyHealth - playerAttack;
//     //Log a resulting message to the console so we know that it worked.
//     console.log(
//         playerName + " attacked " + enemyNames + ". " + enemyNames + "now has " + enemyHealth + "health remaining."
//     );
//     // Subtract the value of `enemyAttack` from the value of `playerHealth`and use that result to update the value in the `playerHealth` variable.
//     playerHealth = playerHealth - enemyAttack;
//     // Log a resulting message to the console so that we know that it worked.
//     console.log(
//         enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
//     );

//     // check enemy's health
//     if (enemyHealth <= 0) {
//         window.alert(enemyNames + " has died!");
//     }
//     else {
//         window.alert(enemyNames + " still has " + enemyHealth + " health left.");
//     }
// };
