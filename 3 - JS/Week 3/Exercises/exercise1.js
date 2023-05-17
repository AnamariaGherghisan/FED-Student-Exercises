//Explanation:

//The isPalindrome(word) function takes a word as an argument and checks if it is a palindrome.
//The replace() method is used with a regular expression (/[^a-z0-9]/gi) to remove any non-alphanumeric characters from the word. 
//The gi flags mean that the replacement is case-insensitive (i) and applied globally (g).
//The toLowerCase() method is called to convert the cleaned word to lowercase.
//The cleaned word is reversed by splitting it into an array of characters, using split(''), reversing the
// array with reverse(), and joining the characters back into a string with join('').
//The function checks if the cleaned word is the same as the reversed word and returns true if they are equal, 
//indicating that the word is a palindrome.
//The handleSubmit(event) function is called when the form is submitted.
//The event.preventDefault() method is called to prevent the default form submission behavior.
//The value of the word input field is retrieved using document.getElementById('word').value.
//The isPalindrome() function is called with the word value as an argument, and the result is assigned to the 
//isPalindromeResult variable.
//The result is displayed in the result <div> by setting the textContent property of the resultElement.
//The addEventListener() method is used to add an event listener to the form submit event. It listens for the 
//submit event on the form with the ID "palindrome-form" and calls the handleSubmit() function when the event occurs.

// Function to check if a word is a palindrome
function isPalindrome(word) {
  // Remove any non-alphanumeric characters and convert to lowercase
  const cleanedWord = word.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Reverse the cleaned word
  const reversedWord = cleanedWord.split('').reverse().join('');

  // Check if the cleaned word is the same as the reversed word
  return cleanedWord === reversedWord;
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Get the word value from the input field
  const word = document.getElementById('word').value;

  // Call the isPalindrome function to check if the word is a palindrome
  const isPalindromeResult = isPalindrome(word);

  // Display the result in the result <div>
  const resultElement = document.getElementById('result');
  if (isPalindromeResult) {
    resultElement.textContent = `"${word}" is a palindrome!`;
  } else {
    resultElement.textContent = `"${word}" is not a palindrome.`;
  }
}

// Add event listener to the form submit event
const form = document.getElementById('palindrome-form');
form.addEventListener('submit', handleSubmit);