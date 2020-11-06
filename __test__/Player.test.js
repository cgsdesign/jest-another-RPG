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
