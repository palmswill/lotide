var assertEqual = function(actual, expected) {
  let equal = actual === expected;
  console.log(`Assertion ${equal ? "Passed" : "Failed"}: ${actual} ${equal ? "=" : "!"}== ${expected}`);
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
    let countObj={};

  for (let name of  allItems){
    // first check if we are suppose to count;
    if (itemsToCount[name]) {
      //  if not found in count obj , initialize first count;
      if ( ! countObj[name]) countObj[name] = 1;
      // if already there , increment;
      else countObj[name] ++ ;
    } ;
  }
  
  return countObj;

}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);