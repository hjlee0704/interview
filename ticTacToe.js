class TicTacToe {
  constructor(n) {
    this.len = n;

    this.rows = new Array(n).fill(0);
    this.cols = new Array(n).fill(0);
    this.dia = 0;
    this.antiDia = 0;
  }

  move(row, col, player) {
    const i = player === 1 ? 1 : -1;

    this.rows[row] += i;
    this.cols[col] += i;
    if (row === col) this.dia += i;
    if (col === this.len - row - 1) this.antiDia += i;

    if (
      Math.abs(this.rows[row]) === this.len ||
      Math.abs(this.cols[col]) === this.len ||
      Math.abs(this.dia) === this.len ||
      Math.abs(this.antiDia) === this.len
    ) return player;

    return 0;
  }
}



/**
 * Initialize your data structure here.
 * @param {number} n
 */
 var TicTacToe = function(n) {
  this.row = new Array(n).fill(0);
  this.col = new Array(n).fill(0);
  this.dia1 = 0;
  this.dia2 = 0;
  this.size = n;
};

/**
* Player {player} makes a move at ({row}, {col}).
      @param row The row of the board.
      @param col The column of the board.
      @param player The player, can be either 1 or 2.
      @return The current winning condition, can be either:
              0: No one wins.
              1: Player 1 wins.
              2: Player 2 wins. 
* @param {number} row 
* @param {number} col 
* @param {number} player
* @return {number}
*/
TicTacToe.prototype.move = function(row, col, player) {
  let score;
  if(player === 1)
      score = 1;
  else
      score = -1;
  
  this.row[row] += score;
  this.col[col] += score;
  
  if(row === col)
      this.dia1 += score;
  if(row === this.size - col - 1)
      this.dia2 += score;
  
  //console.log(this.row, this.col, this.dia1, this.dia2)
  
  if(Math.abs(this.row[row]) === this.size ||
     Math.abs(this.col[col]) === this.size ||
     Math.abs(this.dia1) === this.size ||
     Math.abs(this.dia2) === this.size)
      return player;
  else
      return 0;
  
};

/** 
* Your TicTacToe object will be instantiated and called as such:
* var obj = new TicTacToe(n)
* var param_1 = obj.move(row,col,player)
*/

