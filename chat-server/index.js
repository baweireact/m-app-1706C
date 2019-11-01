const express = require('express');
const app = express();
require('./util/global');
const middleware = require('./middlewares');
const router = require('./router');

// 中间件
middleware(app);

// 路由
router(app);

// 接口测试 GET
app.get('/getTest', (req, res, next) => {
    // console.log(req.query);
    req.session.abc = 1;
    res.send('getTest');
})

// 接口测试 POST
app.post('/postTest', (req, res, next) => {
    // console.log(req.body);
    console.log(req.session);
    res.send('postTest');
})



app.listen(3000, () => {

})