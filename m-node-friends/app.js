const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const history = require('connect-history-api-fallback')
const uuidv1 = require('uuid/v1')
const jwt = require('jwt-simple')
const redis = require('redis')

//用户列表
let userList = [{
  id: '001',
  username: 'admin',
  password: '123456'
}, {
  id: '002',
  username: 'xu',
  password: '123'
}, {
  id: '003',
  username: 'a',
  password: '123456'
}]

//token加密密码
let secret = 'xxx'

const app = express()

//如果没有启动redis,会报错，启动redis方法，在cd到redis的安装目录，执行redis-server.exe redis.windows.conf
const client = redis.createClient()
client.on('error', err => {
  console.log('redis错误：' + err)
})

//跨域
app.use(cors())
//解析post请求

// parse application/json
app.use(bodyParser.json())
//let jsonParser = bodyParser.json()

//处理react前端路由(BrowserRoute)，vue前端路由(mode:history)，注意：开启后无法用postman和浏览器地址栏调试get接口
//app.use(history())

//静态web服务器
app.use(express.static(__dirname + '/public'))

//通过中间件检查登录是否过期，并自动续期
const checkTokenByMiddleware = (req, res, next) => {
  let token = req.headers.token
  client.get(token, (err, response) => {
    if (response) {
      client.set(token, token, 'EX', 60)
      next()
    } else {
      res.send({
        code: 403,
        message: '登录过期'
      })
    }
  })
  console.log(2)
}

//登录
app.post('/api/login', (req, res) => {
  let { username, password } = req.body
  let user = userList.find(item => item.username === username)
  if (user) {
    if (user.password === password) {
      let token = jwt.encode(user.id, secret)
      client.set(token, token, 'EX', 60)
      res.send({
        code: 200,
        data: {
          username,
          token
        },
        message: '登录成功'
      })
    } else {
      res.send({
        code: 400,
        message: '密码错误'
      })
    }
  } else {
    res.send({
      code: 400,
      message: '用户名不存在'
    })
  }
})

//注册
app.post('/api/register', (req, res) => {
  let { username, password } = req.body
  console.log(username, password)
  let user = userList.find(item => item.username === username)
  if (user) {
    res.send({
      code: 400,
      message: '用户名已存在'
    })
  } else {
    let id = uuidv1()
    userList.push({
      id,
      username,
      password,
    })
    let token = jwt.encode(id, secret)
    client.set(token, token, 'EX', 60)
    res.send({
      code: 200,
      data: {
        userList,
        token
      },
      message: '注册成功'
    })
  }
})

//修改密码
app.post('/api/modify_password', checkTokenByMiddleware, (req, res) => {
  let token = req.headers.token
  let { oldPassword, newPassword } = req.body
  let id = jwt.decode(token, secret)
  let index = userList.findIndex(item => item.id === id)
  if (userList[index].password === oldPassword) {
    userList[index].password = newPassword
    res.send({
      code: 200,
      data: userList,
      message: '修改成功,请重新登录'
    })
  } else {
    res.send({
      code: 400,
      message: '原密码错误'
    })
  }
})

//获取用户信息
app.get('/api/get_user_info', checkTokenByMiddleware, (req, res) => {
  let token = req.headers.token
  let id = jwt.decode(token, secret)
  console.log(id)
  let user = userList.find(item => item.id === id)
  let userInfo = JSON.parse(JSON.stringify(user))
  delete userInfo.password
  res.send({
    code: 200,
    data: userInfo,
    message: '用户信息'
  })
})

//退出
app.get('/api/quit', (req, res) => {
  let token = req.headers.token
  client.del(token)
  res.send({
    code: 200,
    message: '退出'
  })
})

//动态路由
app.get('/api/test/:id', (req, res) => {
  let { id } = req.params
  res.send({
    code: 200,
    data: id,
    message: '动态路由测试'
  })
})

app.listen(82)
console.log(82)