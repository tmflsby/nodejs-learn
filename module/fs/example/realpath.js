const fs = require('fs')

fs.realpath('./fileForRealPath.txt', (err, resolvedPath) => {
    if (err) throw err
    console.log(resolvedPath)
})
