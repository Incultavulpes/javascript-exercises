const leapYears = function(yearNumber) {
    let realLeapYear = true;
    if ((yearNumber % 4) === 0) {
        if ((yearNumber % 100) !== 0 || (((yearNumber % 100) === 0) && ((yearNumber % 400) === 0))) {
            realLeapYear = true;
        } else {
            realLeapYear = false;
        }
    } else {
        realLeapYear = false;
    }
    return realLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
