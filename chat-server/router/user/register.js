const path = require('path');
const {readJson, writeJson} = require(path.join(global.ROOT_PATH, './util/dealJson.js'));
const uuid = require('uuid');
let userPath = path.join(global.DATA_PATH, './user.json');
const {userNameIsRepeat, userNameFormat, userPwdFormat} = require('./util');
const {msg} = require(path.join(global.ROOT_PATH, './util/response.js'));
module.exports = (req, res, next) => {
    const uid = uuid.v1();
    const {userName, userPwd} = req.body;
    // 判断参数是否合法
    if(!userNameFormat(userName)){
        res.send(msg({
            msg: 'userName - 用户名不合法',
            code: 0
        }));
        return;
    }
    if(!userPwdFormat(userPwd)){
        res.send(msg({
            msg: 'userPwd - 用户密码不合法',
            code: 0
        }));
        return;
    }
    let userData = readJson(userPath);
    // 判断用户名是否重复
    if(userNameIsRepeat(userData, userName)){
        res.send(msg({
            msg: '用户名重复',
            code: 0
        }));
        return;
    };
    userData.push({uid, userName, userPwd});
    writeJson(userPath, userData);
    res.send({msg: '注册成功'});
}
