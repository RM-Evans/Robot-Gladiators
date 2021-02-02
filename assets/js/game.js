// // window.alert("This is an alert! JavaScript is running!");
// var playerInfo.name = window.prompt("What is your robot's name?");
// //note the lack of quotations around playerInfo.name
// console.log(playerInfo.name);
// console.log("This logs a string, good for leaving yourself a message");
// //this will do math and log 20
// console.log(10+10);
// //what is this?
// console.log("Our robot's name is " + playerInfo.name);

// function fight() {
//     window.alert("The fight has begun!");
// }
// fight();
/* GAME FUNCTIONS */

// function to start a new game
var startGame = function () {
    //debugger;
    // reset player stats
    playerInfo.reset(); 

    // fight each enemy robot by looping over them and fighting them one at a time
    for (var i = 0; i < enemyInfo.length; i++) {
        //store after last round fix
        var isLastRound = i === enemyInfo.length - 1 
        // if player is still alive, keep fight next enemy
        if (playerInfo.health > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            // pick new enemy to fight based on the index of the enemyInfo array
            var pickedEnemyObj = enemyInfo[i];

            // set health for picked enemy
            pickedEnemyObj.health = randomNumber(40, 60);

            console.log(pickedEnemyObj);

            // pass the pickedEnemyObj object variable's value into the fight function, where it will assume the value of the enemy parameter
            fight(pickedEnemyObj, isLastRound);
        }
        // if player is not alive, break out of the loop and let endGame function run
        else {
            break;
        }
    }

    // after loop ends, we are either out of player.health or enemies to fight, so run the endGame function
    endGame();
};
// function to end entire game
var endGame = function () {
    window.alert("The game has now ended. Let's see how you did!");

    //if player is still alive, player wins!
    if (playerInfo.Health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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

var fight = function (enemy, isLastRound) {

    //repeat and execute as long as enemy is alive
    while (enemy.health > 0 && playerInfo.Health > 0) {
        //fight or skip?
        var promptFight = window.prompt( "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // if player chooses to skip, then skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                // subtract money from playerInfo.money for skipping
                playerMoney = playerMoney - 10;
                    console.log("playerInfo.money", playerInfo.money);
                shop();
                break;
            }
        }
        
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        //remove enemy's health by subtracting the amount set in the player attack variable
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name +
            " attacked " +
            enemy.name +
            ". " +
            enemy.name +
            " now has " +
            enemy.health +
            " health remaining."
        );

        //check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            //award player with money for winning
            playerInfo.money = playerInfo.money + 20;

            if(!isLastRound){

            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

            if (storeConfirm) {
                shop();
                }
            }
                //leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        // remove enemy's health by subtracting the amount we set in the damage variable
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemy.name +
            ' attacked ' +
            playerInfo.name +
            '. ' +
            playerInfo.name +
            ' now has ' +
            playerInfo.health +
            ' health remaining.'
        );

        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + ' has died!');
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
        }
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
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
                playerInfo.upradeAttack();
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
var randomNumber = function () {
    var value = Math.floor(Math.random() * 21) + 40;
    //var value = Math.floor(Math.random() * (max - min) + min);

    return value;
};

var playerInfo = {
    Name: window.prompt("What is your robot's name?"),
    Health: 100,
    Attack: 25,
    Money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function () {
        if (this.money >= 7) {
            window.alert("refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upradeAttack: function () {
        if (this.money >= 7) {
            window.alert("upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};


//can also log multiple values at once like
//console.log(playerInfo.name, playerInfo.attack, playerInfo.Health);

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];
console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);


startGame();




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
//     console.log(enemyNames[i] + " is at " playerInfo.name+ i + " index");
//   }

