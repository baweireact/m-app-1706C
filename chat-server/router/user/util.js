// 检查用户名是否重复

function userNameIsRepeat(resource, userName){
    return resource.findIndex(item => item.userName === userName)  !== -1;
}

// 判断用户格式是否符合要求

function userNameFormat(userName){
    if(!userName){
        return false;
    }
    const userNameReg = /\w{1,}/;
    return userNameReg.test(userName);
}

// 判断密码是否合法

function userPwdFormat(userPwd){
    if(!userPwd){
        return false;
    }
    const userNameReg = /\w{1,}/;
    return userNameReg.test(userPwd);
}

module.exports = {
    userNameIsRepeat,
    userNameFormat,
    userPwdFormat
}