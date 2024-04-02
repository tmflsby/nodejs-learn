const dns = require('dns')

dns.resolve4('www.qq.com', (err, addresses) => {
    if (err) throw err
    console.log(addresses)
})
