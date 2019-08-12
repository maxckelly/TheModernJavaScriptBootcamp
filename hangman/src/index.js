import uuidv4 from 'uuid/v4'
import Hangman from './hangman.js'
import { getPuzzleOld, getCountry, getLocation, getCurrentCountry, getPuzzle } from './requests.js'
import validator from 'validator'


console.log(uuidv4())
console.log(validator.isEmail('max@revelthat.com'))


const puzzleEl = document.querySelector("#puzzle"); // Selects the id element in html file.
const statusEl = document.querySelector("#status");
let game1;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.innerHTML = "";
  statusEl.textContent = game1.statusMessage;

  game1.puzzle.split("").forEach(letter => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
};

// Renders a new game if this function is ran
const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame); // When reset button clicked it resets game
startGame();

// Fetch
// The below pulls data from restCountries url and then displays the countryCode name in the console.
getCountry("US")
  .then(country => {
    console.log(`Country Name: ${country.name}`);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });

getLocation().then(location => {
  getCountry(location.country).then(country => {
    console.log(
      `My current location is ${location.city}, ${location.country}, ${
        location.region
      }, ${location.loc}`
    );
  });
});
