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

// array for storing the words of the current challenge
let words = [];
// stores the index of the word the player is currently typing
let wordIndex = 0;
// default value for startTime (will be set on start)
let startTime = Date.now();

// grab UI items
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message')
const typedValueElement = document.getElementById('typed-value');

document.getElementById('start').addEventListener('click', function () {
	// get a quote
	const quoteIndex = Math.floor(Math.random() * quotes.length);
	const quote = quotes[quoteIndex];
	// Put the quote into an array of words
	words = quote.split(' ');
	// reset the word index for tracking
	wordIndex = 0;

	// UI updates
	// Create an array of span elements so we can set a class
	const spanWords = words.map(function(word) { return `<span>${word} </span>`});
	// Convert into string and set as innerHTML on quote display
	quoteElement.innerHTML = spanWords.join('');
	// Highlight the first word
	quoteElement.childNodes[0].className = 'highlight';
	// Clear any prior messages
	messageElement.innerText = '';

	// Setup the textbox
	// Clear the textbox
	typedValueElement.value = '';
	// set focus
	typedValueElement.focus();
	// set the event handler

	// Start the timer
	startTime = new Date().getTime();
});

typedValueElement.addEventListener('input', (e) => {
	// Get the current word
	const currentWord = words[wordIndex];
	// get the current value
	const typedValue = typedValueElement.value;

	console.log(currentWord, typedValue)

	if (typedValue === currentWord && wordIndex === words.length - 1) {
		// end of quote
		// Display success
		const elapsedTime = new Date().getTime() - startTime;
		const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
		messageElement.innerText = message;
	} else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
		// clear the typedValueElement for the new word
		typedValueElement.value = '';
		// move to the next word
		wordIndex++;
		// reset the class name for all elements in quote
		for (const wordElement of quoteElement.childNodes) {
			wordElement.className = '';
		}
		// highlight the next word
		quoteElement.childNodes[wordIndex].className = 'highlight';
	} else if (currentWord.startsWith(typedValue)) { //this is for
		// currently correct
		// remove highlight
		typedValueElement.className = '';
	} else {
		// error state
		typedValueElement.className = 'error';
	}
});

// 1. If the typed value matches the current word and 
	// the user is at the end of the words array (wordIndex === words.length - 1),
	// it means the user has successfully completed the task.
// 2. If the typed value ends with a space (meaning the user has completed typing a word) and 
	// the trimmed typed value matches the current word
// 3. If the typed value starts with the beginning of the current word 
	//it means the user is typing the current word correctly but hasn't completed it yet. 
	// In this case, it removes any error styling from the input field.
// 4. If none of the above conditions are met, it means there's an error in typing. 
	//It applies an error styling to the input field.


/*1. When the "start" button is clicked, it does the following:
   - It randomly selects a quote from an array of quotes (`quotes`).
   - It splits the selected quote into an array of words and assigns it to the variable `words`.
   - It resets the `wordIndex` variable to 0, which will be used to track the current word being typed.
   
2. It updates the user interface (UI):
   - It creates an array of `<span>` elements, each containing a word from the `words` array. These span elements will allow styling of individual words.
   - It sets the innerHTML of the element with the id `quoteElement` to the array of span elements joined together as a string. This effectively displays the quote on the UI.
   - It highlights the first word in the quote by setting its class name to 'highlight'.
   - It clears any prior messages displayed in the element with the id `messageElement`.
   
3. It sets up the textbox for user input:
   - It clears the value of the textbox (`typedValueElement`), ensuring it's empty before the user starts typing.
   - It sets focus to the textbox, ensuring the user can start typing immediately without having to click on it.
   
4. Finally, it starts the timer by recording the current time (`new Date().getTime()`) in milliseconds and assigning it to the variable `startTime`. 
	This will be used to calculate the time taken by the user to complete the typing test.
*/
