// const todo = [
//     'Make bed',
//     'Play footy',
//     'Play Golf',
//     'Move house',
//     'Drink'
// ];

// Delete the 3rd item
// todo.splice(2, 1)
// // Add a new item onto the end
// todo.push('New item');
// // Remove the first item from the list
// todo.shift();

// // 1. Print the first item
// // 2. The second item

// todo.forEach(function(todo, index) {
//     const num = index + 1
//     console.log(`${num}. ${todo}`)
// });

// // for (let count = 0; count < todo.length; count++) {
// //     const num = count + 1 
// //     const todos = todo[count]
// //     console.log(`${num}. ${todo}`)
// // };

// console.log(`You have ${todo.length} tasks to do.`);
// console.log(todo);


//-----------

const todos = [{
    text: "I have to do",
    completed: false
}, {
    text: "I have to dooooo",
    completed: true
}, {
    text: "This is fucked",
    completed: false
}];

// const deleteTodo = function (todos, todoText) {
//     const index = todos.findIndex(function (todo) {
//         return todo.text.toLowerCase() === todoText.toLowerCase()
//     })

//     if (index > -1) {
//         todos.splice(index, 1)
//     }
// };

// // 1. Convert the array of strings above to array of objects. It will have two properties => Text, completed
// // 2. Create a function that works with the array of objects => Remove a todo by text value


//deleteTodo(todos, 'I HAVE to do');
//console.log(todos);

// Challenge - Search 
// Search for all the completed tasks with false

// const getThingsToDo = function(todos) {
//     return todos.filter(function (todo) {
//         return !todo.completed // The ! means it returns false while if removed it will return true
//     })
//   };

//console.log(getThingsToDo(todos));


// Challenge Sort

const sortTodos = function (todos) {
    todos.sort(function(a, b) {
        if (a.completed === false && b.completed === true) {
            return -1
        } else if (b.completed === false && a.completed === true){
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos);
console.log(todos);

// Sort by the status - So ones that have been completed down the bottom.

