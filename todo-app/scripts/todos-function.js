
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
    const todosEl = document.querySelector('#todos')
    const filteredTodos = todos.filter( (todo) => {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
    });

    const incompleteTodos = filteredTodos.filter((todo) => !todos.completed);

    todosEl.innerHTML = ''
    todosEl.appendChild(generateSummaryDOM(incompleteTodos));

    if (filteredTodos.length > 0) {
        filteredTodos.forEach(todo =>
            todosEl.appendChild(generateTodoDOM(todo)))
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'There are no todos to show'
        emptyMessage.classList.add('empty-message')
        todosEl.appendChild(emptyMessage)
    }
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
    const todoEl = document.createElement('label');
    const containerEl = document.createElement('div');
    const checkButton = document.createElement("input");
    const textEl = document.createElement('span');
    const removeButton = document.createElement('button');

    // Setup todo checkbox
     checkButton.setAttribute('type', 'checkbox')
     checkButton.checked = todo.completed
     containerEl.appendChild(checkButton);
     checkButton.addEventListener('change', () => {
         toggleTodo(todo.id)
         saveTodos(todos)
         renderTodos(todos, filters)
     })
    
    // Setup the todo text
     textEl.textContent = todo.text;
     containerEl.appendChild(textEl);
    
    // Setup container
     todoEl.classList.add('list-item')
     containerEl.classList.add('list-item__container')
     todoEl.appendChild(containerEl)
     
    // Setup the removeButton 
     removeButton.textContent = 'remove'
     removeButton.classList.add('button', 'button--text')
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
    let todoText = `You have ${incompleteTodos.length} `
    if (incompleteTodos.length > 1 ) {
        todoText += 'todos left'
    } else if (incompleteTodos.length === 0) {
        todoText += 'todos left'
    } else {
        todoText += 'todo left'
    }
    summary.textContent = todoText
    summary.classList.add('list-title')
    return summary
};

// 1. Add a "List-title" class
// 2. Pluraliza (todos) unless you only have one (todo)
