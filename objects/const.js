    // The difference between let based variables and const based variables is:
        // You can't reassign a const once its been added to a value.
        // For example - when you run the below you get an error.
        // Const are useful for when you won't need to reassign. 

        // const isRaining = true 
        // isRaining = false
        // console.log(isRaining);

        // Why use const at all? - Code readability | If you make it const they will know that it won't be changed. 


// The below shows how you reassign the const value
const person = {
    age: 27
};

person.age = 28

console.log(person);



