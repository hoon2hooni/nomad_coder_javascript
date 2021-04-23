const COORDS = 'coords';


// function paintCooard(){
//     document.createElement();
//     document.createElement();
//     document.createElement();
// }
function saveCoords(coordsObjs){
    localStorage.setItem(COORDS, JSON.stringify(coordsObjs));
    localStorage.setItem("longitude", JSON.stringify(coordsObjs.longitude));
}

function handleGeoSucces(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let coordsObjs ={
        latitude,
        longitude,
    }
    saveCoords(coordsObjs);
}

function handleGeoError(){
    console.log("Can't access your location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
        askForCoords();
        // localStorage.setItem blah;
    } else {
        coordsObjs = JSON.parse(loadedCoords);
        latitude = coordsObjs.latitude;
        longitude = coordsObjs.longitude;
        console.log(loadedCoords);
        // paintCooard();
    }
}
function init(){
    loadCoords()
}

init();