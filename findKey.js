var assertEqual = function(actual, expected) {
  let equal = actual === expected;
  console.log(`Assertion ${equal ? "Passed" : "Failed"}: ${actual} ${equal ? "=" : "!"}== ${expected}`);
};

const findKey= (obj,callback)=>{
  const listOfKeys = Object.keys(obj);
  for (let key of listOfKeys){
    if (callback(obj[key])){
      return key;
    }
  }
}



let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual (result,"noma");

let result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1) // => "noma"

assertEqual (result2,"Blue Hill");

let result3 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3) // => "noma"

assertEqual (result3,"Akaleri");