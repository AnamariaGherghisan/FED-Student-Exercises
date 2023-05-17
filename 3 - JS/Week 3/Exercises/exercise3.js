//Explanation:

//The convertToTitleCase(str) function takes a string as an argument and converts it to title case.
//The string is first converted to lowercase using toLowerCase().
//The string is then split into an array of words using split(' ').
//The function iterates over each word in the array using a for loop.
//Inside the loop, it capitalizes the first letter of each word by using charAt(0).toUpperCase() to
//get the first character and converting it to uppercase, 
//and then concatenates it with the rest of the word using slice(1).
//After iterating through all the words, the function joins them back into a string using join(' ').
//The resulting title case string is returned.
//The handleSubmit(event) function is called when the form is submitted.
//The event.preventDefault() method is called to prevent the default form submission behavior.
//The value of the input field is retrieved using document.getElementById('input').value.
//The convertToTitleCase() function is called with the input string as an argument, and the result is assigned 
//to the titleCaseString variable.
//The result is displayed in the result <div> by setting the textContent property of the resultElement.
//The addEventListener() method is used to add an event listener to the form submit event. It listens for 
//the submit event on the form with the ID "title-case-form" and calls the handleSubmit() function when the event occurs.

// Function to convert string to title case
function convertToTitleCase(str) {
  // Split the string into an array of words
  const words = str.toLowerCase().split(' ');

  // Iterate over each word in the array
  for (let i = 0; i < words.length; i++) {
    // Capitalize the first letter of each word
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  // Join the words back into a string
  const titleCaseStr = words.join(' ');

  // Return the title case string
  return titleCaseStr;
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Get the input value from the input field
  const input = document.getElementById('input').value;

  // Call the convertToTitleCase function to convert the string to title case
  const titleCaseString = convertToTitleCase(input);

  // Display the result in the result <div>
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Title Case: ${titleCaseString}`;
}

// Add event listener to the form submit event
const form = document.getElementById('title-case-form');
form.addEventListener('submit', handleSubmit);