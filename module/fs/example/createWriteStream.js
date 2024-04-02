const fs = require('fs')
const writeStream = fs.createWriteStream('./fileForWrite.txt', 'utf8')

writeStream.on('close', () => {
    console.log('已经关闭')
})
writeStream.write('hello')
writeStream.write(' world')
writeStream.end('!')
