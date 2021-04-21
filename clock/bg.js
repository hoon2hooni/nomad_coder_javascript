const body = document.querySelector("body");

const IMG_NUMBER = 0;

function handleImgLoad(){
    console.log("finish image load");
}
function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    //API에서 하면 이거 해줘야함
    //image.addEventListener("loadend", handleImgLoad);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();

