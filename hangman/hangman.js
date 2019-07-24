// No guesses? -> ***
// Guessed "c", "b" and "t"? -> c*t

// 1. Disable new guesses unless "playing"
// 2. Setup a new method to get back a status message

// Playing -> Guesses left: 3 
// Failed -> Nice Try! The word was "Cat"
// Finished -> Great work! You guessed the word

const Hangman = function (word, remainingGuesses) {
    const wordAlteration = (word.toLowerCase()).split('')
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['job']
    this.status = 'Playing'
}

// The below is a status report. It will either be finished of failed depending on the guesses you make.
Hangman.prototype.calculateStatus = function() {

    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

    if (this.remainingGuesses === 0) {
       this.status = 'Failed' // .join - Joins the array together so it doesn't come out like c,a,t instead cat
    } else if (finished) {
        this.status = 'Finished'
    } else {
        this.status = 'Playing'
    }
};

Hangman.prototype.getStatusMessage = function () {
    if (this.status === 'Playing') {
        return `Guesses left: ${this.remainingGuesses}`
    } else if (this.status === 'Failed') {
        return `Nice try! The word was: "${this.word.join('')}"`
    } else {
        return 'Great work! You guessed the word'
    }
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
    
    if (this.status !== 'Playing') {
      return;
    }
    
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
