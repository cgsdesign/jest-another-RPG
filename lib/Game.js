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



module.exports = Game;