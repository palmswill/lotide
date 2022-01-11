var assertEqual = function(actual, expected) {
  let equal = actual === expected;
  console.log(`Assertion ${equal ? "Passed" : "Failed"}: ${actual} ${equal ? "" : "!"}== ${expected}`);
};

var eqArrays = (array1,array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0 ; i < array1.length ; i ++){
    if (array1[i] !== array2[i]){
      return false;
    } 
  }
  return true;

}

assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true); // => should PASS
