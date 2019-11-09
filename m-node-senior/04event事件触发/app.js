const EventEmitter = require('events')
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter()

myEmitter.on('myEventName', (a, b) => {
  console.log(a, b)
})

myEmitter.emit('myEventName', 1, 2)
myEmitter.emit('myEventName', 1, 2)

myEmitter.once('myOnce', () => {
  console.log('只触发一次')
})

myEmitter.once('myOnce', () => {
  console.log('只触发一次')
})


myEmitter.emit('myOnce')
myEmitter.emit('myOnce')

myEmitter.on('error', (err) => {
  console.error(err)
})

myEmitter.emit('error', new Error('错误'))