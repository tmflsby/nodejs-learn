const http = require('http')

const PORT = 3000
let requestIndex = 0
let connectionIndex = 0

const server = http.createServer((req, res) => {
    console.log('keep-alive: ' + res.shouldKeepAlive)
    res.end('ok')
})

server.on('request', (req, res) => {
    requestIndex++
    console.log('request event: 第'+ requestIndex +'个请求！')
})

server.on('connection', (socket) => {
    connectionIndex++
    console.log('connection event: 第'+ connectionIndex +'个请求！')
})

server.listen(PORT)



/**
 * 分割线
 * 客户端相关代码
 * */
const visit = () => {
    const keepAliveAgent = new http.Agent({
        keepAlive: true,
        keepAliveMsecs: 3000
    })
    const options = {
        method: 'GET',
        hostname: 'localhost',
        port: PORT,
        path: '/',
        agent: keepAliveAgent
    }
    const request = http.request(options, () => {
        console.log('back')
    })
    request.on('error', (err) => {
        console.log(err)
    })
}

const runClientRequest = () => {
    for (let i = 0; i < 3; i++) {
        visit()
    }
    setTimeout(() => {
        visit()
    }, 4000)
}

runClientRequest()
