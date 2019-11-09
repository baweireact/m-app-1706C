const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req ,file, cb) => {
    cb(null, 'upload/upload_images')
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}` )
  }
})

const upload = multer({ storage })

const uploadImg = (req, res) => {
  //单个文件:req.file 多个文件:req.files
  let data = req.files.map(item => {
    item.imgUrl = `http://localhost:82/upload_images/${item.filename}`
    return item
  })
  res.send({
    code: 200,
    data,
    message: '上传成功'
  })
}

module.exports = {
  upload,
  uploadImg
}