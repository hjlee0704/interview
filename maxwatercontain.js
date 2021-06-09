var maxArea = function(height) {
  //0, 7
  //[1 7]
  let left = 0, right = height.length -1, width = 0;;
  while (left < right) {
      let maxHeight = Math.min(height[left],height[right]);
      let currWidth = maxHeight * (right - left);
      //console.log(currWidth, height[left], height[right])
      width = Math.max(width, currWidth);
      if( height[left] <= height[right]) {
          left++
      } else {
          right--;
      }
  }
  
  return width;
  
};