const reverseString = function(stringIntro) {
    arrayIntro = stringIntro.split("");
    arrayIntro = arrayIntro.reverse();
    stringIntro = arrayIntro.join("");
    return stringIntro;
};

// Do not edit below this line
module.exports = reverseString;
