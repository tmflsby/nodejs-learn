const dns = require('dns')

dns.lookup('www.qq.com', (err, address, family) => {
    if (err) throw err
    console.log('配置host后，dns.lookup =>' + address)
})

dns.resolve4('www.qq.com', (err, addresses) => {
    if (err) throw err
    console.log('配置host后，dns.resolve4 =>' + addresses)
})
