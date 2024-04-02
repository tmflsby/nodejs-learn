const fs = require('fs')

fs.unlink('./fileForUnlink.txt', (err) => {
    if (err) throw err
    console.log('文件删除成功')
})
