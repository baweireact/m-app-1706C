import { createStore, applyMiddleware }  from 'redux'
//import thunk from 'redux-thunk'

const defaultState = {
  navList: [],
  currentId: 0,
  currentList: [],
  myBook: [],
  loading: false
}

//纯函数
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_STATE':
      let newState = JSON.parse(JSON.stringify(state)) //深拷贝
      newState[action.key] = action.value
      return newState
    default:
      return state
  }
}

//自编写thunk中间件
const myThunk = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch)
  }
  return next(action)
}

//自己编写日志中间件
const log = store => next => action => {
  console.log('日志:' + action.type)
  next(action)
}

const store = createStore(reducer, applyMiddleware(myThunk, log))

export default store