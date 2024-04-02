const fs = require('fs')
const filePath = './fileForRead.txt'

try {
    const data = fs.readFileSync(filePath, 'utf8')
    console.log('文件内容：' + data)
} catch (err) {
    console.error('读取文件出错：' + err.message)
}
