/**
 * 发布评论
 */

const path = require('path');
const {msg} = require(path.join(global.ROOT_PATH, './util/response.js'));
const {readJson, writeJson} = require(path.join(global.ROOT_PATH, './util/dealJson.js'));
const commentReplyPath = path.join(global.ROOT_PATH, './data/commentReply.json');
const userPath = path.join(global.ROOT_PATH, './data/user.json');
const dynamicPath = path.join(global.ROOT_PATH, './data/dynamicWord.json');
const uuid = require('uuid');


module.exports = (req, res, next) => {
    const {commentContent, dynamicid} = req.body;
    const {uid} = req.session;
    // 判断是否有评论内容
    if(!commentContent){
        res.send(msg({
            code: 0,
            msg: '评论内容不能为空'
        }))
        return;
    }
    // 判断uid是否存在
    let userIndex = readJson(userPath).findIndex(item => item.uid === uid);
    if(userIndex === -1){
        res.send(msg({
            msg: '评论用户不存在',
            code: 0
        }));
        return;
    }
    // 判断dynamicid是否存在
    let dynamicIndex = readJson(dynamicPath).findIndex(item => item.dynamicid === dynamicid);
    if(dynamicIndex === -1){
        res.send(msg({
            msg: '评论的动态不存在',
            code: 0
        }));
        return;
    }
    // 保存评论
    let commentReplyid = uuid.v1();
    let commentReplyData = readJson(commentReplyPath);
    commentReplyData.push({
        commentReplyid, uid, dynamicid, commentContent, type: 'comment'
    });
    writeJson(commentReplyPath, commentReplyData);
    res.send(msg({
        msg: '评论成功'
    }))
}