//交易单输出到数组
let dealingSlipArr = []

//利润亏损多少清仓
let clearSwitch = -0.2

//清仓后，如果价格回升，超过清仓时的价格n%，则再次买进
let addSwitch = 0.02

//所有股票总盈利
let total = []

let myAction = {}

//日志相关
Object.assign(myAction, {
  //打印日志
  printLog(item) {
    console.log(`序号：${item.index} ${item.title} 持股价格：${item.price.toFixed(2)} 持股数量: ${item.count} 持股成本总价:${item.totalPrice.toFixed(2)} ` +
    `市值：${(item.currentPrice * item.count).toFixed(2)} 当前价：${item.currentPrice} 盈利额：${item.earned.toFixed(2)} ` + 
    `盈利百分比：${(item.earnedPercent * 100).toFixed(2)}% ` +
    `涨幅${ item.historyPrice === 0 ? 0 : ((item.currentPrice - item.historyPrice) / item.historyPrice * 100).toFixed(2)}%`)
  },
  //交易日志
  logList(item) {
    if (item.isClear) {
      return
    }
    myAction.printLog(item)
  },
  //分类日志
  logCategory(item) {
    if (item.isClear) {
      return
    }
    console.log(`\n股票代码：${item.code} 趋势描述：${item.title} 交易天数：${item.list.length}`)  
  },
  //重写console.log 可以把交易单输出到数组
  initLog() {
    console.log = (function(oriLogFunc){
      return function(str)
      {
        //dealingSlipArr.push(str)
        oriLogFunc.call(console, str);
      }
    })(console.log);
  }
})

//清仓加仓
Object.assign(myAction, {
  //清仓
  clearFn(item) {
    item.isClear = true
    item.clearPrice = item.currentPrice
    console.log(`利润亏损${(0 - clearSwitch) * 100 }%，清仓!`)
    myAction.printLog(item)
    console.log('已清仓~~~~~~~~')
    item.stageEarnedArr.push(item.earned.toFixed(2) - 0)

    item.count = 0
    item.price = 0
    item.totalPrice = 0
    item.currentPrice = 0
    item.earned = 0
    item.earnedPercent = 0
    item.stopReferenceEarned = 0
  },
  //加仓
  addFn(item) {
    let count = parseInt(5000 / (item.currentPrice * 100)) * 100
    if (count === 0) {
      count = 100
    }
    item.count += count
    item.totalPrice = item.totalPrice + count * item.currentPrice
    item.price = item.totalPrice / item.count
    item.earnedPercent = (item.earned / item.totalPrice).toFixed(4) - 0
    console.log(`加仓！数量:${count}`)
  },
  //如果加仓后盈利依然大于10%，则加仓，总市值控制在5万以内
  isNeedAdd(item) {
    let count = parseInt(5000 / (item.currentPrice * 100)) * 100
    if (count === 0) {
      count = 100
    }
    let totalPrice = item.totalPrice + count * item.currentPrice
    let earnedPercent = (item.earned / totalPrice).toFixed(4) - 0
    if (earnedPercent > 0.1 && (item.count + count) * item.currentPrice < 50000) {
      return true
    } else {
      return false
    }
  }
})

//流程交易
Object.assign(myAction, {
  //交易
  computed(item, currentPrice) {
    //清仓后，如果价格回升，超过清仓时的价格n%，则再次买进
    if (item.clearPrice !== 0 && (currentPrice - item.clearPrice) / item.clearPrice > addSwitch) {
      console.log('清仓后再次买入！因为价格回升，且超过清仓时价格的5%。')
      item.isClear = false
      item.price = currentPrice
      item.clearPrice = 0  //清仓价归零

      //持股数量
      item.count = parseInt(5000 / (item.price * 100)) * 100
      if (item.count === 0) {
        item.count = 100
      }

      //持股总价
      item.totalPrice = item.price * item.count
    }

    if (item.isClear) {
      return
    }

    if (item.isFirst) {
      //持股单价
      item.price = currentPrice

      //持股数量
      item.count = parseInt(5000 / (item.price * 100)) * 100
      if (item.count === 0) {
        item.count = 100
      }

      //持股总价
      item.totalPrice = item.price * item.count

      item.isFirst = false
    }

    //上次的价格
    item.historyPrice = item.currentPrice
    //当前价
    item.currentPrice = currentPrice

    //盈利额
    item.earned = ((item.currentPrice - item.price) * item.count).toFixed(2) - 0

    //盈利百分百
    item.earnedPercent = (item.earned / item.totalPrice).toFixed(4) - 0

    //盈利大于200时，把利润保存起来做参考，以后如果利润亏损过半，则清仓
    if (item.stopReferenceEarned === 0 && item.earned >= 200) {
      item.stopReferenceEarned = item.earned.toFixed(2) - 0
    } else if (item.stopReferenceEarned >= 200 && ((item.earned - item.stopReferenceEarned) / item.stopReferenceEarned) <= clearSwitch) {
      //如果是首次买入，则不盈利不清仓，死磕到底
      if (item.earned < 90 && (item.totalPrice < 5000 || item.count === 100)) {

      } else if (item.earned >= 90) {
        myAction.clearFn(item)
      }
    } else if (item.earned >= 200) {
      //已经利润最高价位参考
      if (item.earned > item.stopReferenceEarned) {
        item.stopReferenceEarned = item.earned.toFixed(2) - 0
      }
    }

    //加仓
    if (myAction.isNeedAdd(item)) {
      myAction.logList(item)
      myAction.addFn(item)
    }

  },
  //遍历全部
  dealAll() {
    for (let i = 0; i < data.length; i++) {
      myAction.logCategory(data[i])
      for (let j = 0; j < data[i].list.length; j++) {
        data[i].index++
        myAction.computed(data[i], data[i].list[j])
        myAction.logList(data[i])
        if (j === data[i].list.length - 1) {
          if (data[i].count > 0) {
            data[i].stageEarnedArr.push(data[i].earned.toFixed(2) - 0)
          }
          let itemTotal = data[i].stageEarnedArr.reduce((total, item) => total + item, 0)
          console.log(`单支股票总盈利：${itemTotal}, 详情:`, data[i].stageEarnedArr)
          total.push(itemTotal)
        }
      }
    }
  }

})

//格式化数据
Object.assign(myAction, {
  //格式化数据
  formatData() {
    for(let i = 0; i< data.length; i++) {
      let init = {
        price: 0,
        count: 0,
        totalPrice: 0,
        historyPrice: 0,
        currentPrice: 0, 
        earned: 0,
        earnedPercent: 0,
        stopReferenceEarned: 0,
        isClear: false,
        isFirst: true,
        clearPrice: 0,
        stageEarnedArr: [],
        index: 0
      }
      data[i] = {...data[i], ...init }
    }
  }
})

if (true) {
  myAction.formatData()
  myAction.dealAll()
} else {
  const run = (res, item) => {
    data = []
    data.push({
      list: res.data.klines.map(item => item.split(',')[2] - 0),
      ...item
    })
    myAction.formatData()
    myAction.dealAll()
  }
  
  
  
  window.jQuery1124037335422142383856_1588576042344 =  (res => {
    let item = {
      code: '002410',
      title: "广联达（2019-11-05~2020-04-30）收盘价", 
    }
    run(res, item)
  })
  
  
  window.jQuery112408434225517182148_1588578309782 = (res => {
    let item = {
      code: '000596',
      title: "古井贡酒（2019-11-05~2020-04-30）收盘价",
    }
    run(res, item)
  })
  
  window.jQuery112407300319671293349_1588580618083 = (res => {
    let item = {
      code: '600703',
      title: "三安光电（2019-11-05~2020-04-30）收盘价",
    }
    run(res, item)
  })  
}

setTimeout(() => {
  let sum = total.reduce((total, item) => total + item, 0)
  console.log(`\n总盈利：${sum}， 详细:`, total)
  //打印交易单数组
  //console.log(JSON.stringify(dealingSlipArr, null, 2))
}, 10000)







