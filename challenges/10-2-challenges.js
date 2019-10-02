/***
 *
 * * Javascript Arrays
 *   The first item in the array should be a "string"
 *   The second item in the array should be a function
 *   The third item in the array should be an array
 *   @example
 *   typeof [0] // "string"
 *   typeof [1] // "function"
 *   Array.isArray([2])  // "array"
 *
 *
 *  */

function createAnArray() {
  const myS = "String";
  const myF = () => {};
  const myA = [myS, myF];

  const Array = [myS, myF, myA];

  return Array;
}

/***
 *   The function will accept two arguments: the string and the target.
 *   Uppercase the target word in the string.
 *   If the target exceeds the length of the string, return undefined.
 *
 *
 *   hint
 *   use the Split method
 *
 *   @example
 *   uppercaseTargetWord("first second third", 2) // returns "first SECOND third"
 *   uppercaseTargetWord("Javascript is cool", 3) // returns "Javascript is COOL"
 *   uppercaseTargetWord("Javascript is not cool", 5) // returns undefined
 *
 *
 *
 *  */

function uppercaseTargetWord(str, target) {
  let newString;
  let myArray = str.split(" ");

  if (myArray.length >= target) {
    myArray[target - 1] = myArray[target - 1].toUpperCase();
  } else {
    newString = undefined;
    return newString;
  }

  newString = myArray.join(" ");
  return newString;
}

module.exports = {
  createAnArray,
  uppercaseTargetWord
};
