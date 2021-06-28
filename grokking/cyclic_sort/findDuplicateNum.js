let i = 0;
  while (i < nums.length) {
    if (nums[i] !== i + 1) {
      j = nums[i] - 1;
      if (nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
      } else { // we have found the duplicate
        return nums[i];
      }
    } else {
      i += 1;
    }
  }
  return -1;

  //mine
  const find_duplicate = function(nums) {
    // TODO: Write your code here
    // [1,4,3,4,2]
  
    let index = 0;
    while (index < nums.length) {
      let changeIndex = nums[index];
      if (changeIndex - 1 !== index && nums[index] !== nums[changeIndex - 1]) {
        [nums[index], nums[changeIndex - 1]] = [nums[changeIndex - 1], nums[index]];
      } else {
        index += 1;
      }
      console.log(nums, index);
    }
  
    for (let index = 0; index < nums.length; index++) {
      if (nums[index] - 1 !== index) {
        return nums[index];
      }
    }
    return -1;
  };