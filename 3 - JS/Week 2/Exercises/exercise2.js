//## Exercise 2

//Create a function that generates a random number between 1 and 10.

//>💡 Hint: `prompt()` the user to guess the number and provide feedback if the guess is too high or too low.
//>
//>💡 Hint: break it down into chunks
//>
//>```js
//>if ( number too high ){
//>    // do this
//>}
//>else if ( number too low ){
//>    // do this instead
//>}
//>````

//The function generates a random number between 1 and 10 using Math.random() and then rounds it down
// to the nearest integer using Math.floor(). 
//It then prompts the user to guess the number using prompt()
// and stores the user's guess in a variable called guess. The function then checks if the guess is too high, 
// too low, or correct using if/else statements and provides feedback to the user using alert().


function guessNumber() {
  // Generate a random number between 1 and 10.
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  // Prompt the user to guess the number.
  const guess = prompt("Guess a number between 1 and 10:");

  // Check if the guess is too high, too low, or correct and provide feedback.
  if (guess > randomNumber) {
    alert("Your guess is too high.");
  } else if (guess < randomNumber) {
    alert("Your guess is too low.");
  } else {
    alert("Congratulations, you guessed the number!");
  }
}

// Usage
guessNumber(3);
guessNumber(7);
