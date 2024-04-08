const http = require('http')

const PORT = 3000

const server = http.createServer((req, res) => {
    res.end('ok')
})

server.on('connect', (req, socket, head) => {
    console.log('connect事件触发')
    socket.end()
})

server.listen(PORT)
