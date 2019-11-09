const expess = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const uuidv1 = require('uuid/v1')
const { bookMallData, bookMallDetailData } = require('./data')

const app = expess()

//用户列表
let userList = [{
  id: '001',
  username: 'admin',
  password: '123456'
}, {
  id: '002',
  username: 'xu',
  password: '123'
}]

//书包
let myBook = []

//跨域
app.use(cors())
//解析post
app.use(bodyParser.json())

//登录，可以区分用户名错误和密码错误，多用户
app.post('/api/login', (req, res) => {
  let { username, password } = req.body
  console.log(username, password)
  let user = userList.find(item => item.username === username)
  if (user) {
    if (user.password === password) {
      res.send({
        code: 200,
        data: { username },
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
  if (userList.find(item => item.username === username)) {
    res.send({
      code: 400,
      data: { username },
      message: '用户名已存在'
    })
  } else {
    userList.push({
      id: uuidv1(),
      username,
      password
    })
    res.send({
      code: 200,
      data: userList,
      message: "注册成功"
    })
  }
})

//全部数据
app.get('/api/list', (req, res) => {
  res.send({
    code: 200,
    data: bookMallData,
    message: '列表'
  })
})

//详情
app.get('/api/detail', (req, res) => {
  let { id } = req.query
  bookMallDetailData.forEach(item => {
    item.list.forEach(book => {
      if (book.id == id) {
        //添加一个字段，标识收藏和已收藏
        book.is_in_my_book = myBook.findIndex(bookItem => bookItem.id === book.id) >= 0
        res.send({
          code: 200,
          data: book,
          message: '详情'
        })
      }
    })
  })
})

//添加
app.post('/api/add', (req, res) => {
  //解构出来书的信息
  let { book } = req.body
  //列表页和详情页都调用这个接口
  myBook.push(book)  //添加到数组里
  res.send({
    code: 200,
    data: myBook,
    message: '添加成功'
  })
})

//获取书包
app.get('/api/my_book', (req, res) => {
  res.send({
    code: 200,
    data: myBook,
    message: '书包'
  })
})

//更新书包
app.post('/api/update', (req, res) => {
  let { myBookNew } = req.body
  myBook = myBookNew
  res.send({
    code: 200,
    data: myBook,
    message: '更新完成了'
  })
})

app.listen(83)
console.log(83)