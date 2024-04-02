const fs = require('fs')

try {
    const stats = fs.statSync('./fileForStat.txt')
    console.log(stats)
    console.log('文件大小：' + stats.size)
    console.log('创建时间：' + stats.birthtime)
    console.log('访问时间：' + stats.atime)
    console.log('修改时间：' + stats.mtime)
} catch (err) {
    throw err
}
