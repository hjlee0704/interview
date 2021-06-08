

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
let res = []
    let countMap = new Map();
    
    for(let n of nums){
        countMap.set(n, (countMap.get(n)+1 || 1))
    }
    
    function backtrack(nums, arr){
        if(arr.length == nums.length){
            res.push([...arr])
            return
        }
        for(let [key, value] of countMap){
            if(value == 0) continue;
            arr.push(key)
            countMap.set(key, --value)
            backtrack(nums, arr)
            arr.pop()
            countMap.set(key, ++value)
        }
    }
    backtrack(nums, [])
    return res;
};