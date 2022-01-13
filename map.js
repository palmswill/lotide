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

  console.log(`Assertion ${equal ? "Passed" : "Failed"}: ${array1} ${equal ? "=" : "!"}== ${array2}`);
};



var words = ["ground", "control", "to", "major", "tom"];

var map = (list, callback) =>{
  let results =[];
  for (const item of list){
    results.push(callback(item));
  }
  return results
}

assertArraysEqual(map(words,()=>1),[1,1,1,1,1]);
assertArraysEqual(map(words,(word)=>word[0]),["g","c","t","m","t"]);
assertArraysEqual(map(words,(word)=>word.length),[6,7,2,5,3]);