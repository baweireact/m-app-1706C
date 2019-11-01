// 匹配数组信息
// 应用场景是在两个数组中 一个数组中的对象想要通过某种条件和另一个数组中的对象匹配并融合的时候，可以使用该方法。
function assignArray(targetArr, findArr, targetPropName, findPropName){
    if(!findPropName){
        findPropName = targetPropName;
    }
    return targetArr.map(item => {
        // 根据该对象中的propsName字段去匹配findArr中的对象
        let findOne = findArr.find(val => val[findPropName] === item[targetPropName]);
        if(findOne){
            return {...item, ...findOne}
        }
        return item;
    })
}

module.exports = {
    assignArray
}