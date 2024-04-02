const dns = require('dns')

dns.lookupService('127.0.0.1', 80, (err, hostname, service) => {
    if (err) throw err
    console.log('hostname', hostname)
    console.log('service', service)
})
