const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const stock = require('./router/stock')
const { query } = require('./db')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/api/test', async (req, res) => {
  let users = await query(`SELECT * FROM user`)
  res.send({
    code: 200,
    data: users,
    message: '测试'
  })
})

app.use('/api', stock)


app.listen(85, () => {
  console.log(85)
})

