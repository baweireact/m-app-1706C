const path = require('path');
const {msg} = require(path.join(global.ROOT_PATH, './util/response.js'));
const {readJson, writeJson} = require(path.join(global.ROOT_PATH, './util/dealJson.js'));
const dynamicPath = path.join(global.ROOT_PATH, './data/dynamicWord.json');
const uuid = require('uuid');
/**
 * url: /dynamic/sendWord
 * method: POST
 * query: {dynamicContent: string}
 */
module.exports = (req, res, next) => {
    const {dynamicContent} = req.body;
    // 判断参数是否合法
    if(!dynamicContent){
        res.send(msg({
            code: 0,
            msg: '请传入正确动态内容'
        }));
        return;
    }
    // 把动态存入json数据,并指明用户。
    let dynamicid = uuid.v1();
    let {uid, userName} = req.session;
    let dynamicData = readJson(dynamicPath);
    dynamicData.push({dynamicid, uid, userName, dynamicContent});
    writeJson(dynamicPath, dynamicData);
    res.send(msg({
        msg: '动态发表成功'
    }))


}