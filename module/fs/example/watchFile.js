const fs = require('fs')

fs.watchFile('./fileForWatch.txt', {
    persistent: true,
    interval: 2000
}, (curr, prev) => {
    console.log('修改时间为：' + curr.mtime)
})
