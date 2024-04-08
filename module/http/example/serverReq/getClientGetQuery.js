const http = require('http')
const url = require('url')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    const urlObj = url.parse(req.url)
    const query = urlObj.query
    const queryObj = querystring.parse(query)

    console.log(query)
    console.log(queryObj)
    // console.log(new URL(`http://localhost:3000${req.url}`))

    res.end('ok')
})

server.listen(3000)
