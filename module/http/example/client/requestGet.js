const http = require('http')

const options = {
    protocol: 'http:',
    hostname: 'id.qq.com',
    port: '80',
    path: '/',
    method: 'GET'
}

const client = http.request(options, (res) => {
    let data = ''
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
        data += chunk
    })
    res.on('end', () => {
        console.log(data)
    })
})
// const client = http.get('http://id.qq.com', (res) => {
//     let data = ''
//     res.setEncoding('utf8')
//     res.on('data', (chunk) => {
//         data += chunk
//     })
//     res.on('end', () => {
//         console.log(data)
//     })
// })

client.end()
