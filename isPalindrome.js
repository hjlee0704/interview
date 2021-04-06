var isPalindrome = function(head) {
  if(!head){
      return true
  }
  let headPtr = head;
  let strArr = [];
  while(headPtr){

      strArr.push(headPtr.val);
      headPtr = headPtr.next;
      
  }
  
  const isPalindrome = (arr) => {

      if(arr.length == 1){
          return true
      }
      
      let start= 0;
      let end=arr.length-1;
      while(start<=end){
          if(start===end){
              return true
          }
          
          if(arr[start]!== arr[end]){
              return false;
          }
          start++;
          end--;
      }
      return true
      
  }


  return isPalindrome(strArr);
};