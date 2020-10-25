
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];

  if(typeof matrix == 'undefined'){
    res = [];
  }
  else {
    for (let i = 0; i < matrix.length; i++){
      matrix[i].sort((a,b) => a - b);
      if ( i % 2 === 1){
        matrix[i] = matrix[i].reverse();
      }
    }
    for (let i = 0; i < matrix.length; i++){
      res.push(...matrix[i]);
    }
  }
  return res;
}
