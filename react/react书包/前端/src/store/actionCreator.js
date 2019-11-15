import Api from '../api'

//类似于vuex里的actions

//列表
const getList = id => dispatch => {
  dispatch({ type: 'SET_STATE', key: 'loading', value: true })
  Api.getList(`?id=${id}`).then(res => {
    dispatch({ type: 'SET_STATE', key: 'currentList', value: res.data })
    dispatch({ type: 'SET_STATE', key: 'loading', value: false })
  })
}

//导航
const getNav = () => dispatch => {
  Api.getNav().then(res => {
    dispatch({ type: 'SET_STATE', key: 'navList', value: res.data })
  })
}

//书包
const getMyBook = () => dispatch => {
  dispatch({ type: 'SET_STATE', key: 'loading', value: true })
  Api.getMyBook().then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_STATE', key: 'myBook', value: res.data })
      dispatch({ type: 'SET_STATE', key: 'loading', value: false })
    }
  })
}

export default {
  getNav,
  getList,
  getMyBook
}