// No guesses? -> ***
// Guessed "c", "b" and "t"? -> c*t

const Hangman = function (word, remainingGuesses) {
    const wordAlteration = (word.toLowerCase()).split('')
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['job']
    this.status = 'playing'
}

// The below is a status report. It will either be finished of failed depending on the guesses you make.
Hangman.prototype.calculateStatus = function() {

    let finished = true
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter)) {
            finished = true
        } else {
            finished = false
        }
    })

    if (this.remainingGuesses === 0) {
       this.status = 'Failed'
    } else if (finished) {
        this.status = 'Finished'
    } else {
        this.status = 'Playing'
    }
};

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
    this.calculateStatus()
}
