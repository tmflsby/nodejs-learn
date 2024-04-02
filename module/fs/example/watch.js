const fs = require('fs')

fs.watch('../', {
    persistent: true,
    recursive: true,
    encoding: 'utf8'
}, (event, filename) => {
    console.log('触发时间：' + event)
    if (filename) {
        console.log('文件名是：' + filename)
    } else {
        console.log('文件名是没有提供')
    }
})
