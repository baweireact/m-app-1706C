const {Router} = require('express');
const router = Router();
const sendWord = require('./sendWord');
const showDynamic = require('./showDynamic');
const sendPicWord = require('./sendPicWord');
router.post('/sendWord', sendWord);
router.post('/sendPicWord', sendPicWord);
router.get('/showDynamic', showDynamic);

module.exports = router;