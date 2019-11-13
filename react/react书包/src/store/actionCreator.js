import Api from '../api'

const getList = (id) => {
  return (dispatch) => {
    Api.getList(`?id=${id}`).then(res => {
      dispatch({ type: 'SET_STATE', key: 'currentList', value: res.data })
    })
  }
}

const getNav = () => {
  return (dispatch) => {
    Api.getNav().then(res => {
      dispatch({ type: 'SET_STATE', key: 'navList', value: res.data })
    })
  }
}

const getMyBook = () => {
  return (dispatch) => {
    Api.getMyBook().then(res => {
      if (res.code === 200) {
        dispatch({ type: 'SET_STATE', key: 'myBook', value: res.data })
      }
    })
  }
}

export default {
  getNav,
  getList,
  getMyBook
}