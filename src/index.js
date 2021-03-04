
exports.min = function min(array) {
  if (!array || !Array.isArray(array) || array.length === 0) {
    return 0;
  }

  return Math.min(...array);
}

exports.max = function max(array) {
  if (!array || !Array.isArray(array) || array.length === 0) {
    return 0;
  }

  return Math.max(...array);
}

exports.avg = function avg(array) {
  if (!Array.isArray(array) || !array || array.length === 0) {
    return 0;
  }

  return array.reduce((el, acc) => el + acc) / array.length
} 
