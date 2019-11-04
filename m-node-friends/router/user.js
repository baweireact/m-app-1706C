const express = require('express')
const router = express.Router()
const userController = require('../controller/user')

//登录
router.post('/login', userController.login)

//注册
router.post('/register', userController.register)

//修改密码
router.post('/modify_password', userController.checkTokenByMiddleware, userController.modifyPassword)

//获取用户信息
router.get('/get_user_info', userController.checkTokenByMiddleware, userController.getUserInfo)

//退出
router.get('/quit', userController.quit)

//消息列表
router.get('/get_message_list', userController.getMessageList)

//发布消息
router.post('/add_message', userController.addMessage)

//更新消息
router.post('/update_message', userController.updateMessage)

module.exports = router


