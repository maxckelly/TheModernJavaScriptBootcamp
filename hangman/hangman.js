// No guesses? -> ***
// Guessed "c", "b" and "t"? -> c*t

const Hangman = function (word, remainingGuesses) {
    const wordAlteration = (word.toLowerCase()).split('')
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['job']
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
       return puzzle
}

Hangman.prototype.makeGuess = function (guess){
    const aGuess = guess.toLowerCase()
    //console.log(aGuess)
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(aGuess) 
    // If this.guessedLetters is empty & bad guess:
    if (isUnique) {
        this.guessedLetters.push(aGuess)
        // bad guess - lose 1 guess
        this.guesses = this.guesses -1
    // If empty & good guess:
    } 

    if (isUnique && isBadGuess) {
        this.remainingGuesses-- // This -- at the end performs the same way as this.remainingGuesses = this.remainingGuesses -1
    }
}
    
const game1 = new Hangman('Cat', 2)
console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(game1.getPuzzle());
    console.log(game1.remainingGuesses);
})