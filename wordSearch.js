var dfs = function(board, word, i, j, ind) {
  if (ind === word.length) {
      return true;
  }
  
  if (i >= board.length ||
      i < 0 ||
      j >= board[i].length ||
      j < 0 ||
      board[i][j] !== word.charAt(ind)) {
      return false;
  }
  
  var temp = board[i][j];
  board[i][j] = " ";
  var found = dfs(board, word, i+1, j, ind+1) ||
          dfs(board, word, i-1, j, ind+1) ||
          dfs(board, word, i, j+1, ind+1) ||
          dfs(board, word, i, j-1, ind+1);
  
  board[i][j] = temp;
  return found;
}

var exist = function(board, word) {
  for(let i= 0; i< board.length ;i++){
      for(let j=0;j<board[i].length;j++){
          if(board[i][j] === word[0] && dfs(board,i,j,0,word)){
              return true;
          }
      }
  }
  return false;
};

let dfs = function(board, i, j, count,word){
  if(count===word.length){
      return true;
  }
  
  if(i<0 || i>=board.length || j < 0 || j >=board[i].length || board[i][j] !== word[count] ){
      return false;
  }
  
  let temp = board[i][j];
  board[i][j] = ' ';
  let found = dfs(board,i+1,j,count+1,word)
              ||dfs(board,i,j+1,count+1,word)
              || dfs(board,i-1,j,count+1,word)
              || dfs(board,i,j-1,count+1,word);
  board[i][j] = temp;
  
  return found;
}