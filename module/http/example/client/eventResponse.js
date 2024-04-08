const http = require('http')

const url = 'http://id.qq.com/'

const client = http.get(url, (res) => {
    console.log('1. response event')
})

client.on('response', (response) => {
    console.log('2. response event')
})

client.end()
