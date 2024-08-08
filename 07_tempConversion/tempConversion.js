const convertToCelsius = function (fahrenheit) {
  let number = (5 / 9) * (fahrenheit - 32);
  return Math.round(number * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  let number = (9 / 5) * celsius + 32;
  return Math.round(number * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
