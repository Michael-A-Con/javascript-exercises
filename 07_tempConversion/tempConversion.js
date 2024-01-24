const convertToCelsius = function(fahrenheit) {
  let celcius;
  celcius = 5/9 * (fahrenheit - 32);
  return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit;
  fahrenheit = (celcius*9/5) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
