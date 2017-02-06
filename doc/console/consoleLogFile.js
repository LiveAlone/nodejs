const fs = require('fs');
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
const Console = console.Console;
// custom simple logger
const logger = new Console(output, errorOutput);

// use it like console
const count = 5;
logger.log('count: %d', count);
// in stdout.log: count 5

logger.error("error info output");