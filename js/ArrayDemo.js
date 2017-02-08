console.log('array demo content test');

// let arrayLike = {
//     '0': 'a',
//     '1': 'b',
//     '2': 'c',
//     length: 3
// };
// console.log(arrayLike);
// // ES5的写法
// var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
// console.log(arr1);
// // ES6的写法
// let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
// console.log(arr2);

// let hello = Array.from('hello');
// console.log(hello);

// let namesSet = new Set(['a', 'b']);
// console.log(Array.from(namesSet));

// console.log(Array.from({length: 2}));
// console.log(Array.from({length:2}, (x) => 'content'));

// console.log(Array.of(1,2,3,4));

// console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));

// console.log([1,2,3,4,5].find((n) => n > 2));
// console.log([1,2,3,4,5].fill(123));

// foreach jump null value content(not jump undefined)
// var arr = new Array(5);
// arr[0] = 1;
// arr[1] = undefined;
// arr[3] = 4;
// console.log(arr);
// console.log(arr[1]);
// arr.forEach((f)=>{
//     console.log(f);
// });

