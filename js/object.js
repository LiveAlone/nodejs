// let obj = {
//   ['h' + 'ello']() {
//     return 'hi';
//   }
// };
// console.log(obj.hello()); // hi

// var target = { a: { b: 'c', d: 'e' } };
// var source = { a: { b: 'hello' } };
// console.log(Object.assign(target, source) === target);
// console.log(target);
// console.log(source);
// source.a.b = 'test update content object';
// console.log(target);

// var x = 1;
// var y = 2;
// console.log({x, y});

// let proto = {};
// let obj = { x: 10 };
// Object.setPrototypeOf(obj, proto);
// proto.y = 20;
// proto.z = 40;
// console.log(obj.x);
// console.log(obj.y);
// console.log(obj.z);

// let obj = { a: 1, b: 2, c: 3 };
// for (let key of Object.keys(obj)) {
//   console.log(key); // 'a', 'b', 'c'
// }
// for (let value of Object.values(obj)) {
//   console.log(value); // 1, 2, 3
// }
// for (let [key, value] of Object.entries(obj)) {
//   console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
// }