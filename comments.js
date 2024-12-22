// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');

// Configure the server to serve up files in the "public" folder
var server = http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;
  fs.readFile(__dirname + path, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});

// Listen on port 3000, IP defaults to