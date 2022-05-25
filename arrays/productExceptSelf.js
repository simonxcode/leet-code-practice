// https://leetcode.com/problems/product-of-array-except-self/

/*
Breakdown:
  a. create variable for results array
  b. create variable for prefix and assign initial value to 1
  c. iterate through nums from left side and build prefix array
  d. reset prefix value to 1 
  e. iterate through nums from right side and build postfix array
  f. multiply prefix and postfix values 
  g. return result array 

Complexity:
  Time: O(n) because worst case scenario from both passes are the same 
  Space: O(n) because result array does not count as memory 

*/

var productExceptSelf = function(nums) {
  let result = []
  let prefix = 1

  for(let i = 0; i < nums.length; i++) {
    result[i] = prefix
    prefix *= nums[i]
  }

  prefix = 1
  for(let i = nums.length - 1; i >= 0; i--) {
    result[i] *= prefix
    prefix *= nums[i]
  }

  return result
}

console.log(productExceptSelf([1,2,3,4])) //[24,12,8,6]
