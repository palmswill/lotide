const tail = require("../tail");
const assertEqual=require("../assertEqual")

const words = ["Yo Yo", "Lighthouse", "Labs"];

var result = tail(words);

assertEqual(words.length, 3);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");