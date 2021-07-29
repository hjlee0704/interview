var findClosestElements = function(arr, k, x) {
  let pivot = findClosestIndex(arr, x);
  let startIdx = pivot, endIdx = pivot+1;
  while (k && startIdx >= 0 && endIdx <= arr.length) {
      if (Math.abs(arr[startIdx]-x) > Math.abs(arr[endIdx]-x)) endIdx++;
      else startIdx--;
      k--;
  }
  return arr.slice(startIdx+1, endIdx+k);
  
};

const findClosestIndex = (arr, x) => {
  let temp = [...arr];
  let l = 0,
r = arr.length -1;

  while(l+1 < r) {
      let mid  = Math.floor((l+r)/2);
      if (temp[mid] < x) {
          l = mid
      } else {
          r = mid
      }
  }
  let pivot = (Math.abs(temp[l]-x) <= Math.abs(temp[r]-x)) ? l : r;
  return pivot;
}

//o(log n + k)