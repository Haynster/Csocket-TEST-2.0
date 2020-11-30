// prepare and launch socket.io server
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
var behavior = require('./behaviors');
var functions = require('./functions');
var output = {};
console.log(behavior,functions);

// initialization: on start
let local = {};


io.on('connection', function(socket) {
  
  socket.on('disconnect', function(reason) {
  });
  
  socket.on('console input', function(input) {
  });
});

http.listen(port, function() {
  console.log('listening on *:' + port);
});