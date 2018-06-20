let http = require('http')

function start() {

    let server = http.createServer(function(request, response) {
        console.log("Recieved the message!")
        response.writeHead(200, { "Content-Type": "text/plain" })
        response.write('hello world ')
        response.end()
    })
    server.listen(3000)
    console.log("Server is starting...")
}
exports.start = start