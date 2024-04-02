const fs = require('fs')

fs.access('./fileForAccess.txt', (err) => {
    if (err) throw err
    console.log('可以访问')
})

fs.access('./fileForRead.txt', (err) => {
    if (err) throw err
    console.log('fileForRead.txt存在')
})

fs.access('./fileForRead2.txt', (err) => {
    if (err) throw err
    console.log('fileForRead2.txt存在')
})
