var http = require('http');

http.createServer(function (request, response) {
    console.log('request received content');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('hello world server');
}).listen(8888);

console.log('Server running at localhost 8888 port condition')
