import { fetchWeather } from './modules/api.js';
import { displayWeather } from './modules/ui.js';

document.getElementById('btn').addEventListener('click', async () => {
  const city = document.getElementById('city').value;
  try {
    const data = await fetchWeather(city);
    displayWeather(data);
  } catch (err) {
    alert('City not found');
  }
});