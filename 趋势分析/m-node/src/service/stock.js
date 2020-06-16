const { query } = require('../db')

const getAnalyseList = async () => {
  let data = await query(`SELECT * FROM stock_analyse`)
  return data
}

const addAnalyseItem = async (list) => {
  // list = [
  //   {
  //     order_number: 719,
  //     name: '云南投城1',
  //     code: '002053',
  //     current_price: 7.25,
  //     current_earned_percent: 0.0615,
  //     main_add: 1982600,
  //     some_days: 10,
  //     history_price: 6.99,
  //     some_days_earned_percent: 0.0143,
  //     max_capital_risk: -0.03,
  //     max_single_day_risk: -0.0115,
  //     max_series_risk:-0.0057,
  //     next_day_earned_percent:-0.01,
  //     repeat_selected: 1,
  //     datetime: '2020-06-15',
  //     create_time: '1592215159'
  //   },
  //   {
  //     order_number: 719,
  //     name: '云南投城2',
  //     code: '002053',
  //     current_price: 7.25,
  //     current_earned_percent: 0.0615,
  //     main_add: 1982600,
  //     some_days: 10,
  //     history_price: 6.99,
  //     some_days_earned_percent: 0.0143,
  //     max_capital_risk: -0.03,
  //     max_single_day_risk: -0.0115,
  //     max_series_risk:-0.0057,
  //     next_day_earned_percent:-0.01,
  //     repeat_selected: 1,
  //     datetime: '2020-06-15',
  //     create_time: '1592215159'
  //   }
  // ]

  let formatItem = {
    order_number: 719,
    name: '云南投城',
    code: '002053',
    current_price: 7.25,
    current_earned_percent: 0.0615,
    main_add: 1982600,
    some_days: 10,
    history_price: 6.99,
    some_days_earned_percent: 0.0143,
    max_capital_risk: -0.03,
    max_single_day_risk: -0.0115,
    max_series_risk:-0.0057,
    next_day_earned_percent: null,
    repeat_selected: null,
    datetime: '2020-06-15',
    create_time: Date.now()
  }

  list = list.map(item => {
    return { ...formatItem, ...item }
  })

  let valuesString = ``
  list.forEach((item, index) => {
    valuesString += `(
      ${item.order_number}, 
      '${item.name}', 
      '${item.code}',
      ${item.current_price}, 
      ${item.current_earned_percent}, 
      ${item.main_add}, 
      ${item.some_days},
      ${item.history_price},
      ${item.some_days_earned_percent},
      ${item.max_capital_risk},
      ${item.max_single_day_risk},
      ${item.max_series_risk},
      ${item.next_day_earned_percent},
      ${item.repeat_selected},
      '${item.datetime}',
      '${item.create_time}'
      )${index === list.length - 1 ? ';' : ','}`
  })

  console.log(valuesString)

  let data = await query(`INSERT INTO stock_analyse (
    order_number, 
    name, 
    code, 
    current_price, 
    current_earned_percent, 
    main_add, 
    some_days, 
    history_price, 
    some_days_earned_percent, 
    max_capital_risk, 
    max_single_day_risk, 
    max_series_risk,
    next_day_earned_percent, 
    repeat_selected,
    datetime,
    create_time
    )
    VALUES ${valuesString}`)
  
  return data
}

module.exports = {
  getAnalyseList,
  addAnalyseItem
}