
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix == undefined) {
    return [];
  }
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 1) {
      matrix[i] = matrix[i].reverse();
    }
  }
  for(let i = 0; i < matrix.length; i++) {
    for (let q = 0; q < matrix[i].length; q++) {
      result.push(matrix[i][q]);
    }
  }
  return result;
}
