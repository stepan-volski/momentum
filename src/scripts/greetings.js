import {dayTimeDictionary, namePlaceholderDictionary} from "../misc/dictionary.js";
import { getLanguage } from './language.js';

let lang;

function getTimeOfDay() {
    let date = new Date();
    let minutesFromDayStart = date.getHours() * 60 + date.getMinutes();

    if (0 <= minutesFromDayStart && minutesFromDayStart <= 6 * 60 - 1) return dayTimeDictionary.night[lang];
    if (6 * 60 <= minutesFromDayStart && minutesFromDayStart <= 12 * 60 - 1) return dayTimeDictionary.morning[lang];
    if (12 * 60 <= minutesFromDayStart && minutesFromDayStart <= 18 * 60 - 1) return dayTimeDictionary.afternoon[lang];
    if (18 * 60 <= minutesFromDayStart && minutesFromDayStart <= 24 * 60 - 1) return dayTimeDictionary.evening[lang];
}

function saveUsername() {
    let nameInput = document.querySelector(".name");
    localStorage.setItem('username', nameInput.value);
}

function getUserName() {
    lang = getLanguage().toLowerCase();
    return (localStorage.getItem('username') || namePlaceholderDictionary.placeholder[lang]);
}

function updateGreeting() {
    lang = getLanguage().toLowerCase();
    document.querySelector('.greeting').innerHTML = getTimeOfDay();
    document.querySelector('.name').value = getUserName();
}

function initGreeting(){
    window.addEventListener('DOMContentLoaded', updateGreeting);
    window.addEventListener('beforeunload', saveUsername)
}

export {initGreeting, updateGreeting};