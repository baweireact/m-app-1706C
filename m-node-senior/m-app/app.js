const child_process = require('child_process')

const child = child_process.fork('./compute.js')

child.send({ type: 'start' })
child.on('message', (action) => {
  if (action.type === 'sum') {
    console.log('子进程计算出来的结果:', action.sum)
    process.exit()
    
  }
})

process.on('exit', () => {
  console.log('主进程结束')
})

console.log('运行到这里')