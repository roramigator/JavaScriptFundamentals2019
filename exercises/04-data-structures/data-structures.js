/**
 * Add three more programming languages and return the languages array
 * @return {array} an array with four items
 */

function createAnArray() {
  let array = ["JavaScript"]; // Do not change this line
  /* Add three more items to the array here */
  array[array.length] = "1";
  array[array.length] = "2";
  array[array.length] = "3";
  return array;
}

/**
 *  Return BMW by accessing a property from the array of cars
 *
 *  @return {string} BMW
 */

function accessingAnArray() {
  const cars = ["BMW", "Honda", "Civic"]; // Do not change this line
  // Code here
  return cars[0];
}

/***
 * Create an array that contain two functions:
 * 1) the first function will add two arguments
 * 2) the second function will subtract two arguments
 * @returns {array} the array of functions
 *
 * @example
 * addFunctionsIntoArray()[0](10, 10) // 20;
 * addFunctionsIntoArray()[1](10, 10) // 0;
 */

function addFunctionsIntoArray() {
  // Create and return an array here
  let add = (a, b) => {
    return a + b;
  };
  let substract = (a, b) => {
    return a - b;
  };
  const functions = [add, substract];
  return functions;
}

/**
 * Loop through the array using a for loop (or for ... of loop) and return the highest number
 * @param  { array }
 * @returns { number } the highest number that was in the array
 * @example
 * highestNumber([1, 10, 2, 3, 4]) // 10
 * highestNumber([-1, -5, -4]) // -1
 *
 **/
function highestNumber(array) {
  let b = array[0];
  for (let n of array) {
    if (n > b) {
      b = n;
    }
  }
  return b;
}

/**
 * Combine an array by using the spread operator
 * @param  {array} array1
 * @param  {array} array2
 * @returns {array} an array that combines array1 and array2
 * @example
 * combineArray(['Japan','China','India'], ['USA','UK']) // ['Japan','China','India','USA','UK']
 **/

function combineArray(array1, array2) {
  return [...array1, ...array2];
}

/**
 * Given an array of objects, where each object has an ID,
 * loop through an array using a for loop (or for ... of loop).
 * Return the object that matches a given ID.
 *
 * Once the object is found, you must break out of the loop for optimization purposes.
 * To Pass this challenge, break  must be used.
 *
 * @param  {array} arr
 * @param  {number} id
 * @returns {object} with the matching id
 *
 * @example
 * const people = [{
 *    id: 10,
 *    firstName: 'John',
 *    lastName: 'Smith'
 * },{
 *    id: 20,
 *    firstName: 'Cookie',
 *    lastName: 'Monster'
 * },{
 *    id: 30,
 *    firstName: 'Jane',
 *    lastName: 'Doe'
 * }
 * },{
 *    id: 40,
 *    firstName: 'Tom',
 *    lastName: 'Hardy'
 * }];
 * findAndAbort(people, 20); // { id: 20, firstName: 'Cookie', lastName: 'Monster' }
 *
 * // Please note, the loop never iterates over the last item, because we found our object. There is no need to continue looping.
 */

function findAndAbort(arr, id) {
  let object;
  for (let i of arr) {
    //console.log(i);
    if (i.id === id) {
      object = i;
      break;
    }
  }
  return object;
}

/**
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 * Checks to see if a string is a palindrome.
 * Use the split and join methods to solve this problem
 * @param  {[string]}  string
 * @return {Boolean}
 *
 */

// Homework
function isPalindrome(str) {
  lStr = str.toLowerCase();
  let strArray = lStr.split("");
  let palArr = [];
  for (let i = strArray.length - 1; i >= 0; i--) {
    palArr.push(strArray[i]);
  }
  let palindrome = palArr.join("");
  return str === palindrome ? true : false;
}

/***
 * Use sets to remove duplicate elements from an array
 * @return {array}
 */

function removeDuplicates(numbers) {
  // You can change this line
  let clean = new Set(numbers);
  let uniqueNumbers = [...clean];
  /** Return the an array of unique values */
  return uniqueNumbers;
}

/**
 * Return the value for hat inside clothes (which should be ball cap)
 * @return {string} type of hat
 */
function accessObject() {
  // Do not change clothes here
  let clothes = {
    hat: "ballcap",
    shirt: "jersey",
    shoes: "cleats"
  };
  // Only change code below this line
  return clothes.hat;
}

/**
 *   Update the object to contain your first and last name.
 *   Add at least three skills inside the array
 *   @return {object} student
 */

function createStudentObject() {
  // Do not change student here
  let student = {
    firstName: "",
    lastName: "",
    skills: []
  };
  // Add code here
  student.firstName = "Roberto";
  student.lastName = "Morado";
  student.skills[0] = "HTML";
  student.skills[1] = "CSS";
  student.skills[2] = "Javascript";

  return student;
}

/**
 * Make an object "myDog" that represents a dog. It should contain the properties
 * "name", "legs", "tails" and "owners". Each should have a value.
 * "Owners" should be an array with a list of owner names.
 * @return {object}
 */

function createDogObject() {
  myDog = {
    name: "Puto",
    legs: 4,
    tails: 1,
    owners: ["Dog", "Roberto", "Morado"]
  };

  return myDog;
}

/**
 *  Using Object.keys, return all the properties contained in the object.
 *  The properties are name, legs, tails and friends.
 *
 *  @return {array}
 */

function returnObjectProperties() {
  // Do not change dog here
  let dog = {
    tail: 1,
    legs: 4,
    friends: ["Rusty", "Sparky"],
    name: "Rocket"
  };
  // Add code here
  let res = Object.keys(dog);
  // hint you need to return an array
  return res;
}

/**
 * Combine two objects into one
 * @param  {object} obj1
 * @param  {object} obj2
 * @return {object} obj1 and obj2 combined
 */

function combineObject(obj1, obj2) {
  let o = {};

  for (let i in obj1) {
    o[i] = obj1[i];
  }
  for (let i in obj2) {
    o[i] = obj2[i];
  }

  return o;
}

/**
 * Find a record with the matching id in a collection of records.
 * If the value is truthy, then swap out one of the records values with a new property.
 * If the original value is an array, it should add the new value to the array.
 * @param {Number} id what record to change
 * @param {String} property what property to replace
 * @param {String} value new value to replace with
 *
 *  @example
 *  updateRecords(5439, "artist", "ABBA"); // artist should be "ABBA"
 *  updateRecords(5439, "tracks", "Take a Chance on Me"); // tracks should be ["Old Track", "Take a Chance on Me""]
 *  updateRecords(2548, "artist", ""); // artist should not change
 *  updateRecords(1245, "tracks", "Addicted to Love"); // tracks should be ["Old Track", "Addicted to Love""]
 *  updateRecords(2468, "tracks", "Free"); // tracks should have "1999"as the first element.
 *  updateRecords(2548, "tracks", ""); // tracks should not change
 *  updateRecords(1245, "album", "Riptide"); // album should be "Riptide"
 *
 *
 */

function updateRecords(id, prop, value) {
  // Do not change collection here

  let collection = {
    // id
    "2548": {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: ["Let It Rock", "You Give Love a Bad Name"]
    },
    // id
    "2468": {
      album: "1999",
      artist: "Prince",
      tracks: ["1999", "Little Red Corvette"]
    },
    // id
    "1245": {
      artist: "Robert Palmer",
      tracks: []
    },
    // id
    "5439": {
      album: "ABBA Gold"
    }
  };
  // Only change the code after this line
  // Logic Here
  if (collection[id]) {
    if (collection[id][prop]) {
      if (Array.isArray(prop)) {
        collection[id][prop].push(value);
      } else {
        collection[id][prop] = value;
      }
    } else {
      collection[id][prop] = value;
    }
  }

  return collection;
}

module.exports = {
  createAnArray,
  accessingAnArray,
  highestNumber,
  isPalindrome,
  createDogObject,
  createStudentObject,
  returnObjectProperties,
  combineArray,
  accessObject,
  combineObject,
  removeDuplicates,
  updateRecords,
  findAndAbort,
  addFunctionsIntoArray
};
