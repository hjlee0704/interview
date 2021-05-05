var lengthOfLongestSubstring = function(s) {
  let map = new Map()
   let res = 0, i=0, j=0
   while(i<s.length && j<s.length){
       if(!map.has(s[j])){
           map.set(s[j],1)
           res = Math.max(res, j-i+1)
           j++
       }else{
           map.delete(s[i])
           i++
       }
   }
   return res
};

//optimized

var lengthOfLongestSubstring = function(s) {
  let res = 0
  let map = new Map()
  for(let i=0, j=0; j<s.length; j++){
      if(map.has(s[j])){
          i = Math.max(i, map.get(s[j]))
      }
      res = Math.max(res, j-i+1)
      map.set(s[j],j+1)
  }
  return res
};
