const util = require('util');
const debuglog = util.debuglog('foo');

//console.debug("console debug info");
// console.info("console info info");
// console.warn("console warn info");
// console.error("console error info");
// console.log("console logger info");

// debug mode start 设置对应的环境变量, output Title
// 可以自定义 debug 不同的日志级别， 在环境变量中指定对应的数据内容
// λ set NODE_DEBUG=foo && node debuglog.js
// FOO 64920: debug log method info hello world [123]
debuglog('debug log method info hello world [%d]', 123);
