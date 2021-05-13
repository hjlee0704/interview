var licenseKeyFormatting = function(s, k) {
  let str = s.split('-').join('');
  str = str.toUpperCase();
  let count = 0;
  let result = '';
  for (let i = str.length -1; i >= 0; i-- ) {
      result = str[i] + result;
      count++;
      if (count === k && i !== 0) {
          result = '-' + result;
          count = 0;
      }
  }
  
  return result;
  
};