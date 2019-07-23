// Function - input (input is known as an argument), code, output (return value)

//Below is an example of a function
let greetUser = function () {
    console.log('Hello user')
};

greetUser() // This is calling the function.

let square = function (num) {
    let result = num * num
    return result //this code returns the value 
}

let num = 3
let value = square(num)

console.log(value)

// Challenge Area

let convertFahrenheitToCelsius = function (convert) {
    let celsius = (convert - 32) * 5 / 9
    return celsius
};

let tempOne = convertFahrenheitToCelsius(32);
let tempTwo = convertFahrenheitToCelsius(68);

console.log(tempOne);
console.log(tempTwo);


// ConvertFahrenheitToCelsius

// call function 

// print converting values