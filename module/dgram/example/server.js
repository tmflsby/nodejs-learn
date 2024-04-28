const PORT = 33333
const HOST = '127.0.0.1'

const dgram = require('dgram')
const server = dgram.createSocket('udp4')

server.on('listening', () => {
  const address = server.address()
  console.log(`server listening ${address.address}:${address.port}`)
})

server.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`)
})

server.bind(PORT, HOST)
