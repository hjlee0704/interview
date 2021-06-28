let i = 0;
  while (i < nums.length) {
    if (nums[i] !== i + 1) {
      j = nums[i] - 1;
      if (nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
      } else { // we have found the duplicate
        return nums[i];
      }
    } else {
      i += 1;
    }
  }
  return -1;

  //mine
  const find_duplicate = function(nums) {
    // TODO: Write your code here
    // [1,4,3,4,2]
  
    let index = 0;
    while (index < nums.length) {
      let changeIndex = nums[index];
      if (changeIndex - 1 !== index && nums[index] !== nums[changeIndex - 1]) {
        [nums[index], nums[changeIndex - 1]] = [nums[changeIndex - 1], nums[index]];
      } else {
        index += 1;
      }
      console.log(nums, index);
    }
  
    for (let index = 0; index < nums.length; index++) {
      if (nums[index] - 1 !== index) {
        return nums[index];
      }
    }
    return -1;
  };

  //fast and slow 2 pointers

  function find_duplicate(arr) {
    let slow = arr[0];
    fast = arr[arr[0]];
    while (slow !== fast) {
      slow = arr[slow];
      fast = arr[arr[fast]];
    }
    // find cycle length
    let current = arr[arr[slow]];
    let cycleLength = 1;
    while (current !== arr[slow]) {
      current = arr[current];
      cycleLength += 1;
    }
  
    return find_start(arr, cycleLength);
  }
  
  function find_start(arr, cycleLength) {
    let pointer1 = arr[0];
    let pointer2 = arr[0];
    // move pointer2 ahead 'cycleLength' steps
    while (cycleLength > 0) {
      pointer2 = arr[pointer2];
      cycleLength -= 1;
    }
    // increment both pointers until they meet at the start of the cycle
    while (pointer1 !== pointer2) {
      pointer1 = arr[pointer1];
      pointer2 = arr[pointer2];
    }
    return pointer1;
  }
  
  
  console.log(find_duplicate([1, 4, 4, 3, 2]));
  console.log(find_duplicate([2, 1, 3, 3, 5, 4]));
  console.log(find_duplicate([2, 4, 1, 4, 4]));