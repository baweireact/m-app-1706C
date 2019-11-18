const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const uuidv1 = require('uuid/v1')
var history = require('connect-history-api-fallback');
const { bookNavData, bookMallData, bookMallDetailData, mockDataList } = require('./data')

const app = express()

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

//处理react前端路由(BrowserRoute)，vue前端路由(mode:history)，注意：开启后无法用postman和浏览器地址栏调试get接口
// app.use(history())

//让所有接口延时返回
app.use((req, res, next) => {
  setTimeout(() => {
    next()
  }, 200)
})

//利用 Express 托管静态文件
//http://www.expressjs.com.cn/starter/static-files.html
app.use(express.static('public'))


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
app.get('/api/list_all', (req, res) => {
  res.send({
    code: 200,
    data: bookMallData,
    message: '列表'
  })
})

//导航
app.get('/api/nav', (req, res) => {
  res.send({
    code: 200,
    data: bookNavData,
    message: '导航'
  })
})

//列表
app.get('/api/list', (req, res) => {
  let { id } = req.query
  let list = bookMallData.find(item => item.id == id).list
  list.forEach(item => {
    item.is_in_my_book = myBook.findIndex(book => book.id === item.id) >= 0
  })
  res.send({
    code: 200,
    data: list,
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

//分页
app.get('/api/mock_data', (req, res) => {
  let { page, size } = req.query
  let start = (page - 1) * size
  let end = start + Number(size)
  console.log(start, end)
  let data = mockDataList.slice(start, end)

  res.send({
    code: 200,
    data: data,
    message: '列表'
  })
})

app.get('/api/news', (req, res) => {
  let { page, size } = req.query

  let start, end
  start = (page - 1) * size
  end = start + size * 1
  let data = mockDataList.slice(start, end)
  res.send({
    code: 200,
    data,
    message: 'mock生成的数据'
  })
})

app.listen(83)
console.log(83)