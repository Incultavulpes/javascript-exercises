const sumAll = function(lowerBound, upperBound) {
    let sum = 0;
    let bufferTempTrueUpper = 0;
    let bufferTempTrueLower = 0;
    if (upperBound < 0 || lowerBound < 0) {
        sum = "ERROR";
    } else if (typeof upperBound != "number" || typeof lowerBound != "number") {
        sum = "ERROR";
    } else {
        if (upperBound < lowerBound) {
            bufferTempTrueLower = upperBound;
            bufferTempTrueUpper = lowerBound;
            upperBound = bufferTempTrueUpper;
            lowerBound = bufferTempTrueLower;
        }
        for (let i = lowerBound; i <= upperBound; i++) {
            sum += i;
        }   
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
