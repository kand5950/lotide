const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')


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