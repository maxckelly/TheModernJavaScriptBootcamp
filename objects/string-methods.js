let name = ' Max Kelly '

// Length property - This grabs the length of the string
// Things we can use this for is to validate passwords such as if the user has entered enough letters in.

console.log(name.length)

// Convert to upper case 

console.log(name.toUpperCase())

// Covert to lower case

console.log(name.toLowerCase())

// Includes method

let password = 'abc123098'
console.log(password.includes('password'));

// Trim method - allows us to remove extra white space from the string
// Trim takes no arguments 

console.log(name.trim())


// Challenge Area 

// isValid password

let isValidPassword = function (password) {
    if (!password.includes('password') && password.length > 8) {
        return true
    } else {
        return false
    }
};



// only return true if the length is more than 8 - and it doesn't contain the word password
 
console.log(isValidPassword('ejig3o'));
console.log(isValidPassword("absfeoi3o534534otgre"));
console.log(isValidPassword("password3223few"));
