// Lets require/import the HTTP module
var http = require('http')
var net = require('net')
var client = new net.Socket()

// Lets define a port we want to listen to
var PORT = 8080

// We need a function which handles requests and send response
function handleRequest (request, response) {
  var string_command
  switch (request.url) {
    case '/pgm':
      string_command = '<shortcut name=\'main_b_row_named_input\' value=\'3\' />\n<shortcut name=\'main_auto\'/>\n'
      break
    case '/replay':
      string_command = '<shortcut name=\'main_b_row_named_input\' value=\'ddr1\' />\n<shortcut name=\'main_auto\'/>\n'
      break
    case '/studio':
      string_command = '<shortcut name=\'main_b_row_named_input\' value=\'v8\' />\n<shortcut name=\'main_auto\'/>\n'
      break
    case '/tatami1':
      string_command = '<shortcut name=\'main_b_row_named_input\' value=\'v1\' />\n<shortcut name=\'main_auto\'/>\n'
      break
    case '/tatami2':
      string_command = '<shortcut name=\'main_b_row_named_input\' value=\'v2\' />\n<shortcut name=\'main_auto\'/>\n'
      break
    case '/tatami3':
      string_command = '<shortcut name=\'main_b_row_named_input\' value=\'v3\' />\n<shortcut name=\'main_auto\'/>\n'
      break
    case '/tatami4':
      string_command = '<shortcut name=\'main_b_row_named_input\' value=\'v4\' />\n<shortcut name=\'main_auto\'/>\n'
      break
    case '/bigTatami1':
      string_command = '<shortcut name=\'v7_b_row_named_input\' value=\'6\' />\n<shortcut name=\'v7_auto\'/>\n'
      break
    case '/bigTatami2':
      string_command = '<shortcut name=\'v7_b_row_named_input\' value=\'7\' />\n<shortcut name=\'v7_auto\'/>\n'
      break
    case '/bigTatami3':
      string_command = '<shortcut name=\'v7_b_row_named_input\' value=\'8\' />\n<shortcut name=\'v7_auto\'/>\n'
      break
    case '/bigTatami4':
      string_command = '<shortcut name=\'v7_b_row_named_input\' value=\'9\' />\n<shortcut name=\'v7_auto\'/>\n'
      break
    case '/bigPgm':
      string_command = '<shortcut name=\'v7_b_row_named_input\' value=\'3\' />\n<shortcut name=\'v7_auto\'/>\n'
      break
  }

  client.connect({port: '5951', host: '192.168.2.90'}, function () {
    if (string_command) {
      console.log(string_command)
      client.write(string_command)
    }
    client.destroy()
  })

  client.on('data', function () {
    client.destroy() // kill client after server's response
  })

  client.on('close', function () {
  })

  client.on('error', function () {
  })

  response.end('It Works!! Path Hit: ' + request.url)
}

// Create a server
var server = http.createServer(handleRequest)

// Lets start our server
server.listen(PORT, function () {
    // eslint-disable-next-line no-console
  console.log('Server listening on: http://localhost:%s', PORT)
})
