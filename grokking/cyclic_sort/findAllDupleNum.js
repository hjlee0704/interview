let i = 0;
while (i < nums.length) {
  j = nums[i] - 1;
  if (nums[i] != nums[j]) {
    [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
  } else {
    i++;
  }
}

duplicateNumbers = [];
for (i = 0; i < nums.length; i++) {
  if (nums[i] !== i + 1) {
    duplicateNumbers.push(nums[i]);
  }
}

return duplicateNumbers;

//mine

var findDuplicates = function(nums) {
  let duplicateNumbers = [];
 // TODO: Write your code here
 let index = 0;
   while (index < nums.length) {
     let changeIndex = nums[index];
     if (changeIndex - 1 !== index && nums[index] !== nums[changeIndex - 1]) {
       [nums[index], nums[changeIndex - 1]] = [nums[changeIndex - 1], nums[index]];
     } else {
       index += 1;
     }
   }
 
   for (let index = 0; index < nums.length; index++) {
     if (nums[index] - 1 !== index) {
       duplicateNumbers.push(nums[index]);
     }
   }
  // return -1;
 return duplicateNumbers;
   
};