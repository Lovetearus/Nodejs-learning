function route(pathname, handle) {
    console.log("Message for router " + pathname)
    if (typeof handle[pathname] === 'function') {
        return handle[pathname]()
    } else {
        console.log("404 error!")
        return "404 error"
    }
}
exports.route = route