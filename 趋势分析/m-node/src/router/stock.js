const express = require('express')
const router = express.Router()
const stockController = require('../controller/stock')

router.get('/stock/analyse', stockController.getAnalyseList)
router.post('/stock/analyse', stockController.addAnalyseItem)

module.exports = router
