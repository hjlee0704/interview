var isValidBST = function(root) {
  //       return checkValidity(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
      
  //     function checkValidity(node, lowerBound, upperBound) {
  //         if (node == null) return true;
          
  //         if (node.val <= lowerBound || node.val >= upperBound) return false;
          
  //         return checkValidity(node.left, lowerBound, node.val) && checkValidity(node.right, node.val, upperBound);
  //     }
      let result = true;
      if (!root) {
          return true;
      }
      
      const dfs = (node, min, max) => {
          if (!node) {
              return;
          }
          //console.log(node.val, min, max)
          if (node.val <= min || node.val >= max) {
              result = false;
              return;
          }
          dfs(node.left, min, node.val);
          dfs(node.right, node.val, max)
  
  
      }
          
      dfs(root, -Infinity, Infinity);
      return result;
      
  };


  function isBinarySearchTree(treeRoot) {

    // Start at the root, with an arbitrarily low lower bound
    // and an arbitrarily high upper bound
    const nodeAndBoundsStack = [];
    nodeAndBoundsStack.push({
      node: treeRoot,
      lowerBound: Number.NEGATIVE_INFINITY,
      upperBound: Number.POSITIVE_INFINITY,
    });
  
    // Depth-first traversal
    while (nodeAndBoundsStack.length) {
      const { node, lowerBound, upperBound } = nodeAndBoundsStack.pop();
  
      // If this node is invalid, we return false right away
      if (node.value <= lowerBound || node.value >= upperBound) {
        return false;
      }
  
      if (node.left) {
  
        // This node must be less than the current node
        nodeAndBoundsStack.push({
          node: node.left,
          lowerBound,
          upperBound: node.value,
        });
      }
  
      if (node.right) {
  
        // This node must be greater than the current node
        nodeAndBoundsStack.push({
          node: node.right,
          lowerBound: node.value,
          upperBound,
        });
      }
    }
  
    // If none of the nodes were invalid, return true
    // (At this point we have checked all nodes)
    return true;
  }


  function isBinarySearchTree(treeRoot, lowerBound, upperBound) {
    lowerBound = (typeof lowerBound !== 'undefined') ? lowerBound : Number.NEGATIVE_INFINITY;
    upperBound = (typeof upperBound !== 'undefined') ? upperBound : Number.POSITIVE_INFINITY;
  
    if (!treeRoot) return true;
  
    if (treeRoot.value >= upperBound || treeRoot.value <= lowerBound) {
      return false;
    }
  
    return isBinarySearchTree(treeRoot.left, lowerBound, treeRoot.value)
      && isBinarySearchTree(treeRoot.right, treeRoot.value, upperBound);
  }

// Tests

let desc = 'valid full tree';
let treeRoot = new BinaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

desc = 'both subtrees valid';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(20);
leftNode.insertRight(60);
rightNode = treeRoot.insertRight(80);
rightNode.insertLeft(70);
rightNode.insertRight(90);
assertEquals(isBinarySearchTree(treeRoot), false, desc);

desc = 'descending linked list';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(40);
leftNode = leftNode.insertLeft(30);
leftNode = leftNode.insertLeft(20);
leftNode = leftNode.insertLeft(10);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

desc = 'out of order linked list';
treeRoot = new BinaryTreeNode(50);
rightNode = treeRoot.insertRight(70);
rightNode = rightNode.insertRight(60);
rightNode = rightNode.insertRight(80);
assertEquals(isBinarySearchTree(treeRoot), false, desc);

desc = 'one node tree';
treeRoot = new BinaryTreeNode(50);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}


def is_binary_search_tree(root):

    # Start at the root, with an arbitrarily low lower bound
    # and an arbitrarily high upper bound
    node_and_bounds_stack = [(root, -float('inf'), float('inf'))]

    # Depth-first traversal
    while len(node_and_bounds_stack):
        node, lower_bound, upper_bound = node_and_bounds_stack.pop()

        # If this node is invalid, we return false right away
        if (node.value <= lower_bound) or (node.value >= upper_bound):
            return False

        if node.left:
            # This node must be less than the current node
            node_and_bounds_stack.append((node.left, lower_bound, node.value))
        if node.right:
            # This node must be greater than the current node
            node_and_bounds_stack.append((node.right, node.value, upper_bound))

    # If none of the nodes were invalid, return true
    # (at this point we have checked all nodes)
    return True


    def is_binary_search_tree(root,
      lower_bound=-float('inf'),
      upper_bound=float('inf')):
if not root:
return True

if (root.value >= upper_bound or root.value <= lower_bound):
return False

return (is_binary_search_tree(root.left, lower_bound, root.value)
and is_binary_search_tree(root.right, root.value, upper_bound))