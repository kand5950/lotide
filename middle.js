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

  module.exports = middle;