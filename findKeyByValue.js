const assertEqual = require('./assertEqual');


const findKeyByValue = function(objects, value) {
  let objKeys = Object.keys(objects);
  let index = 0;
  for (let obj in objects) {
    if (objects[obj] === value) {
      return objKeys[index];
    }
    index++;
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

module.exports = findKeyByValue;

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);