var productExceptSelf = function(nums) {
  let n = nums.length
let leftResult= new Array(n)
let rightResult= new Array(n)
leftResult[0]=1
rightResult[n-1] =1

let output=[]
for(let i=1 ;i<nums.length; i++){
  leftResult[i] = leftResult[i-1]*nums[i-1]
}

for(let i = nums.length-2; i>=0;i--){
  rightResult[i] = rightResult[i+1]*nums[i+1]
}

for(let i=0; i<n;i++){
  output[i] = leftResult[i] * rightResult[i]
}

return output

};