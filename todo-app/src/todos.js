import uuidv4 from "uuid/v4";

let todos = [];

const loadTodos = () => {

  const todosJSON = localStorage.getItem("todos");

  try {
        todos = todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
        todos = [];
  }
};

// Save todos
const saveTodos = () => localStorage.setItem("todos", JSON.stringify(todos));   

const getTodos = () => todos

const createTodo = (text) => {
    const id = uuidv4()
    todos.push({
        id: id,
        text: text,
        completed: false 
    });
    saveTodos()
}

const removeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
        saveTodos();
    }
};

const toggleTodo = (id) => {
  const todo = todos.find(todo => todo.id === id);

  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
  }
};

loadTodos()

export { loadTodos, getTodos, createTodo, removeTodo, toggleTodo }