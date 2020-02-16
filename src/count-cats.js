module.exports = function countCats(matrix) {
  let res = 0;
  matrix.forEach(item => {
    item.forEach((item2) => {
      if (item2 === '^^') {
        res++;
      }
    })    
  });
  return res;
};
