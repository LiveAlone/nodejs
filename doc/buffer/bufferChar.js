const Buffer = require("buffer").Buffer;

const buf = Buffer.from('hel', 'utf8');
console.log(buf.length);

// Prints: 68656c6c6f20776f726c64
console.log(buf.toString('hex'));

// Prints: aGVsbG8gd29ybGQ=
console.log(buf.toString('base64'));
