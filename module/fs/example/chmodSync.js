const fs = require('fs')

try {
    fs.chmodSync('./fileForChown', '777')
    console.log('权限修改成功')
} catch (err) {
    throw err
}
