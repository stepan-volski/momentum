import './index.scss';
import { initGreeting, updateGreeting } from "./scripts/greetings.js";
import { initLanguage, language, langSwitch } from './scripts/language';
import { initPlayer } from './scripts/player';
import { initQuote } from './scripts/quotes';
import { displayTime, displayDate } from "./scripts/time.js";
import { initWeather, getCity } from "./scripts/weather.js";


//init greeting
initGreeting();

//init time display
setInterval(displayTime, 1000);
window.addEventListener('DOMContentLoaded', () => displayDate(language));

//init weather
document.querySelector(".city").value = getCity();
initWeather(getCity());
document.querySelector(".city").addEventListener('input', e => initWeather(e.target.value));

//init quotes
initQuote(language);
document.querySelector(".change-quote").addEventListener('click', () => initQuote(language));

//init player
initPlayer();

//init language
initLanguage();
langSwitch.addEventListener('click', () => initQuote(language));
langSwitch.addEventListener('click', () => initQuote(language));
langSwitch.addEventListener('click', () => updateGreeting(language));
langSwitch.addEventListener('click', () => displayDate(language));
langSwitch.addEventListener('click', () => initWeather(getCity()));


//TODO correct work with language var (use getter?)
