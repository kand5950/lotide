// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
  return false;
    } else {
      for (let i=0; i < actual.length; i++){
        if(actual[i] !== expected[i]){
          return false;
        }
      }
      return true;
  }
};

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  let result = false;
  if (keys1.length === keys2.length) {
    for (const element of keys1){
      if (keys2.includes(element) && object1[element] === object2[element]) {
        result = true;
      } else if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
        result = eqArrays(object1[element], object2[element]);
      } else {
        result = false;
      }
    }
  }
  return result;
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc)); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false