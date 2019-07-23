let myBook = {
    title: `Maxs Book`, 
    author: `Max Kelly`,
    pageCount: 300
};

console.log(myBook);
console.log(myBook.title);
console.log(`${myBook.title} was written by ${myBook.author} with a total of ${myBook.pageCount} pages`);

myBook.title = `Animal Farm`; // This changes the title of the title.

console.log(`${myBook.title} by ${myBook.author}`) ; 

// Challenge Area

let person = {
    name: 'Max Kelly',
    age: 21, // Numbers don't need any strings.
    location: 'Melbourne, Victoria, Australia'
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
person.age = person.age + 1 // This adds 1 to the age so it will be 22 
console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
//console.log(`It's been year now and ${person.name} is ${person.age}`);
