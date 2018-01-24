// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Array with citations
var quotes = [
    {
        quote: "La vieillesse. C’est la seule maladie dont on ne peut espérer guérir.",
        source: "Citizen Kane",
        tags: ["humour", "business", "politics"]
    },
    {
        quote: "La vie c'est comme une boîte de chocolats, on ne sait jamais sur quoi on va tomber.",
        source: "Forrest Gump",
        year: "1994"
    },
    {
        quote: "Un homme qui ne passe pas de temps avec sa famille n’est pas vraiment un homme.",
        source: "Le parrain"
    },
    {
        quote: "La capote, c'est le soulier de verre de notre génération. On l'enfile quand on rencontre une inconnue, on danse toute la nuit, et puis on la balance.",
        source: "Fight Club",
        year: "1999"
    },
    {
        quote: "C'est à moi que tu parles",
        source: "Taxi Driver"
    }
];

// Randomize a quote form the citations array
function getRandomQuote(array){
    var randomNumber = Math.floor(Math.random()*array.length);
    return quotes[randomNumber];
}

// Construct the html and print array to the output div
function printQuote(){
    var randomQuote = getRandomQuote(quotes);
    var html = '<p class="quote">';
        html += randomQuote.quote;
        html += '</p>';
        html += '<p class="source">';
        html += randomQuote.source;        
        // Citation source only added if true
        if (randomQuote.citation){        
            html += '<span class="citation">' + randomQuote.citation + '</span>';
        }
        // Year only added if true
        if (randomQuote.year){  
            html += '<span class="year">' + randomQuote.year + '</span>';
        }
        // tags only showed if true
        if(randomQuote.tags){
            html += '<p class="tags">';
            html += randomQuote.tags.join(", ");
            html += "</p>";
        }
        html += '</p>';
        document.getElementById('quote-box').innerHTML = html;
}

// First launch print quote
printQuote();
