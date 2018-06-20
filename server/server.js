let http = require('http')
let url = require('url')

function start(route, handle) {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname
        console.log("Recieved the message from " + pathname)
        let content = route(pathname, handle)
        response.writeHead(200, { "Content-Type": "text/plain" })
        response.write(content)
        response.end()

    }

    let server = http.createServer(onRequest)
    server.listen(3000)
    console.log("Server is starting...")
}
exports.start = start