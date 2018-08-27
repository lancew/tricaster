//Lets require/import the HTTP module
var http = require('http');
var net = require('net');
var client = new net.Socket();

//Lets define a port we want to listen to
var PORT=8080;

//We need a function which handles requests and send response
function handleRequest(request, response){
    var string_command;
    switch (request.url){
    case '/me1':
        string_command = '<shortcut name=\'main_b_row_named_input\' value=\'input1\' />\n<shortcut name=\'main_auto\'/>\n';
        break;
    case '/me2':
        string_command = '<shortcut name=\'main_b_row_named_input\' value=\'input2\' />\n<shortcut name=\'main_auto\'/>\n';
        break;
    case '/me3':
        string_command = '<shortcut name=\'main_b_row_named_input\' value=\'input3\' />\n<shortcut name=\'main_auto\'/>\n';
        break;
    case '/me4':
        string_command = '<shortcut name=\'main_b_row_named_input\' value=\'input4\' />\n<shortcut name=\'main_auto\'/>\n';
        break;
    case '/ddr1':
            string_command = '<shortcut name=\'main_b_row_named_input\' value=\'ddr\' />\n<shortcut name=\'main_auto\'/>\n';
            break;
    case '/ddr2':
            string_command = '<shortcut name=\'main_b_row_named_input\' value=\'ddr2\' />\n<shortcut name=\'main_auto\'/>\n';
            break;
    }

    client.connect({port: '5951', host:'192.168.2.80'}, function() {
        if(string_command){
            console.log(string_command);
            client.write(string_command);
        }
        client.destroy();
    });

    client.on('data', function() {
        client.destroy(); // kill client after server's response
    });

    client.on('close', function() {
    });

    client.on('error', function() {
    });

    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    // eslint-disable-next-line no-console
    console.log('Server listening on: http://localhost:%s', PORT);
});
