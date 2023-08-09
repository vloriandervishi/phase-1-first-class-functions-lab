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

/**
 * An array containing two functions: returnFirstTwoDrivers and returnLastTwoDrivers.
 * These functions can be used to select the first two drivers and the last two drivers
 * from an array of drivers.
 * @type {Array<Function>}
 */
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

/**
 * Creates a function that multiplies a fare by a given integer.
 * @param {number} integer - The integer to multiply the fare by.
 * @returns {function} A function that takes a fare as input and returns the multiplied fare.
 */
function createFareMultiplier(integer) {
  return function (fare) {
    return fare * integer;
  };
}
/**
 * Returns a function that doubles the given fare.
 * @param {number} fare - The fare to be doubled.
 * @returns A function that doubles the given fare.
 */
const fareDoubler = createFareMultiplier(2);

/**
 * Returns a function that multiplies a given number by a specified factor.
 * @param {number} factor - The factor to multiply the number by.
 * @returns A function that takes a number as input and returns the result of multiplying it by the specified factor.
 */
const fareTripler = createFareMultiplier(3);

/**
 * Selects different drivers from the given array of drivers using the provided driver selector function.
 * @param {Array} drivers - An array of drivers.
 * @param {Function} driverSelector - A function that selects and returns a driver from the array.
 * @returns The selected driver.
 */
function selectDifferentDrivers(drivers, driverSelector) {
  return driverSelector(drivers);
}
