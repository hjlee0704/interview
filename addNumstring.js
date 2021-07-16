var addStrings = function(num1, num2) {
  let answer = '';
let i = num1.length - 1;
let j = num2.length - 1;
let carry = '';

while (i >= 0 || j >= 0) {
  const digit1 = i < 0 ? 0 : parseInt(num1.charAt(i));
  const digit2 = j < 0 ? 0 : parseInt(num2.charAt(j));
  const sum = digit1 + digit2 + carry;
  const digit3 = sum % 10;
  carry = Math.floor(sum / 10);

  answer = digit3 + answer;
  i--;
  j--;
}
if (carry === 1) answer = carry + answer;
return answer;
  
  
};

//mine

var addStrings = function(num1, num2) {
  let result = [];
  let numbers = {
      '0' : 0,
      '1' : 1,
      '2' : 2,
      '3' : 3,
      '4' : 4,
      '5' : 5,
      '6' : 6,
      '7' : 7,
      '8' : 8,
      '9' : 9
  }
  let arr1 = num1.split('').reverse();
  let arr2 = num2.split('').reverse();
  let temp = 0;
  let length = Math.min(arr2.length, arr1.length);
  //console.log(arr1, arr2);
  for (let index = 0; index < length; index++) {
      let sum = numbers[arr1[index]] + numbers[arr2[index]] + temp;
    //  console.log(sum, arr1[index],arr2[index]);
      temp = 0;
      if (sum > 9) {
          sum = sum % 10;
          temp = 1;
      }
      result.push(sum);
      //console.log(result);
  }
  if (arr2.length > arr1.length) {
      for (let index = arr1.length; index < arr2.length; index++) {
          let sum = numbers[arr2[index]] + temp;
          temp = 0
          if (sum > 9) {
              sum = sum % 10;
              temp = 1;
          }
          result.push(sum)        
      }
  } else if (arr1.length > arr2.length) {
      for (let index = arr2.length; index < arr1.length; index++) {
          let sum = numbers[arr1[index]] + temp;
          temp = 0;
          if (sum > 9) {
              sum = sum % 10;
              temp = 1;
          }
          result.push(sum)        
      }
  }
  if (temp === 1){
      result.push(1);
  }
  //console.log(result);
  return result.reverse().join('');
  
  
};