const binary_search = function(arr, key) {
  // TODO: Write your code here
  let ascending = false;
  if (arr[0] < arr[arr.length-1]) {
    ascending = true;
  }
  let first = 0,
  last = arr.length -1;
  while (first <= last) {
    let middleIndex = Math.floor(first + (last-first)/2);

    if (arr[middleIndex] === key) {
      return middleIndex;
    }
    if (ascending === true) {
      if(arr[middleIndex] > key) {
        last = middleIndex - 1;
      } else {
        first = middleIndex +1;
      }
    } else {
      if (arr[middleIndex] > key) {
        first = middleIndex + 1;
      } else {
        last = middleIndex - 1;
      }
    }
  }

  return -1;
};

console.log(binary_search([4, 6, 10], 10))
console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5))
console.log(binary_search([10, 6, 4], 10))
console.log(binary_search([10, 6, 4], 4))