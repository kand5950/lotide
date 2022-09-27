const assertEqual = require('../assertEqual');
const assertObjectsEqual = require('../assertObjectsEqual');

assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3]), true); // => true
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba)); // => true
//
// const abc = { a: "1", b: "2", c: "3" };
// //assertEqual(assertObjectsEqual(eqObjects(ab, abc))); // => false
//
// //assertEqual(assertObjectsEqual((eqObjects(ab, ba), true)));
// //assertEqual(assertObjectsEqual((eqObjects(ab, abc), false)));
//
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(assertObjectsEqual(eqObjects(cd, dc), true)); // => true
//
// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(assertObjectsEqual(eqObjects(cd, cd2), false)); // => false