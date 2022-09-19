const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " === " + expected);
  
  } else {
    console.log("✅✅✅ Assertion Passed: " + actual + " !== " + expected);
  }

};

assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 3);
assertEqual("Bootcamps", "Bootcamp");
assertEqual(1, 1);