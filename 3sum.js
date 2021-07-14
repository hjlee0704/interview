var threeSum = function(nums) {
  let result = [];
  let set = new Set();
  let index = 0;
  let p1 = index + 1;
  let p2 = nums.length -1 ;
  nums.sort((a,b) => a - b);
  if (nums.length < 3 ) {
      return [];
  }
  while (index < nums.length - 2) {
      let sol = nums[index] + nums[p1] + nums[p2];
     // console.log(index,p1, p2)
      if ( sol === 0 ) {
          let setSol = `${nums[index]},${nums[p1]},${nums[p1]}`
          if (!set.has(setSol)) {
              result.push([nums[index], nums[p1], nums[p2]])
              set.add(setSol);

          }
          p1 += 1;
      } else if ( sol > 0 ){
          p2 -= 1;
      } else if (sol < 0) {
          p1 += 1;
      }
      
      if (p1 === p2) {
          index += 1;
          p1 = index + 1;
          p2 = nums.length - 1;
      }
  }   
      return result;
  
};

//.