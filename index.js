// Code your solution in this file!
/**
 * Returns a new array containing the first two drivers from the given array of drivers.
 * @param {Array} drivers - The array of drivers.
 * @returns {Array} - A new array containing the first two drivers.
 */
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

/**
 * Returns an array containing the last two drivers from the given array of drivers.
 * @param {Array} drivers - The array of drivers.
 * @returns {Array} - An array containing the last two drivers.
 */
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};
