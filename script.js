async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '48db37600e94b224ecb6f2142e52507f'; // Replace with your actual API key from OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === 200) {
            document.getElementById('weather-result').innerHTML = `
                <h3>Weather in ${data.name}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        } else {
            document.getElementById('weather-result').innerHTML = `<p>City not found.</p>`;
        }
    } catch (error) {
        document.getElementById('weather-result').innerHTML = `<p>Unable to retrieve weather data.</p>`;
    }
}
