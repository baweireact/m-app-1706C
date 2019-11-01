const {Router} = require('express');

const router = Router();
const register = require('./register');
const login = require('./login');
const loginUser = require('./loginUser');
router.post('/register', register);
router.post('/login', login);
router.get('/loginUser', loginUser);

module.exports = router;