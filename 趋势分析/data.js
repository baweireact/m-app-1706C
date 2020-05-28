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
  // //1.三安光电
  // "http://46.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600703&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588580618099",
  // //2.红塔证券
  // "http://85.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601236&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588663341446",
  // //3.中信建投
  // "http://55.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601066&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588900785833",
  // //4.鱼跃医疗
  // "http://12.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002223&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588666530037",
  // //5.云南白药
  // "http://76.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000538&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588663058445",
  // //6.隆基股份
  // "http://83.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601012&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588662679511",
  // //7.广联达
  // "http://59.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002410&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588576042360",
  // //8.三一重工
  // "http://5.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600031&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088804125",
  // //9.海螺水泥
  // "http://79.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600585&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588899776662",
  // //10.山东黄金
  // "http://28.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600547&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588899863363",
  // //11.复兴医药
  // "http://43.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600196&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588899941521",
  // //12.国泰君安
  // "http://73.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601211&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088066857",
  // //13.纳思达
  // "http://4.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002180&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588924674422",
  // //14.洛阳钼业
  // "http://58.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.603993&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088116460",
  // //15.保利地产
  // "http://81.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600048&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088173026",
  // //16.中国中铁
  // "http://13.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601390&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089571755",  
  // //17.恒瑞医药
  // "http://23.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600276&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088964187",
  // //18.中国铁建
  // "http://19.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601186&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088696931",
  // //19.农业银行
  // "http://44.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601288&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089214966",
  // //20.海尔智家
  // "http://72.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600690&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588900711040",
  // //21.中国国旅
  // "http://39.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601888&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087521589",
  // //22.中国联通
  // "http://60.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600050&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088538102",
  // //23.伊利股份
  // "http://46.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600887&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087872158",
  // //24.新华保险
  // "http://95.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601336&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089388498",
   
  

  // //1.中信证券
  // "http://50.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600030&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588663458022",
  // //2.招商银行
  // "http://25.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600036&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588663208779",
  // //3.华泰证券
  // "http://68.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601688&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087654001",
  // //4.民生银行
  // "http://86.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600016&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088379374",
  // //5.中国银行
  // "http://92.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601988&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088475555",
  // //6.中国太保
  // "http://11.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601601&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089969842",
  // //7.中国神华
  // "http://14.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601088&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088637481",
  // //8.中国建筑
  // "http://16.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601668&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089325245",
  // //9.交通银行
  // "http://91.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601328&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089136409",
  // //10.工业富联
  // "http://40.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601138&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089087905",
  // //11.万华化学
  // "http://92.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600309&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087339396",
  // //12.工商银行
  // "http://8.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601398&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089519404",
  // //13.中国国航
  // "http://32.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601111&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088256813",
  // //14.上海机场
  // "http://32.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600009&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588663715991",
  // //15.中国中车
  // "http://57.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601766&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088853782",
  // //16.建设银行
  // "http://73.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601939&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088431122",
  // //17.海通证券
  // "http://92.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600837&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087406773",
  // //18.中国重工
  // "http://33.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601989&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089473446",
  // //19.兴业银行
  // "http://39.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601166&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087927823",
  // //20.华夏幸福
  // "http://20.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600340&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087994060",
  // //21.中国石化
  // "http://14.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600028&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089268894",
  // //22.浦发银行
  // "http://78.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600000&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088911549",
  // //23.格力电器
  // "http://2.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000651&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588662835295",
  // //24.光大银行
  // "http://27.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601818&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088334053",
  // //25.中国石油
  // "http://33.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601857&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089019815",
  // //26.中国人寿
  // "http://22.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601628&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087583929",
  // //27.中国平安
  // "http://30.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601318&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087730276",
  // //28.中国人保
  // "http://18.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601319&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087470867",

  // // 沪深300
  // // 天七锂业
  // "http://10.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002466&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589347205470",
  // //平安银行
  // "http://61.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000001&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589347402460",
  // //万科A
  // "http://77.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000002&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589347455616",
  // //中兴通讯
  // "http://36.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000063&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589347506292",
  // //华侨城A
  // "http://41.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000069&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589353815409",
  // //TCL科技
  // "http://50.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000100&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589353886113",
  // //中联重科
  // "http://3.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000157&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589353961105",
  // //申万宏源
  // "http://66.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000166&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354029581",
  // //美的集团
  // "http://50.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000333&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354086914",
  // //潍柴动力
  // "http://14.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000338&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354140598",
  // //东旭光电
  // "http://16.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000413&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354207185",
  // //渤海租赁
  // "http://13.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000415&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354257098",
  // //东阿阿胶
  // "http://73.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000423&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354411301",
  // //徐工机械
  // "http://87.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000425&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354476605",
  // //泸州老窖
  // "http://82.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000568&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354577531",
  // //长安汽车
  // "http://30.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000625&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354630617",
  // //天茂集团
  // "http://19.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000627&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354687813",
  // //攀钢钒钛
  // "http://89.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000629&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354743924",
  // //铜陵有色
  // "http://34.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000630&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354802650",
  // //金科股份
  // "http://36.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000656&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589357849904",
  // //阳光城
  // "http://9.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000671&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589357978723",
  // //恒逸石化
  // "http://29.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000703&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589358028314",
  // //河钢股份
  // "http://17.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000709&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589358091772",
  // //美锦能源
  // "http://62.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000723&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589358141119",
  // //京东方A
  // "http://13.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000725&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589358194636",
  // //国元证券
  // "http://74.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000728&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589358241764",
  // //中航飞机
  // "http://45.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000768&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589358289563",
  // //广发证券
  // "http://53.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000776&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589358346749",
  // //长江证券
  // "http://27.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000783&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589358410982",
  // //北新建材
  // "http://91.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000786&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589358456895",
  // //新希望
  // "http://51.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000876&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589420531487",
  // //双汇发展
  // "http://4.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000895&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589420585586",
  // //鞍钢股份
  // "http://81.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000898&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589420654518",
  // //紫光股份
  // "http://26.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000938&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589420709785",
  // //中南建投
  // "http://77.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000961&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589420819613",
  // //华东医药
  // "http://83.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000963&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589420879430",
  // //招商蛇口
  // "http://63.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.001979&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589420961587",
  // //新和成
  // "http://6.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002001&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589421058643",
  // //华兰生物
  // "http://82.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002007&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589421113211",
  // //大族激光
  // "http://47.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002008&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589421172119",
  // //传化智联
  // "http://19.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002010&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589424044806",
  // //苏宁易购
  // "http://97.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002024&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589424128781",
  // //分众传媒
  // "http://31.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002027&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589424181923",
  // //苏泊尔
  // "http://54.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002032&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589424250603",
  // //美年健康
  // "http://59.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002044&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589347105066",
  // //三花智控
  // "http://86.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002050&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589424373815",  
  // //金螳螂
  // "http://28.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002081&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589445991311",
  // //韵达股份
  // "http://1.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002120&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446044715",
  // //宁波银行
  // "http://72.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002142&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446090274",
  // //荣盛发展
  // "http://54.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002146&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446171178",
  // //石基信息
  // "http://42.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002153&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=158944622371",
  // //中航光电
  // "http://96.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002179&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446271710",
  // //金凤科技
  // "http://68.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002202&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446325416",
  // //科大讯飞
  // "http://75.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002230&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446373151",
  // //大华股份
  // "http://82.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002236&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446424117",
  // //歌尔股份
  // "http://46.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002241&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446568427",
  // //上海莱士
  // "http://94.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002252&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446624152",
  // //东方雨虹
  // "http://32.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002271&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446687786",
  // //信立泰
  // "http://38.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002294&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446746229",
  // //海大集团
  // "http://12.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002311&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446820404",
  // //顺丰控股
  // "http://67.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002352&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446871085",
  // //延安必康
  // "http://58.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002411&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446923465",
  // //海康威视
  // "http://16.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002415&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448386041",
  // //科伦药业
  // "http://35.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002422&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448438166",
  // //欧菲光
  // "http://31.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002456&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448504576",
  // //赣锋锂业
  // "http://80.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002460&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448558384",
  // //天齐锂业
  // "http://58.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002466&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448611217",
  // //申通快递
  // "http://59.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002468&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448698151",
  // //立讯精密
  // "http://88.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002475&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448748243",
  // //荣盛石化
  // "http://65.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002493&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448808578",
  // //老板电器
  // "http://45.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002508&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448873460",
  // //三七互娱
  // "http://17.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002555&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448922316",
  // //巨人网络
  // "http://20.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002558&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448975491",

  //"http://17.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002556&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448975491",
  //"002558",
  //"000596"
]


let urlListData = [
  //沪深300
  //按股票代码排序，1~5页
  "http://92.push2.eastmoney.com/api/qt/clist/get?cb=callback&pn=1&pz=20&po=0&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f12&fs=b:BK0500+f:!50&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f45&_=1589461045724",
  "http://92.push2.eastmoney.com/api/qt/clist/get?cb=callback&pn=2&pz=20&po=0&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f12&fs=b:BK0500+f:!50&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f45&_=1589461045422",
  "http://92.push2.eastmoney.com/api/qt/clist/get?cb=callback&pn=3&pz=20&po=0&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f12&fs=b:BK0500+f:!50&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f45&_=1589461045891",
  "http://92.push2.eastmoney.com/api/qt/clist/get?cb=callback&pn=4&pz=20&po=0&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f12&fs=b:BK0500+f:!50&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f45&_=1589461045910",
  "http://92.push2.eastmoney.com/api/qt/clist/get?cb=callback&pn=5&pz=20&po=0&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f12&fs=b:BK0500+f:!50&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f45&_=1589461045924",





]





