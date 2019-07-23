// The below catches errors that can occur in the site. 


const getTip = (amount) => {
    if (typeof amount === 'number') { // The typeof says this input must be a number. 
        return amount * 0.25
    } else {
        throw Error('Argument must be a number') // If its not a number return this error message.
    }
}

//  True runs the code and if an error occurs it runs the error message above.

try {
    const result = getTip(true);
    console.log(result);
} catch (e) {
    console.log(e.message)
}
