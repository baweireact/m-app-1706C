const bodyParser = require('./bodyParser');
const publicStatic = require('./publicStatic');
const session = require('./session');
const loginAutho = require('./loginAutho');
module.exports = app => {
    publicStatic(app); // 静态资源目录
    bodyParser(app); // 处理post数据
    session(app); // session会话
    loginAutho(app); // 登录权限验证
}