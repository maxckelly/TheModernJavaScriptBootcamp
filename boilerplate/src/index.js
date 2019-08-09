// Import statement - This is one way to export files across.
// import './utilities.js';

// Below are examples of how you can import

// Example of a default export - import square, { add, name } from './utilities.js'
// We can call the default by any name unlike the { add, name } for example - import otherSquare, { add, name } from './utilities.js'
// If you're only importing the default then you can call it like import otherSquare from './utilities.js'

// The below import is grabbing code from the utilities file. To grab multiple things just separate with a ','
import otherSquare, { add, name } from "./utilities.js";
import scream from "./scream.js";

console.log(add(32, 31))
console.log('index.js')
console.log(name)
console.log(scream(name))
console.log(otherSquare(10))