let name

name = 'Jen' // Uncomment this to see how the below works

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name);
};

// Undefined for function arguments 
//  Undefined as the function return default value 

let square = function (num) {
    console.log(num)
};

let result = square();
console.log(result);

// null is clear that the developer assigned this value while undefined is unclear if its done by the developer or the program error.

let age = 9;

age = null // null is clear that the developer assigned thi.s

console.log(age);