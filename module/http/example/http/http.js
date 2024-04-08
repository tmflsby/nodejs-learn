const http = require('http')

const server = http.createServer((req, res) => {
    res.end('你访问的地址是：' + req.url)
})

server.listen(3000)

const client = http.get('http://localhost:3000', (res) => {
    res.pipe(process.stdout)
})
