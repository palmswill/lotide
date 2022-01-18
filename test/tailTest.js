const tail = require("../tail");
const eqArrays=require("../eqArrays");
const assert = require('chai').assert;

const words = ["Yo Yo", "Lighthouse", "Labs"];


describe("#tail", () => {
  it(`returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(eqArrays(tail(["Yo Yo", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]),true);
  });
  
});