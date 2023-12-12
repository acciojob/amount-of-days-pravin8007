//your JS code here. If required.
function daysOfAYear(year) {
    // Check if the year is a leap year
    // Leap year is divisible by 4, but century years must be divisible by 400
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    // Return the number of days based on leap year or not
    return isLeapYear ? 366 : 365;
}


alert(daysOfAYear(prompt()));  // Output: 365



