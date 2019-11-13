import Api from '../api'

const getNav = () => (dispatch) => {
  Api.getNav().then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_STATE', key: ['navList'], value: res.data })
    }
  })
}

const getList = (id) => (dispatch) => {
  Api.getList(`?id=${id}`).then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_STATE', key: ['currentList'], value: res.data })
    }
  })
}

export default {
  getNav,
  getList
}