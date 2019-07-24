// Prototypal Inheritance

//---- Class Syntax -----
// What makes the person class is the new way to create a constructor function. You define the constructor inside the class instead of inside the function. 
// We never need to manually call the constructor - it gets called automatically when we use the new operator with the class name picked out
class Person {

  constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }

  getBio() {
        let bio = `${this.firstName} is ${this.age}.`;

        this.likes.forEach(like => {
        bio += ` ${this.firstName} likes ${like}`;
        });

        return bio;
    }

  setName(fullName) {
        const names = fullName.split(" "); // This .split allows us to split a string and make an array. We're currently splitting on a space. This would create just Andrew
        this.firstName = names[0];
        this.lastName = [1];
    }
}
// ---------------------
// The below creates a new person and logs it to the console. 
const me = new Person('Max', 'Kelly', 21, ['surfing', 'SnowBoarding'])
    me.setName('Andrew Smith')
    console.log(me.getBio())
const person2 = new Person('John', 'Boob', 29)
    console.log(person2.getBio())