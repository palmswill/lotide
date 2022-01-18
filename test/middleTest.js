const middle = require("../middle");
const expect = require("chai").expect;

describe("#middle", () => {
  it(`returns  [2] for [1, 2, 3]`, () => {
    expect(middle([1, 2, 3])).deep.to.equal( [2]);
  });
  it(`returns  [3] for [1, 2, 3, 4, 5]`, () => {
    expect(middle([1, 2, 3, 4, 5])).deep.to.equal( [3]);
  });
  it(`returns  [2, 3] for [1, 2, 3, 4]`, () => {
    expect(middle([1, 2, 3, 4])).deep.to.equal( [2, 3]);
  });
  it(`returns  [3, 4] for [1, 2, 3, 4, 5, 6]`, () => {
    expect(middle([1, 2, 3, 4, 5, 6])).deep.to.equal([3, 4]);
  });
});
