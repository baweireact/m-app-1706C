console.log(data)

//清仓
const clear = (item) => {
  item.isClear = true
  item.clearPrice = item.currentPrice
  console.log(`利润亏损过半，清仓!`)
  printLog(item)
  item.count = 0
  item.price = 0
  item.totalPrice = 0
  item.currentPrice = 0
  item.earned = 0
  item.earnedPercent = 0
  item.stopReferenceEarned = 0
}

const printLog = (item) => {
  console.log(`持股价格：${item.price.toFixed(2)} 持股数量: ${item.count} 持股成本总价:${item.totalPrice.toFixed(2)} ` +
  `市值：${(item.currentPrice * item.count).toFixed(2)} 当前价：${item.currentPrice} 盈利额：${item.earned.toFixed(2)} ` + 
  `盈利百分比：${(item.earnedPercent * 100).toFixed(2)}% ` +
  `涨幅${ item.historyPrice === 0 ? 0 : ((item.currentPrice - item.historyPrice) / item.historyPrice * 100).toFixed(2)}%`)
}

//加仓
const add = (item) => {
    let count = parseInt(5000 / (item.currentPrice * 100)) * 100
    if (count === 0) {
      count = 100
    }
    item.count += count
    item.totalPrice = item.totalPrice + count * item.currentPrice
    item.price = item.totalPrice / item.count
    item.earnedPercent = (item.earned / item.totalPrice).toFixed(4) - 0
    console.log(`加仓！数量:${count}`)
}

//如果加仓后盈利依然大于10%，则加仓，总市值控制在5万以内
const isNeedAdd = (item) => {
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

//分类日志
const logCategory = (item) => {
  if (item.isClear) {
    return
  }
  console.log(`\n股票代码：${item.code} 趋势描述：${item.title}`)  
}

//日志
const logList = (item) => {
  if (item.isClear) {
    return
  }
  printLog(item)
}

//交易
const computed = (item, currentPrice) => {
    //清仓后，如果价格回升，超过清仓时的价格5%，则再次买进
    if (item.clearPrice !== 0 && (currentPrice - item.clearPrice) / item.clearPrice > 0.05) {
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
    item.earned = (item.currentPrice - item.price) * item.count

    //盈利百分百
    item.earnedPercent = (item.earned / item.totalPrice).toFixed(4) - 0

    //盈利大于200时，把利润保存起来做参考，以后如果利润亏损过半，则清仓
    if (item.stopReferenceEarned === 0 && item.earned >= 200) {
      item.stopReferenceEarned = item.earned
    } else if (item.stopReferenceEarned >= 200 && ((item.earned - item.stopReferenceEarned) / item.stopReferenceEarned) <= -0.5) {
      //如果是首次买入，则不盈利不清仓，死磕到底
      if (item.earned < 90 && (item.totalPrice < 5000 || item.count === 100)) {

      } else if (item.earned >= 90) {
        clear(item)
      }
    } else if (item.earned >= 200) {
      item.stopReferenceEarned = item.earned
    }

    //加仓
    if (isNeedAdd(item)) {
      logList(item)
      add(item)
    }

}

//遍历全部
const dealAll = () => {
  for (let i = 0; i < data.length; i++) {
    logCategory(data[i])
    for (let j = 0; j < data[i].list.length; j++) {
      computed(data[i], data[i].list[j])
      logList(data[i])
    }
  }
}

//格式化数据
const formatData = () => {
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
    }
    data[i] = {...data[i], ...init }
  }
}

formatData()

dealAll()










