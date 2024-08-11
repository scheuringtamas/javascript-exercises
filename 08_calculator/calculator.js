const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
};

const multiply = function (array) {
  return array.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    for (let i = number - 1; i >= 1; i--) {
      number *= i;
    }
    return number;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
