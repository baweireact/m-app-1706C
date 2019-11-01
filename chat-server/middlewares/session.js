
const session = require('express-session');
const cookieParser = require('cookie-parser');
module.exports = app => {
    app.use(cookieParser('I love you'));
    app.use(session({secret: 'I love you', resave: false, saveUninitialized: true}));
}