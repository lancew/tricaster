var net = require('net');

var client = new net.Socket();
client.connect({port: '5951', host:'192.168.2.80'}, function() {
	console.log('Connected');
	client.write("<shortcut name='main_b_row_named_input' value='v2' />\n<shortcut name='main_auto'/>\n" );
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
