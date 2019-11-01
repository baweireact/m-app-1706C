/**
 * 回复消息
 */
const path = require('path');
const {msg} = require(path.join(global.ROOT_PATH, './util/response.js'));
const {readJson, writeJson} = require(path.join(global.ROOT_PATH, './util/dealJson.js'));
const commentReplyPath = path.join(global.ROOT_PATH, './data/commentReply.json');
const userPath = path.join(global.ROOT_PATH, './data/user.json');
const uuid = require('uuid');
module.exports = (req, res, next) => {
    const {uid} = req.session;
    const {toCommentReplyid, replyContent} = req.body;

    // 判断是否有回复参数
    if(!replyContent){
        res.send(msg({
            code: 0,
            msg: '回复内容为空'
        }))
        return;
    }
    // 判断被回复的对象是否存在
    let commentReplyIndex = readJson(commentReplyPath).findIndex(item => item.commentReplyid === toCommentReplyid);
    if(commentReplyIndex === -1){
        res.send(msg({
            code: 0, 
            msg: '针对要回复的消息不存在'
        }))
        return;
    }
    // 判断发起回复的用户是否存在
    let userIndex = readJson(userPath).findIndex(item => item.uid === uid);
    if(userIndex === -1){
        res.send(msg({
            code: 0,
            msg: '发起回复的用户不存在'
        }));
        return;
    }
    // 存入回复消息

    let commentReplyid = uuid.v1();
    let commentReplyData = readJson(commentReplyPath);
    commentReplyData.push({
        commentReplyid, toCommentReplyid, replyContent, uid, type: 'reply'
    });
    writeJson(commentReplyPath, commentReplyData);
    res.send(msg({
        msg: '消息回复成功'
    }))
}