
'use strict' // This tells Javascript to strictly analysis the code and declare anything out of place.


// Fetch existing todos from localStorage
const getSavedTodos =  () => {

    const todosJSON = localStorage.getItem('todos');

    try {
        return todosJSON ? JSON.parse(todosJSON) : [];
    } catch (e) {
        return []
    }

    // if (todosJSON !== null) {
    //     return JSON.parse(todosJSON);
    // } else {
    //     return []
    // }
}

// Saves todos to localStorage
const saveTodos = (todo) => localStorage.setItem("todos", JSON.stringify(todos));   


const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter( (todo) => {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
    });

    const incompleteTodos = filteredTodos.filter((todo) => !todos.completed);

    document.querySelector("#todos").innerHTML = "";
    document.querySelector("#todos").appendChild(generateSummaryDOM(incompleteTodos));

    filteredTodos.forEach((todo) => document.querySelector("#todos").appendChild(generateTodoDOM(todo)));
};

// RemoveTodo by ID
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }

}

//Toggle the completed value for the given toDo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }
}

// Generate the DOM Structure for a todo
// Get the DOM elements for an individual note

const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div');
    const checkButton = document.createElement("input");
    const textEl = document.createElement('span');
    const removeButton = document.createElement('button');

    // Setup todo checkbox
     checkButton.setAttribute('type', 'checkbox')
     checkButton.checked = todo.completed
     todoEl.appendChild(checkButton);
     checkButton.addEventListener('change', () => {
         toggleTodo(todo.id)
         saveTodos(todos)
         renderTodos(todos, filters)
     })
    
    // Setup the todo text
     textEl.textContent = todo.text;
     todoEl.appendChild(textEl);
    
    // Setup the removebutton 
     removeButton.textContent = 'x'
     todoEl.appendChild(removeButton);
     removeButton.addEventListener('click', function(e) {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
     })

    return todoEl
}

// Get the DOM Element for list summary 

const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary
};
