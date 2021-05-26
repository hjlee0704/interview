var dailyTemperatures = function(T) {
  let result = [0];
  let stack = [];
  stack.push([T[T.length-1],T.length-1] )
 // console.log(stack[stack.length -1][1]);
  for (let i = T.length - 2; i >= 0; i-- ) {
      while(stack.length && stack[stack.length -1][0] <= T[i]) {
          stack.pop();
      }
      if (stack.length === 0) {
          stack.push([T[i], i]);
          //console.log(stack[stack.length -1][1]);
          result.push(0);
      } else {
          //console.log(i);
          let diff = stack[stack.length -1][1] - i;
          //console.log(diff);
          stack.push([T[i], i]);
          result.push(diff);
      }
      
  }
  
  return result.reverse();
  
  
  
};