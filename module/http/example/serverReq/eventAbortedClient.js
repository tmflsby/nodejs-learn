const http = require('http')

const server = http.createServer((req, res) => {
    console.log('1、服务端：收到客户端请求')

    res.flushHeaders()
    res.setTimeout(100) // 故意不返回，3000ms后超时
})

server.on('error', () => {})

server.listen(3000, () => {
    const client = http.get('http://localhost:3000/aborted', (res) => {
        console.log('2、客户端：收到服务端响应')

        // res.pipe(process.stdout) 注意这行代码

        res.on('aborted', () => {
            console.log('3、客户端：aborted触发！')
        })

        res.on('close', () => {
            console.log('4、客户端：close触发！')
        })
    })
})
