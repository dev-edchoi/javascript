

function onGeoOk(position) {
    const lat = position.coords.latitude; // 위도
    const lng = position.coords.longitude; // 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const spnWeather = document.querySelector("#weather span:first-child");
            const spnCity = document.querySelector("#weather span:last-child");
            spnCity.innerText = data.name;
            spnWeather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

        });
}

function onGeoError() { alert("Can't find you");}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
