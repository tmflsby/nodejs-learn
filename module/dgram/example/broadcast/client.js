const dgram = require('dgram');
const client = dgram.createSocket('udp4');
const msg = Buffer.from('Hello World');
const PORT = 33333
const HOST = '255.255.255.255'

client.bind(() => {
  client.setBroadcast(true)
  client.send(msg, PORT, HOST, (err) => {
    if (err) throw err
    console.log('UDP client closed')
    client.close()
  })
})
