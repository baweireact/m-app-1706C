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
  //1.三安光电
  "http://46.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600703&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588580618099",
  //2.红塔证券
  "http://85.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601236&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588663341446",
  //3.中信建投
  "http://55.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601066&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588900785833",
  //4.鱼跃医疗
  "http://12.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002223&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588666530037",
  //5.云南白药
  "http://76.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000538&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588663058445",
  //6.隆基股份
  "http://83.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601012&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588662679511",
  //7.广联达
  "http://59.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002410&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588576042360",
  //8.三一重工
  "http://5.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600031&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088804125",
  //9.海螺水泥
  "http://79.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600585&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588899776662",
  //10.山东黄金
  "http://28.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600547&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588899863363",
  //11.复兴医药
  "http://43.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600196&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588899941521",
  //12.国泰君安
  "http://73.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601211&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088066857",
  //13.纳思达
  "http://4.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002180&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588924674422",
  //14.洛阳钼业
  "http://58.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.603993&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088116460",
  //15.保利地产
  "http://81.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600048&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088173026",
  //16.中国中铁
  "http://13.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601390&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089571755",  
  //17.恒瑞医药
  "http://23.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600276&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088964187",
  //18.中国铁建
  "http://19.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601186&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088696931",
  //19.农业银行
  "http://44.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601288&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089214966",
  //20.海尔智家
  "http://72.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600690&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588900711040",
  //21.中国国旅
  "http://39.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601888&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087521589",
  //22.中国联通
  "http://60.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600050&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088538102",
  //23.伊利股份
  "http://46.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600887&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087872158",
  //24.新华保险
  "http://95.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601336&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089388498",
   
  

  //1.中信证券
  "http://50.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600030&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588663458022",
  //2.招商银行
  "http://25.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600036&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588663208779",
  //3.华泰证券
  "http://68.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601688&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087654001",
  //4.民生银行
  "http://86.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600016&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088379374",
  //5.中国银行
  "http://92.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601988&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088475555",
  //6.中国太保
  "http://11.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601601&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089969842",
  //7.中国神华
  "http://14.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601088&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088637481",
  //8.中国建筑
  "http://16.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601668&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089325245",
  //9.交通银行
  "http://91.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601328&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089136409",
  //10.工业富联
  "http://40.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601138&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089087905",
  //11.万华化学
  "http://92.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600309&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087339396",
  //12.工商银行
  "http://8.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601398&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089519404",
  //13.中国国航
  "http://32.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601111&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088256813",
  //14.上海机场
  "http://32.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600009&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588663715991",
  //15.中国中车
  "http://57.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601766&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088853782",
  //16.建设银行
  "http://73.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601939&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088431122",
  //17.海通证券
  "http://92.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600837&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087406773",
  //18.中国重工
  "http://33.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601989&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089473446",
  //19.兴业银行
  "http://39.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601166&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087927823",
  //20.华夏幸福
  "http://20.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600340&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087994060",
  //21.中国石化
  "http://14.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600028&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089268894",
  //22.浦发银行
  "http://78.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600000&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088911549",
  //23.格力电器
  "http://2.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000651&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588662835295",
  //24.光大银行
  "http://27.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601818&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088334053",
  //25.中国石油
  "http://33.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601857&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089019815",
  //26.中国人寿
  "http://22.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601628&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087583929",
  //27.中国平安
  "http://30.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601318&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087730276",
  //28.中国人保
  "http://18.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601319&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087470867",






]






