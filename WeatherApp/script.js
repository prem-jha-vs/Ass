const apiKey = "98db179e76559a2328edaac53ad2ba0a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

async function checkWeather(city){
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
searchButton.addEventListener("click", () => {
    const city = searchInput.value;
    if (city) {
        checkWeather(city);
        checkForcast(city);
    } else {
        alert("Please enter a city name");
    }
})

async function checkForcast(city) {
    const forecastResponse = await fetch(forecastApiUrl + city + `&appid=${apiKey}`);

    if (forecastResponse.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var forecastData = await forecastResponse.json();
        const threeDayForecast = extractThreeDayForecast(forecastData.list);
        for (let i = 0; i < 3; i++) {
            document.querySelector(`#day-${i + 1}`).innerHTML = `
                <p>Date: ${threeDayForecast[i].date}</p>
                <p>Temperature: ${threeDayForecast[i].temp}</p>
                <p>Description: ${threeDayForecast[i].description}</p>
            `;
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

function extractThreeDayForecast(forecastList) {
    const threeDayForecast = [];

    for (let i = 0; i < forecastList.length && threeDayForecast.length < 3; i += 8) {
        const forecastDate = new Date(forecastList[i].dt * 1000);
        const forecastTemp = Math.round(forecastList[i].main.temp);
        const forecastDescription = forecastList[i].weather[0].description;

        const forecastItem = {
            date: forecastDate.toLocaleDateString("en-US", { weekday: "short" }),
            temp: `${forecastTemp}°C`,
            description: forecastDescription,
        };

        threeDayForecast.push(forecastItem);
    }

    return threeDayForecast;
}
