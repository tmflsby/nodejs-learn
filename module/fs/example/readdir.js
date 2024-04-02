const fs = require('fs')
const path = require('path')

const getFilesInDir = async (dir) => {
    const results = [path.resolve(dir)]
    const files = await fs.promises.readdir(dir, 'utf8');
    for (let file of files) {
        file = path.resolve(dir, file)
        const stats = fs.statSync(file)
        if (stats.isFile()) {
            results.push(file)
        } else if (stats.isDirectory()) {
            results.push(...await getFilesInDir(file))
        }
    }
    return results
}

getFilesInDir('../').then(res => {
    console.log(res)
})
