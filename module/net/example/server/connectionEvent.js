const net = require('net')
const PORT = 3000
const HOST = 'localhost'
const noop = () => {}

const server = net.createServer((socket) => {
    socket.write('1. connection 触发 \n')
})

server.on('connection', (socket) => {
    socket.end('2. connection 触发 \n')
})

server.listen(PORT, HOST)
