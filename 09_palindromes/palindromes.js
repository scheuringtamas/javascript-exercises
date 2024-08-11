const palindromes = function (arg) {
  const punctuation = arg
    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g, "")
    .toLowerCase();
  //const reversed = punctuation.split("").reduce((acc, char) => char + acc, "");
  const reversed = punctuation.split("").reverse().join("");
  return reversed === punctuation;
};

palindromes("racecar");

// Do not edit below this line
module.exports = palindromes;
