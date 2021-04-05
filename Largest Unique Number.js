var largestUniqueNumber = function(A) {
  let map = {};
  
  for (let num of A) {
      map[num] = (map[num] || 0) + 1;
  }
  
  let max = Number.MIN_SAFE_INTEGER;
  
  Object.keys(map).forEach((v) => {
      if (map[v] === 1) {
          max = Math.max(max, v);
      }
  });
  
  return max === Number.MIN_SAFE_INTEGER ? -1 : max;
};