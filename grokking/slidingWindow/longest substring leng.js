const longest_substring_with_k_distinct = function(str, k) {
  // TODO: Write your code here
  let length = 0, charCount = 0, leftPointer = 0, substr = '';
  for (let rightPointer = 0; rightPointer < str.length; rightPointer++) {
    console.log(length, substr, str, k, charCount )
    if (!substr.includes(str[rightPointer])) {
      charCount++;
    }
    substr = substr.concat(str[rightPointer]);
    console.log(substr, 'outer')
    while( charCount > k ) {
      length = Math.max(length, substr.length -1);
      substr = substr.slice(1);
      console.log(substr, 'inner')
      if (!substr.includes(str[leftPointer])) {
        charCount--;
      }
      leftPointer++;
    }

    // length = Math.max(length, rightPointer - leftPointer + 1);
  }

  return length;
};