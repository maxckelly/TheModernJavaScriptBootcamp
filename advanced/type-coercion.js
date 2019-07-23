// Type Coercion - a string, a number, a boolean - Should avoid doing this.  

console.log('5' + 5) // Number version 
console.log('5' - 5) // Number version
console.log('5' == 5) // Double == mean that it doesn't take in the string number it sees it as a 5. You should always look at using ===.

// const type = typeof 'Hello' // Type of basically tells you the type of telling you if its a 'number', 'string' etc...

const value = true + 12 
const type = typeof value 
console.log(value)
console.log(type)