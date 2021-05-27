var increasingTriplet = function(nums) {
 
  if (nums.length < 3) {
      return false;
  }
  let lPointer = Infinity;
  let rPointer = Infinity;
  
  for(let i = 0; i < nums.length; i++) {
      let cur = nums[i];
      if (cur > rPointer && cur > lPointer) {
          return true;
      }
      
      if (cur === lPointer || cur === rPointer) {
          continue;
      }
      if (lPointer > cur) {
          lPointer = cur;
      } else if (rPointer > cur) {
          rPointer = cur;
      }
  }
  
  return false;
};