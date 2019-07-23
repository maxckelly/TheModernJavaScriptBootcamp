
// Arguments only exist in regular functions 
const add = function(a, b) {
    return arguments [0] + arguments[1]
}

console.log(add(11, 22, 33, 44))

// You shouldn't also use an arrow function in the below method 
const car = {
    color: 'Red',
    getSummary: function () {
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary())