// let s = Symbol();
// console.log(typeof s);

// let s1 = Symbol('symbol1');
// let s2 = Symbol(200);
// console.log(s1);
// console.log(s2);

// let obj = {
//     toString(){
//         return "abc";
//     }
// }
// let s2 = Symbol(obj);
// console.log(s2);

// // 没有参数的情况
// var s1 = Symbol();
// var s2 = Symbol();
// console.log(s1 === s2); // false

// // 有参数的情况
// var s1 = Symbol('foo');
// var s2 = Symbol('foo');
// console.log(s1 === s2); // false

// mysymbol 定义符号的类型
// var mySymbol = Symbol();
// 第一种写法
// var a = {};
// a[mySymbol] = 'Hello!';
// console.log(a[mySymbol]);
// // 第二种写法
// var a = {
//   [mySymbol]: 'Hello!'
// };
// console.log(a[mySymbol]);

// // 第三种写法
// var a = {};
// Object.defineProperty(a, mySymbol, { value: 'Hello!' });
// console.log(a[mySymbol]);

// a.mySymbol 不是一个Symbol 符号， 而是一个字符串
// var mySymbol = Symbol();
// var a = {};
// a.mySymbol = 'Hello!';
// console.log(a[mySymbol]); // undefined
// console.log(a['mySymbol']); // "Hello!"

// symbol 必须放到 []中
// let s = Symbol();
// let obj = {
//   [s]: function (arg) {
//       console.log(arg);
//   }
// };
// obj[s](123);

// const COLOR_RED    = Symbol();
// const COLOR_GREEN  = Symbol();
// function getComplement(color) {
//   switch (color) {
//     case COLOR_RED:
//       console.log('COLOR_RED');
//       return;
//     case COLOR_GREEN:
//       console.log('COLOR_GREEN');
//       return;
//     default:
//       throw new Error('Undefined color');
//     }
// }
// getComplement(COLOR_GREEN);

// console.log(Symbol.for("foo") === Symbol.for("foo"));
// console.log(Symbol("bar") === Symbol("bar"));

