const sumAll = function (arg1, arg2) {
  let total = 0;
  if (
    isNaN(arg1) ||
    isNaN(arg2) ||
    arg1 < 0 ||
    arg2 < 0 ||
    !Number.isInteger(arg1) ||
    !Number.isInteger(arg2)
  ) {
    return "ERROR";
  } else {
    let smaller = 0;
    let bigger = 0;
    let sum = 0;

    if (arg1 < arg2) {
      smaller = arg1;
      bigger = arg2;
    } else {
      smaller = arg2;
      bigger = arg1;
    }

    for (let i = smaller; i <= bigger; i++) {
      sum += i;
    }

    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
