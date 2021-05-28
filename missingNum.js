var findMissingRanges = function(nums, lower, upper) {
  let result = [];
  let list = [];
  let curr = lower, i = 0;
      while(curr <= upper) {
          if(i < nums.length) {
              if(curr == nums[i]) {
                  curr++;
                  i++;
              } else {
                  list.push([curr, nums[i] - 1]);
                  
                  curr = nums[i];
              }
          } else {

              list.push([curr, upper]);
              break;
          }
      }
      
  for(item of list) {
          if(item[0] == item[1]) result.push(`${item[0]}`);
          else result.push(`${item[0]}->${item[1]}`);
      
      }

      return result;
    }