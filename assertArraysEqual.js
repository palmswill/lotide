var eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

var assertArraysEqual = (array1, array2) => {
  let equal = eqArrays(array1, array2);

  console.log(
    `Assertion ${equal ? "Passed" : "Failed"}: ${
      equal ? "Array matched!" : `Array unmached!`
    }`
  );
};
