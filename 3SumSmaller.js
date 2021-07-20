var threeSumSmaller = function(nums, target) {
  nums.sort((a,b) => a -b);
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++ ) {
      let leftIndex = i +1,
          rightIndex = nums.length - 1;
      while(leftIndex < rightIndex) {
          let sum = nums[i] + nums[leftIndex] + nums[rightIndex];
          if (sum < target) {
              count += rightIndex - leftIndex
              leftIndex++;
          } else {
              rightIndex--;
          }
      }
  }
  return count;
};

function triplet_with_smaller_sum(arr, target) {
  arr.sort((a, b) => a - b);
  let count = 0;
  for (i = 0; i < arr.length - 2; i++) {
    count += search_pair(arr, target - arr[i], i);
  }
  return count;
}


function search_pair(arr, target_sum, first) {
  let count = 0;
  let left = first + 1,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] < target_sum) { // found the triplet
      // since arr[right] >= arr[left], therefore, we can replace arr[right] by any number between
      // left and right to get a sum less than the target sum
      count += right - left;
      left += 1;
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
  return count;
}



console.log(triplet_with_smaller_sum([-2, 0, 1, 3], 4));
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));

//find all triplets in array

function triplet_with_smaller_sum(arr, target) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (i = 0; i < arr.length - 2; i++) {
    search_pair(arr, target - arr[i], i, triplets);
  }
  return triplets;
}


function search_pair(arr, target_sum, first, triplets) {
  let left = first + 1,
    right = arr.length - 1;
  while ((left < right)) {
    if (arr[left] + arr[right] < target_sum) { // found the triplet
      // since arr[right] >= arr[left], therefore, we can replace arr[right] by any number between
      // left and right to get a sum less than the target sum
      for (i = right; i > left; i--) {
        triplets.push([arr[first], arr[left], arr[i]]);
      }
      left += 1;
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
}