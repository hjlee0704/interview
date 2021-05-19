var plusOne = function(digits) {
  // console.log(digits);
  // let num = parseInt(digits.join(''));
  // console.log(num);
  // num += 1;
  // return Array.from(String(num, Number));
  digits.reverse();
  digits[0]++;
  let index = 0;
  let twoDigit = true;
  while (twoDigit) {
      if(digits[index] === 10) {
          digits[index] = 0;
          if (digits[index] === digits[digits.length - 1]) {
              digits.push(1);
              twoDigit = false;
          } else {
              digits[index+1 ] += 1;
          }  
      } else {
          twoDigit = false;
      }
      index++;
  }
  
  return digits.reverse();
  
  
  
};

var plusOne = function(digits) {
  for(var i = digits.length - 1; i >= 0; i--){
    if(++digits[i] > 9) digits[i] = 0;
    else return digits;
  }
  digits.unshift(1);
  return digits;
};