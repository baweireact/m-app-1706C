import { createStore, applyMiddleware, combineReducers }  from 'redux'
import { fromJS } from 'immutable'
import thunk from 'redux-thunk'

const defaultState = fromJS({
  navList: [],
  currentId: 0,
  currentList: [],
  loading: false
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_STATE':
      // let newState = JSON.parse(JSON.stringify(state))
      // newState[action.key] = action.value
      return state.setIn(action.key, fromJS(action.value));
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store