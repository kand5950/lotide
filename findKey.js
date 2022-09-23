const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKey = function(objects, callback) {
  let objectKeys = Object.keys(objects);
  let results = undefined;
  for (const obj of objectKeys) {
    if (callback(objects[obj])) {
      results = obj;
      return results;
    
    }
  
  }
  return results;

};


const test1 = console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3)); // => "noma"


