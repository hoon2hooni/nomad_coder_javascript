const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos'
let toDos = [];
function filterFn(todo){
    return toDo.id === 1;
}

function deleteTodo(event){
    console.log(event.target.parentElement);
    const btn = event.target;
    const li = btn.parentElement;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos(toDos);
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "button";
    delBtn.addEventListener("click",deleteTodo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    // li에도 id부여함
    li.id = newId;
    toDoList.appendChild(li);
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
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
};
function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();
