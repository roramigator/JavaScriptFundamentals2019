/**
 * Count the number of digits in an integer
 * @param {number} num an integer
 * @returns {number} number of digits
 *
 * @example
 * countNumberOfDigits(1); // 1
 * countNumberOfDigits(123); // 3
 * countNumberOfDigits(1000); // 4
 */
function countNumberOfDigits(num) {
  /**
   * str = num+'';
   * return str.length;
   */

  let count = 0;
  if (num > -10 && num < 10) {
    count = 1;
  }
  if (num > 9 && num < 100) {
    count = 2;
  }
  if (num > 99 && num < 1000) {
    count = 3;
  }
  if (num > 999 && num < 10000) {
    count = 4;
  }
  return count;
}

/**
 * Given a number of seconds, return how long ago something happened.
 * @param {number} seconds
 * @returns {string} a relative time formatted like one of the following:
 * - when less than a minute: "seconds ago"
 * - when less than an hour: "minutes ago"
 * - when less than a day: "hours ago"
 * - equal to or greater than a day: "days ago"
 *
 * @example
 *
 * getRelativeTime(59); // seconds ago
 * getRelativeTime(60); // minutes ago
 */
function getRelativeTime(seconds) {
  let happened = "";
  if (seconds > 0 && seconds < 60) {
    happened = "seconds ago";
  }
  if (seconds > 59 && seconds < 3600) {
    happened = "minutes ago";
  }
  if (seconds > 3599 && seconds < 86400) {
    happened = "hours ago";
  }
  if (seconds > 86399) {
    happened = "days ago";
  }
  return happened;
}

/**
 * Round to the nearest 100th decimal point.
 * @param {number} num a float
 * @returns {number} a float with, at most, two decimal points
 *
 * @example
 * roundToNearestHundredth(14.511); // 14.51
 * roundToNearestHundredth(14.499); // 14.5
 */
function roundToNearestHundredth(num) {
  // let round = num.toFixed(2);
  let round = Math.round(num * 100) / 100;
  return round;
}

// Ignore this. It is for the tests.
module.exports = {
  countNumberOfDigits,
  getRelativeTime,
  roundToNearestHundredth
};
