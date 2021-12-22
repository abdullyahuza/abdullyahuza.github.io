const text = document.getElementById("text")
const author = document.getElementById("author")
const tweetButton = document.getElementById("tweet-quote")
const quote = []

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
