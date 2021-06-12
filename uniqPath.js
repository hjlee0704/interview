var uniquePaths = function(m, n) {
  let cols = new Array(n).fill(0);
  let rows = new Array(m).fill(cols);
  for (let row = 0; row < rows.length; row++) {
      for(let col = 0; col < cols.length; col++) {
          if(row === 0 || col === 0) {
              rows[row][col] = 1;
          } else {
              rows[row][col] = rows[row-1][col] + rows[row][col-1];
          }
          
      }
      //console.log(rows);
  }
 // console.log(rows);
  return rows[m-1][n-1];
};
