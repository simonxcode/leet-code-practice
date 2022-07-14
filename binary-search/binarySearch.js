// https://leetcode.com/problems/binary-search/

/*
  Breakdown:
    a. declare variable for lower and upper bound
    b. iterate through array while lower bound is less than or equal to upper bound
    c. declare variable for mid point
    d. if target matches mid point return mid point
    e. else if target is less than mid point reset upper bound
    f. else reset lower bound 
    g. if there is no match within array return -1

  Complexity:
    Time: O(log n), because the maximum iteration will be half of input array
    Space: O(1), because no extra memory will be needed in addition to inputs
*/

var search = function(nums, target) {
  let lower = 0
  let upper = nums.length - 1

  while(lower <= upper) {
    const mid = lower + Math.floor((upper - lower)/2) 

    if(target === nums[mid]) {
      return mid
    } else if (target < nums[mid]) {
      upper = mid - 1
    } else {
      lower = mid + 1
    }
  }

  return -1
}

console.log(search([-1,0,3,5,9,12], 9)) //4
