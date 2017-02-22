// function calculate every time
// let x = 99;
// function f(p = x + 1){
//     console.log(p);
// }
// f();
// x = 2016;
// f();

// function object convert
// function foo({x, y = 5} = {}) {
//   console.log(x, y);
// }
// foo({}) // undefined, 5
// foo({x: 1}) // 1, 5
// foo({x: 1, y: 2}) // 1, 2
// foo() // TypeError: Cannot read property 'x' of undefined

// function f(x, y = 5, z) {
//   console.log([x, y, z]);
// }
// f() // [undefined, 5, undefined]
// f(1) // [1, 5, undefined]
// // f(1, ,2) // 报错
// f(1, undefined, 2) // [1, 5, 2]

// // function length
// console.log((function (a) {}).length); // 1
// console.log((function (a = 5) {}).length); // 0
// console.log((function (a, b, c = 5) {}).length); // 2

// param range content 
// var foo = 'outer';
// function bar(func = x => foo) {
//   let foo = 'inner';
//   console.log(func()); // outer
// }
// bar();
// foo = 'outer2Haha';
// bar();

// 对应当前作用域
// var x = 1;
// var z = 100;
// function foo(x, y = function() { x = 100; z = 200; }) {
//   var x = 3;
//   y();
//   console.log(x);
// }
// foo(); // 3
// console.log(x); // 1
// console.log(z); // 200

// function param content
// function throwIfMissing() {
//     console.log('missing param content');
// }
// function foo(mustBeProvided = throwIfMissing()) {
//   return mustBeProvided;
// }
// foo();

// rest param 只能最后yige 参数
// function add(first, ...values) {
//   let sum = 0;
//   for (var val of values) {
//     sum += val;
//   }
//   return sum + first;
// }
// console.log(add(2, 5, 3)); // 10

// ... 与 [] 的逆运算方式
// console.log(...[1, 2, 3])
// // 1 2 3
// console.log(1, ...[2, 3, 4], 5)
// // 1 2 3 4 5

// function f(x, y, z) {
//   console.log([x, y, z]);
// }
// var args = [0, 1, 2];
// f(...args);

// var arr1 = ['a', 'b'];
// var arr2 = ['c'];
// var arr3 = ['d', 'e'];
// console.log(arr1.concat(arr2, arr3));
// console.log([...arr1, ...arr2, ...arr3]);

// 最后一位，否则会报错
// const [first, ...rest] = [1, 2, 3, 4, 5];
// const [first, ...rest] = [];
// const [first, ...rest] = ["foo"];
// console.log(first);
// console.log(rest);
