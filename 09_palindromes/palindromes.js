// We declare the remove function here because of some behavior on part of the hoisting

const remove = function (string) {
    arstring = string.split("");
    arstring = arstring.filter((element) => {
        if (element === ".") {
            return false;
        } else if (element === ",") {
            return false;
        } else if (element === ":") {
            return false;
        } else if (element === ";") {
            return false;
        } else if (element === "!") {
            return false;
        } else if (element === "?") {
            return false;
        } else if (element === " ") {
            return false;
        } else {
            return true;
        }
    });
    return arstring.join("");
};

const palindromes = function (string) {
    let palin = true;
    string = string.toLowerCase();
    string = remove(string);
    arstring = string.split("");
    arstring = arstring.reverse();
    arstring = arstring.join("");
    if (string === arstring) {
        palin = true;
    } else {
        palin = false;
    }
    return palin;
};

// Do not edit below this line
module.exports = palindromes;
