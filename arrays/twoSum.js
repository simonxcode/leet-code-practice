// https://leetcode.com/problems/two-sum/

/*
Breakdown:
  a. create hash to store value and index of each iteration
  b. iterate though nums array 
  c. create firstValue to store value of target - current index 
  d. determine if target - firstValue exist in hash table
  e. if true, return value of target - firstValue in hash table and current index
  f. if false, add firstValue as property and current index as value to hash

Complexity:
  Time: O(n) because only 1 pass is required 
  Space: O(n) because memory is needed for hash map
*/

var twoSum = function(nums, target) {
  const hash = {} 

  for(let i = 0; i < nums.length; i++) { 
    const firstValue = target - nums[i] 
    if(hash[target - firstValue] !== undefined) { 
      return [hash[target - firstValue], i]
    } 
    hash[firstValue] = i
  }

}

console.log(twoSum([2,1,5,3], 4)) //[1, 3]
