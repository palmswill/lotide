var assertEqual = function (actual, expected) {
  let equal = actual === expected;
  console.log(
    `Assertion ${equal ? "Passed" : "Failed"}: ${actual} ${
      equal ? "=" : "!"
    }== ${expected}`
  );
};

var eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
var eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let key in object1) {
    // check if both values are array
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      // if one is not return false
    } else {
      if (object1[key] !== object2[key]) return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect=require('util').inspect;
  let equal = eqObjects(actual,expected);
  console.log(
    `Assertion ${equal ? "Passed" : "Failed"}: ${inspect(actual)} ${
      equal ? "=" : "!"
    }== ${inspect(expected)}`
  );

};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd,dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd,cd2);