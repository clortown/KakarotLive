var express = require('express');
var socket = require('socket.io');
// The socket here is the server side one, different from the socket in chat.js

// App setup
var app = express();
var server = app.listen(8080, function(){
    console.log('listening to requests at 192.168.1.104:8080');
});

// Static files
app.use(express.static('public'));

// Socket setup
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id); // If this logs, chat.js made socket connection

    // Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });

});