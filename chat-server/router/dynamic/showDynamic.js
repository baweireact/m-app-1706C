const path = require('path');
const {msg} = require(path.join(global.ROOT_PATH, './util/response.js'));
const {readJson} = require(path.join(global.ROOT_PATH, './util/dealJson.js'));
const dynamicPath = path.join(global.ROOT_PATH, './data/dynamicWord.json');
const commentReplyPath = path.join(global.ROOT_PATH, './data/commentReply.json');
const userPath = path.join(global.ROOT_PATH, './data/user.json');
const { assignArray } = require(path.join(global.ROOT_PATH, './util/util.js'));


// 根据动态id筛选出对应的评论

function filterComment(dynamicid, commentReplyData){
    return commentReplyData.filter(item => {
        if(item.type === 'reply'){
            return false;
        }
        if(item.dynamicid !== dynamicid){
            return false;
        }
        return true;
    })
}

// 递归获取回复

function getReply(commentReply, commentReplyData, userData){
    let {commentReplyid} = commentReply;
    // 查找该条回复的所有回复
    let toReplys = commentReplyData.filter(item => {
        return item.toCommentReplyid === commentReplyid;
    });
    // 动态融合用户数据
    toReplys = assignArray(toReplys, userData, 'uid');
    // 递归查找
    toReplys.forEach(item => getReply(item, commentReplyData, userData));
    commentReply.replys = toReplys;

}

module.exports = (req, res, next) => {
    let dynamicData = readJson(dynamicPath);
    let userData = readJson(userPath);
    let commentReplyData = readJson(commentReplyPath);
    // 动态数据中融合用户数据
    dynamicData = assignArray(dynamicData, userData, 'uid');
    // 查找每条动态对应的评论
    dynamicData.forEach(item => {
        let comments = filterComment(item.dynamicid, commentReplyData);
        comments = assignArray(comments, userData, 'uid');
        // 递归查找评论所对应的回复
        comments.forEach(item => getReply(item, commentReplyData, userData));
        item.comments = comments;
    })
    res.send(msg({
        msg: '获取动态成功',
        data: dynamicData
    }));
}