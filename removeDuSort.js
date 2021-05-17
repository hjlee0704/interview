var removeDuplicates = function(nums) {
  let temp = 0;
  for (let i = 1; i < nums.length; i++) {
    
    if (nums[i] !== nums[temp]) {
      temp++;
      nums[temp] = nums[i];
     
    }
  }
  return temp+1;
  //   let set = new Set(nums);
  // for (let i = 0; i < nums.length; i++) {
  //   if (set.has(nums[i])) {
  //     set.delete(nums[i])
  //   } else {
  //     nums.splice(i, 1);
  //     i--;
  //   }
  // }
  // return nums.length;
};