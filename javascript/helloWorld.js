#!/usr/bin/env node
'use strict';
// Putting `'use strict';` at the beginning of a file or function tells
// the JavaScript interpreter to throw errors instead of trying to
// ignore certain minor syntax errors. Always use `'use strict';`.

// Instead of `import`ing in JavaScript you use the `require` function.
// This looks for `fizzBuzz.js` in the same directory as this file, and
// takes an object called `module.exports` from `fizzBuzz.js`. This is
// then set to `fizzBuzz` in the current file.
var fizzBuzz = require('./fizzBuzz');


// In JavaScript you use the `var` keyword to declare a variable.
// This variable happens to be a function. Also it is a common
// convention to name variables using camelCase.
// Also, blocks of code are marked off with `{}`.
var fiveTimes = function(string) {
    // The basic way to loop in JavaScript looks like this. Basically
    // what this says is: create a variable called `i` which starts out
    // as `0`. Stop looping if `i` is greater than or equal to five.
    // After each loop, do `i++` which increments `i` to be one number
    // more than before.
    for (var i = 0; i < 5; i++) {
        // In JavaScript you print things with `console.log(thing)`.
        // Also, most lines need to end with a `;`.
        console.log(string);
    }
};


// In JavaScript lists are called `Arrays`, but for the most part they
// are very similar to Python lists.
var fiveTimesArray = function(x) {
    var z = [];
    for (var i = 0; i < 5; i++) {
        // To append to an array in JavaScript you do this:
        z.push(x);
    }
    return z;
};


// In JavaScript dictionaries are called `Objects`. An object is
// actually very different from a Python dictionary, but can basically
// do anything a dictionary can do, and more.
var fiveTimesObject = function(x) {
    var n = {}
    for (var i = 0; i < 5; i++) {
        // In JavaScript a number can be changed to a string with
        // Number.toString().
        n[i.toString()] = x
    }
    return n;
};


// Using a `main()` function is much less common in JavaScript than in
// Python, but it can be accomplished (among other ways) like this:
var main = function() {
    // With the exception of the `var` keyword and the `;` at the end
    // of lines this section is pretty much exactly like Python.
    var x = 'Hello World!';
    fiveTimes(7);
    fiveTimes(x);
    var y = 'butt';
    fiveTimes(y);
    var b = fiveTimesArray('fart');
    b[2] = 'boner';
    console.log(b);
    var c = fiveTimesObject('shart');
    c['3'] = 'booger';
    console.log(c);
    console.log(fizzBuzz(1000));
};


// In JavaScript there is a difference between `==` and `===`.
if (require.main === module) {
    main();
}
