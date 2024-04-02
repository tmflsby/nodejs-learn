const fs = require('fs')

const randomFileName = `./fileForReadLink-${String(Math.random()).slice(2, 6)}.txt`

// fs.symlinkSync('./fileForReadLink.txt', randomFileName, (err) => {
//     if (err) throw err
// })
fs.readlink(randomFileName, 'utf8', (err, linkString) => {
    if (err) throw err
    console.log('链接文件内容：' + linkString)
})
