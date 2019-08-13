// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary


// --

// Add necessary imports
import { renderTodos } from "./views.js";
import { setFilters} from './filters'
import { loadTodos, getTodos, createTodo, removeTodo, toggleTodo } from './todos.js'


renderTodos();

document.querySelector("#todo-input").addEventListener("input", (e) => {
  setFilters({
      searchText: e.target.value
  })
  renderTodos();
});

document.querySelector("#todo-form").addEventListener("submit", (e) => {
    const text = e.target.elements.text.value.trim()
    e.preventDefault(); // This cancels the default action by the input

  if (text.length > 0) {
      createTodo(text)
      renderTodos();
      e.target.elements.text.value = ''
    }  
  })

document.querySelector("#hide-completed").addEventListener("change", (e) => {
  setFilters({
      hideCompleted: e.target.checked
  })
  renderTodos();
});

window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})







// Set up checkbox handler


// Set up form submission handler

// Bonus: Add a watcher for local storage