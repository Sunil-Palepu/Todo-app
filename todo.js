//model section
let todos = [];

// creates a todo
function createTodo(title, dueDate) {
    const id = "" + new Date().getTime();

    todos.push({
        title: title,
        dueDate: dueDate,
        id: id,
    });
}


render();


function removeTodo(idToDelete) {
    todos = todos.filter(function (todo) {
        if (todo.id === idToDelete) {
            return false;
        } else {
            return true;
        }
    });
}


function addTodo() {
    const textbox = document.getElementById("todo-title");
    const title = textbox.value;

    const datePicker = document.getElementById("date-picker");
    const dueDate = datePicker.value;

    createTodo(title, dueDate);
    render();
}


function deleteTodo(event) {
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;
    removeTodo(idToDelete);
    render();
}


function render() {
// reset our list to be empty

    document.getElementById("todo-list").innerHTML = "";

    todos.forEach(function (todo) {
        let element = document.createElement("div");
        element.innerText = todo.title + " " + todo.dueDate;

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.style = "margin-left: 12px";
        deleteButton.onclick = deleteTodo;
        deleteButton.id = todo.id;
        element.appendChild(deleteButton);

        const todoList = document.getElementById("todo-list");
        todoList.appendChild(element);
    });
}