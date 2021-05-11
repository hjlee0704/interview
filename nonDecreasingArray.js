var checkPossibility = function(nums) {
  let modify = false;
  
  for (let index = 0; index < nums.length - 1; index++) {
      if( nums[index] > nums[index+1]) {
          if (modify === true) {
              return false;
          }
          if(index >= 0 && nums[index - 1] > nums[index + 1]) {
              nums[index + 1] = nums[index];
          } else {
          nums[index] = nums[index +1];
          }
          modify = true;
      }
  }
  
  return true;
  
};