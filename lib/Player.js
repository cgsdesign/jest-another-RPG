const Potion = require('../lib/Potion');//must tye to potions for inventory
const Character = require('./Character');
//crating startup character
//below is a CONSTRUCTOR
// inherit prototype methods from Character here:

class Player extends Character {
    constructor(name = '') {
      // call parent constructor here:
      super(name);
        this.inventory = [new Potion('health'), new Potion()]//creating startup portions(2)
        //NEW creates a new empty object then it fills the properties with 'this' information
    }
    
    Player = Object.create(Character);
    //new objects created with these are called instances
      // returns an object with various player properties
      //NEVER USE => on Prototypes
    getStats() {
        return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
        };
    };
  // returns the inventory array or false if empty
  //NOTE prototype alows you to create a finction one and not have to create a new instance of that function every time you spawn a new player. This to my dragged monster, where the funtion had to be respawned every time withthe moster or drag did not work.
  getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  };

  addPotion(potion) {
    this.inventory.push(potion);
  };

  usePotion(index) {
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
}
module.exports = Player