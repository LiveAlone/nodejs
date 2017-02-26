// let {stat} = require('fs');
//
// console.log(stat);
//
// // 类似的生成效果, 编译时刻 load fs  模块数据内容
//
// let _fs = require('fs');
// console.log(_fs.stat);

// es6 静态编译时刻 引用 转换
// import { stat, exists, readFile } from 'fs';
// console.log(stat);