const quotes = [
    {
        quote: "1번텍스트",
        author: "1번 작가",
    },
    {
        quote: "2번텍스트",
        author: "2번 작가",
    },
    {
        quote: "3번텍스트",
        author: "3번 작가",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]
const todaysQuote = quotes[Math.floor(Math.random() * 100) % quotes.length]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;