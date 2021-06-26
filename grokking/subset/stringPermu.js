var letterCasePermutation = function(str) {
  let permutations = [];
   // console.log(str[0].toUpperCase());
  // let strArray = str.split('');  
    function permu (currIndex, subStr) {
        if (subStr.length === str.length) {
            permutations.push(subStr)
            return;
        }
        let temp = subStr;
        if (isNaN(parseInt(str[currIndex]))) {
            permu(currIndex+1, temp + str[currIndex].toLowerCase());
            permu(currIndex+1, temp + str[currIndex].toUpperCase())
        }  else {
            permu(currIndex+1, temp + str[currIndex]);
        }
    }
  permu(0,'')
  return permutations;
  }