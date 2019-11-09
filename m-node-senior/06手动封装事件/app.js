const myEvent = require('./myEvent')
require('./login')

myEvent.emit('login', 'xu')
myEvent.emit('once', 1)
myEvent.emit('once', 2)