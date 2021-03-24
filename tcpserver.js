var net = require('net');
var clients = 0;

var server = net.createServer(function(client) {
clients++;
var clientId = clients;
console.log('Client Connected', clientId);

client.on('end', function() {
console.log('Client disconnected:', clientId);
})

client.write('Welcome client: ' + clientId + '\n');
client.pipe(client);

});

server.listen(8000, function() {
console.log('Server Started on port 8000');
})