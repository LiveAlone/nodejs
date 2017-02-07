// let [a, b, c] = [1, 2, 3];
// console.log(a);
// console.log(b);
// console.log(c);

// let [foo, [[bar], baz]] = [1, [[2], 3]];
// console.log(foo); // 1
// console.log(bar); // 2
// console.log(baz); // 3

// let [ , , third] = ["foo", "bar", "baz"];
// console.log(third) // "baz"

// let [x, , y] = [1, 2, 3];
// console.log(x); // 1
// console.log(y); // 3

// let [head, ...tail] = [1, 2, 3, 4];
// console.log(head); // 1
// console.log(tail); // [2, 3, 4]

// let [x, y, ...z] = ['a'];
// console.log(x); // "a"
// console.log(y); // undefined
// console.log(z); // []

// let { bar, foo } = { foo: "aaa", bar: "bbb" };
// console.log(foo); // "aaa"
// console.log(bar); // "bbb"

// let { baz } = { foo: "aaa", bar: "bbb" };
// console.log(baz); // undefined

// map 关系key 映射关系
// let { foo: baz } = { foo: "aaa", bar: "bbb" };
// console.log(baz); // "aaa"

// var {x:y = 3} = {};
// console.log(y); // 3

// var {x:y = 3} = {x: 5};
// console.log(y); // 5

// function move({x = 0, y = 0} = {}) {
//   return [x, y];
// }

// console.log(move({x: 3, y: 8})); // [3, 8]
// console.log(move({x: 3})); // [3, 0]
// console.log(move({})); // [0, 0]
// console.log(move()); // [0, 0]

