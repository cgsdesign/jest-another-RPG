const Player = require('../lib/Player')
const { TestScheduler } = require('jest')

const Potion = require('../lib/Potion');//imports potion constructor

jest.mock('../lib/Potion');//overwrites the potions with fake data so even if potions breaks, if this function works, the tests wont fail just for testing

console.log(new Potion());

test('create a player object', ()=>{
const player =new Player ('Dave')
expect(player.name).toBe('Dave')
expect(player.health).toEqual(expect.any(Number))
expect(player.strength).toEqual(expect.any(Number))
expect(player.agility).toEqual(expect.any(Number))

expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
)
})

test("gets player's stats as an object", () => {
    const player = new Player('Dave');
  
    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
  });



test('gets inventory from player or returns false', () => {
    const player = new Player('Dave');
  
    expect(player.getInventory()).toEqual(expect.any(Array));
  
    player.inventory = [];
  
    expect(player.getInventory()).toEqual(false);
  });
//check health
  test("gets player's health value", () => {
    const player = new Player('Dave');
  
    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
  });
//check alive
  test('checks if player is alive or not', () => {
    const player = new Player('Dave');
  
    expect(player.isAlive()).toBeTruthy();
  
    player.health = 0;
  
    expect(player.isAlive()).toBeFalsy();
  });


//health remove
  test("subtracts from player's health", () => {
    const player = new Player('Dave');
    const oldHealth = player.health;
  
    player.reduceHealth(5);
  
    expect(player.health).toBe(oldHealth - 5);
  
    player.reduceHealth(99999);
  
    expect(player.health).toBe(0);
  });

  //attack
  test("gets player's attack value", () => {
    const player = new Player('Dave');
    player.strength = 10;
  
    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackValue()).toBeLessThanOrEqual(15);
  });

  test('uses a potion from inventory', () => {
    const player = new Player('Dave');
    player.inventory = [new Potion(), new Potion(), new Potion()];
    const oldCount = player.inventory.length;
  
    player.usePotion(1);
  
    expect(player.inventory.length).toBeLessThan(oldCount);
  });