const apiKey = "98db179e76559a2328edaac53ad2ba0a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
    const city = searchInput.value;
    if (city) {
        Promise.all([checkWeather(city), checkForecast(city)])
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    } else {
        alert("Please enter a city name");
    }
});