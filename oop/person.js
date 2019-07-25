// Prototypal Inheritance
// myPerson --> Person.ptototype --> Object.prototype --> null 

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
        this.lastName = names[1];
    }
}

// The class Employee extends from Peron meaning we it has the same behaviour as person. This means we don't have to duplicate code.
class Employee extends Person {
    constructor (firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes) // Super allows you to call the functions in the Person constructor.
        this.position = position 
    }
    getBio() {
        // Max is a Helicopter Pilot
        return `${this.firstName} ${this.lastName} is a ${this.position}.`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
  constructor(firstName, lastName, age, grade, classes, likes) {
    super(firstName, lastName, age, likes);
    this.grade = grade;
    this.classes = classes;
    }

  updateGrades(number) {
        this.grade += number
    }

  getBio() {
        let status = `${this.firstName}`;
        if (this.grade >= 70) {
        status = `${this.firstName} is passing the test! Hooray! `;
        } else {
        status = `${this.firstName} is failing the test :(`;
        }
        return status;
    }
}


// 1. Create a class for students
// 2. Track student grade 0 - 100
// 3. Override bio to print a passing or failing message. 70 and above "Andrew is passing the test"
// 4. Create "UpdateGrade" that takes the amount to add or remove from the grade.

// Create student 
// Print status 
// Change grade to change status.

const me = new Student('Max', 'Kelly', 21, 10, 'English')
console.log(me.getBio())
me.updateGrades(+80);
console.log(me.getBio())

// ---------------------
// The below creates a new person and logs it to the console. 
// const me = new Employee('Max', 'Kelly', 21, 'Helicopter Pilot',['surfing', 'SnowBoarding'])
//     me.setName('Andrew Smith')
//     console.log(me.getBio())
//     console.log(me.getYearsLeft())
// const person2 = new Person('John', 'Boob', 29)
//     console.log(person2.getBio())