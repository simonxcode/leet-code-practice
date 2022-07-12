// https://leetcode.com/problems/majority-element/

/*
Breakdown:
  a. iterate through array and get count of all elements 
  b. determine if current count of current element is greater than half the length of nums  
  c. if so, then return current element
  d. otherwise, keep iterating through array  

Complexity:
  Time: O(n) because 1 full pass is required for iterating nums 
  Space: O(n) because memory is required for hash table
*/

var majorityElement = function(nums) {
  let hash = {}

  for(const ele of nums) {
    if(!hash[ele]) {
      hash[ele] = 1
    } else {
      hash[ele]++
    }

    if(hash[ele] > nums.length/2) return ele
  }

}

console.log(majorityElement([2,2,1,1,1,2,2])) //2
