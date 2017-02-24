// function makeIterator(array) {
//   var nextIndex = 0;
//   return {
//     next: function() {
//       return nextIndex < array.length ?
//         {value: array[nextIndex++], done: false} :
//         {value: undefined, done: true};
//     }
//   };
// }

// var it = makeIterator([1,2,3,4]);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

let arr = ['a','b','c','d'];
let iter = arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());