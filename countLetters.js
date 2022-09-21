const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(sentence) {

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

console.log(countLetters("Llighthouse in the house"));