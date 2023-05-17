//Explanation:

//The tempCalc(temp, unit) function takes two arguments: the temperature and the unit (either "celsius" or "fahrenheit").
//If the unit is "celsius", the function returns the temperature converted to Fahrenheit using the formula (temp * 9 / 5) + 32.
//If the unit is "fahrenheit", the function returns the temperature converted to Celsius using the formula (temp - 32) * 5 / 9.
//The formatTemp(temp, unit) function takes two arguments: the temperature and the unit (either "celsius" or "fahrenheit").
//If the unit is "celsius", the function formats the temperature to one decimal place and adds the unit "°C".
//If the unit is "fahrenheit", the function formats the temperature to one decimal place and adds the unit "°F".
//The convertTemperature() function is triggered when the "Convert" button is clicked.
//The temperature and unit values are retrieved from the input fields using document.getElementById().
//The tempCalc() function is called with the temperature and unit values as arguments, and the returned value is assigned to the variable
// convertedTemp.
//The formatTemp() function is called with the convertedTemp and unit values as arguments, and the returned value 
//is assigned to the variable formattedTemp.
//The formatted temperature is displayed in the result <div> using document.getElementById().innerHTML.

// Function to convert temperature from Celsius to Fahrenheit or vice versa
function tempCalc(temp, unit) {
  if (unit === "celsius") {
    return (temp * 9 / 5) + 32;
  } else if (unit === "fahrenheit") {
    return (temp - 32) * 5 / 9;
  }
}

// Function to format temperature to one decimal place and add the unit
function formatTemp(temp, unit) {
  if (unit === "celsius") {
    return temp.toFixed(1) + " °C";
  } else if (unit === "fahrenheit") {
    return temp.toFixed(1) + " °F";
  }
}

// Function to convert the temperature and display the result
function convertTemperature() {
  // Get the temperature and unit values from the input fields
  const temp = parseFloat(document.getElementById("input").value);
  const unit = document.getElementById("unit").value;

  // Call the tempCalc function to convert the temperature
  const convertedTemp = tempCalc(temp, unit);

  // Call the formatTemp function to format the converted temperature
  const formattedTemp = formatTemp(convertedTemp, unit);

  // Display the formatted temperature in the result <div>
  document.getElementById("result").innerHTML = formattedTemp;
}
