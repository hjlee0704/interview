var findDisappearedNumbers = function(nums) {
  let i = 0;
  let result = [];  
  const n = nums.length;
  while (i < n) {
    j = nums[i];
    if (nums[i] <= n && nums[i] !== nums[j - 1]) {
      [nums[i], nums[j - 1]] = [nums[j - 1], nums[i]]; // swap
    } else {
      i += 1;
    }
  }

  // find the first number missing from its index, that will be our required number
  for (i = 0; i < n; i++) {
    if (nums[i] - 1 !== i) {
      result.push(i + 1);
    }
  }
   // console.log(nums);
  return result;
}