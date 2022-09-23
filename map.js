const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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