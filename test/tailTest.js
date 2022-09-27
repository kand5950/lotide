/* const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);


assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs" */

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it('returns 2 for ["hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["hello", "Lighthouse", "Labs"]).length, 2);
  })
});