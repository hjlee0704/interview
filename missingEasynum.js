var missingNumber = function(nums) {
  let sum = 0;
  let missingNum = 0;

  for(let i = 0; i < nums.length; i++) {
      sum += i;
      missingNum += nums[i]
  }
  sum += nums.length;
  
  return sum - missingNum;
};