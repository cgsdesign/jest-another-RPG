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

Game.prototype.initializeGame = function(){
    this.enemies.push(new Enemy('goblin', 'sward'))
    this.enemies.push(new Enemy('Orc','mace'))
    this.enemies.push(new Enemy('Undead', "axe"))

    this.currentEnemy = this.enemies[0];
    console.log(this.currentEnemy)
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
            console.log(this.currentEnemy, this.player);
        })
        //test object creation
        

}

module.exports = Game;