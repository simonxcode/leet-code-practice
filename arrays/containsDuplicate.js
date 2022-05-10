// https://leetcode.com/problems/contains-duplicate/

/*
Breakdown:
  a. iterate through nums and store all element in a hash table
  b. if a element already exist in hash table return true
  c. else set value of element to true(to save memory as opposed to keeping count)
  d. when iteration of nums is complete return false

Complexity:
    Time: O(n) because 1 pass is required for iterating nums
    Space: O(n) because memory is required for hash table 
*/

var containsDuplicate = function(nums) {
  const hash = {}

  for(const ele of nums) {
    if(hash[ele]) {
      return true
    } else {
      hash[ele] = true
    }
  }
  
  return false
}

console.log(containsDuplicate([7,8,9,7])) //true
