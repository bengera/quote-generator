const quoteDisplay = document.getElementById('quote-display')
const authorDisplay = document.getElementById('author-display')
const button = document.getElementById('button')

console.log(authorDisplay)
console.log(button)
console.log(quoteDisplay)

const quotes = [{
    quote: "Be yourself; everyone else is already taken",
    author: "Oscar Wilde"
},
{
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
},
{
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch"
},
{
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: " Dr. Seuss"
},
    

    
    
]

function generateQuote() {
    const randomQuote = Math.floor(Math.random() * (quotes.length));
    quoteDisplay.innerHTML = quotes[randomQuote].quote
    authorDisplay.innerHTML = quotes[randomQuote].author
    
   
    
    
}

button.addEventListener('click',() => {
    console.log('Quote generated');
    generateQuote();
})



