var http = require('http');
var html = require('fs').readFileSync('index.html');

var server = http.createServer(function(request, response) {
    if(request.url === '/api') {
        response.writeHead(200, {'Content-Type': 'application/json'});
        var multiplicationTable = [];
        for (var i = 1; i <= 12; i++) {
            var row = [];
            for (var j = 1; j <= 12; j++) {
                row.push(i * j);
            }
            multiplicationTable.push(row);
        }
        response.end(JSON.stringify(multiplicationTable));
        return;
    }
    
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(html);
})

server.listen(8000);