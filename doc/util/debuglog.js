const util = require('util');
const debuglog = util.debuglog('foo');

//console.debug("console debug info");
// console.info("console info info");
// console.warn("console warn info");
// console.error("console error info");
// console.log("console logger info");

debuglog('debug log method info hello world [%d]', 123);
