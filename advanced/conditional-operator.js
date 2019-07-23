const myAge = 2
const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'; // This is a more compact and easier way instead of doing the below if statement

// if (myAge >= 18) {
//     message = 'You can vote!'
// } else {
//     message = 'You cannot vote'
// }

console.log(message)

// ----- 
// Conditional operator using functions 
const myDrinkingAge = 20 

const showPage = () => {
    console.log('Showing the page')
}

const showErrorPage = () => {
    console.log('Showing the error page')
}

myDrinkingAge >= 21 ? showPage() : showErrorPage()

// Challenge 

// 1. Print "team size: if less than or equal to 4"
// 2. Print "Too many people on your team"

const team = ["Tyler", "John", "John", "John"];
const teamCount = team.length  <= 3 ? `Your team size is: ${team.length}` : 'Too many people on your team'

console.log(teamCount)


