// https://leetcode.com/problems/reverse-string/

/*
  Breakdown:
    a. if length of array is equal to 1 return array
    b. declare variable for left and right pointers
    c. while left pointer is less than right pointer iterate through array
    d. declare temp value for array at left pointer
    e. swap outer most left value and right value(moving inward for each iteration)
    f. increase left pointer and decrease right pointer
    g. return array with swapped values  

  Complexity:
    Time: O(n), because at worst case 1 pass is required 
    Space: O(1), because all temp variables are constant 
*/

var reverseString = function(s) {
  if(s.length === 1) return s

  let left = 0
  let right = s.length - 1 
  
  while(left < right) {
    let leftVal = s[left] 
    s[left] = s[right] 
    s[right] = leftVal 

    left++
    right--
  }

  return s 
}

console.log(reverseString(['h','e','l','l','o'])) //['o','l','l','e','h']
