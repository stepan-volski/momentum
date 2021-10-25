import { getLanguage } from './language.js';

async function getWeather(city = "Minsk") {
  let lang = getLanguage();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=a7d7e36b4c04b7f8b0a0fea90cad0816&units=metric`;
  const res = await fetch(url);
  return await res.json();
}

function displayWeather(data) {
  document.querySelector(".temperature").textContent = `${Math.round(data.main.temp)}°C`;
  document.querySelector(".weather-description").textContent = `${data.weather[0].description}`;
  document.querySelector(".weather-wind").textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
  document.querySelector(".weather-humidity").textContent = `Humidity: ${Math.round(data.main.humidity)}%`;
  document.querySelector('.weather-icon').style.display = "inline";
  document.querySelector('.weather-icon').classList.add(`owf-${data.weather[0].id}`);
}

function initWeather(city) {
  getWeather(city).then(displayWeather).catch(() => displayError(city));
  window.addEventListener('beforeunload', saveCity);
}

function displayError(input) {
  document.querySelector(".temperature").textContent = "";
  document.querySelector(".weather-description").textContent = `Error! Unknown city: ${input}`;
  document.querySelector(".weather-wind").textContent = "";
  document.querySelector(".weather-humidity").textContent = "";
  document.querySelector('.weather-icon').style.display = "none";
}

function saveCity() {
  let cityInput = document.querySelector(".city");
  localStorage.setItem('city', cityInput.value);
}

function getCity() {
  return (localStorage.getItem('city') || 'Minsk');
}


export { getWeather, displayWeather, initWeather, getCity };

