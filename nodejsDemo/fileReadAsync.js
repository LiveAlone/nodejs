var fs = require('fs')
fs.readFile('localFile.txt', function (err, data) {
    console.log(data.toString());
    return;
});
console.log(data);
console.log('over');
