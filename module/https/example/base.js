const https = require('https')

https.get('https://www.baidu.com', (res) => {
    console.log('status code: ' + res.statusCode)
    console.log('headers: ' + JSON.stringify(res.headers))

    res.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
}).on('error', (err) => {
    console.error(err)
})
