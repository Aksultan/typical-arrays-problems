
exports.min = function min (array) {
  return array!=undefined&&array.length?array.sort((a, b)=> a - b)[0]:0
}

exports.max = function max (array) {
  return array!=undefined&&array.length?array.sort((a, b)=> a - b).slice(-1)[0]:0
}

exports.avg = function avg (array) {
  return array!=undefined&&array.length?(array.reduce((x,y)=>x+y)/array.length):0
}
