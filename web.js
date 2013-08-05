var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var str = fs.readFileSync('index.html');
var buffer = new Buffer(str);

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
