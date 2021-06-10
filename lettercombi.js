var combinationSum = function(candidates, target) {

  //     let temp = [];
  
  //     const fun = (sum, index) => {
  //         if (sum == target) {
  //             res.push([...temp]);
  //             return;
  //         }
  //         let len = candidates.length;
  
  //         for (let i = index; i < len; i++) {
  //             if (sum + candidates[i] <= target) {
  //                 temp.push(candidates[i]);
  //                 fun(sum + candidates[i], i);
  //                 temp.pop();
  //             }
  //         }
  //     }
  
  //     fun(0, 0);
  //     return res;

  
      let res = [];
  
      function dfs(path, sum, last) {
       if (sum === target) {
          res.push(path);
          return;
      }
          for (var i = last; i < candidates.length; i++) {
              if (sum + candidates[i] <= target) {
                  dfs([...path, candidates[i]], sum + candidates[i], i);
              }
          }
      }
  
      candidates.sort(function (a, b) {
          return a - b;
      });
    
      // start dfs (initial empty path, because none visited yet, so sum also 0)
      dfs([], 0, 0);
    
      return res;
  }