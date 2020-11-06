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
    //new objects created with these are called instances
      // returns an object with various player properties
      //NEVER USE => on Prototypes

}

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

module.exports = Player