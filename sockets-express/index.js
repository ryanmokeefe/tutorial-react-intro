var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    // pushes 'chat message to other browsers'
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    })
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3005, function(){
  console.log('listening on *:3005');
});
