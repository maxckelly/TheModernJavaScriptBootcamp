// Multiple arguments 

let add = function(a, b, c) {
    return a + b + c
};

let result = add(10 , 1, 5);
console.log(result);

// Default arguments
// The equal and strings next to the arguments (player & score) are default values so if there is no value attached instead of undefined it will be the strings

let getScoreText = function (playerName = 'Anonymous', score = 0 ) {
    //return 'Name: ' + playerName + ' ' + 'Score: ' + score
    return `Name: ${playerName} - Score: ${score}`
};

//However if you assign a value to them the default values won't be used 

let scoreText = getScoreText(`Max`, 100); // If you only want to assign a value to the second argument then you use null or undefined, to get to the second argument.
console.log(scoreText);

// Challenge Area - Tip Calculator

// Function will take two arguments 1. total 2. tip percentage

let tip = function (total, tipPercentage = 0.20) {
    //return 'total Tip: $' + total * tipPercentage
    let percent = tipPercentage * 100
    let tip = total * tipPercentage
    return `A ${percent}% tip on $${total} would be $${tip}`
};


let tipCal = tip(60);
console.log(tipCal);