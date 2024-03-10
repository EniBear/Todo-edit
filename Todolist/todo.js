const form = document.querySelector("#todo-form");
const todo = document.querySelector("#todo"); 
const todoList = document.querySelector("#todo-list");
let savedTodos = localStorage.getItem("todoItems");

if (savedTodos) {
    todoList.innerHTML = savedTodos;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newTodo = document.createElement("li");
    const removeButton = document.createElement("button");
    newTodo.innerText = todo.value;
    todoList.appendChild(newTodo);
    removeButton.innerText = "Remove";
    newTodo.appendChild(removeButton);
    todo.value = "";
    saveTodos();
});

todoList.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
        removeTodo(e);
    }else if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed")
    }
    saveTodos();
});


function removeTodo(event) {
    event.target.parentElement.remove();
}

function saveTodos() {
    localStorage.setItem("todoItems", todoList.innerHTML);
}

function clearAll() {
    localStorage.clear();
    location.reload(true);
}
