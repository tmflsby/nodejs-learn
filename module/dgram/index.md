## 模块概览

dgram模块是对UDP socket的一层封装，相对net模块简单很多，下面看例子。

## UDP客户端 vs UDP服务端

首先，启动UDP server，监听来自端口33333的请求。

**server.js**

```js
// 例子：UDP服务端
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
```


然后，创建UDP socket，向端口33333发送请求。

**client.js**

```js
// 例子：UDP客户端
const PORT = 33333
const HOST = '127.0.0.1'

const dgram = require('dgram')
const message = Buffer.from('Hello World')

const client = dgram.createSocket('udp4')

client.send(message, PORT, HOST, (error, bytes) => {
  if (error) throw error
  console.log(`${bytes} bytes sent`)
  client.close()
})
```

运行 server.js。

```bash
node server.js
```

运行 client.js。

```bash
11 bytes sent
```

服务端打印日志如下

```bash
server listening 127.0.0.1:33333
server got: Hello World from 127.0.0.1:56411
```

## 广播

通过dgram实现广播功能很简单，服务端代码如下。

```js
const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const PORT = 33333

server.on('listening', (msg, rinfo) => {
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(PORT);
```

接着创建客户端，向地址'255.255.255.255:33333'进行广播。

```js
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

```

运行程序，最终服务端打印日志如下

```bash
node server.js 
server got Hello World from: 10.7.6.19:57376
```

## 相关链接

https://nodejs.org/api/dgram.html
