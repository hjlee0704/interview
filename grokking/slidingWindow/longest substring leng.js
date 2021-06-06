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


//using hashmap to store substring count

function longest_substring_with_k_distinct(str, k) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  // in the following loop we'll try to extend the range [window_start, window_end]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;
    // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart += 1; // shrink the window
    }
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}