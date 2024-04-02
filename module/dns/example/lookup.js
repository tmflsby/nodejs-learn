const dns = require('dns')

dns.lookup('www.qq.com', (err, address, family) => {
    if (err) throw err
    console.log('address', address)
    console.log('family', family)
})

dns.lookup('www.qq.com', {
    all: true
}, (err, addresses) => {
    if (err) throw err
    console.log('address', addresses)
})
