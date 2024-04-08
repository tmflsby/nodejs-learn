const http = require('http')

const server = http.createServer((req, res) => {
    console.log('1、收到客户端请求：' + req.url)

    req.on('aborted', () => {
        console.log('2、客户端请求aborted')
    })

    req.on('close', () => {
        console.log('3、客户端请求close')
    })

    // res.end('ok')  故意不返回，等着客户端中断请求
})

server.listen(3000, () => {
    const client = http.get('http://localhost:3000/aborted')
    setTimeout(() => {
        client.abort() // 故意延迟100ms，确保请求发出
    }, 100)
})
