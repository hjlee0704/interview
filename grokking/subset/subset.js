function find_subsets(nums) {
  const subsets = [];
  // start by adding the empty subset
  subsets.push([]);
  for (i = 0; i < nums.length; i++) {
    currentNumber = nums[i];
    // we will take all existing subsets and insert the current number in them to create new subsets
    const n = subsets.length;
    for (j = 0; j < n; j++) {
      // create a new subset from the existing subset and insert the current element to it
      const set1 = [...subsets[j]]; // clone the permutation
      console.log(subsets[j], 'slice')
      set1.push(currentNumber);
      subsets.push(set1);
    }
  }

  return subsets;
}

const find_subsets = function(nums) {
  subsets = [];
  // TODO: Write your code here
  //subset.push([]);
  
    dfs(0, []);


  function dfs(currIndex, list) {
    console.log(list);
    if (currIndex > nums.length) return;
   // subsets.push(list);
    
    subsets.push([...list]);
    for (let index = currIndex; index < nums.length; index++) {
      list.push(nums[index]);
      dfs(index+1, list);
      list.pop();
    }
  }
 console.log(subsets);
  return subsets;
};

//backtrack method
const subsets = function(nums) {
  const output = [];
  
function backtrack(start, list){
    if(start > nums.length) return;
    output.push([...list])
    for(let idx = start; idx < nums.length; idx++){
        list.push(nums[idx])
        backtrack(idx+1, list)
        list.pop()
    }
} 
 backtrack(0,[]) 
 return output
};

//backtracking dfs

function subsets(nums: number[]): number[][] {
  const path: number[] = [];
  const result: number[][] = [];
  dfsPowerset(0, path, result, nums);
  return result;
}

function dfsPowerset(
  i: number,
  path: number[],
  result: number[][],
  nums: number[]
) {
  result.push(path.slice());
  for (let index = i; index < nums.length; index++) {
    path.push(nums[index]);
    dfsPowerset(index + 1, path, result, nums);
    path.pop();
  }
}


console.log('Here is the list of subsets: ');
let result = find_subsets([1, 3]);
result.forEach((subset) => {
  console.log(subset);
});

console.log('Here is the list of subsets: ');
result = find_subsets([1, 5, 3]);
result.forEach((subset) => {
  console.log(subset);
});