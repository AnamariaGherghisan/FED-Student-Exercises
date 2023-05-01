//## Exercise 1

//Create a function that checks if a number is even or odd.

//Print a message to the console indicating whether the number is even or odd.

//>💡 Hint: Odd numbers can't be divided by 2 cleanly...

//The function takes one parameter num which is the number to be checked. It uses the modulo operator (%) to 
//check if the number is divisible by 2 without remainder. If it is, 
//the number is even and the function prints a message saying so. If it's
//not, the number is odd and the function prints a message saying that instead.


function evenOrOdd(num) {
  // Check if the number is divisible by 2 without remainder.
  if (num % 2 === 0) {
    console.log(num + " is even.");
  } else {
    console.log(num + " is odd.");
  }
}

// Usage:
//we call the function twice with different arguments. The first call checks if the number 12 is even,
// which it is, so the function prints "12 is even." 
//The second call checks if the number 7 is even, which it's not, so the function prints "7 is odd."
evenOrOdd(12); // Output: 12 is even.
evenOrOdd(7); // Output: 7 is odd.
