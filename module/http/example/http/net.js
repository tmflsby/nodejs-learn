const net = require('net')

const server = net.createServer((socket) => {
    console.log('Connected:' + socket.remoteAddress + ':' + socket.remotePort)

    socket.on('data', (data) => {
        console.log('DATA ' + socket.remoteAddress + ': ' + data)
        console.log('Data is:' + data)

        socket.write('Data from you is "' + data + '"')
    })

    socket.on('close', () => {
        console.log('CLOSED: ' + socket.remoteAddress + ' ' + socket.remotePort)
    })
})

server.listen(8989, 'localhost')

console.log(server instanceof net.Server)
