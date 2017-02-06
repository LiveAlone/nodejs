const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// myEmitter.on('event', function(a,b){
//     console.log(a, b, this);
// });

// myEmitter.on('event', (a,b) => {
//     // Prints: a b {}
//     console.log(a, b, this);
// });

// async content 异步函数的调用方式
myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously');
  });
});

myEmitter.emit('event', 1, 2);