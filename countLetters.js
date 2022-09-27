const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
let result = 0;
  const results = {};
  let lowerSentence = sentence.toLowerCase();
  let arr = lowerSentence.split('');

  for (const item of arr) {
    if (item !== ' ') {
      results[item] = 0;
    }
  }
  for (const item of arr) {
    if (item !== ' ') {
      results[item] += 1;
    }
  }
  return results;
  
};

module.exports = countLetters;