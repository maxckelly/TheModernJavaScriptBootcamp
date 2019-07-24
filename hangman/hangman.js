// No guesses? -> ***
// Guessed "c", "b" and "t"? -> c*t
class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split("");
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = ["job"];
        this.status = "Playing";  
    }

    // The below is a status report. It will either be finished of failed depending on the guesses you make.
    calculateStatus() {
        const finished = this.word.every(letter => this.guessedLetters.includes(letter));

        if (this.remainingGuesses === 0) {
            this.status = "Failed"; // .join - Joins the array together so it doesn't come out like c,a,t instead cat
        } else if (finished) {
            this.status = "Finished";
        } else {
            this.status = "Playing";
        }
    }

    getStatusMessage() {
        if (this.status === "Playing") {
            return `Guesses left: ${this.remainingGuesses}`;
        } else if (this.status === "Failed") {
            return `Nice try! The word was: "${this.word.join('')}"`;
        } else {
            return "Great work! You guessed the word";
        }
    }

    getPuzzle() {

        let puzzle = "";

        this.word.forEach(letter => {
            if (this.guessedLetters.includes(letter) ||letter === " ") {
                puzzle += letter;
            } else {
                puzzle += "*";
            }
        });
        
        return puzzle; 
    }

    makeGuess(guess) {
        const aGuess = guess.toLowerCase();
        const isUnique = !this.guessedLetters.includes(guess);
        const isBadGuess = !this.word.includes(aGuess);
        
        // If this.guessedLetters is empty & bad guess:
        if (this.status !== "Playing") {
            return;
        }

        if (isUnique) {
            this.guessedLetters.push(aGuess);
            // bad guess - lose 1 guess
            this.guesses = this.guesses - 1;
            // If empty & good guess:
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--; // This -- at the end performs the same way as this.remainingGuesses = this.remainingGuesses -1
        }
        this.calculateStatus();
    }
}