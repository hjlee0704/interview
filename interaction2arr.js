var intersect = function(nums1, nums2) {
  let table = {}
  let result = []
  
  
  for(let num of nums1){
      if(!(num in table)){
          table[num] = 1;
      }else{
          table[num] += 1;
      }
  }
  for(let num of nums2){
      if(num in table && table[num] > 0){
          result.push(num)
          table[num]-=1;
      }
  }
  return result;
};


var intersect = function(nums1, nums2) {
  let table = {}
  let result = []
  
  
  for(let num of nums1){
      if(!(num in table)){
          table[num] = 1;
      }else{
          table[num] += 1;
      }
  }
  for(let num of nums2){
      if(num in table && table[num] > 0){
          result.push(num)
          table[num]-=1;
      }
  }
  return result;
};