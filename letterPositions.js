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



const letterPositions = function(sentence) {
  const results = {};
  for (let charNum in sentence ){
    let letter = sentence[charNum];
    if (! results[letter])  results[letter]=[charNum];
    else results[letter].push(charNum);
  }

  return results;
};

assertArraysEqual(letterPositions("lighthouse in the house")["h"],
[ '3', '5', '15', '18' ])

assertArraysEqual(letterPositions("lighthouse in the house")["e"],
[ '9', '16', '22' ])


