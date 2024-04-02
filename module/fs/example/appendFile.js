const fs = require('fs')

fs.appendFile('./fileForAppend.txt', 'hello', 'utf8', (err) => {
    if (err) throw err
    console.log('append成功')
})
