const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }
    for (let element of keys1){
      if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
        if (!eqArrays(object1[element], object2[element])) {
          return false;
        }
      } else {
        if (object1[element] !== object2[element]) {
        return false;
      }
    }
    
    }
    return true;
  };

module.exports = eqObjects;