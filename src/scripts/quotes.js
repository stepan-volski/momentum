async function getQuotes(lang) {
    const res = await fetch(`./assets/json/quotes-${lang}.json`);
    return await res.json();
}

function displayRandomQuote(data) {
    let index = Math.floor(Math.random() * 10);
    document.querySelector(".quote").textContent = `"${data.quotes[index].quote}"`;
    document.querySelector(".author").textContent = data.quotes[index].author;
}

function initQuote(lang) {
    getQuotes(lang.toLowerCase()).then(displayRandomQuote).catch(displayError);
}

function displayError() {
    document.querySelector(".quote").textContent = "Looks like the quote wasn't loaded for some reason";
    document.querySelector(".author").textContent = "Developer";
}

export { initQuote };