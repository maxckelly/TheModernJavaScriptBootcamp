'use strict' // This tells Javascript to strictly analysis the code and declare anything out of place.


const todos = getSavedTodos()

const filters = {
  searchText: '',
  hideCompleted: false
}

renderTodos (todos, filters)

document.querySelector('#todo-input').addEventListener('input', (e) => {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

// 1. Get a trimmed version of the input 
// 2. Only add a new todo if it has content
document.querySelector('#todo-form').addEventListener('submit', (e) => {
  const text = e.target.elements.text.value.trim()
  e.preventDefault() // This cancels the default action by the input 

  if (text.length > 0) {
      todos.push({
        id: uuidv4(),
        text,
        completed: false
      })
      saveTodos(todos);
      renderTodos(todos, filters);
      e.target.elements.text.value = "";
  }
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
})

//------
// The below shows how to remove a tag that contains a certain word.

//const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach(function (paragraph) {
//     if (paragraph.textContent.toLowerCase.includes('the')) {
//         paragraph.remove()
//     }   
// });

//-------------------
// The below filters the todo list and lists all the todos they have left.

// const newParagraph = document.createElement('h3')
// newParagraph.textContent = 'Here are all your todos';
// document.querySelector('body').appendChild(newParagraph); 

// Print a summary message "You have 2 todos left"
// Add a p for each todo above (use text value)

// ------- 
// The below is focused on eventListeners 

// The below adds a listener so when the button is clicked it console.logs the below text
// document.querySelector('#create-todo-button').addEventListener('click', function (e) {
//   console.log('Im adding my first todo')
// })
