const fibonacci = function (arg) {
  const parseArg = parseInt(arg);
  if (parseArg === 0 || parseArg === 1) {
    return parseArg;
  } else if (parseArg < 0) {
    return "OOPS";
  } else {
    return fibonacci(parseArg - 1) + fibonacci(parseArg - 2);
  }
};

// Do not edit below this line
module.exports = fibonacci;
