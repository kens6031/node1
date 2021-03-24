var net = require('net');
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

var client = net.connect(8000);

rl.question('Enter Text : ', (value) => {
let inp = value;
client.write(inp.toString());
rl.close();
client.end();
});

client.on('data', function(data) {
console.log(data.toString());
});


client.on('end', function() {
console.log('I have disconnected !!!')
});