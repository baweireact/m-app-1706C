import { createStore, applyMiddleware }  from 'redux'
import thunk from 'redux-thunk'

const defaultState = {
  navList: [],
  currentId: 0,
  currentList: [],
  myBook: []
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

const store = createStore(reducer, applyMiddleware(thunk))

export default store