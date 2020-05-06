//交易单输出到数组
let dealingSlipArr = []

//利润亏损多少清仓
let clearSwitch = 0.2

//所有股票总盈利
let total = []

//单次交易在多少钱左右
let singleMoney = 5000

//每次买入花了多少钱
let buyUseMoneyArr = []

//加仓次数
let addCount = 0

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
    console.log(`利润亏损${clearSwitch * 100 }%，清仓!`)
    myAction.printLog(item)
    console.log('已清仓~~~~~~~~')
    item.clearCount++
    item.historyClearIndex = item.index
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
    let count = parseInt(singleMoney / (item.currentPrice * 100)) * 100
    if (count === 0) {
      count = 100
    }
    item.count += count
    item.totalPrice = item.totalPrice + count * item.currentPrice
    item.price = item.totalPrice / item.count
    item.earnedPercent = (item.earned / item.totalPrice).toFixed(4) - 0
    console.log(`加仓！数量:${count}`)
    buyUseMoneyArr.push((count * item.currentPrice).toFixed(2) - 0)
    addCount++
  },
  //如果加仓后盈利依然大于10%，则加仓，主要是防止加仓后跌停出现亏损，总市值控制在5万以内
  isNeedAdd(item) {
    let count = parseInt(singleMoney / (item.currentPrice * 100)) * 100
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
    //曾经挣的钱
    let alreadyEarned = item.stageEarnedArr.reduce((total, item) => total + item, 0)

    //清仓数大于0, 之后的买入要格外小心，曾经挣的钱能支持一次跌停  && item.index - item.historyClearIndex > 20
    if (item.clearCount > 0 && item.count === 0) {
      //曾经挣的钱能支持一次跌停，且单价小于100,需要人工干预,再次买入价格相对于清仓价格，浮动大于5%
      if (currentPrice * 0.1 < alreadyEarned && currentPrice < 100 && Math.abs((currentPrice - item.clearPrice) / item.clearPrice) > 0.05) {
        console.log('清仓后再次买入！曾经挣的钱能支持一次跌停，且单价小于100，再次买入价格相对于清仓价格，浮动大于5%')
        item.isClear = false
        item.price = currentPrice
        item.clearPrice = 0  //清仓价归零
        item.stopReferenceEarned = currentPrice
  
        //持股数量
        item.count = parseInt(singleMoney / (item.price * 100)) * 100
        if (item.count === 0) {
          item.count = 100
        }
  
        //持股总价
        item.totalPrice = item.price * item.count
      }
    }

    if (item.isClear) {
      return
    }

    //单支股票，只走一次
    if (item.isFirst) {
      if (currentPrice > 100) {
        console.log(`单价${currentPrice},太高了，不建议买！`)
        myAction.clearFn(item)
      }
      //持股单价
      item.price = currentPrice

      //持股数量
      item.count = parseInt(singleMoney / (item.price * 100)) * 100
      if (item.count === 0) {
        item.count = 100
      }

      //持股总价
      item.totalPrice = item.price * item.count

      buyUseMoneyArr.push(item.totalPrice.toFixed(2) - 0)

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

    //根据序号打断点
    // if (item.index === 59) {
    //   debugger
    // }

    //盈利大于200时，把利润保存起来做参考，以后如果利润亏损超过过了clearSwith（动态的值，如20%等），则清仓
    if (item.clearCount === 0) {  //从来没请过仓的情况
      if (item.stopReferenceEarned === 0 && item.earned >= 200) {
        item.stopReferenceEarned = item.earned.toFixed(2) - 0
      } else if (item.stopReferenceEarned >= 200 && ((item.earned - item.stopReferenceEarned) / item.stopReferenceEarned) <= 0 - clearSwitch) {
        //如果是首次买入，则不盈利不清仓，死磕到底
        if (item.earned >= 100) {
          myAction.clearFn(item)
        }
      } else if (item.earned > item.stopReferenceEarned) {
        //更新利润最高价位参考
        item.stopReferenceEarned = item.earned.toFixed(2) - 0
      }
    } else {
      //已经清仓过，以后操作要保证曾经挣的钱别再培进去
      //如果吃掉了曾经挣的钱的20%，则立马清仓
      if ((alreadyEarned * clearSwitch) + item.earned < 0 && alreadyEarned > 550) {
        myAction.clearFn(item)
      }

      if (item.stopReferenceEarned === 0 && item.earned >= 200) {
        item.stopReferenceEarned = item.earned.toFixed(2) - 0
      } else if (item.stopReferenceEarned >= 200 && ((item.earned - item.stopReferenceEarned) / item.stopReferenceEarned) <= 0 - clearSwitch) {
        myAction.clearFn(item)
      } else if (item.earned > item.stopReferenceEarned) {
        //更新利润最高价位参考
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
          total.push({ earend: itemTotal, title: data[i].title})
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
        index: 0,   //序号
        historyClearIndex: 0,  //清仓时的序号
        price: 0,       //持股单价,买入价格
        count: 0,       //持股数量
        totalPrice: 0,  //持股成本总价
        historyPrice: 0,  //上个交易日的价格
        currentPrice: 0,   //当前价
        earned: 0,   //盈利额
        earnedPercent: 0,   //盈利百分比
        stopReferenceEarned: 0,  //盈利额止损参考
        isClear: false,   //是否已清仓
        isFirst: true,    //是否是刚建仓，从未加过仓
        clearPrice: 0,    //清仓价格
        stageEarnedArr: [],  //阶段盈利数组，每次清仓时添加一个，跑完一支股票的所有数据，最新的盈亏也会添加进去
        clearCount: 0, //清仓数
      }
      data[i] = {...data[i], ...init }
    }
  }
})

let getDataIndex = 0

//优化爬取过程
Object.assign(myAction, {
  run(res) {
    data = []

    let item = {
      code: res.data.code,
      title: res.data.name, 
    }

    data.push({
      list: res.data.klines.map(item => item.split(',')[2] - 0),
      ...item
    })
    myAction.formatData()
    myAction.dealAll()
  },
  getData(url) {
    var script = document.createElement('script');
    script.src = url
    document.head.appendChild(script);
  },
  mapUrl: async () => {
    myAction.getData(urlData[getDataIndex])
    await new Promise((resolve) => {
      window.callback = (res) => {
        getDataIndex++
        myAction.run(res)
        resolve(true)
      }
    })
    if (getDataIndex < urlData.length) {
      myAction.mapUrl()
    } else {
      let sum = total.reduce((total, item) => total + item.earend, 0)
      
      console.log(`\n总盈利：${sum}， 详细:`, total.map(item => `${item.title}:${item.earend}`).join('，'))
    
      let buyUseMoney =  buyUseMoneyArr.reduce((total, item) => total + item, 0)
      console.log(`总共花了多少钱:${buyUseMoney}，收益率:${(sum / buyUseMoney * 100).toFixed(2) - 0}%，加仓次数:${addCount}, 花销详情：`, buyUseMoneyArr)
      //打印交易单数组
      //console.log(JSON.stringify(dealingSlipArr, null, 2))

      console.log('结束', getDataIndex)

    }
  },
  mapUrlFast() {
    window.callback = (res) => {
      getDataIndex++
      myAction.run(res)
    }
    for(let i = 0; i < urlData.length; i++) {
      myAction.getData(urlData[i])
    }
    let timer = setInterval(() => {
      if (getDataIndex === urlData.length) {
        let sum = total.reduce((total, item) => total + item.earend, 0)
        console.log(`\n总盈利：${sum}， 详细:`, total)
      
        let buyUseMoney =  buyUseMoneyArr.reduce((total, item) => total +item, 0)
        console.log(`总共花了多少钱:${buyUseMoney}，收益率:${(sum / buyUseMoney * 100).toFixed(2) - 0}%，加仓次数:${addCount}, 花销详情：`, buyUseMoneyArr)
        //打印交易单数组
        //console.log(JSON.stringify(dealingSlipArr, null, 2))
  
        console.log('结束', getDataIndex)
        clearInterval(timer)
      }
    }, 100);
  }
})

myAction.mapUrl()
//myAction.mapUrlFast()


if (false) {
  myAction.formatData()
  myAction.dealAll()
}







