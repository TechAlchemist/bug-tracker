const API_URL = 'https://type.fit/api/quotes';

function apiRequest() {
    $.ajax({
        url: API_URL
    }).then(
        (quotes) => {
            let allQuotes = JSON.parse(quotes);
            let randomQuoteIndex = Math.floor(Math.random() * (allQuotes.length - 1) + 1);
            $('#quote').text(allQuotes[randomQuoteIndex].text + ' - ' + allQuotes[randomQuoteIndex].author);
        }
    )
}