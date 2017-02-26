var fs = require('fs')
var data = fs.readFileSync('localFile.txt');
console.log(data.toString())
console.log('finish all content');