# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kand5950/lotide`

**Require it:**

`const _ = require('@kand5950/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: Displays first element of array
* `tail()`: Displays the elements left after taking out first element
* `middle()`: Displays the middle element/s of array
* `countLetters()`: Counts the occuraances of character in array
* `countOnly()`: Returns the count of the occurences of strings if true
* `eqArrays()`: Compares arrays
* `eqObjects()`: Compares array of objects
* `findKey()`: Returns a key for the specified condition made
* `findKeyByValue()`: Returns a key for the specified value
* `letterPositions()`: Displays the position of a given letter
* `map()`: Returns an array for the specified condition made
* `takeuntil()`: Displays elements in an array until a given character to stop at
* `without()`: Returns a new array of given arrays without matching elements