const express = require('express')
const router = express.Router()
const { upload, uploadImg } = require('../controller/upload')

//上传单个文件
//router.post('/upload', upload.single('img'), uploadImg)

router.post('/upload', upload.array('img', 9), uploadImg)

module.exports = router


