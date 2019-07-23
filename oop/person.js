// Prototypal Inheritance - 

// The below is a constructor function. This allows us to set up unique objects and still let them be flexible
// You cannot use an arrow function for this as it does not bind this.
const Person = function (firstName, lastName, age, likes = []) { // If likes isn't provided then create a default value
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

//------ Prototypal Inheritance ------
// Prototype adds this to all the instances
Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`

    // We are able to use an arrow function because the parent is able to access the this statement.
    // Arrow functions don't bind this.
    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}`
    })

    return bio;
}

Person.prototype.setName = function(fullName) {
    const names = fullName.split(' ') // This .split allows us to split a string and make an array. We're currently splitting on a space. This would create just Andrew
    this.firstName = names[0]
    this.lastName = [1]
}
// ---------------------
// The below creates a new person and logs it to the console. 
const me = new Person('Max', 'Kelly', 21, ['surfing', 'SnowBoarding'])
me.setName('Andrew Smith')
console.log(me.getBio())

const person2 = new Person('John', 'Boob', 29)
console.log(person2.getBio())