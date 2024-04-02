const fs = require('fs')

fs.rmdir('./tempayaTjw', (err) => {
    if (err) throw err
    console.log('目录删除成功')
})
