const API_KEY = "30659c1a96ea57cbd818afbf7af69285"

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
            city.innerText = data.name;
        });
};
function onGeoError() {
    alert("cant't find you. No weather for you.");
};

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)