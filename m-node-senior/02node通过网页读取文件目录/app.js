const program = require('commander')
const fs = require('fs')
const http = require('http')
const { exec } = require('child_process')
const path = require('path')
const os = require('os')
const packageInfo = require('./package.json')

program.version(packageInfo.version)
  .option('-p, --port <port>', "set port")

program.parse(process.argv)

let PORT = program.port || 8000

const app = http.createServer((req, res) => {
  let rootPath = process.cwd()
  if (req.url === '/favicon.ico') {
    res.end()
    return
  }
  let myPath = path.join(rootPath, req.url)
  console.log('a', myPath)
  if (fs.statSync(myPath).isFile()) {
    fs.readFile(myPath, 'utf8', (err, data) => {
      res.end(data)
    })
  } else {
    let list = fs.readdirSync(myPath).map(filePath => {
      return `<div>
      <a href="${path.join(req.url, filePath)}">${filePath}</a>
      </div>`
    }).join('')
    let html = fs.readFileSync(__dirname + '/public/index.html', 'utf8')
    html = html.replace("{{list}}", list)
    res.end(html)
  }
})

console.log('os', os.networkInterfaces())

app.listen(PORT, () => {
  //exec(`start http://localhost:${PORT}`)
})
