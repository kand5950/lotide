const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual(([1, 2, 3], [1, 2, 3]), ([1, 2, 3], [1, 2, 3])); // => should PASS