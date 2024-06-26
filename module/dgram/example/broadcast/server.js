const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const PORT = 33333

server.on('message', (msg, rinfo) => {
  console.log(`server got ${msg} from: ${rinfo.address}:${rinfo.port}`);
});

server.bind(PORT);
