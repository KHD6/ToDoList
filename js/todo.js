const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

const savedToDos = localStorage.getItem(TODOS_KEY)
const parsedToDos = JSON.parse(savedToDos);

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos()
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const p = document.createElement("p");
    p.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "닫기"
    button.addEventListener("click", deleteToDo);
    li.appendChild(p);
    li.appendChild(button);
    toDoList.appendChild(li);

};

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        id: Date.now(),
        text: newTodo,
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
    console.log("this is the turn of", item)
}



if (savedToDos !== null) {
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}