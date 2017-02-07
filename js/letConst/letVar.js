// demo1
// {
//     var a = 10;
//     let b = 100;
// }
// console.log(a);

// demo2 error b not definition
// console.log(b);

// demo3
// for(let i=0; i<10; i++){}
// console.log(i);

// demo 4
// var a = [];
// for (var i=0; i<10; i++){
//     a[i] = function(){
//         console.log(i);
//     };
// }
// a[6](); 
// print 10 

// demo 5
// var a = [];
// for (let i=0; i<10; i++){
//     a[i] = function(){
//         console.log(i);
//     };
// }
// a[6](); 
// print 10 

// var 变量提升方式
// console.log(a);
// var a = 100; // undefined
// let a = 100; // error

// var tmp = 123;
// if(true){
//     tmp = 'abc';
//     console.log(tmp);

//     let tmp; // TDZ Error
//     console.log(tmp);

//     tmp = 'abc';
//     console.log(tmp);
// }

// function bar(x = 2, y = x){
//      return [x, y];
// }
// console.log(bar());

// function testVarDeclare(arg){
//     // let a = 10;
//     // let a = 100;
//     // var a = 100;
//     //let arg; // Error
//     {
//         let arg = 100; // OK
//     }
// }

// var tmp = new Date();
// function f() {
//   console.log(tmp);
// //   if (false) {
// //     var tmp = "hello world";
// //   }
// }
// f(); // undefined

// 'use strict'
// function f(){
//     console.log('i am outside');
// }
// if (true){
//     function f(){
//         console.log("i am inside");
//     }
//     f();
// }
// f();

// let x = do {
//   let t = f();
//   t * t + 1;
// };
// console.log(x);