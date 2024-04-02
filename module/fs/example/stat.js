const fs = require('fs')

fs.stat('./fileForStat.txt', (err, stats) => {
    if (err) throw err
    console.log(stats)
    console.log('文件大小：' + stats.size)
    console.log('创建时间：' + stats.birthtime)
    console.log('访问时间：' + stats.atime)
    console.log('修改时间：' + stats.mtime)
})
