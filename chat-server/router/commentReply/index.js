
const {Router} = require('express');
const router = Router();
const publishReply = require('./publishReply');
const publishComment = require('./publishComment');

router.post('/publishreply', publishReply);
router.post('/publishcomment', publishComment);

module.exports = router;