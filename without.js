const eqArrays = function(source, itemsToRemove) {
  if (source.length !== itemsToRemove.length) {
    return false;
  } else {
    for (let i = 0; i < source.length; i++) {
      if (source[i] !== itemsToRemove[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(source, itemsToRemove) {

  if (eqArrays(source, itemsToRemove)) {
    console.log(`✅✅✅ Assertion Passed: ${source} === ${itemsToRemove}`);
    
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${source} !== ${itemsToRemove}`);
  }
};
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