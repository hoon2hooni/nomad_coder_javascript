
const weather = document.querySelector(".js-weather");

const COORDS = 'coords';
const API_KEY = "9f8fa7deb4f0c3dde06c6796cd466596";
function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    ).then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}
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
    getWeather(latitude, longitude);
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
        const parseCoords = JSON.parse(loadedCoords);
        latitude = parseCoords.latitude;
        longitude = parseCoords.longitude;
        console.log(latitude);
        console.log(API_KEY);
        getWeather(latitude.longitude);
        // paintCooard();
    }
}
function init(){
    loadCoords()
}

init();