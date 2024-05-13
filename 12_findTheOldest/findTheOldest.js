const findTheOldest = function(arr) {
    // Answer everything
    let ag = arr.map((e) => {
        let reag;
        if (e.yearOfDeath === undefined) {
            oggi = new Date();
            reag = oggi.getFullYear() - e.yearOfBirth;
        } else {
            reag = e.yearOfDeath - e.yearOfBirth;
        }
        return {name: e.name, age: reag};
    });
    orderedag = ag.sort((a, b) => a.age - b.age);
    return orderedag.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
