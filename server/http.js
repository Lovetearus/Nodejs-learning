let http = require('http')
const url = 'http://www.haorooms.com/post/nodejs_http_getrequest'
http.get(url, (res) => {
    let html = ''
    res.on('data', (data) => {

        html += data
    })
    res.on('end', () => {
        console.log(html)
    })
}).on('error', (e) => {
    console.log(e.message)
})