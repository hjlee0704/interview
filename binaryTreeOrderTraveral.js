var levelOrderBottom = function(root) {
  if(!root) return [];
  let result = [];
  
  bfs(root, 0, result);
  
  result.reverse();
  return result;
};

const bfs = (node, level, arr) => {
  //if (node.val === null) return;
  //console.log(node.val, node.left, node.right)
  if (!arr[level]) {
      arr[level] = [];
      arr[level].push(node.val)
  } else {
      arr[level].push(node.val)
  }
  if (node.left !== null) {
     // arr[level].push(node.left);
      bfs(node.left, level +1, arr)
  } 
  if (node.right !== null) {
     // arr[level].push(node.right);
      bfs(node.right, level +1, arr)
  }
}