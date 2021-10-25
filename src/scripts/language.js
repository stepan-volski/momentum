const langSwitch = document.querySelector(".language span");
let language = langSwitch.textContent;

function toggleLanguage() {
    if (langSwitch.textContent === "RU") {
        langSwitch.textContent = "EN";
    } else {
        langSwitch.textContent = "RU";
    }

    language = langSwitch.textContent;
}

function initLanguage(){
    langSwitch.addEventListener('click', toggleLanguage);
}

function getLanguage(){
    return language;
}

export { initLanguage, language, langSwitch, getLanguage };