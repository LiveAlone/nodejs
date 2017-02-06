const util = require('util');
const arr = Array(10);

console.log(arr); // logs the truncated array
// Item 限定显示的数量信息
util.inspect.defaultOptions.maxArrayLength = 5;
console.log(arr); // logs the full array