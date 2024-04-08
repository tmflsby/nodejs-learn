const http = require('http')

const server = http.createServer((req, res) => {
    console.log('1、客户端请求url：' + req.url)
    console.log('2、http版本：' + req.httpVersion)
    console.log('3、http请求方法：' + req.method)
    console.log('4、http请求头：' + JSON.stringify(req.headers))

    // res.end('ok')
    res.writeHead(200, {
        'content-type': 'text/plain'
    })
    res.end('from server')
})

const client = http.get('http://localhost:3000', (res) => {
    console.log('1、http版本：' + res.httpVersion)
    console.log('2、返回状态码：' + res.statusCode)
    console.log('3、返回状态描述信息：' + res.statusMessage)
    console.log('4、返回正文：')

    res.pipe(process.stdout)
})

server.listen(3000)
