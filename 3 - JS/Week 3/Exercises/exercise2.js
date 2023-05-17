//Explanation:

//The calculateEvenSum(numbers) function takes an array of numbers as an argument and calculates the sum of the even
 //numbers in the array.
//The sum variable is initialized to 0 to store the sum of even numbers.
//The function iterates over each number in the array using a for loop.
//Inside the loop, it checks if the current number is even by checking if the remainder of dividing the number by 2 is 0 
//(numbers[i] % 2 === 0).
//If the number is even, it adds the number to the sum.
//After iterating through all the numbers, the function returns the sum of even numbers.
//The handleSubmit(event) function is called when the form is submitted.
//The event.preventDefault() method is called to prevent the default form submission behavior.
//The value of the numbers input field is retrieved using document.getElementById('numbers').value.
//The input string is split into an array of numbers using split(',') and map(Number) to convert each string number to a numeric value.
//The calculateEvenSum() function is called with the numbers array as an argument, and the result is assigned to the evenSum variable.
//The result is displayed in the result <div> by setting the textContent property of the resultElement.
//The addEventListener() method is used to add an event listener to the form submit event. It listens for the submit event
// on the form with the ID "even-sum-form" and 
//calls the handleSubmit() function when the event occurs.


// Function to calculate the sum of even numbers in an array
function calculateEvenSum(numbers) {
  let sum = 0;

  // Iterate over each number in the array
  for (let i = 0; i < numbers.length; i++) {
    // Check if the number is even
    if (numbers[i] % 2 === 0) {
      // Add the even number to the sum
      sum += numbers[i];
    }
  }

  // Return the sum of even numbers
  return sum;
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Get the numbers value from the input field
  const numbersInput = document.getElementById('numbers').value;

  // Split the input string into an array of numbers
  const numbersArray = numbersInput.split(',').map(Number);

  // Call the calculateEvenSum function to calculate the sum of even numbers
  const evenSum = calculateEvenSum(numbersArray);

  // Display the result in the result <div>
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Sum of even numbers: ${evenSum}`;
}

// Add event listener to the form submit event
const form = document.getElementById('even-sum-form');
form.addEventListener('submit', handleSubmit);