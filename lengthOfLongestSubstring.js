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