const API_KEY = "30659c1a96ea57cbd818afbf7af69285"

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const city = document.querySelector("#weather span:nth-child(1)")
            const weatherIcon = document.querySelector("#weather span:nth-child(2)")
            const weather = document.querySelector("#weather span:nth-child(3)")
            const tempData = data.main.temp;
            const temp = (Math.round(tempData * 1000) / 1000).toFixed(1);
            const icon = data.weather[0].icon;
            const imageUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            const weatherImage = document.createElement("img");
            weatherImage.src = imageUrl;
            weatherIcon.appendChild(weatherImage);
            weather.innerText = `${temp} ℃`;
            city.innerText = data.name;
        });
};
function onGeoError() {
    alert("cant't find you. No weather for you.");
};

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)