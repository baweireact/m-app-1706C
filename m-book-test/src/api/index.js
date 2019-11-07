import axios from 'axios'
import urls from './urls'

//配置访问83端口的服务器
axios.defaults.baseURL = 'http://localhost:83/'

//请求前的拦截
axios.interceptors.request.use((config) => {
  console.log(config)
  return config
})

//响应的拦截
axios.interceptors.response.use((res) => {
  console.log(res)
  if (res.data.code === 400) {
    alert(res.data.message)
  }
  if (res.data.code === 403) {
    window.location.href = '/login'
  }
  return res
})

//封装axios请求
const common = async (config) => {
  let response = await axios(config)
  //响应数据直接取.data数据返回，,then可以少些一个.data
  return response.data
}

export default {
  getNav: () => common({ url: urls.getNav }),
  getList: (url) => common({ url: urls.getList + url }),
  getMyBook: () => common({ url: urls.getMyBook }),
  login: (data) => common({ url: urls.login, data, method: 'post' }),
  getDetail: (url) => common({ url: urls.getDetail + url }),
  add: (data) => common({ url: urls.add, data, method: 'post'}),
  update: (data) => common({ url: urls.update, data, method: 'post' }),
  register: (data) => common({ url: urls.register, data, method: 'post' })
}