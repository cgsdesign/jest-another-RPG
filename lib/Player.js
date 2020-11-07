const Potion = require('../lib/Potion');//must tye to potions for inventory
//crating startup character
//below is a CONSTRUCTOR
function Player(name='') {
    this.name = name
    this.health = Math.floor(Math.random() * 10 + 95)
    this.strength = Math.floor(Math.random() * 5 + 7)
    this.agility = Math.floor(Math.random() * 5 + 7)  
    this.inventory = [new Potion('health'), new Potion()]//creating startup portions(2)
    //NEW creates a new empty object then it fills the properties with 'this' information

}

    //new objects created with these are called instances
      // returns an object with various player properties
      //NEVER USE => on Prototypes
Player.prototype.getStats = function() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility
    };
  };

  // returns the inventory array or false if empty
  //NOTE prototype alows you to create a finction one and not have to create a new instance of that function every time you spawn a new player. This to my dragged monster, where the funtion had to be respawned every time withthe moster or drag did not work.
  Player.prototype.getInventory = function() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  };

  Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
  };

  Player.prototype.isAlive = function() {
      if (this.health > 0) {
          return true
      }
      else {
          return false
      }
  }
// ASK TAS WHY THI ONE HAS HEALTH AND NOT ATTACK BELOW
  Player.prototype.reduceHealth = function(health) {
    this.health -= health

    if (this.health < 0) {
      this.health = 0
    }
  }

  Player.prototype.getAttackValue = function() {
      let min = this.strength - 5
      let max = this.strength + 5
      return Math.floor(Math.random() * (max-min) + min)
  }

  Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion);
  };

  Player.prototype.usePotion = function(index) {
    const potion = this.getInventory().splice(index, 1)[0];
    //splice removes items from array and then reinserts them
    //NOTE [] is interpreted as new array
  
    switch (potion.name) {
      case 'agility':
        this.agility += potion.value;
        break;
      case 'health':
        this.health += potion.value;
        break;
      case 'strength':
        this.strength += potion.value;
        break;
    }
  };

module.exports = Player