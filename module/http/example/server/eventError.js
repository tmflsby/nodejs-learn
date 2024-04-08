const http = require('http')

const PORT = 3000

const noop = () => {}

const svr = http.createServer(noop)
const anotherSvr = http.createServer(noop)

anotherSvr.on('error', (e) => {
    console.error('出错了！' + e.message)
})

svr.listen(PORT, () => {
    anotherSvr.listen(PORT)
})
