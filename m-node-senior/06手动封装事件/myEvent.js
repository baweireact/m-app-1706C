class MyEmitter {
  constructor() {
    this.events = {}
  }
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback)
    } else {
      this.events[eventName] = [callback]
    }
  }

  emit(eventName, ...arg) {
    let callbackArr = this.events[eventName]
    callbackArr && callbackArr.forEach(item => {
      if (Object.prototype.toString.call(item) === '[object Function]') {
        item(...arg)
      } else if (Object.prototype.toString.call(item) === '[object Object]') {
        if (item.once) {
          item.callback(...arg)
          item.callback = () => {}
        }
      }
    })
  }

  once(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push({
        once: true,
        callback
      })
    } else {
      this.events[eventName] = [{
        once: true,
        callback
      }]
    }
  }
}
const myEmitter = new MyEmitter()

module.exports = myEmitter