const trimData = ()=>{
    let str = "  Prakash  ";
    return str.trim(); 
}
const changetoLowerCase = ()=>{
    let str = "PraKASH"; 
    return str.toLowerCase(); 
}

const changeToUpperCase = ()=>{
    let str = "prakash"; 
    return str.toUpperCase(); 
}

module.exports = {
    trimData: trimData,
    lowerCase: changetoLowerCase,
    upperCase: changeToUpperCase
}