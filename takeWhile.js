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


const takeUntil = function(array, callback) {
  // ...
  const result=[];
  for (let item of array){
    if (callback(item)){
      break
    }
    result.push(item)
  }
  return result;
}




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);