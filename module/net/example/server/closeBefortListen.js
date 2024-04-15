const net = require('net')

const PORT = 3000
const HOST = 'localhost'
const noop = () => {}

const server = net.createServer(noop)

// 没有正式启动请求监听
// server.listen(PORT, HOST)

server.on('close', () => {
    console.log('close事件：服务端关闭')
})

server.on('error', (err) => {
    console.log('error事件：服务端异常：' + err.message)
})

server.close((err) => {
    if (err) {
        console.log('close回调：服务端异常：' + err.message)
    } else {
        console.log('close回调：服务端正常关闭')
    }
})


