var assertEqual = function(actual, expected) {
  let equal = actual === expected;
  console.log(`Assertion ${equal ? "Passed" : "Failed"}: ${actual} ${equal ? "=" : "!"}== ${expected}`);
};

var countLetter = (word) =>{
  let countObj={};

  for (let letter of word){
    if (!countObj[letter]) countObj[letter] = 1;
    else countObj[letter] ++ ;
  }

  return countObj;

}

assertEqual(countLetter("LHL")["L"],2);
assertEqual(countLetter("LHL")["H"],1);

