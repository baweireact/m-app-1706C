const fs = require('fs');

// 读取json文件

function readJson(path){
    let json = fs.readFileSync(path, 'utf-8')
    if(!json){
        json = '[]';
    }
    json = JSON.parse(json);
    return json;
}

// 写入json文件

function writeJson(path, content){
    if(typeof content !== 'string'){
        content = JSON.stringify(content);
    }
    fs.writeFileSync(path, content, 'utf-8');
}

module.exports = {
    readJson, writeJson
}