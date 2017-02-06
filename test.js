var b = new ArrayBuffer(4);
var v1 = new Uint8Array(b);
var buf = Buffer.from(b)
console.log('first, typeArray: ', v1) // first, typeArray:  Uint8Array [ 0, 0, 0, 0 ]
console.log('first, Buffer: ', buf) // first, Buffer:  <Buffer 00 00 00 00>
v1[0] = 12
console.log('second, typeArray: ', v1) // second, typeArray:  Uint8Array [ 12, 0, 0, 0 ]
console.log('second, Buffer: ', buf) // second, Buffer:  <Buffer 0c 00 00 00>