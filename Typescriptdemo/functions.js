"use strict";
function sum(a, b, c) {
    return c ? a + b + c : a + b;
}
// console.log("sum", sum(2, 3));
// console.log("sum", sum(2, 3, 4));
const sub = (a, b, c = 10) => a - b - c;
// console.log("sub", sub(3, 2));
// console.log("sub", sub(3, 2, 4));
const mul = function (a, b) {
    return a * b;
};
function sum2(a, b, ...c) {
    let result = a + b;
    c.forEach((num) => (result += num));
    return result;
}
let numbers = [2, 3, 4, 5, 6];
// console.log("sum2", sum2(10, 30, 2, 3, 4, 5, 6));
// console.log("sum2", sum2(10, 30, ...numbers));
function sum3(a, b, ...c) {
    return c.reduce((acc, num) => acc + num, a + b);
}
let numbers2 = [2, 3, 4, 5, 6];
// console.log("sum3", sum3(10, 30, 2, 3, 4, 5, 6));
// console.log("sum3", sum3(10, 30, ...numbers2));
// console.log("sum3", sum3(10, 30, ...numbers2, 100, 200, 300));
// console.log("sum3", sum3(10, 30, 100, 200, 300, ...[2, 3, 4, 5, 6]));
//------------------ 4. generic function ------------------
function getItems(items) {
    return new Array().join(",").split(",").map((item) => item);
}
console.log(getItems(["john", "doe"]));
console.log(getItems([1, 2, 3, 4, 5, 6]));
