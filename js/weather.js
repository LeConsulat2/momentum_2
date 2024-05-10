const API_KEY = "ec64b7b7b7049e1ab1aa4d5b00038afb";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name; 
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    });
}

function onGeoError() {
    alert("Cant find you. No Weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);