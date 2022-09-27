const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

const eqObjects = require('./eqObjects')

const assertObjectsEqual = function (actual, expected){
    const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)){
    
      return (console.log(`✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`));
    
    } else {
      return (console.log(`🛑🛑🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`));
    }
  };

  module.exports = assertObjectsEqual;