// map content
// let map = new Map([
//   [1, 'one'],
//   [2, 'two'],
//   [3, 'three'],
// ]);
// console.log(map);
// let arr = [...map.keys()]; // [1, 2, 3]
// console.log(arr);

// var go = function*(){
//   yield 1;
//   yield 2;
//   yield 3;
// };
// console.log([...go()]); // [1, 2, 3]

// function name content
// const baz = function bar(){};
// console.log(baz.name);

// console.log([1,3,5,6,3,1,23,51,23,,1,23,6,12,3].sort((a,b)=>a-b));
// console.log([1,3,5,6,3,1,23,51,23,,1,23,6,12,3].sort((a,b)=>b-a));

// function Timer() {
//   this.s1 = 0;
//   this.s2 = 0;
//   // 箭头函数
//   setInterval(() => this.s1++, 1000);
//   // 普通函数
//   setInterval(function () {
//     this.s2++;
//   }, 1000);
// }
// var timer = new Timer();
// setTimeout(() => console.log('s1: ', timer.s1), 3100);
// setTimeout(() => console.log('s2: ', timer.s2), 3100);

