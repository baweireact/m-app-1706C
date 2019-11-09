const myEvent = require('./myEvent')

myEvent.on('login', (name) => {
  console.log('登录', name)
})

myEvent.once('once', (name) => {
  console.log('只执行一次', name)
})

myEvent.once('once', (name) => {
  console.log('只执行一次2', name)
})

module.exports = {}