// 1. Setup new "status" property with initial value of "playing" 
// 2. Create method for recalculating status to "playing", "finished" or "Failed" 
// 3. Call that method after a guess is processed 
// 4. Use console.log to print the status

const puzzleEl = document.querySelector("#puzzle"); // Selects the id element in html file.
const guessesEl = document.querySelector("#guesses"); // Selects the id element in html file.
const statusEl = document.querySelector('#status')
const game1 = new Hangman("Cat", 2);

puzzleEl.textContent = game1.getPuzzle();
guessesEl.textContent = game1.remainingGuesses;
statusEl.textContent = game1.status

window.addEventListener("keypress", function(e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.getPuzzle();
  guessesEl.textContent = game1.remainingGuesses;
  statusEl.textContent = game1.status
});



//----- Primitive value: string, number, boolean, null, undefined -----

// Object: myObject --> product --> Object.prototype --> null // This is how the below code will run it will go through product if nothing there it then goes through object.prototype if nothing there it returns undefined
// Array: myArray --> Array.prototype  --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null
// const getString = 'Computer'
// console.log(getString.split(''))

// const otherString = new String('Phone')
// console.log(otherString)


