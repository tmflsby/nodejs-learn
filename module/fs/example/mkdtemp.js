const fs = require('fs')

fs.mkdtemp('./temp', (err, folder) => {
    if (err) throw err
    console.log('创建临时目录：' + folder)
})
