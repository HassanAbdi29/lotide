const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(head(['5']), '5'); 
  });
});