//your JS code here. If required.
function daysOfAYear(year) {
    // Check if the year is a leap year
    // Leap year is divisible by 4, but century years must be divisible by 400
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    // Return the number of days based on leap year or not
    return isLeapYear ? 366 : 365;
}

// Examples
console.log(daysOfAYear(2022));  // Output: 365
console.log(daysOfAYear(2024));  // Output: 366
console.log(daysOfAYear(1900));  // Output: 365
console.log(daysOfAYear(2000));  // Output: 366
