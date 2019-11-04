const express  = require('express')
const router = express.Router()

let messageList = []

router.get('/get_message_list', (req, res) => {
  res.send({
    code: 200,
    data: messageList,
    message: '列表'
  })
})

module.exports = router