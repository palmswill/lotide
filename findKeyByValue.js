var assertEqual = function(actual, expected) {
  let equal = actual === expected;
  console.log(`Assertion ${equal ? "Passed" : "Failed"}: ${actual} ${equal ? "=" : "!"}== ${expected}`);
};


const findKeyByValue = (bestTVShowsByGenre, filmName) =>{

  for (let genre in bestTVShowsByGenre){
    if (bestTVShowsByGenre[genre] === filmName){
      return genre;
    }
  }
  return undefined;

}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);