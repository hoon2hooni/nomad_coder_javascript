const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos'
const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "button";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    // li에도 id부여함
    li.id = newId;
    toDoList.appendChild(li);
    console.log(text);
    const toDoObj ={
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value
    paintToDo(currentValue);

    toDoInput.value = "";
}
function something(todo){
    console.log(todo.text);
}
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos)
        console.log(parsedToDos)
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
};
function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
    console.log(toDoInput.value);
}
init();
