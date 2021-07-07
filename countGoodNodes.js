var goodNodes = function(root) {
  let sum = 0
  
  function dfs(node, max){
      if(!node) return null
      if(node.val >= max){
          sum++
      }
      max = Math.max(max, node.val)
      dfs(node.left, max)
      dfs(node.right, max)
  }
  
  dfs(root, root.val)
  return sum
};
