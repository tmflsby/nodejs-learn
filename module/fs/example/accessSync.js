const fs = require('fs')

try {
    fs.accessSync('./fileForAccess.txt')
    console.log('可以访问')
} catch (err) {
    throw err
}
