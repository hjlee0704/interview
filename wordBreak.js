var wordBreak = function(s, wordDict) {
  //input of string s, array of strings of words
  //output of boolean which if string can be segmented
  //
  
  //temp variable to store strings inside s
  // varible to keeping trak of indexes
  //iterate through string of letters index reach to the end of length of s
  // each indexes it will build temp variable and compare temp with strings inside wordDict
  // if temp has word inside wordDict
      // then that temp word will delete that word from s string
      // reset the index variable
  
  //wordDict
   //each time used tack in oder to use again, other words has be used.
  let dp = Array(s.length+1).fill(false)
  dp[0] = true
  for(let i=1;i<dp.length;i++){
      const substring = s.slice(0,i)
      for(let w of wordDict){
          if(substring.endsWith(w)){
              dp[i] =  dp[i] ? true: dp[i-w.length] ? true : false
          }
      }
  }
  return dp[s.length]
  
};