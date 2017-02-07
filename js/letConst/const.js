// const a = [];
// a.push('Hello'); // 可执行
// // a.length = 0;    // 可执行
// console.log(a);
// // a = ['Dave'];    // 报错

// // const foo = Object.freeze({});
// // const foo = {};
// // 常规模式时，下面一行不起作用；
// // 严格模式时，该行会报错
// foo.prop = 123;
// console.log(foo);

// // 冻结对应的Object 的属性操作方式
// var constantize = (obj) => {
//   Object.freeze(obj);
//   Object.keys(obj).forEach( (key, value) => {
//     if ( typeof obj[key] === 'object' ) {
//       constantize( obj[key] );
//     }
//   });
// };

