var assertEqual = function(actual, expected) {
  let equal = actual === expected;
  console.log(`Assertion ${equal ? "Passed" : "Failed"}: ${actual} ${equal ? "" : "!"}== ${expected}`);
};


const words = ["Yo Yo", "Lighthouse", "Labs"];


var tail = (list) => {
  let tailList=[];
  for (let i = 1 ; i < list.length ; i ++ ){
    tailList = [... tailList , list[i]];
  }

  return tailList;

};

var result = tail (words);

assertEqual(words.length, 3);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");