function msg(options){
    let { msg = '没什么消息', code = 1, data = [] } = options;
    return {
        msg, code, data
    }
}

module.exports = {
    msg
}