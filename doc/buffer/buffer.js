const Buffer = require("buffer").Buffer;

// Creates a zero-filled Buffer of length 10.
const buf1 = Buffer.alloc(10);
// console.log(buf1);

// Creates a Buffer of length 10, filled with 0x1.
const buf2 = Buffer.alloc(10, 1);
// console.log(buf2);

// Creates an uninitialized buffer of length 10.
// This is faster than calling Buffer.alloc() but the returned
// Buffer instance might contain old data that needs to be
// overwritten using either fill() or write().
const buf3 = Buffer.allocUnsafe(10);
// console.log(buf3);

// Creates a Buffer containing [0x1, 0x2, 0x3].
const buf4 = Buffer.from([1,2,3,4]);
// console.log(buf4);

// Creates a Buffer containing ASCII bytes [0x74, 0x65, 0x73, 0x74].
const buf5 = Buffer.from('test');
// console.log(buf5);

// Creates a Buffer containing UTF-8 bytes [0x74, 0xc3, 0xa9, 0x73, 0x74].
const buf6 = Buffer.from('tést', 'utf8');
// console.log(buf6);

const buf7 = Buffer.allocUnsafe(10);
// console.log(buf7);
// buf7.fill(0);
// console.log(buf7);
// const buf8 = Buffer.from(buf7);
// console.log(buf8);

// allocate from memory pool
const buf9 = Buffer.allocUnsafeSlow(10);
// pool Size 默认的8192 大小 slow 会延迟内容的分配方式
console.log(Buffer.poolSize);
console.log(buf9.length);
console.log(buf9);