const http = require('http')

const PORT = 3000
let requestIndex  = 0
let connectionIndex = 0

const server = http.createServer((req, res) => {
    res.end('ok')
})

server.on('request', (req, res) => {
    requestIndex++
    console.log('request event：第' + requestIndex + '个请求！')
})

server.on('connection', (req, res) => {
    connectionIndex++
    console.log('connection event：第' + connectionIndex + '个请求！')
})

server.listen(PORT)
