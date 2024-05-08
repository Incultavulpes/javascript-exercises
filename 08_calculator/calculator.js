const add = function(a, b) {
  return a + b;
};

const subtract = function(c, d) {
  return c - d;
};

const sum = function(arr) {
  let result = 0;
  result = arr.reduce((accumulator, currentItem) => accumulator + currentItem, 0);
  return result;
};

const multiply = function(arr) {
  let result = 0;
  result = arr.reduce((accumulator, currentItem) => accumulator * currentItem, 1);
  return result;
};

const power = function(e, f) {
  return Math.pow(e, f);
};

const factorial = function(g) {
  let result = 1;
  if (g === 0) {
    return result;
  } else if (g < 0) {
    return "No negative factorial has been defined";
  } else {
    for (let i = g; i > 0; i--) {
      result = result * i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
