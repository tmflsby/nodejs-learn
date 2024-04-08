const http = require('http')

const server = http.createServer((req, res) => {
    // res.end('ok')

    // 设置状态码、状态描述信息、响应主体
    res.writeHead(200, 'ok', {
        'Content-Type': 'text/plain'
    })
    res.setHeader('Content-Type', 'text/html')
    res.end('hello')
})

server.listen(3000)
