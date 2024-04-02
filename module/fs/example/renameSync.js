const fs = require('fs')

try {
    fs.renameSync('./world', './hello')
    console.log('重命名成功')
} catch (err) {
    throw err
}
