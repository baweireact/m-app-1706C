import { createStore }  from 'redux'

const defaultState = {
  navList: [],
  currentId: 0,
  currentList: []
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

const store = createStore(reducer)

export default store