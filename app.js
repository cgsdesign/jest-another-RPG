// npm init to create package.json
//to add .gitignore - conand line: touch .gitignore
// npm install inquirer to get the node_modules and package-lock.son (see 9.3.4 for details)
//npm run test to run test - note make have to reinstal jest while in this file. 
//must control C everytime to stop the jest command (or most other comands that wont stop)

//now unit testing in relation to mocks for interview questions

//!! dont create arrow methods in your object becasue it will mess up "this."
//oop is noce becasue keeps objects from messing with other's code
//if you want to add new properties to a class ex new catagory or functions constructor- use prototype.(new factor)
// prototypes add methors to existing constructors (think engeratance)
//toBe is a specific value, expect."" is of a type

//for challenge - inquier, unit 6 , jest testing

const Game = require('./lib/Game');

new Game().initializeGame();