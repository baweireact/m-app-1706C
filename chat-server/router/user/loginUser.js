const path = require('path');
const {msg} = require(path.join(global.ROOT_PATH, './util/response.js'));

module.exports = (req, res, next) => {
    res.send(msg({
        msg: '获取当前登录用户名成功',
        data: req.session.userName
    }))
}