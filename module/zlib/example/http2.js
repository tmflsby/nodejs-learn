const http = require('http')
const zlib = require('zlib')
const fs = require('fs')
const filePath = './extra/fileForGzip.html'

const server = http.createServer((req, res) => {
    const acceptEncoding = req.headers['accept-encoding']
    const gzip = zlib.createGzip()
    if (acceptEncoding.indexOf('gzip') !== -1) {
        res.writeHead(200, {
            'Content-Encoding': 'gzip'
        })
        fs.createReadStream(filePath).pipe(gzip).pipe(res)
    } else {
        fs.createReadStream(filePath).pipe(res)
    }
})

server.listen('3000')
