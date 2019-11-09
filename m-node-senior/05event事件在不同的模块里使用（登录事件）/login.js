const myEvent = require('./myEvent')

myEvent.on('login', () => {
  console.log('登录')
})

module.exports = {}