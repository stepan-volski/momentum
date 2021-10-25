function generateCurrentTime() {
    return new Date().toLocaleTimeString('en-US', { hour12: false });
}

function displayTime() {
    document.querySelector('.time').innerHTML = generateCurrentTime();
}

function generateCurrentDate(locale) {
    let date = new Date();
    let options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(locale, options);
}

function displayDate(language) {
    document.querySelector('.date').innerHTML = generateCurrentDate(language);
}

export { displayDate, displayTime };