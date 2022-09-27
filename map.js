const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  // console.log('array: ', array);
  // console.log('callback: ', callback);

  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;

};

const results1 = map(words, word => word[0]);
console.log(results1);
console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']));