"use strict";
// need to assign a type to the variable
let id = 5;
let company = "Belltron 3030";
let isPublished = true;
// any type can be any type of value
let x = "hello";
x = true;
let age;
age = 20;
let ids = [1, 2, 3, 4, 5];
// will not work
// ids.push("Hello")
// Will work
let arr = [1, true, "hello"];
// Tuple
let person = [1, "Chris", false];
// Tuple array
let employee;
employee = [
    [1, "Chris"],
    [2, "Brad"],
    [1, "John"],
];
// Union allow to different types of values
let pid;
pid = 22;
// Enum.  If first value is 1, then the next value will be 2, and so on
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "Chris",
};
// Type Assertion 
let cid = "1";
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void function
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "Chris",
};
const p1 = 1;
// will not reassign a variable because it is of a different type
// id = '5';
