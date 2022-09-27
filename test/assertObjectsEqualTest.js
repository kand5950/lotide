const assertEqual = require('../assertEqual');
const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require('../eqObjects');

assertObjectsEqual({l:'1', h:'2', b:'r'},{l:'1', h:'2', b:'r'});

assertObjectsEqual({l:'1', h:'2', b:'r'},{l:'1', h:'3'});

assertObjectsEqual({l:'1', h:'4', b:'r'},{l:'1', h:'4', b:'r'});
