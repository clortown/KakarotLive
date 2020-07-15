// Make connection
const socket = io.connect('http://localhost:8080/');
// (this is the front end socket, it's different)

// Query DOM
const message = document.getElementById('message');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');

// Emit events
// Emit events
btn.addEventListener('click', function () {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
});

// Listen for events
socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});