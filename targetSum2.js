var pathSum = function(root, targetSum) {
  res = [];
  
  if(root != null)
      helper(root, 0, targetSum, []);
  
  return res;
};

var helper = (root, sum, targetSum, path) => {
  if(root.left == null && root.right == null){
      if(sum + root.val === targetSum) {
          res.push([...path, root.val]);
      }
      return;
  }
  
  if(root.left != null){
      helper(root.left, sum + root.val, targetSum, [...path, root.val]);
  }
  
  if(root.right != null){
      helper(root.right, sum + root.val, targetSum, [...path, root.val]);
  }
}