const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');


function Game() {
 this.roundNumber = 0
 this.isPlayerTurn = false
 this.enemies = []
 this.currentEnemy// will be defined with initialize game
 this.player// will be defined with initialize game
}

//run battle
Game.prototype.battle = function() {
    if (this.isPlayerTurn) {
        inquirer
          .prompt({
            type: 'list',
            message: 'What would you like to do?',
            name: 'action',
            choices: ['Attack', 'Use potion']
          })
          //if potions chosen
          .then(({ action }) => {
            if (action === 'Use potion') {
                if (!this.player.getInventory()) {
                  console.log("You don't have any potions!");
                  return;
                }
              //promptwhat potion and adjust numbers acordingly
                inquirer
                .prompt({
                  type: 'list',
                  message: 'Which potion would you like to use?',
                  name: 'action',
                  choices: this.player.getInventory().map((item, index) => `${index + 1}: ${item.name}`)
                })
                .then(({ action }) => {
                  const potionDetails = action.split(': ');
              
                  this.player.usePotion(potionDetails[0] - 1);
                  console.log(`You used a ${potionDetails[1]} potion.`);
                });
              }
              //battle
            else {
              const damage = this.player.getAttackValue();
              this.currentEnemy.reduceHealth(damage);
      
              console.log(`You attacked the ${this.currentEnemy.name}`);
              console.log(this.currentEnemy.getHealth());
            }
          });
    }
    else {
      const damage = this.currentEnemy.getAttackValue();
      this.player.reduceHealth(damage);
  
      console.log(`You were attacked by the ${this.currentEnemy.name}`);
      console.log(this.player.getHealth());
    }
  };



//start battle
Game.prototype.startNewBattle = function() {
    if (this.player.agility > this.currentEnemy.agility) {
      this.isPlayerTurn = true;
    } else {
      this.isPlayerTurn = false;
    }
    console.log("Your stats are as follows:")
    console.table(this.player.getStats()) //table makes look cool
    console.log(this.currentEnemy.getDescription())
    this.Battle()//start battle
  };




//start game
Game.prototype.initializeGame = function(){
    this.enemies.push(new Enemy('goblin', 'sword'))
    this.enemies.push(new Enemy('Orc','mace'))
    this.enemies.push(new Enemy('Undead', "axe"))

    this.currentEnemy = this.enemies[0];
//ask player for player name
    inquirer
        .prompt({
            type: 'input',
            name: 'name',
            message: 'What is your character name?'
        })
        //destructure name for responseto insert into code
        //NOTE!!! below I have to use => because .then(function({name}) would create a new scope so the current enemy consol log wont work
        .then(({name}) => {
            this.player = new Player(name)
            //console.log(this.currentEnemy, this.player);
            this.startNewBattle()
        })
        //test object creation      

}

module.exports = Game;