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

const assertArraysEqual = function (actual, expected){

  if (eqArrays(actual, expected)){
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

const middle = function(actual) {
  
  let result = [];
  let middleN = 0;
    
  if (actual.length <= 2) {
      return [];
    }
    
  if (actual.length % 2 === 0) {
      middleN = actual.length/2;
      result [1] = actual[middleN];
      result [0] = actual[middleN - 1];
      
      return result;

    } if (actual.length % 2 !== 0) {
      middleN = actual[Math.floor(actual.length/2)];
      result [0] = middleN;
      return result;
    }
  }
  

console.log(middle([1, 2, 3, 4, 5])) // => [3]