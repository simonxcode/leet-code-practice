// https://leetcode.com/problems/valid-palindrome/

/*
  Breakdown:
    a. convert all input strings to lowercase
    b. replace all non-alphanumeric characters with empty string 
    c. declare right pointer starting point
    d. iterate through array as long as i(left pointer) is less than right pointer
    e. if left pointer is not equal to right pointer return false
    f. else decrement right pointer and increment i 
    g. when iteration is complete return true 

  Complexity:
    Time: O(n), because 1 pass is required for iteration
    Space: O(1), because memory for variable will be constant if input is increase/decrease
*/

var isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '')
  let right = s.length - 1

  for(let i = 0; i < right; i++) {
    if(s[i] !== s[right]) {
      return false
    } else {
      right--
    }
  }

  return true
}

console.log(isPalindrome('A man, a plan, a canal: Panama')) //true
