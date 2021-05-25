var kidsWithCandies = function(candies, extraCandies) {
  let max = 0;
  let result = [];
  for (let i = 0; i < candies.length; i++) {
      max = Math.max(max, candies[i]);
  }
  
  for (let i = 0; i < candies.length; i++) {
      if (candies[i]+ extraCandies >= max) {
          result.push(true)
      } else {
          result.push(false)
      }
  }
  
  return result;
  
};

//hi
//same
