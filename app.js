

// Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners

document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);

// Functions

function addTodo(event) {
    // Prevent form from refreshing
    event.preventDefault();
    // Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // Add todo to local storadge
    saveLocalTodos(todoInput.value);
    // Done button 
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Trash button 
    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv);
    // Clear todo input value
    todoInput.value = "";
}

function deleteCheck(e) {

    const item = e.target;
    //Delete todo
    if (item.classList.value === "trash-btn") {
       const todo = item.parentElement;
    //animation 
       todo.classList.add("fall");
        todo.addEventListener("transitionend",  () => {
        todo.remove();
    });
    }
       
      //Check mark

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
    
}


//Filter the todo 

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":     
            todo.style.display = "flex";
break;
        case "completed": 
        
                if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
        }
            else {
            todo.style.display = "none";
        }
        
break;
        case "uncompleted":
            
            if(!todo.classList.contains("completed")) {
                todo.style.display = "flex";
            }
         else {
            todo.style.display = "none";
          }
break;

        }

    });
}

// ADD local storadge to save the todo's

// function saveLocalTodos(todo) {

//     let todos;
//     if(localStorage.getItem("todos") === null) {
//         todos = [];
//     }
//     else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

  




