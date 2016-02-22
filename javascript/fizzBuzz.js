#!/usr/bin/env node
'use strict';


var fizzBuzz = function(limit) {
    var x = 0;
    // Here we begin with `i` set to one, to get the same effect that
    // we had in the Python version with `range(1, limit)`.
    for (var i = 1; i < limit; i++){
        // In JavaScript the operands of an `if` statement have to go
        // between `()`. Also JavaScript uses `&&` instead of Python's
        // `and` and `||` instead of Python's `or`.
        if (divisibleBy3(i) || divisibleBy5(i)) {
            x += i;
        }
    }
    return x;
};


var divisibleBy3 = function (x) {
    var n = x % 3;
    return n === 0;
};


var divisibleBy5 = function(y) {
    var n = y % 5;
    return n === 0;
};


// Here we make fizzBuzz the `module.exports` of this module, or file,
// which means that if this file is `require`d somewhere else, you will
// get the `fizzBuzz` function there.
module.exports = fizzBuzz;
