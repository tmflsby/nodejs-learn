const fs = require('fs')
const filePath = './fileForRead.txt'

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        return console.error('读取文件出错：' + err.message)
    }
    console.log('文件内容：' + data)
})
