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

getPuzzle((error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(puzzle)
  }
})

// The below pulls data from restcountries url and then displays the countryCode name in the console. 

// const countryCode = "US";
// const countryRequest = new XMLHttpRequest() 

// countryRequest.addEventListener('readystatechange', (e) => {
//   if(e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText)
//     const country = data.find((country) => country.alpha2Code === countryCode) // alpha2Code is the request that is in the array.
//     console.log(country.name) // This prints the country name 
//   } else if (e.target.readyState === 4) {
//     console.log('An error has taken place')
//   }
// })

// countryRequest.open('GET', `https://restcountries.eu/rest/v2/all`) // This is the URL that we request the countries from.
// countryRequest.send()


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


