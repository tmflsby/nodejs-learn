const http = require('http')
const querystring = require('querystring')

const createClientPostRequest = () => {
    const options = {
        method: 'POST',
        protocol: 'http:',
        hostname: 'localhost',
        port: '3000',
        path: '/post',
        headers: {
            'connection': 'keep-alive',
            'content-type': 'application/x-www-form-urlencoded'
        }
    }

    const postBody = {
        nick: 'sy'
    }

    const client = http.request(options, (res) => {
        res.pipe(process.stdout)
    })

    client.write(querystring.stringify(postBody))
    client.end()
}

const server = http.createServer((req, res) => {
    res.write('Server got client data: ')
    req.pipe(res)
})

server.listen(3000, createClientPostRequest)
