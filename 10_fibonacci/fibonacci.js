const fibonacci = function(bound) {
    // Write the function with a bound
    if (bound == 0) {
        return 0;
    } else if (bound < 0) {
        return "OOPS";
    }
    let fibo = [1];
    for (let i = 1; i <= bound; i++) {
        if (fibo.length === 1) {
            fibo.push(1);
        } else {
            fibo.push(fibo[i - 2] + fibo[i -1]);
        }
    }
    return fibo[bound - 1];
};

// Do not edit below this line
module.exports = fibonacci;
