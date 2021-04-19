const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";
    
function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `hello ${text}`;
}
// function saveName(key){
//     이름 작성
//     이름 저장
//     다시 로드 네임 불러주기
//     localStorage.key = ""
// }
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        askForName();
        // saveName(USER_LS);
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
    console.log("hi");
}
init();