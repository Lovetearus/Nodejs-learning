let server = require('./server')
let router = require("./router")
let requestHandle = require('./handleRequest')
let handle = {
        "/": requestHandle.start,
        "/start": requestHandle.start,
        "/upload": requestHandle.upload
    }
    // handle['/'] = requestHandle.start
    // handle['/start'] = requestHandle.start
    // handle['/upload'] = requestHandle.upload

server.start(router.route, handle)
console.log(handle)