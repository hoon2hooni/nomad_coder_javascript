const title = document.querySelector("#title")
title.style.color = 'red';
function handleClick(){
    title.style.color = "blue";
    checkit();
}
function checkit(){
    if (title.style.color == "blue"){
        console.log("shit");
    } else{
        console.log("happy");
    }
}

title.addEventListener("click", handleClick);
document.title ="I own you now";
console.log(title);
console.dir(title);