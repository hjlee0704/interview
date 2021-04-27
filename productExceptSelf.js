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

function getProductsOfAllIntsExceptAtIndex(intArray) {
  if (intArray.length < 2) {
    throw new Error('Getting the product of numbers at other indices requires at least 2 numbers');
  }

  const productsOfAllIntsExceptAtIndex = [];

  // For each integer, we find the product of all the integers
  // before it, storing the total product so far each time
  let productSoFar = 1;
  for (let i = 0; i < intArray.length; i++) {
    productsOfAllIntsExceptAtIndex[i] = productSoFar;
    productSoFar *= intArray[i];
  }

  // For each integer, we find the product of all the integers
  // after it. since each index in products already has the
  // product of all the integers before it, now we're storing
  // the total product of all other integers
  productSoFar = 1;
  for (let j = intArray.length - 1; j >= 0; j--) {
    productsOfAllIntsExceptAtIndex[j] *= productSoFar;
    productSoFar *= intArray[j];
  }

  return productsOfAllIntsExceptAtIndex;
}