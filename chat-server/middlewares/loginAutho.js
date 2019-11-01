/**
 * 验证是否是登录状态
 */
 const url = require('url');
 const path = require('path');
 const {msg} = require(path.join(global.ROOT_PATH, './util/response.js'));
 const whiteList = [
     {pathname: '/user/register', method: 'POST'},
     {pathname: '/user/login', method: 'POST'}
 ]
 const loginAutho = (req, res, next) => {
     const {method} = req;
     const {pathname} = url.parse(req.url);

    // 是否是白名单中的接口
    let index = whiteList.findIndex(item => item.pathname === pathname  && item.method === method);
    if(index !== -1){ // 如果是白名单中的接口则直接穿过。
        next();
        return;
    }
    // 是否是登录状态
    // if(!req.session.isLogin){ // 未登录
    //     res.send(msg({
    //         code: 0,
    //         msg: '还没有登录'
    //     }));
    //     return;
    // }
    next(); // 已经登录，直接穿过
 }
 module.exports = app => {
     app.use(loginAutho); //
 }