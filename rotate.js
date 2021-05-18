function rotate(nums, k) {
  if (!nums.length) return [];

  if (k > 0) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
  }

  return nums;
};

function reverse(arr, start, end) {
  if (!arr || !arr.length || start >= end) return;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++, end--;
  }

  return arr;
}