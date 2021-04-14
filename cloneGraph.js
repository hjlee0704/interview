//DFS
var cloneGraph = function(node, map = new Map()) {
  if(!node) return null
  if(map.has(node)) return map.get(node)
  const n = new Node(node.val)
  map.set(node, n)
  for(let k of node.neighbors){    
    n.neighbors.push(cloneGraph(k, map))
  }
  return n
};

//BFS
var cloneGraph = function(node, map = new Map()) {
  if(!node) return null
  map.set(node, new Node(node.val))
  const queue = [node]
  while(queue.length){
    const n = queue.shift()
    for(let k of n.neighbors){
      if(!map.has(k)){
        map.set(k, new Node(k.val))
        queue.push(k)        
      }      
      map.get(n).neighbors.push(map.get(k))
    }
  }
  return map.get(node)
};

var cloneGraph = function(node) {
    
  function dfsHelper(root) {
      if(root === null) {
          return null;
      }
      
      if(visited[root.val]) {
          return visited[root.val];
      }
      
      let cloned = new Node(root.val);
      visited[cloned.val] = cloned;
      
      for (let edge of root.neighbors) {
          cloned.neighbors.push(dfsHelper(edge));
      }
      return cloned;    
  }
  
  const visited = {}
  return dfsHelper(node);
};