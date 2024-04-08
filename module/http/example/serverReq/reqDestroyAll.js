const http = require('http')

const server = http.createServer((req, res) => {
    console.log('服务端：收到客户端请求')

    res.flushHeaders()
    // req.destroy(new Error('测试destroy'))

    req.on('error', (err) => {
        console.log('服务端：req error:' + err.message)
    })

    req.socket.on('error', (err) => {
        console.log('服务端：req socket error:' + err.message)
    })
})

server.on('error', (err) => {
    console.log('服务端：server error:' + err.message)
})

server.listen(3000, () => {
    const client = http.get('http://localhost:3000/aborted', (res) => {
        console.log('客户端：收到服务端响应')

        res.destroy(new Error('fuck'))

        res.on('error', () => {
            console.log('客户端：req error触发！')
        })
    })

    client.on('error', (err) => {
        console.log('客户端：client error触发！' + err.message)
    })
})
