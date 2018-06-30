let http = require('http')
let url = require('url')
const hostname = '127.0.0.1'
const port = 3000

function start(route, handle) {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname
        console.log(request, response)
        let keys = Object.keys(response)
        for (let el of keys) {
            console.log(el, ": ", response[el])
        }
        console.log("Recieved the message from " + pathname)
        let content = route(pathname, handle)
        response.writeHead(200, { "Content-Type": "text/plain" })
        response.write(content)

        response.end()

    }

    let server = http.createServer(onRequest)
    server.listen(port, hostname, () => {

        console.log(`Server is starting...at http://${hostname}:${port}/`)
    })
}
exports.start = start