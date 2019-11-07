const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const history = require('connect-history-api-fallback')
const user = require('./router/user')

const app = express()

//跨域
app.use(cors())
//解析post请求

// parse application/json
app.use(bodyParser.json())
//let jsonParser = bodyParser.json()

//处理react前端路由(BrowserRoute)，vue前端路由(mode:history)，注意：开启后无法用postman和浏览器地址栏调试get接口
app.use(history())

//静态web服务器
app.use(express.static(__dirname + '/public'))

//动态路由
app.get('/api/test/:id', (req, res) => {
  let { id } = req.params
  res.send({
    code: 200,
    data: id,
    message: '动态路由测试'
  })
})

app.use('/api/user/', user)

app.listen(82)
console.log(82)