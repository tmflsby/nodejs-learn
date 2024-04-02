const fs = require('fs')

try {
    fs.mkdirSync('sub')
    console.log('目录创建成功')
} catch (err) {
    throw err
}
