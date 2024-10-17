const API_KEY = "30659c1a96ea57cbd818afbf7af69285"

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const city = document.querySelector("#weather span:first-child")
            const weather = document.querySelector("#weather span:last-child")
            const tempData = data.main.temp;
            const temp = (Math.round(tempData * 1000) / 1000).toFixed(1);
            weather.innerText = `/ ${data.weather[0].main} ${temp} ℃`
            city.innerText = data.name;
        });
};
function onGeoError() {
    alert("cant't find you. No weather for you.");
};

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)