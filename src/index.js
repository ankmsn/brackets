module.exports = function check(str, bracketsConfig) {
  for (i=0; i<bracketsConfig.length; i++){
    let newStr = str;
    str = str.replaceAll(bracketsConfig[i][0]+bracketsConfig[i][1], '')
    if (str != newStr) {i=-1} else if (str.length === 0) {return true}
  }
  return false
  }

