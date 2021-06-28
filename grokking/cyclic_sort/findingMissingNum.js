const find_missing_number = function(nums) {
  // TODO: Write your code here
  let index = 0;
  while (index < nums.length) {
    let changeIndex = nums[index];
    if (changeIndex !== index && changeIndex < nums.length) {
      [nums[index], nums[changeIndex]] = [nums[changeIndex], nums[index]];
    } else {
      index += 1;
    }
  }

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== index) {
      return index;
    }
  }
  return -1;
};

function find_missing_number(nums) {
  let i = 0;
  const n = nums.length;
  while (i < n) {
    j = nums[i];
    if (nums[i] < n && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }

  // find the first number missing from its index, that will be our required number
  for (i = 0; i < n; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }

  return n;
}


console.log(find_missing_number([4, 0, 3, 1]));
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));