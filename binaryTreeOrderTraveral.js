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









var visited = new Map();
var visiting = new Map();

for(var key of courseGraph.keys()){
    if(hasCycle(key))return false;
}

function hasCycle(key){
    if(visiting.has(key) && visiting.get(key)) {
        return true;
    }
    if(visited.has(key) && visited.get(key)) {
        return false;
    }
    
    visiting.set(key, true);
    
    var adj = courseGraph.get(key);
    if(adj != undefined){
        for(var v of adj){
            if(hasCycle(v))return true;
        }
    }
    
    visited.set(key, true);
    visiting.set(key, false);
    return false;
}

return true;