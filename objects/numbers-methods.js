let num = 103.941

// toFixed - this limits the numbers after the decimal point 

console.log(num.toFixed(1));

console.log(Math.round(num)); // This rounds the it up
console.log(Math.floor(num)); // This rounds it down
console.log(Math.ceil(num)); 

let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min +  1)) + min; // Generates a random number between the min and max above

console.log(randomNum);

// Challenge Area 

// Range between 1 - 5 - true if correct, false if not correct

// let guessMin = 1;
// let guessMax = 20;
// let makeGuess = Math.floor(Math.random() * (guessMax - guessMin +  1)) + guessMin; // Generates a random number between the min and max above

// if (makeGuess <= 5) {
//     console.log(true) 
// } else {
//     console.log(false)
// };

// console.log(makeGuess);

let makeGuess = function (guess) {
  let guessMin = 1
  let guessMax = 20
  let randomNum = Math.floor(Math.random() * (guessMax - guessMin + 1)) + guessMin; // Generates a random number between the min and max above

  return guess === randomNum

};

console.log(makeGuess(10));
