const stockService = require('../service/stock')

const getAnalyseList = async (req, res) => {
  let data = await stockService.getAnalyseList()
  if (data.length > 0) {
    res.send({
      code: 200,
      data: data,
      message: '股票分析'
    })
  }

}

const addAnalyseItem = async (req, res) => {
  let { list } = req.body
  let data = await stockService.addAnalyseItem(list)
  if (data) {
    res.send({
      code: 200,
      data: data,
      message: '添加成功'
    })
  }
}

module.exports = {
  getAnalyseList,
  addAnalyseItem
}