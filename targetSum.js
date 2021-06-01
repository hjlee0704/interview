var hasPathSum = function(root, targetSum) {
  if(root == null){
      return false;
  }
  return helper(root, 0, targetSum);
};

var helper = (root, sum, targetSum) => {
  if(root.left == null && root.right == null){
      return sum + root.val === targetSum;
  }
  
  let flag = false;
  if(root.left != null){
      flag = flag || helper(root.left, sum + root.val, targetSum);
  }
  
  if(root.right != null){
      flag = flag || helper(root.right, sum + root.val, targetSum);
  }
  
  return flag;
}