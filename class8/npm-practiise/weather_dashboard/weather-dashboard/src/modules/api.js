const API_KEY = 'e845f18f8fb75057c5c15b801abbcf08';

export async function fetchWeather(city) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  if (!res.ok) throw new Error("City not found");
  return res.json();
}