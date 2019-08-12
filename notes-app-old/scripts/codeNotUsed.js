const date1 = new Date("December 20 2019");
const date2 = new Date("December 20 2019");

const date1timeStamp = date1.getTime();
const date2timeStamp = date2.getTime();

if (date1timeStamp > date2timeStamp) {
  console.log(date1.toString());
} else if (date2timeStamp < date1timeStamp) {
  console.log(date2.toString());
} else {
  console.log("The dates are exactly the same :)");
}
//------ DATES & TIME -------
// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Hours: ${now.getHours()}`);
// console.log(`Minutes: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);

// Unix Epoch - January 1st 1970 00:00:00
// const now = new Date()
// const timeStamp = now.getTime() // getTime - gets current time
// const myDate = new Date(timeStamp)
// console.log(myDate.getHours())

// newParagraph.textContent = 'This is a new element from Javascript';
// document.querySelector('body').appendChild(newParagraph)
//--------------
// This is a checkbox example
// document.querySelector('#for-fun').addEventListener('change', function (e) {
//     console.log(e.target.checked)
// })

// --------------------
// The below is a form to submit a note.
// document.querySelector('#name-form').addEventListener('submit', function (e) {
//     e.preventDefault() // This cancels the default behaviour which is to put the data into the browser URL
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = '' // This line clears the data once the button has been submitted.
// })

//-------------------
// Ways we can target everything in HTML
// p, button, h1 - This targets the item and involves every item
// # - This targets ids so for example #this-id
// . - A dot targets the class for example .this-is-a-class

// We can also mix them together:
// p#order - This means I can target a paragraph tag with the id of order.
// button.inventory - This targets the buttons with a class name of inventory
// h1#title.application - This targets the h1 tag, with the id of title and the class name of application

// Removing an element
// const ps = document.querySelectorAll('p');

// ps.forEach(function (p) {
//     p.textContent = 'Ive changed the value'
//     //console.log(p.textContent)
//     //p.remove()
// });

// // Adding a new element

// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from Javascript';
// document.querySelector('body').appendChild(newParagraph)

// ----LOCAL STORAGE-----

//const user = {
//     name: 'Max',
//     age: 27
// }

// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON) // This allows the 'user' to equal an actual object.
// console.log(`${user.name} is ${user.age}`)

// JSON stands for: JavaScript Object Notation
// The below creates a string from the user const and then stores it using localStorage
// const userJSON = JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem('user', userJSON)

// console.log(localStorage.getItem('location')) // This allows us to get the items and read it. This has to be at the top.
// localStorage.setItem('location', 'Melbourne') // Local storage basically saves the user data
// localStorage.removeItem('location') This removes the Data
// localStorage.clear() - This removes everything that has in storage
