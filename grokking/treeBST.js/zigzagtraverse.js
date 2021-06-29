var zigzagLevelOrder = function(root) {
  //let level = 0;
  if (root === null) {
      return [];
  }
  let result = [];
  
  let que = [];
  //result.push([root.val]);
  que.push([root, 0]);
  
  while(que.length > 0) {
      let node = que.shift();
      if (node[0] === null) return
      if (!result[node[1]]) {
          result.push([node[0].val])
      } else if(node[1] % 2 === 0) {
              result[node[1]].push(node[0].val)
      } else {
              result[node[1]].unshift(node[0].val)
      }
      
      let level = node[1] +1;
      console.log(result)
      if (node[0].left) {
          que.push([node[0].left, level])
      }
      if (node[0].right) {
          que.push([node[0].right, level])
      }
  
      
  }
  
  return result;
  
};


//mine 

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const traverse = function(root) {
  result = [];
  // TODO: Write your code here
  
  function bfs(stage, node) {
    if (!result[stage]) {
      result.push([node.value]);
    } else {
      if (stage % 2 === 1) {
        result[stage].unshift(node.value);
      } else {
        result[stage].push(node.value);
      }
    };
    if (node.left !== null) {
      bfs(stage + 1, node.left);
    }
    if (node.right !== null) {
      bfs(stage + 1, node.right);
    } 
  }

  bfs(0, root)
  //console.log(result);
  return result;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
root.right.left.left = new TreeNode(20)
root.right.left.right = new TreeNode(17)
console.log(`Zigzag traversal: ${traverse(root)}`)



//grokking

const Deque = require('./collections/deque'); //http://www.collectionsjs.com


class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function traverse(root) {
  result = [];
  if (root === null) {
    return result;
  }

  const queue = new Deque();
  queue.push(root);
  leftToRight = true;
  while (queue.length > 0) {
    levelSize = queue.length;
    currentLevel = new Deque();
    for (i = 0; i < levelSize; i++) {
      currentNode = queue.shift();

      // add the node to the current level based on the traverse direction
      if (leftToRight) {
        currentLevel.push(currentNode.val);
      } else {
        currentLevel.unshift(currentNode.val);
      }

      // insert the children of current node in the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevel.toArray());
    // reverse the traversal direction
    leftToRight = !leftToRight;
  }
  console.log(result)
  return result;
}


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);
console.log(`Zigzag traversal: ${traverse(root)}`);