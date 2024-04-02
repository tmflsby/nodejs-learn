const fs = require('fs')
const path = require('path')

const getFilesInDir = (dir) => {
    const results = [path.resolve(dir)]
    const files = fs.readdirSync(dir, 'utf8')

    files.forEach((file) => {
        file = path.resolve(dir, file)
        const stats = fs.statSync(file)
        if (stats.isFile()) {
            results.push(file)
        } else if (stats.isDirectory()) {
            results.push(...getFilesInDir(file))
        }
    })

    return results
}

const files = getFilesInDir('../')
console.log(files)
