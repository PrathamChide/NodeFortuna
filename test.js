// What is IIFE -> Immediately Invoked Function Expression

//Common JS

// (function abc() {
//   //function expression
//   console.log("Hi potato");
//   //This will not execute
// });

// (function def() {
//   //function expression
//   console.log("Hi potato");
// })();
// (function (exports, require, module, __filename, __dirname) {
export var a = 23;
export var b = 44;

function abc() {
  console.log("Hello World");
}

function xyz() {
  console.log("This is xyz");
}

//Default Export
export default abc;

//Named Export
export { xyz };

// console.log(__dirname);
// console.log(__filename);
// exports.abc = abc;
// exports.xyz = xyz;
// })();
