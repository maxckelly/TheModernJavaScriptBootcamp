// Import statement - This is one way to export files across.
//import './utilities.js';

// The below import is grabbing code from the utilities file. To grab multiple things just separate with a ','
import { add, name } from "./utilities.js";
import { scream } from "./scream.js";

console.log(add(32, 31))
console.log('index.js')
console.log(name)
console.log(scream(name))

// 1. Create new file called scream.js
// 2. Export a "scream" function that takes a string 
//  a. Convert that string to upper case
//  b. Add ! onto the end
// 3. Import scream into index.js and use it. 