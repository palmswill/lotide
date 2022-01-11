var eqArrays = (array1,array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0 ; i < array1.length ; i ++){
    if (array1[i] !== array2[i]){
      return false;
    } 
  }
  return true;

}

var assertArraysEqual = (array1, array2) => {
  let equal = eqArrays(array1, array2);

  console.log(
    `Assertion ${equal ? "Passed" : "Failed"}: ${
      equal ? "Array matched!" : `Array unmached!`
    }`
  );
};

const without = (source, itemsToRemove) => {
  let copiedSource=source.slice(0);
  for (let i = 0; i < copiedSource.length ; i ++ ){
    for (let targetItem of itemsToRemove){
      if (copiedSource[i] === targetItem){
        copiedSource.splice(i,1)
        i -= 1;
      }
    } 
  }
  return copiedSource;
}

console.log("case 1")
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
console.log("case 2")
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log("test if mutated");
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
