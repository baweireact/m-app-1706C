/**
 * 
 * 发图文状态
 * 
 *  */ 


const path = require('path');
const {msg} = require(path.join(global.ROOT_PATH, './util/response.js'));
const {readJson, writeJson} = require(path.join(global.ROOT_PATH, './util/dealJson.js'));
const dynamicPath = path.join(global.ROOT_PATH, './data/dynamicWord.json');
const uuid = require('uuid');
const upload = require(path.join(global.ROOT_PATH, './middlewares/multer.js'));

module.exports = [upload.array('dynamicPic', 9), (req, res, next) => {
    console.log(req.files);
    res.send('ok');
}];