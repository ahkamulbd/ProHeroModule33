const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(data => displyQuote(data))
}
//loadQuote();

const displyQuote = quote => {
    //console.log(quote);
    const blockQuote = document.getElementById('quote');
    console.log(quote);
    blockQuote.innerText = quote.quote;
}

