const text = document.getElementById("text")
const author = document.getElementById("author")
const tweetButton = document.getElementById("tweet-quote")
const quote = []

const quotes = [
    'The best teacher is experience learned from failures.',
    'In all chaos there is a cosmos, in all disorder a secret order.',
    'He who angers you conquers you.',
    'Good luck is another name for tenacity of purpose.',
    'Believe you can and you are halfway there.',
    "It always seems impossible until it's done",
    "Don't watch the clock; do what it does, keep going.",
    "Keep going. The only way to guarantee failure is to stop",
    "You are stronger than you seem, braver than you believe, and smarter than you think.",
    "The only way to do great work is to love what you do.",
    "You got this! just take it one step at a time",
    "Without commitment you will never start, and more importantly without consistency you will never finish!"
];

function getQuote(){
    // const data
    fetch('https://type.fit/api/quotes')
    .then(res => res.json())
    .then(function(data){
        // Generates a random number between 0 and the length of the quotes array
        const index = Math.floor(Math.random()*data.length);

        //Store the quote present at the randomly generated index
        const quote=data[index].text;
        
        //Store the author of the respective quote
        const auth=data[index].author;

        if(auth==null)
        {
            author = "Anonymous";
        }
        
        //function to dynamically display the quote and the author
        text.innerHTML=quote;
        author.innerHTML="~ "+auth;

        //tweet the quote
        tweetButton.href="https://twitter.com/intent/tweet?text="+quote+" ~ "+auth;


    })
}
getQuote()
