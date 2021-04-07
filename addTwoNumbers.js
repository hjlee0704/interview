var addTwoNumbers = function(l1, l2) {
	//return first for null l1 or l2
    if (!l1) return l2
    if (!l2) return l1
    
    let sum = 0;
    let rem = 0;
    let temp = new ListNode();
    let l3 = temp;
     
	//loop untill l2 and l2 become undefinde
    while(l1 || l2){
        //sum of values with previous sum's remainder
        sum = (rem + (l1?.val || 0) + (l2?.val || 0));
        rem = Math.floor(sum/10);
        sum = sum % 10;
    
        temp.next = new ListNode(sum);
        temp = temp.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    // add remainder if any
    if(rem){
        temp.next = new ListNode(rem);
    }
    return l3.next;
};
// var addTwoNumbers = function(l1, l2) {
//   let result = new ListNode();
//   let l3 = result;
//   let temp = 0;
//   let curr1 = l1;
//   let curr2 = l2;
//   while (curr1 && curr2) {
//       let sum = curr1.val + curr2.val + temp;
//       if (temp === 1) {
//           temp = 0;
//       }
//       if ( sum > 9 ) {
//           temp = 1;
//           sum = sum % 10;
//       }
  
//       result.next = new ListNode(sum);
//       result = result.next;
//       curr1 = curr1.next;
//       curr2 = curr2.next;
//   }
  
//   while (curr1) {
//       let sum = curr1.val + temp;
//       if (temp === 1) {
//           temp = 0;
//       }
//       if ( sum > 9 ) {
//           temp = 1;
//           sum = sum % 10;
//       }
  
//       result.next = new ListNode(sum);
//       result = result.next;
//       curr1 = curr1.next;
//   }
  
//       while (curr2) {
//       let sum = curr2.val + temp;
//       if (temp === 1) {
//           temp = 0;
//       }
//       if ( sum > 9 ) {
//           temp = 1;
//           sum = sum % 10;
//       }
  
//       result.next = new ListNode(sum);
//       result = result.next;
//       curr2 = curr2.next;
//   }
  
//   if (temp === 1) {
//       result.next = new ListNode(temp);
//       result = result.next;
      
//   }
  
//   return l3.next;
  
  
// };