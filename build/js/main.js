"use strict";
// Literal types
// unchangeable
let myName;
// strictly only the listed names
let userName;
userName = "Bruce";
// functions
const add = (a, b) => {
    return a + b;
};
// console.log(add(4, 5));
// no return
const logMsg = (message) => {
    console.log(message);
};
// logMsg("Hello!");
// logMsg(add(2, 3));
// !== arrow function
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
const division = (d, f) => {
    return d / f;
};
const addition = (t, x) => {
    return t + x;
};
logMsg(multiply(134, 6));
logMsg(division(64, 8));
logMsg(addition(6, 7));
//# sourceMappingURL=main.js.map