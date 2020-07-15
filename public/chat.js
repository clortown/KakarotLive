// Make connection
var webSocketHost = location.protocol === 'https:' ? 'wss://' : 'ws://';
var externalIp = $('body').data('external-ip');
var webSocketUri = webSocketHost + externalIp + ':8080';
console.log(webSocketUri);

const socket = io.connect(webSocketUri);
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
socket.on('chat', function (data) {
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});