var inorderTraversal = function(root) {
  let result = [];
  
  const dfs = (node) => {
      if(node === null) {
          return;
      }
      if(node.left) {
          dfs(node.left);
      }
      result.push(node.val);
      if(node.right) {
          dfs(node.right);
      }
  }
  dfs(root);
  return result;
  
};