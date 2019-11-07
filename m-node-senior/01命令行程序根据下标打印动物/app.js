const program = require('commander')
const fs = require('fs')
const packageInfo = require('./package.json')

program.version(packageInfo.version)
  .option('-i, --index <type>', "下标")

program.parse(process.argv)

console.log(program.index)

fs.readFile('./animals.txt', 'utf-8', (err, data) => {
  if (err) {
    return
  }
  let animalsArr = data.split('===============++++SEPERATOR++++====================')
  console.log(animalsArr[program.index])
})