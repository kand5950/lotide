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


const letterPositions = function(sentence) {
  const results = {};
  let lowerSentence = sentence.toLowerCase();
  let arr = lowerSentence.split('');

  for (const item of arr) {
    if (item !== ' ') {
      results[item] = [];
    }
  }
  for (let i = 0; i < lowerSentence.length; i++) {
    if (lowerSentence[i] !== ' ') {
      results[lowerSentence[i]].push(i);
    }
  }
  return results;

};

assertArraysEqual(letterPositions("hello").e, [1]);