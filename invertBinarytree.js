var invertTree = function(root) {
  //     if (!root) {
  //         return root;
  //     }
  //     const invert = (node) => {
  //             let temp;
  //             //console.log(node.left, node.right)
  //             temp = node.left;
  //             node.left = node.right;
  //             node.right = temp;
  //             //console.log(node.left, node.right)
  //             if (node.right !== null) {
  //                 invert(node.right);
  //             }
  //             if (node.left !== null) {
  //                 invert(node.left);
  //             }
              
          
  //     }
  //     invert(root);
  //     return root;
      if(!root) return root;
      var stack = [root];
      while(stack.length) {
          var node = stack.pop();
          if(node.left || node.right) {
              [node.left, node.right] = [node.right, node.left];
          }
          if(node.left) stack.push(node.left);
          if(node.right) stack.push(node.right);
      }
      return root;
      
  };