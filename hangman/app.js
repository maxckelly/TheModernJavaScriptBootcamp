const puzzleEl = document.querySelector("#puzzle"); // Selects the id element in html file.
const statusEl = document.querySelector('#status')
const game1 = new Hangman("Cat Parts", 2);

puzzleEl.textContent = game1.puzzle;
statusEl.textContent = game1.statusMessage

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.puzzle;
  statusEl.textContent = game1.statusMessage
});

// Fetch
getPuzzle('2').then((puzzle) => {
  console.log(puzzle)
}).catch((err) => {
  console.log(`Error: ${err}`)
})

// Fetch
// The below pulls data from restcountries url and then displays the countryCode name in the console. 
getCountry('US').then((country) => {
  console.log(`Country Name: ${country.name}`); 
}).catch((err) => {
  console.log(`Error: ${err}`)
})

getLocation().then((location) => {
  return getCountry(location.country)
}).then((country) => {
  console.log(country.name)
}).catch((err) => {
  console.log(`Error ${err}`)
})

getLocation().then((location) => {
  getCountry(location.country).then(country => {
    console.log(`My current location is ${location.city}, ${location.country}, ${location.region}, ${location.loc}`)
  })
})



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


