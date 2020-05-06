let data = [
// {
//   code: 600001,   //股票代码
//   title: '持续上涨',  //趋势描述
//   price: 0,       //持股单价
//   count: 0,       //持股数量
//   totalPrice: 0,  //持股成本总价
//   currentPrice: 0, //当前价
//   earned: 0,      //盈利额
//   earnedPercent: 0,  //盈利百分比
//   stopReferenceEarned: 0, //盈利额止损参考
//   isClear: false,    //是否已清仓
//   isFirst: true,      //是否是刚建仓，从未加过仓
//   clearPrice: 0, //清仓价格
//   list: [50, 52, 55, 55.5, 56, 56.5, 60, 62, 64, 66, 67, 68, 70, 72, 75, 76, 77, 78, 80, 81, 82, 83, 85, 86, 88, 90, 91]
// },
// {
//   code: 600002,
//   title: '先涨后跌，然后持续下跌',
//   list: [50, 52, 55, 49.5, 50, 48, 45, 44, 43, 41]
// },
// {
//   code: 600003,
//   title: '持续下跌',
//   list: [50, 49, 48, 47, 46, 45, 44, 43, 42, 41]
// },
// {
//   code: 600004,
//   title: '先涨后跌，然后持续上涨',
//   list: [50, 52, 55, 57, 55, 52, 48, 45, 47, 51, 52, 55, 57, 58, 60, 62, 65, 68, 70]
// },
// {
//   code: 600005,
//   title: '横盘震荡',
//   list: [50, 52, 53, 52, 51, 50, 49, 48, 47, 50, 52, 54, 53, 52, 51, 49, 47, 50, 51]
// },
// {
//   code: 600006,
//   title: '低价位股',
//   list: [5.1, 5.2, 5.3, 5.2, 5.1, 5.3, 5.4, 5.5, 5.4, 5.6, 5.7, 5.8, 5.6, 5.7, 5.9, 6.1, 6.3, 6.5, 6.3]
// },
// {
//   code: 600006,
//   title: '高价位股',
//   list: [90, 92, 88, 90, 89, 95, 100, 98, 102, 106, 110, 115, 108, 105, 110, 114, 118, 122, 125]
//},
{
  code: '1',
  title: '测试',
  list: [50,48.24,51,53,53.4,54,52.6,50,49,47,49,47,45,44,43.6,42,40,38,41,42.15,45,46,47.2,50.52,55,57.1,59.28,61]
}     
]

//data = []



let urlData = [
  "http://59.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002410&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588576042360",
  "http://46.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600703&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588580618099",
  "http://83.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601012&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588662679511",
  "http://2.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000651&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588662835295",
  "http://76.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000538&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588663058445",
  "http://25.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600036&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588663208779",
  "http://85.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601236&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588663341446",
  "http://50.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600030&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588663458022",
  "http://32.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600009&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588663715991",
  "http://12.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002223&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588666530037",
]






