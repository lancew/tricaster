var net = require('net');

var client = new net.Socket();
client.connect({port: '5951', host:'192.168.2.80'}, function() {
	console.log('Connected');
	client.write("<shortcut name='v7_b_row_named_input' value='3' />\n<shortcut name='v7_auto'/>\n" );
	client.destroy();
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});

client.on('error', function(err) {
   console.log(err)
})
