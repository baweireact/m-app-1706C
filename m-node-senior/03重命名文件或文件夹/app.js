const fs = require('fs')
const path = require('path')

let target = process.argv[2]
let rename = process.argv[3]
let rootPath = process.cwd()

target = path.join(rootPath, target)
if (fs.existsSync(target)) {
  fs.renameSync(target, path.join(rootPath, rename))
} else {
  console.log('文件或文件夹不存在')
}