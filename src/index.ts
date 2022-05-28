// need to assign a type to the variable
let id: number = 5;
let company: string = "Belltron 3030";
let isPublished: boolean = true;
// any type can be any type of value
let x: any = "hello";

x = true;

let age: number;
age = 20;

let ids: number[] = [1, 2, 3, 4, 5];
// will not work
// ids.push("Hello")

// Will work
let arr: any[] = [1, true, "hello"];

// Tuple
let person: [number, string, boolean] = [1, "Chris", false];

// Tuple array
let employee: [number, string][];
employee = [
  [1, "Chris"],
  [2, "Brad"],
  [1, "John"],
];

// Union allow to different types of values
let pid: string | number;
pid = 22;

// Enum.  If first value is 1, then the next value will be 2, and so on
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// Objects
type User = {
  id: number
  name: string
}

const user = {
  id: 1,
  name: "Chris",
};

// Type Assertion 
let cid : any = "1";
// let customerId = <number>cid
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
} 

// Void function
function log(message: string | number): void {
  console.log(message);
}

// Interfaces, use over a type
interface UserInterface {
  readonly id: number
  name: string
  age?:  number
}

const user1: UserInterface = {
  id: 1,
  name: "Chris",
};

type Point = number | string
const p1: Point = 1;

// will not reassign a variable because it is of a different type
// id = '5';
