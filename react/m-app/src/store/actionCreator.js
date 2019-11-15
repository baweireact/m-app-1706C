import Api from '../api'

const getNav = () => (dispatch) => {
  Api.getNav().then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_STATE', key: ['navList'], value: res.data })
    }
  })
}

const getList = (id) => (dispatch) => {
  dispatch({ type: 'SET_STATE', key: ['loading'], value: true })
  Api.getList(`?id=${id}`).then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_STATE', key: ['currentList'], value: res.data })
      dispatch({ type: 'SET_STATE', key: ['loading'], value: false })
    }
  })
}

export default {
  getNav,
  getList
}