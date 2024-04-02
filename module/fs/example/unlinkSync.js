const fs = require('fs')

try {
    fs.unlinkSync('./fileForUnlink.txt')
    console.log('文件删除成功')
} catch (err) {
    throw err
}
