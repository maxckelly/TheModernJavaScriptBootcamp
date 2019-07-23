// The below is another way to perform a function. Its meant to be clean for one line uses 
const square = (num) => num * num
console.log(square(5))

const people = [{
    name: 'Max',
    age: 21
}, {
    name: 'Andrew',
    age: 27
}, {
    name: 'John',
    age: 143
}]

const under30 = people.filter((person) => person.age < 30)
console.log(under30)

const whose21 = people.find((person) => person.age === 21)
console.log(whose21.name)