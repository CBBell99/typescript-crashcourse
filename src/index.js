// need to assign a type to the variable
var id = 5;
var company = "Belltron 3030";
var isPublished = true;
// any type can be any type of value
var x = "hello";
x = true;
var age;
age = 20;
var ids = [1, 2, 3, 4, 5];
// will not work
// ids.push("Hello")
// Will work
var arr = [1, true, "hello"];
// Tuple
var person = [1, "Chris", false];
// Tuple array
var employee;
employee = [
    [1, "Chris"],
    [2, "Brad"],
    [1, "John"],
];
// Union allow to different types of values
var pid;
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
var user = {
    id: 1,
    name: "Chris"
};
// Type Assertion 
var cid = "1";
// let customerId = <number>cid
var customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void function
function log(message) {
    console.log(message);
}
var user1 = {
    id: 1,
    name: "Chris"
};
var add = function (x, y) { return x + y; };
// Classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    return Person;
}());
var brad = new Person(1, "Brad");
console.log(brad.name);
