const repeatString = function(stringIntro, numberC) {
    let bufferString = "";
    if (numberC >= 0) {
        for (let i = 0; i < numberC; i++) {
            bufferString += stringIntro;
        }
    } else {
        bufferString = "ERROR";
    }
    return bufferString;
};

// Do not edit below this line
module.exports = repeatString;
