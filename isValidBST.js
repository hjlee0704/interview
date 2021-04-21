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