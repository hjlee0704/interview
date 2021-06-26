var permute = function(nums) {
  let results = [];
  p_helper(nums, 0, results);
  return results;
};

function p_helper(nums, idx, results) {
  if (idx === nums.length) {
      console.log(nums)
      results.push([...nums]);
      
  }
  
  for (let i = idx; i < nums.length; i++) {
      swap(nums, idx, i);
      console.log(nums, idx, i)
      p_helper(nums, idx+1, results);
      swap(nums, idx, i);
  }
}

function swap(nums, i1, i2) {
  let tmp = nums[i1];
  nums[i1] = nums[i2];
  nums[i2] = tmp;
}

const permute = function(nums) {
result = [];
//result.push([]);
// TODO: Write your code here
for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
  let iteration = result.length;
 // let currNum = nums[currentIndex];
  permu(currentIndex, []);
}

function permu (curr, subArr) {

  if (subArr.length === nums.length) {
    result.push(subArr);
    return;
  }
  for (let subIndex = 0; subIndex <= subArr.length; subIndex++) {
    let temp = [...subArr];
    temp.splice(subIndex, 0, nums[curr]);
    //console.log(temp);
    if (curr+1 <= nums.length) {
      permu(curr+1, temp);
    }
  }
}
//console.log(result);
return result;
};
