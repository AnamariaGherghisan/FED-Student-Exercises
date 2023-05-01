//## Exercise 3

//Create a function that when given a number logs to the console 1 of 4 possibilities,

//- if the number is divisible by 3 print "Fizz"
//- if the number is divisible by 5 print "Buzz"
//- if the number is divisible by 3 AND 5 print "FizzBuzz"
//- else print the number.

//>💡 Hint: are the `if` conditions in the right order?
//>
//>💡 Hint: Do you remember the `%` operator?

//This function uses the % (modulus) operator to check if a number is divisible by 3 or 5. If a number is divisible 
//by both 3 and 5, it logs "FizzBuzz" to the console. If a number is only divisible by 3,
//it logs "Fizz", and if it's only divisible by 5, it logs "Buzz". If a number is not divisible by 
//either 3 or 5, it simply logs the number itself.

function fizzBuzz(number) {
  // Check if the number is divisible by both 3 and 5.
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  }
  // Check if the number is divisible by 3.
  else if (number % 3 === 0) {
    console.log("Fizz");
  }
  // Check if the number is divisible by 5.
  else if (number % 5 === 0) {
    console.log("Buzz");
  }
  // Print the number if it's not divisible by 3 or 5.
  else {
    console.log(number);
  }
}

// Usage:
//we call the fizzBuzz function with four different 
//arguments and log the results to the console. The function logs "Fizz" when called with the argument 3, 
//"Buzz" when called with 5, "FizzBuzz" when called with 15, and 7 when called with 7.
fizzBuzz(3); // logs "Fizz"
fizzBuzz(5); // logs "Buzz"
fizzBuzz(15); // logs "FizzBuzz"
fizzBuzz(7); // logs 7