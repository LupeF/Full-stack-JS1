/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {quote: 'The only way to do great work is to love what you do.', source: 'Steve Jobs',citation: 'Stanford University Commencement Address'},
  {quote: 'The best time to plant a tree was 20 years ago. The second best time is now.', source: 'Chinese Proverb'},
  {quote: 'The best revenge is massive success.', source: 'Frank Sinatra', year: '1915-1998'},
  {quote: 'The only limit to our realization of tomorrow will be our doubts of today.', source: 'Franklin D. Roosevelt'},
  {quote: 'The only thing we have to fear is fear itself.', source: 'Franklin D. Roosevelt'}
]
// console.log(quotes);
/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  let getRandomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[getRandomQuote];
}


/***
 * `printQuote` function
***/
function printQuote(){
let randomQuote = getRandomQuote();
let html = `<p class="quote">${randomQuote.quote}</p>
            <p class="source">${randomQuote.source}`
            if(randomQuote.citation){
             html += `<span class="citation">${randomQuote.citation}</span>`;
            }
            if(randomQuote.year){
              html += `<span class="year">${randomQuote.year}</span>`;
            }
            `</p>`;
document.getElementById('quote-box').innerHTML = html;

}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);