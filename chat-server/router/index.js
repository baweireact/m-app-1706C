
const userRouter = require('./user');
const dynamicRouter = require('./dynamic');
const commentReplyRouter = require('./commentReply');
module.exports = app => {
    app.use('/user', userRouter);
    app.use('/dynamic', dynamicRouter);
    app.use('/commentreply', commentReplyRouter);
}

