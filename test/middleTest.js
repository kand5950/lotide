/* const eqArrays = require('../eqArrays');

const assertArraysEqual = require('../assertArraysEqual');

const middle = require('../middle');

console.log(middle([1, 2, 3, 4, 5])) // => [3] */

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it('returns middle element for ([1, 2, 3])', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  })

  it('returns middle element for ([1, 2, 3, 4, 5])', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  })

  it('returns [] element for ([1])', () => {
    assert.deepEqual(middle([1]), []);
  })



});
