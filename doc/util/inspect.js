const util = require('util')

// inspect 查看Object 对应的内部信息内容
console.log(util.inspect(util, {showHidden: true, depth: null, colors: true}));
