import axios from 'axios'
import urls from './urls'

console.log(process)
if (process.env.NODE_ENV === 'development') {
  console.log('env', process.env.NODE_ENV)
  axios.defaults.baseURL = 'http://localhost:82'
}

axios.interceptors.request.use((config) => {
  config.headers.token = localStorage.getItem('token')
  return config
})

axios.interceptors.response.use((res) => {
  if (res.data.code === 400) {
    alert(res.data.message)
  } else if (res.data.code === 403) {
    alert('登录过期')
    window.location.href = '/login'
  }
  return res
})

const common = async (config) => {
  let response = await axios(config)
  return response.data
}

export default {
  login: (data) => common({ url: urls.login, data, method: 'post' }),
  register: (data) => common({ url: urls.register, data, method: 'post' }),
  modifyPassword: (data) => common({ url: urls.modifyPassword, data, method: 'post' }),
  getUserInfo: () => common({ url: urls.getUserInfo }),
  quit: () => common({ url: urls.quit }),
  getMessageList: () => common({ url: urls.getMessageList }),
  addMessage: (data) => common({ url: urls.addMessage, data, method: 'post' }),
  deleteMessage: (data) => common({ url: urls.deleteMessage, data, method: 'post' }),
  like: (data) => common({ url: urls.like, data, method: 'post' }),
  cancelLike: (data) => common({ url: urls.cancelLike, data, method: 'post'}),
  comment: (data) => common({ url: urls.comment, data, method: 'post' })
}