import Api from '../api'

const getList = (id) => {
  return (dispatch) => {
    Api.getList(`?id=${id}`).then(res => {
      if (res.code === 200) {
        dispatch({ type: 'SET_STATE', key: 'currentList', value: res.data })
      }
    })
  }
} 

export default {
  getList
}