async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (response.status == 200) {
            const data = await response.json();
            applyWeatherStyles(data.name, data.main.temp);
            hideError();
        } else {
            showError();
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}