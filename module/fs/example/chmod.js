const fs = require('fs')

fs.chmod('./fileForChown.txt', '777', (err) => {
    if (err) throw err
    console.log('权限修改成功')
})
