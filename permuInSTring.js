var checkInclusion = function(s1, s2) {
  let hash= {},
      size = 0;
  for(let char of s1) {
      if(!hash[char]) hash[char] = 0;
      hash[char]++;
      
  }
  let count = 0;
  for(let index = 0; index < s2.length; index++) {
      //console.log(count, hash, index)
     // size += 1;
      let currChar = s2[index];
      if(currChar in hash) {
          hash[currChar]--;
          if(hash[currChar] === 0) count += 1;
      }
      
       if (count === Object.keys(hash).length) {
          return true;
      }

      if(index >= s1.length-1) {
          let delChar = s2[size];
          size +=1
         // console.log(hash[delChar], delChar)
          if(delChar in hash) {
             // console.log('hi')
              if(hash[delChar] === 0) {
                  count -= 1;
              }
              hash[delChar]++;
          }
               // console.log(delChar, hash, count)
      }
              
     
  }
  return false;
};