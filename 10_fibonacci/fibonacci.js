const fibonacci = function(fib) {
    if (fib < 0) return "OOPS";
    if (fib === 0) return 0;

    let firstFib = 1;
    let secondFib = 0;

    for (let i = 2; i <= fib; i++) {
        let current = firstFib + secondFib;
        secondFib = firstFib;
        firstFib = current;
    }

    return firstFib;

};

// Do not edit below this line
module.exports = fibonacci;
