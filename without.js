const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const words = ["hello", "world", "lighthouse"];
const without = function(source, itemsToRemove) {

  let arr = source.slice(0);

  for (let i = 0; i < source.length; i++) {
    for (const item of itemsToRemove) {
      if (source[i] === item) {
        arr.splice(i, 1);
       

      }
    }
 
  }
  return arr;
};
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([1, 2, 3], [1,2]));
console.log(assertArraysEqual(without([1,2,3],[1,2]),[3]));

without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);