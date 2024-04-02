const dns = require('dns')

dns.resolveCname('www.qq.com', (err, addresses) => {
    if (err) throw err
    console.log(addresses)
})
