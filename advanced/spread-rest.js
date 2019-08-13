// -------The spread operator----- 
// You can use it by: ...team.players to access the players array in the array

const printTeam = (team, coach, ...players) => {
    console.log(`Team: ${team}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

const team = {
    name: 'Liberty',
    coach:'Casey Penn',
    players: ['Marge', 'Max', 'John', 'Steve']
}

printTeam(team.name, team.coach, ...team.players) // This is how you use the spread operator 

let cities = ['Melbourne', 'New York', 'Hong Kong']
const citiesCopy = ['Santiago', ...cities] // This takes all of the items from the cities array and moves it to the citiesCopy
cities = [...cities, 'Adelaide'] // Or you can use the spread operator to add onto existing arrays 
cities.push('Cape Town')

console.log(cities)
console.log(citiesCopy)
console.log(cities)

// ------The Spread Operator on objects------
// The order is important for spread operators and objects
let house = {
    bedrooms: 2, 
    bathrooms: 1.5, 
    yearBuilt: 2017
}

let newHouse = {
    basement: true,
    ...house, 
    bedrooms: 3
}

console.log(house)
console.log(newHouse)

// Create a person object with name and age

let person = {
    name: 'Max',
    age: '21'
}

let location = {
    city: 'Melbourne',
    country: 'Australia'
}

let overview = {
    ...person,
    ...location,
    job: 'Coder'
}

console.log(overview)
// Create a location object with city and country
// Create a new overview object and use the spread operator to add all four properties. 

// -----The rest parameter starts off with three ... then the varabile name----- 

// const calculateAverage = (thing, ...numbers) => {
//     let sum = 0 
//     numbers.forEach((num) => sum += num)
//     const average =  sum / numbers.length
//     return `The average grade is ${average}`
// }

// console.log(calculateAverage(`grade`, 0, 100, 88, 64))

// // Create printTeam that takes team name, coach and players

// const printTeam = (team, coach, ...players) => {
//     console.log(`Team: ${team}`)
//     console.log(`Coach: ${coach}`)
//     console.log(`Players: ${players.join(', ')}`)
// }

// printTeam(`Liberty`, ' Casey Penn ', ' Marge ', ' Aiden ', ' Herbert ', ' Sherry ')