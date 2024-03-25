const removeFromArray = function(arrayIntro, ...theArgs) {
    for (let argument of theArgs) {
        arrayIntro = removeBasicFromArray(arrayIntro, argument);
    }
    return arrayIntro;
};

function removeBasicFromArray (arrayIntro, arrayElementRemove) {
    let count = 0;
    for (let i = 0; i < arrayIntro.length; i++) {
        if (arrayIntro[i - count] === arrayElementRemove) {
            arrayIntro.splice(i - count, 1);
            count++;
        }
    }
    return arrayIntro;
}

// Do not edit below this line
module.exports = removeFromArray;
