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

var middle = (array) =>{
  let arrayLength = array.length
  if (arrayLength <= 2){
    return [];
  }
  if (arrayLength % 2 == 0){
    return [array[arrayLength / 2 - 1], array[arrayLength / 2]];
  }
  else {
    return [array[Math.floor(arrayLength / 2)]]
  }  
}

assertArraysEqual(middle([1, 2, 3]),[2])
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3])
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4])

