// Primitive value: string, number, boolean, null, undefined 

// Object: myObject --> product --> Object.prototype --> null // This is how the below code will run it will go through product if nothing there it then goes through object.prototype if nothing there it returns undefined
// Array: myArray --> Array.prototype  --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

const getString = 'Computer'
console.log(getString.split(''))

const otherString = new String('Phone')
console.log(otherString)
