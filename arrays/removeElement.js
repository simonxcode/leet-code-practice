// https://leetcode.com/problems/remove-element/

/*
  Breakdown:
    a. declare variable to keep count of non matching element
    b. iterate through array and determine if element is non matching
    c. if true, set input array at count value to current element, increment non matching 
    d. return non matching value(number of elements that are non matching)

  Complexity:
    Time: O(n), because 1 pass is required for input array
    Space: O(1), variable created is constant and we are modifying input array in place
  */

var removeElement = function(nums, val) {
  let nonMatching = 0
  
  for(const ele of nums) {
    if(ele !== val) {
      nums[nonMatching] = ele
      nonMatching++
    }
  }

  return nonMatching
}

console.log(removeElement([3,2,2,3], 2)) //2
