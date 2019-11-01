const path = require('path');
const userPath = path.join(global.DATA_PATH, './user.json');
const {readJson} = require(path.join(global.ROOT_PATH, './util/dealJson.js'));
const {userNameFormat, userPwdFormat} = require('./util');
const {msg} = require(path.join(global.ROOT_PATH, './util/response.js'));
module.exports = (req, res, next) => {
    const {userName, userPwd} = req.body;
    // 判断userName和userPwd是否合法
    if(!userNameFormat(userName)){
        res.send(msg({
            msg: '用户名不合法',
            code: 0
        }))
        return;
    }
    if(!userPwdFormat(userPwd)){
        res.send(msg({
            msg: '密码不合法',
            code: 0
        }));
        return;
    }
    // 判断用户是否存在
    let userData = readJson(userPath);
    let index = userData.findIndex(item => item.userName === userName);
    if(index === -1){
        res.send(msg({
            msg: '该用户不存在',
            code: 0
        }))
        return;
    }
    // 判断该用户密码是否正确
    if(userPwd !== userData[index].userPwd){
        res.send(msg({
            msg: '用户' + userName + '的密码不正确',
            code: 0
        }));
        return;
    }
    // 用户名密码正确，成功登录
    req.session.isLogin = true;
    // 记录用户的相关信息
    let uid = userData[index].uid;
    Object.assign(req.session, {userName, userPwd, uid});
    // 响应内容
    res.send(msg({msg:'登录成功'}));
}
