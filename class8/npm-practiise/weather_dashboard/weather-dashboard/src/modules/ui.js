export function displayWeather(data) {
  const weatherDiv = document.getElementById('weather');
  weatherDiv.innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Condition: ${data.weather[0].description}</p>
  `;
}
