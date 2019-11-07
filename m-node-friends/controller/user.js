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

//消息列表
let messageList = []

//token加密密码
let secret = 'xxx'

//如果没有启动redis,会报错，启动redis方法，在cd到redis的安装目录，执行redis-server.exe redis.windows.conf
const client = redis.createClient()
client.on('error', err => {
  console.log('redis错误：' + err)
})

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
const login = (req, res) => {
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
}

//注册
const register = (req, res) => {
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
        token,
        username
      },
      message: '注册成功'
    })
  }
}

//修改密码
const modifyPassword = (req, res) => {
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
}

//获取用户信息
const getUserInfo = (req, res) => {
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
}

//退出
const quit = (req, res) => {
  let token = req.headers.token
  client.del(token)
  res.send({
    code: 200,
    message: '退出'
  })
}

//消息列表
const getMessageList = (req, res) => {
  res.send({
    code: 200,
    data: messageList,
    message: '消息列表'
  })
}

//发布消息
const addMessage = (req, res) => {
  let token = req.headers.token
  let id = jwt.decode(token, secret)
  console.log(id)
  let user = userList.find(item => item.id === id)
  let { message } = req.body
  messageList.unshift({
    id: Date.now(),
    message,
    username: user.username,
    createTime: Date.now(),
    like: [],
    comment: [],
  })
  res.send({
    code: 200,
    data: messageList,
    message: '发布成功'
  })
}

//更新消息
const updateMessage = (req, res) => {
  let { newMessageList } = req.body
  messageList = newMessageList
  res.send({
    code: 200,
    data: messageList,
    message: '更新成功'
  })
}

//删除消息
const deleteMessage = (req, res) => {
  let { id } = req.body
  let index = messageList.findIndex(itme => itme.id === id)
  messageList.splice(index, 1)
  res.send({
    code: 200,
    data: messageList,
    message: '删除成功'
  })
}

//点赞
const like = (req, res) => {
  let { id, username } = req.body
  let index = messageList.findIndex(itme => itme.id === id)
  messageList[index].like.push(username)
  res.send({
    code: 200,
    data: messageList,
    message: '点赞成功'
  })
}

//取消点赞
const cancelLike = (req, res) => {
  let { id, username } = req.body
  let index = messageList.findIndex(itme => itme.id === id)
  messageList[index].like = messageList[index].like.filter(item => item !== username)
  res.send({
    code: 200,
    data: messageList,
    message: '点赞成功'
  })
}

//评论
const comment = (req, res) => {
  let { id, comment } = req.body
  let index = messageList.findIndex(itme => itme.id === id)
  messageList[index].comment.push(comment)
  res.send({
    code: 200,
    data: messageList,
    message: '评论成功'
  })
}

module.exports = {
  checkTokenByMiddleware,
  login,
  register,
  modifyPassword,
  getUserInfo,
  quit,
  getMessageList,
  addMessage,
  updateMessage,
  deleteMessage,
  like,
  cancelLike,
  comment,
}