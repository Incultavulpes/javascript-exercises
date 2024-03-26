const convertToCelsius = function(tempNumber) {
  tempNumber = (tempNumber - 32) * (5 / 9);
  tempNumber = Math.round(tempNumber * 10) / 10;
  return tempNumber;
};

const convertToFahrenheit = function(tempNumber) {
  tempNumber = (tempNumber * (9/5)) + 32;
  tempNumber = Math.round(tempNumber * 10) / 10;
  return tempNumber;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
