const quotes = [
    {
        quote: "We are surrounded by design",
        author: "Unsplash",
    },
    {
        quote: "Silence speaks loud",
        author: "Axollo",
    },
    {
        quote: "You can tell a lot about a person by what's on their playlist",
        author: "Begin Again 2013",
    },
    {
        quote: "You Just Always Know What You Think. I'm Not Like That",
        author: "Normal People Series",
    },
    {
        quote: "Whatever happens tomorrow, we had today",
        author: "One Day Movie",
    },
    {
        quote: "l'amour les baguettes paris",
        author: "Stella Jang",
    },
    {
        quote: "The music is all around US, all you have to do is listen",
        author: "August Rush",
    },
    {
        quote: "If I was a girl in a book, this would all be so easy",
        author: "Little Women Movie (Jo)",
    },
    {
        quote: "We swallow our feelings, even if it means we’re unhappy forever",
        author: "Friends Drama",
    },
    {
        quote: "Is there some reason that my coffee isn't here?",
        author: "Devil Wears Prada Movie",
    }
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;