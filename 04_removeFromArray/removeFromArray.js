const removeFromArray = function (array, ...item) {
  return array.filter((del) => !item.includes(del));
};

// Do not edit below this line
module.exports = removeFromArray;
