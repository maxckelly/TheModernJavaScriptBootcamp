import { getTodos, toggleTodo, removeTodo } from './todos'
import { getFilters } from './filters'


const renderTodos = () => {
  const todosEl = document.querySelector("#todos");
  const filters = getFilters()
  const filteredTodos = getTodos().filter(todo => {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter(todo => !todos.completed);

  todosEl.innerHTML = "";
  todosEl.appendChild(generateSummaryDOM(incompleteTodos));

  if (filteredTodos.length > 0) {
    filteredTodos.forEach(todo => todosEl.appendChild(generateTodoDOM(todo)));
  } else {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "There are no todos to show";
    emptyMessage.classList.add("empty-message");
    todosEl.appendChild(emptyMessage);
  }
};

const generateTodoDOM = (todo) => {
  const todoEl = document.createElement("label");
  const containerEl = document.createElement("div");
  const checkButton = document.createElement("input");
  const textEl = document.createElement("span");
  const removeButton = document.createElement("button");

  // Setup todo checkbox
  checkButton.setAttribute("type", "checkbox");
  checkButton.checked = todo.completed;
  containerEl.appendChild(checkButton);
  checkButton.addEventListener("change", () => {
    toggleTodo(todo.id);
    renderTodos();
  });

  // Setup the todo text
  textEl.textContent = todo.text;
  containerEl.appendChild(textEl);

  // Setup container
  todoEl.classList.add("list-item");
  containerEl.classList.add("list-item__container");
  todoEl.appendChild(containerEl);

  // Setup the removeButton
  removeButton.textContent = "remove";
  removeButton.classList.add("button", "button--text");
  todoEl.appendChild(removeButton);
  removeButton.addEventListener("click", function(e) {
    removeTodo(todo.id);
    renderTodos();
  });

  return todoEl;
};

const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement("h2");
  let todoText = `You have ${incompleteTodos.length} `;
  if (incompleteTodos.length > 1) {
    todoText += "todos left";
  } else if (incompleteTodos.length === 0) {
    todoText += "todos left";
  } else {
    todoText += "todo left";
  }
  summary.textContent = todoText;
  summary.classList.add("list-title");
  return summary;
};

export { generateTodoDOM, renderTodos, generateSummaryDOM };