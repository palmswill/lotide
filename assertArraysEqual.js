const eqArrays = require("./eqArrays");

var assertArraysEqual = (array1, array2) => {
  let equal = eqArrays(array1, array2);

  console.log(`Assertion ${equal ? "Passed" : "Failed"}: ${array1} ${equal ? "=" : "!"}== ${array2}`);
};

assertArraysEqual([1,2],[1,2]);
assertArraysEqual([1,"a"],[1,2])


module.exports = assertArraysEqual;
