var threeSumSmaller = function(nums, target) {
  nums.sort((a,b) => a -b);
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++ ) {
      let leftIndex = i +1,
          rightIndex = nums.length - 1;
      while(leftIndex < rightIndex) {
          let sum = nums[i] + nums[leftIndex] + nums[rightIndex];
          if (sum < target) {
              count += rightIndex - leftIndex
              leftIndex++;
          } else {
              rightIndex--;
          }
      }
  }
  return count;
};