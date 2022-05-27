// need to assign a type to the variable
let id: number = 5;
let company: string = "Belltron 3030";
let isPublished: boolean = true;
// any type can be any type of value 
let x : any = "hello";

x = true;

let age: number
age = 20;

let ids: number[]= [1,2,3,4,5];
// will not work
// ids.push("Hello")

// Will work
let arr: any[] = [1,true, "hello"];

// Tuple
let person: [number, string, boolean] = [1, "Chris", false];

// Tuple array
let employee: [number, string][]
employee = [
  [1, "Chris"],
  [2, "Brad"],
  [1, "John"],
]

// will not reassign a variable because it is of a different type
// id = '5';