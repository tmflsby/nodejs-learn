const http = require('http')

const server = http.createServer((req, res) => {
    console.log('server: 收到客户端请求')

    req.on('close', () => {
        console.log('server: req close')
    })

    req.socket.on('close', () => {
        console.log('server: req.socket close')
    })

    res.end('ok')
})

server.listen(3000)

const client = http.get('http://localhost:3000/aborted', () => {
    console.log('client: 收到服务端响应')
})
