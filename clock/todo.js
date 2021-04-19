const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

consts = TODOS_LS = 'toDos'
function PaintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "button";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    console.log(text);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value
    PaintToDo(currentValue);

    toDoInput.value = "";
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null){
    } 
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
    console.log(toDoInput.value);
}
init();
